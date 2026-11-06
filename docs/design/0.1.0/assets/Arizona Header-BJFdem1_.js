import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,l as a,n as o,u as s}from"./blocks-BPMKbNKk.js";import{i as c,o as l,t as u}from"./src-Dw2eT6cU.js";import{n as d,t as f}from"./ContractAnatomy-C4xKYKjN.js";import{n as p,r as m,t as h}from"./Arizona Header.stories-BR6Cj4LC.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(n.h1,{id:`arizona-header`,children:`Arizona Header`}),`
`,(0,v.jsx)(n.p,{children:`The university's header bar, on every arizona.edu site: the wordmark, which links to the
university's homepage, arizona.edu, with optional header buttons, such as Search and Menu,
for small screens.`}),`
`,(0,v.jsx)(o,{of:p,sourceState:`hidden`}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n.p,{children:`The header above is the current release. It matches this page except for keyboard focus on
the header buttons: they draw the ring every button gets, 2px outside the button, instead
of the header's ring inside their edges. On a site, header buttons only show below 992px.`}),`
`,(0,v.jsx)(n.h2,{id:`colors`,children:`Colors`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Blue`}),` (default): the current, recommended header color.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Red`}),`: the original header color. It's being retired, so don't use it for new sites.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`design-decisions`,children:`Design decisions`}),`
`,(0,v.jsxs)(n.p,{children:[`The header's contract (`,(0,v.jsx)(n.code,{children:`brand-header.contract.json`}),`) sets each of its parts' design
properties: its colors are brand colors, its focus ring width is the shared one, its
spacing comes from the spacing scale where a step matches, and its other sizes and its
timings are the header's own values, written in the contract. The header has no design
tokens of its own.`]}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Fill:`}),` `,(0,v.jsx)(c,{data:l(`az.color.brand.blue`)}),`. The original red header
isn't a separate set of design tokens: its contract points the fill at Red, and keeps every
other color White. The red header is only needed until it's retired.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Size:`}),` the header is at least 50px tall, and exactly 50px below 992px. The wordmark
fits a 211 × 16px box below 576px and a 266.41 × 19.8px box from 576px up, 10px from
the header's left edge. It keeps its own proportions inside that box, so it's 211px
and 266.41px wide and a little shorter than the box.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Keyboard focus:`}),` the logo and header buttons draw a ring inside their edges, with
2px corners, in `,(0,v.jsx)(c,{data:l(`az.color.fg.white`)}),`. Its width is the
shared focus ring width, `,(0,v.jsx)(c,{data:l(`az.focus-ring.width.md`)}),` (2px).`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Header buttons`}),` (for adding search and menu toggles on mobile): at least 60px
wide and as tall as the header, with `,(0,v.jsx)(c,{data:l(`az.spacing.050`)}),` (4px)
of padding above and below.`,`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Label:`}),` text in `,(0,v.jsx)(c,{data:l(`az.color.fg.white`)}),`, 10px with a
10px line height, `,(0,v.jsx)(c,{data:l(`az.spacing.025`)}),` (2px) below the icon.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Icon:`}),` 24px square, the same color as the label. Use an SVG (inline or from a
sprite) with `,(0,v.jsx)(n.code,{children:`fill="currentColor"`}),` so it picks up that color.`]}),`
`]}),`
`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Logo:`}),` the university's white wordmark,
`,(0,v.jsx)(c,{data:l(`az.color.fg.white`)}),`, on both the Blue and the Red header.
It's a registered university mark, so use the official file as it is: don't recolor,
stretch, crop or redraw it, or add effects such as shadows. Use the wordmark header
only on a page that also shows a Block "A" logo, usually in the site's branding just
below the header. The `,(0,v.jsx)(`a`,{href:`https://marcom.arizona.edu/brand-guidelines/logos`,target:`_blank`,rel:`noopener noreferrer`,children:`university's logo guidelines`}),`
cover the rest.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Motion:`}),` the off-canvas panel the header buttons open slides in over 300ms,
ease-in-out, and the backdrop behind it fades in over 150ms. Header buttons change
color and show their focus ring over 150ms. They haven't been
reviewed by design yet, and all of them turn off when someone asks for reduced
motion.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Fixed on mobile:`}),` when the header is pinned to the top of the screen below 992px,
linked sections stop `,(0,v.jsx)(c,{data:l(`az.spacing.100`)}),` (8px) below the
header when scrolled to (58px from the top), so the header doesn't cover them.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsx)(n.p,{children:`Each part of the header and each of its design properties, from the header's contract:
the design token it uses, or the header's own value and what it's for.`}),`
`,(0,v.jsx)(f,{contract:`brand-header`})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),s(),u(),d(),m()})))()}y();export{_ as default};