// Fills the docs version switcher with every published 5.x version, using
// the shared /arizona-bootstrap/versions.json. Built pages only know about
// their own version, so this keeps old releases linked to newer ones.
// The list is kept up to date by .github/scripts/update-docs-version-switcher.sh.
(function () {
  'use strict';

  var docsRoot = '/arizona-bootstrap/v5/docs/';
  var v2Url = '/arizona-bootstrap/docs/2.0/getting-started/introduction/';
  var defaultPage = 'getting-started/introduction/';
  var releasesUrl = 'https://github.com/az-digital/arizona-bootstrap/releases';

  var toggle = Array.prototype.find.call(
    document.querySelectorAll('.dropdown-toggle'),
    function (el) { return el.textContent.indexOf('switch to other versions') !== -1; }
  );
  if (!toggle) {
    return;
  }
  var menu = toggle.parentElement.querySelector('.dropdown-menu');
  var labelMatch = toggle.textContent.match(/v(\d+\.\d+)/);
  var current = labelMatch ? labelMatch[1] : null;

  // Page path within a version, e.g. "components/alerts/", so the switcher
  // can link to the same page in other versions.
  var pathMatch = window.location.pathname.match(/^\/arizona-bootstrap\/v5\/docs\/\d+\.\d+\/(.*)$/);
  var page = pathMatch && pathMatch[1] ? pathMatch[1] : defaultPage;

  function item(version, isLatest) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = 'dropdown-item d-flex align-items-center justify-content-between';
    a.href = docsRoot + version + '/' + page;
    a.dataset.fallback = docsRoot + version + '/' + defaultPage;
    a.textContent = isLatest ? 'Latest (' + version + '.x)' : 'v' + version + '.x';
    if (version === current) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'true');
      a.insertAdjacentHTML('beforeend', '<svg class="bi" aria-hidden="true"><use xlink:href="#check2"></use></svg>');
    }
    li.appendChild(a);
    return li;
  }

  // Older versions may not have the page; go to their introduction instead.
  function followOrFallback(event) {
    var a = event.target.closest('a[data-fallback]');
    if (!a || a.classList.contains('active') || event.defaultPrevented ||
        event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    fetch(a.href, { method: 'HEAD' })
      .then(function (response) { window.location.href = response.ok ? a.href : a.dataset.fallback; })
      .catch(function () { window.location.href = a.href; });
  }

  fetch('/arizona-bootstrap/versions.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      var header = menu.querySelector('.dropdown-header');
      // Replace everything between the "v5 releases" header and the first divider.
      while (header.parentElement.nextElementSibling &&
             !header.parentElement.nextElementSibling.querySelector('.dropdown-divider')) {
        header.parentElement.nextElementSibling.remove();
      }
      var anchor = header.parentElement;
      data.v5.forEach(function (version, i) {
        var li = item(version, i === 0);
        anchor.after(li);
        anchor = li;
      });
      menu.addEventListener('click', followOrFallback);

      var v2 = menu.querySelector('a[href*="/2.x/"]');
      if (v2) {
        v2.href = v2Url;
      }
      // Older builds link to a /docs/versions/ page that doesn't exist.
      var allVersions = menu.querySelector('a[href="/docs/versions/"]');
      if (allVersions) {
        allVersions.href = releasesUrl;
        allVersions.textContent = 'All releases';
      }
    })
    .catch(function () {
      // Leave the switcher as built.
    });
}());
