import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,r as n}from"./iframe-CpEEqbaz.js";import{i as r,r as i}from"./react-DITjJg24.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{l as o,u as s}from"./blocks-BPMKbNKk.js";import{n as c}from"./tokenStats-BY8gUx_U.js";function l(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...r(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{title:`Primary/Foundations/Tokens/How to Use`}),`
`,(0,d.jsx)(t.h1,{id:`how-to-use-design-tokens`,children:`How to Use Design Tokens`}),`
`,(0,d.jsxs)(t.p,{children:[`Use Arizona Digital's design tokens in Figma by importing `,(0,d.jsx)(t.code,{children:`tokens.json`}),` as Figma Variables. You don't need repository access or a sync plugin to use them.`]}),`
`,(0,d.jsx)(t.h2,{id:`before-you-start`,children:`Before you start`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`A `,(0,d.jsx)(`a`,{href:`https://www.figma.com`,target:`_blank`,rel:`noreferrer`,children:`Figma`}),` account (an `,(0,d.jsx)(`a`,{href:`https://www.figma.com/education/`,target:`_blank`,rel:`noreferrer`,children:`EDU account`}),` works fine) with edit access to the file you're working in — the desktop app or the web app both work.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`import-into-figma-variables`,children:`Import into Figma Variables`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),c(n,`tokens.json`)},children:`Download tokens.json`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[`Open the `,(0,d.jsx)(t.strong,{children:`Variables`}),` tab in your Figma file.`]}),`
`,(0,d.jsxs)(t.li,{children:[`Select `,(0,d.jsx)(t.strong,{children:`Import`}),` and choose the downloaded `,(0,d.jsx)(t.code,{children:`tokens.json`}),` file.`]}),`
`,(0,d.jsx)(t.li,{children:`Apply semantic variables to design layers instead of entering hard-coded values.`}),`
`]}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsxs)(t.p,{children:[`This import workflow is for using the tokens. Tokens Studio and GitHub access are only required when `,(0,d.jsx)(`a`,{href:`./?path=/docs/primary-foundations-tokens-contributing--docs`,target:`_top`,children:`contributing`}),` changes back to the repository.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`keeping-tokens-up-to-date`,children:`Keeping tokens up to date`}),`
`,(0,d.jsxs)(t.p,{children:[`Re-downloading and re-importing `,(0,d.jsx)(t.code,{children:`tokens.json`}),` every time it changes is manual. If you'd rather keep Figma in sync automatically, install the `,(0,d.jsx)(`a`,{href:`https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma`,target:`_blank`,rel:`noreferrer`,children:`Tokens Studio for Figma`}),` plugin and connect it to the repository as a `,(0,d.jsx)(`a`,{href:`https://docs.tokens.studio/token-storage/manage-sync-provider/`,target:`_blank`,rel:`noreferrer`,children:`sync provider`}),` — then you can pull the latest tokens straight into Figma instead of downloading a new file each time. See `,(0,d.jsx)(`a`,{href:`./?path=/docs/primary-foundations-tokens-contributing--docs`,target:`_top`,children:`Contributing`}),` for how to set that connection up.`]}),`
`,(0,d.jsx)(t.h2,{id:`applying-tokens-in-your-designs`,children:`Applying tokens in your designs`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Use semantic tokens for production-facing text, surfaces, borders, and states.`}),`
`,(0,d.jsxs)(t.li,{children:[`Use brand tokens (`,(0,d.jsx)(t.code,{children:`az.color.brand.*`}),`) for token creation and audits, not direct production UI assignments.`]}),`
`,(0,d.jsx)(t.li,{children:`Keep layers bound to variables so future imports can update values consistently.`}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`Need to update the source tokens? Continue to `,(0,d.jsx)(`a`,{href:`./?path=/docs/primary-foundations-tokens-contributing--docs`,target:`_top`,children:`Contributing`}),`.`]})]})}function u(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),i(),s(),t()})))()}f();export{u as default};