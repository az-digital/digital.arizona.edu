import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,l as a,n as o,u as s}from"./blocks-BPMKbNKk.js";import{i as c,o as l,t as u}from"./src-Dw2eT6cU.js";import{n as d,t as f}from"./ContractAnatomy-C4xKYKjN.js";import{n as p,r as m,t as h}from"./Title on Image Card.stories-Bz_-rPyN.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(n.h1,{id:`title-on-image-card`,children:`Title on Image Card`}),`
`,(0,v.jsx)(n.p,{children:`A square photo with only a title on it. The whole card is the link, and the photo zooms in
on hover.`}),`
`,(0,v.jsx)(o,{of:h,sourceState:`hidden`}),`
`,(0,v.jsx)(i,{of:h}),`
`,(0,v.jsxs)(n.p,{children:[`The card above is Arizona Bootstrap v5.3.0, with the markup in its Title on Image
docs. Hover it, or press `,(0,v.jsx)(`kbd`,{children:`Tab`}),` to reach its title link, for its zoom and
underline.`]}),`
`,(0,v.jsx)(n.h2,{id:`when-to-use-it`,children:`When to use it`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Use it`}),` in a grid of choices that a photo and a word or two can explain, such as
Undergraduate, Graduate and Online.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Keep the title short:`}),` one to three words. There's no text, so the title has to say
where the card goes.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Use any photo:`}),` it's cropped to a square, and the gradient keeps the title readable.
Keep what matters in the top half, above the title.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`The photo is decorative,`}),` so leave its `,(0,v.jsx)(n.code,{children:`alt`}),` empty: the title says where the card
goes.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`design-decisions`,children:`Design decisions`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Photo:`}),` square, cropped to fill it. On hover and with keyboard focus, it zooms in 8%
over 250ms, ease, and zooms back out the same way, inside the card's 16px corners. The
zoom still happens when someone asks for reduced motion, without the animation.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Title:`}),` 22px Bold, on a 30px line, in
`,(0,v.jsx)(c,{data:l(`az.color.brand.white`)}),`, at the bottom of the photo, 24px
from its left, right and bottom edges. Behind it, a gradient covers the bottom half of
the photo, from transparent to `,(0,v.jsx)(c,{data:l(`az.color.brand.blue`)}),` at
the bottom, so the title stays readable on any photo.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Hover and keyboard focus:`}),` the photo zooms and the title is underlined. Its colors
don't change: the photo covers the card. The title link's focus ring is White, so it
shows on the gradient. Its width is the shared
`,(0,v.jsx)(c,{data:l(`az.focus-ring.width.md`)}),` (2px).`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`No fill or border:`}),` the photo covers the whole card.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(n.p,{children:[`Each part of the card and each of its design properties, from its contract
(`,(0,v.jsx)(n.code,{children:`title-on-image-card.contract.json`}),`): the token it uses, or the card's own value and what
it's for.`]}),`
`,(0,v.jsx)(f,{contract:`title-on-image-card`})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),s(),u(),d(),m()})))()}y();export{_ as default};