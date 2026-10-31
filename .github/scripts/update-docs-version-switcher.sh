#!/usr/bin/env bash
# Rebuild the shared list of Arizona Bootstrap 5.x docs versions and make
# sure every built docs page loads the script that fills the version
# switcher from it. Run after a release deploy, from the repository root.
set -euo pipefail

site='docs/arizona-bootstrap'
script_tag='<script defer src="/arizona-bootstrap/version-switcher.js"></script>'

# Every docs/X.Y/ folder under v5 is a published minor version, newest first.
versions=$(find "${site}/v5/docs" -mindepth 1 -maxdepth 1 -type d -name '[0-9]*.[0-9]*' -exec basename {} \; \
  | sort -t. -k1,1nr -k2,2nr)

{
  printf '{\n  "v5": ['
  sep=''
  for v in $versions; do
    printf '%s\n    "%s"' "$sep" "$v"
    sep=','
  done
  printf '\n  ]\n}\n'
} > "${site}/versions.json"

# Add the switcher script to pages that have the version dropdown.
grep -rl --include='*.html' 'switch to other versions' "${site}/v5" | while IFS= read -r page; do
  if ! grep -q 'version-switcher.js' "$page"; then
    perl -pi -e "s#</body>#${script_tag}\n</body>#" "$page"
  fi
done
