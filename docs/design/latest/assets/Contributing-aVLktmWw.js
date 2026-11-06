import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{l as i,u as a}from"./blocks-BPMKbNKk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Primary/Foundations/Tokens/Contributing`}),`
`,(0,c.jsx)(n.h1,{id:`contributing-token-changes`,children:`Contributing Token Changes`}),`
`,(0,c.jsx)(n.h2,{id:`summary`,children:`Summary`}),`
`,(0,c.jsx)(n.p,{children:`The currently supported contribution workflow uses Tokens Studio for Figma to publish token changes and pull approved repository updates back into Figma.`}),`
`,(0,c.jsx)(n.h2,{id:`source-of-truth`,children:`Source of truth`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Canonical file:`}),` `,(0,c.jsx)(n.code,{children:`packages/tokens/tokens.json`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sync mode:`}),` single-file sync mode in Token Studio`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Format:`}),` write `,(0,c.jsx)(n.code,{children:`tokens.json`}),` the way Tokens Studio reads it. References leave out the `,(0,c.jsx)(n.code,{children:`az`}),` token set (`,(0,c.jsx)(n.code,{children:`{color.brand.red}`}),`, not `,(0,c.jsx)(n.code,{children:`{az.color.brand.red}`}),`), sizes are strings (`,(0,c.jsx)(n.code,{children:`"8px"`}),`), and font families are one comma-separated string. Tokens Studio shows DTCG 2025.10 size objects and font lists as raw JSON, and can't resolve a reference that includes the set name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Generated output:`}),` `,(0,c.jsx)(n.code,{children:`packages/tokens/dist/tokens.json`}),` is generated and must not be edited in Figma`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`branch-policy`,children:`Branch policy`}),`
`,(0,c.jsxs)(n.p,{children:[`Configure `,(0,c.jsx)(n.strong,{children:`main`}),` as the sync provider's base branch. For each token update, use Token Studio to create a new issue branch, push the change to that branch, and open a pull request back to `,(0,c.jsx)(n.strong,{children:`main`}),`. Do not push token edits directly to `,(0,c.jsx)(n.strong,{children:`main`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`before-you-start`,children:`Before you start`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(`a`,{href:`https://www.figma.com`,target:`_blank`,rel:`noreferrer`,children:`Figma`}),` account`]}),` — with edit access to the file you're working in. An `,(0,c.jsx)(`a`,{href:`https://www.figma.com/education/`,target:`_blank`,rel:`noreferrer`,children:`EDU account`}),` works fine.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`GitHub account`}),` — added to the `,(0,c.jsx)(`a`,{href:`https://github.com/orgs/az-digital/teams/developers`,target:`_blank`,rel:`noreferrer`,children:`Arizona Digital developers team`}),`. Install the `,(0,c.jsx)(`a`,{href:`https://github.com/mobile`,target:`_blank`,rel:`noreferrer`,children:`GitHub mobile app`}),` for multi-factor authentication.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(`a`,{href:`https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma`,target:`_blank`,rel:`noreferrer`,children:`Tokens Studio for Figma`}),` plugin`]}),` — a non-pro account is sufficient.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`A password saving utility`}),` (recommended) — for saving your GitHub PAT so it's easy to re-enter or share between the Figma desktop and web apps. NetID holders can use `,(0,c.jsx)(`a`,{href:`https://stache.arizona.edu/`,target:`_blank`,rel:`noreferrer`,children:`Stache`}),`, or use any password manager you prefer.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`setup`,children:`Setup`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Supported plugin: Tokens Studio for Figma`}),` — these instructions apply to Tokens Studio. Follow the `,(0,c.jsx)(`a`,{href:`https://docs.tokens.studio/get-started/install-figma-plugin`,target:`_blank`,rel:`noreferrer`,children:`official plugin installation guide`}),` before continuing. Other supported Figma plugins will have their own setup instructions.`]}),`
`,(0,c.jsx)(n.h3,{id:`1-create-a-fine-grained-pat`,children:`1. Create a fine-grained PAT`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Open GitHub account settings and select `,(0,c.jsx)(n.strong,{children:`Credentials`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Create a fine-grained personal access token.`}),`
`,(0,c.jsx)(n.li,{children:`Set the token expiration to no more than one year.`}),`
`,(0,c.jsxs)(n.li,{children:[`Set the resource owner to `,(0,c.jsx)(n.code,{children:`az-digital`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Choose `,(0,c.jsx)(n.strong,{children:`Only select repositories`}),` and select `,(0,c.jsx)(n.code,{children:`az-digital/design`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Set `,(0,c.jsx)(n.strong,{children:`Contents`}),` to `,(0,c.jsx)(n.strong,{children:`Read and write`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Leave the required `,(0,c.jsx)(n.strong,{children:`Metadata`}),` permission as `,(0,c.jsx)(n.strong,{children:`Read-only`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`See GitHub's `,(0,c.jsx)(`a`,{href:`https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens`,target:`_blank`,rel:`noreferrer`,children:`personal access token guide`}),` for creation, storage, rotation, and revocation details.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Save the PAT in `,(0,c.jsx)(`a`,{href:`https://stache.arizona.edu/`,target:`_blank`,rel:`noreferrer`,children:`Stache`}),` so it's easy to re-enter if you need to set up the sync provider again on another machine, or share it between the Figma desktop and web apps.`]}),`
`,(0,c.jsx)(n.h3,{id:`2-add-the-sync-provider`,children:`2. Add the sync provider`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`In Token Studio, open `,(0,c.jsx)(n.strong,{children:`Settings`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Under `,(0,c.jsx)(n.strong,{children:`Sync providers`}),`, select `,(0,c.jsx)(n.strong,{children:`Add new sync provider`}),` and choose GitHub.`]}),`
`,(0,c.jsx)(n.li,{children:`Enter the PAT and the provider settings below.`}),`
`,(0,c.jsxs)(n.li,{children:[`Save the provider, then select `,(0,c.jsx)(n.strong,{children:`Apply`}),` so it becomes active.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`See Tokens Studio's `,(0,c.jsx)(`a`,{href:`https://docs.tokens.studio/token-storage/manage-sync-provider/`,target:`_blank`,rel:`noreferrer`,children:`sync provider guide`}),` for the current plugin interface and provider management options.`]}),`
`,(0,c.jsx)(`table`,{children:(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Field`}),(0,c.jsx)(`th`,{children:`Value`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Name`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`Arizona Digital Design Tokens`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Repository`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`az-digital/design`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Branch`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`main`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Token storage location`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`packages/tokens/tokens.json`})})]})]})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Single-file sync:`}),` including the JSON filename in the storage location configures Token Studio to store all tokens in one file. Do not enter a folder path.`]}),`
`,(0,c.jsx)(n.h2,{id:`publish-from-figma-to-repo`,children:`Publish from Figma to repo`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Pull the latest tokens from `,(0,c.jsx)(n.code,{children:`main`}),` before editing.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Update tokens in Figma and check their names against `,(0,c.jsx)(`a`,{href:`./?path=/docs/primary-foundations-tokens-naming--docs`,target:`_top`,children:`Naming`}),` and their aliasing.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Create a new branch in Token Studio using the issue number and a short description, for example `,(0,c.jsx)(n.code,{children:`issue-5-token-update`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Push changes from Token Studio to that issue branch.`}),`
`,(0,c.jsxs)(n.li,{children:[`Open a pull request from the issue branch into `,(0,c.jsx)(n.code,{children:`main`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Use the generated Storybook review site to inspect token output before approval.`}),`
`,(0,c.jsx)(n.li,{children:`Merge after review and approval.`}),`
`,(0,c.jsx)(n.li,{children:`Build token output to regenerate consumer artifacts.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`pull-from-repo-to-figma`,children:`Pull from repo to Figma`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Open the Figma file with Token Studio enabled.`}),`
`,(0,c.jsxs)(n.li,{children:[`Configure the GitHub provider to use `,(0,c.jsx)(n.code,{children:`main`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Pull the latest repo updates from `,(0,c.jsx)(n.code,{children:`main`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Review any name or alias changes before applying them in the design file.`}),`
`,(0,c.jsx)(n.li,{children:`Update layers to use the new tokens rather than hard-coded values.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`export-to-figma-variables`,children:`Export to Figma variables`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`tokens.json`}),` defines one theme, `,(0,c.jsx)(n.strong,{children:`Mode 1`}),` in the `,(0,c.jsx)(n.strong,{children:`AZ`}),` group, which enables the `,(0,c.jsx)(n.code,{children:`az`}),` token set. Exporting it creates an `,(0,c.jsx)(n.strong,{children:`AZ`}),` variable collection with a single `,(0,c.jsx)(n.strong,{children:`Mode 1`}),` mode, the same name Figma gives a new collection's first mode.`]}),`
`,(0,c.jsx)(n.p,{children:`Themes are a Tokens Studio Pro feature, so what you get depends on your plan:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Pro:`}),` in `,(0,c.jsx)(n.strong,{children:`Export styles & variables to Figma`}),`, choose `,(0,c.jsx)(n.strong,{children:`Themes`}),` and select `,(0,c.jsx)(n.strong,{children:`AZ / Mode 1`}),`. No extra mode is added.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Free:`}),` you can only export by token set, and Tokens Studio names both the collection and the mode after the set, `,(0,c.jsx)(n.code,{children:`az`}),`. Either keep `,(0,c.jsx)(n.code,{children:`az`}),` as the mode name, or after each export rename the `,(0,c.jsx)(n.code,{children:`az`}),` mode to `,(0,c.jsx)(n.strong,{children:`Mode 1`}),` and delete the leftover empty mode.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`designer-usage-guidance`,children:`Designer usage guidance`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Use semantic tokens for production-facing design decisions such as surfaces, borders, and text.`}),`
`,(0,c.jsx)(n.li,{children:`Use base tokens only for token creation and audits, not for direct production UI assignments.`}),`
`,(0,c.jsx)(n.li,{children:`Apply tokens through Token Studio bindings so values stay tied to names instead of hardcoded hex values.`}),`
`,(0,c.jsx)(n.li,{children:`In a component, bind each part's colors and shared decisions to the tokens its contract lists (the Anatomy table on its docs page), and use the contract's values for its sizes and timings. Components don't have tokens of their own.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`governance`,children:`Governance`}),`
`,(0,c.jsxs)(n.p,{children:[`Before merging changes, confirm the scope, review token impacts in Storybook, validate naming (see `,(0,c.jsx)(`a`,{href:`./?path=/docs/primary-foundations-tokens-naming--docs`,target:`_top`,children:`Naming`}),`) and alias structure, and obtain approval from the appropriate reviewers.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Request review from the `,(0,c.jsx)(`a`,{href:`https://github.com/orgs/az-digital/teams/developers`,target:`_blank`,rel:`noreferrer`,children:`Arizona Digital developers team`}),`. `,(0,c.jsx)(n.strong,{children:`Arizona Digital Admins must approve all token changes before merge.`}),` A token change is not canonical until its pull request is approved and merged.`]}),`
`,(0,c.jsx)(n.h2,{id:`troubleshooting`,children:`Troubleshooting`}),`
`,(0,c.jsxs)(n.p,{children:[`Start with Tokens Studio's `,(0,c.jsx)(`a`,{href:`https://docs.tokens.studio/token-storage/troubleshooting-common-sync-provider-errors`,target:`_blank`,rel:`noreferrer`,children:`common sync provider errors guide`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`If sync fails, verify the PAT, repo name, branch, and storage location.`}),`
`,(0,c.jsx)(n.li,{children:`If tokens appear stale in Figma, confirm the repo branch is current and the token file is the canonical source.`}),`
`,(0,c.jsx)(n.li,{children:`If values drift, check for direct edits outside the repository token source and regenerate outputs as needed.`}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),n(),a()})))()}l();export{s as default};