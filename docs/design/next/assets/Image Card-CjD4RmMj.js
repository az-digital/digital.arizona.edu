import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,l as a,n as o,u as s}from"./blocks-BPMKbNKk.js";import{i as c,o as l,t as u}from"./src-Dw2eT6cU.js";import{n as d,t as f}from"./ContractAnatomy-C4xKYKjN.js";import{n as p,r as m,t as h}from"./Image Card.stories-DcbcLVZi.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(n.h1,{id:`image-card`,children:`Image Card`}),`
`,(0,v.jsx)(n.p,{children:`A Link Card with a photo above the title. The whole card is the link, and the photo
zooms in on hover.`}),`
`,(0,v.jsx)(o,{of:h,sourceState:`hidden`}),`
`,(0,v.jsx)(i,{of:h}),`
`,(0,v.jsxs)(n.p,{children:[`The card above is Arizona Bootstrap v5.3.0. Hover it, or press `,(0,v.jsx)(`kbd`,{children:`Tab`}),` to
reach its title link, for its hover colors and zoom.`]}),`
`,(0,v.jsx)(n.h2,{id:`when-to-use-it`,children:`When to use it`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Use it`}),` when a photo shows what the page is about, such as a program or a place.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Crop the photo to 5:3,`}),` and keep what matters away from the edges: it zooms in on
hover.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`The photo is decorative`}),` when the title and text say what it shows, so leave its
`,(0,v.jsx)(n.code,{children:`alt`}),` empty. Describe it only when it adds something the text doesn't.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Don't put a button or other links in it:`}),` the whole card is already one link.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`design-decisions`,children:`Design decisions`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Photo:`}),` 5:3, cropped to fill that shape, in the card's top corners. On hover and with
keyboard focus, it zooms in 8% over 250ms, ease, and zooms back out the same way. It
stays inside the card's corners. The zoom still happens when someone asks for reduced
motion, without the animation.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Fill:`}),` `,(0,v.jsx)(c,{data:l(`az.color.bg.card.cloud`)}),`, with no border. In a
forced colors (high contrast) mode, which removes fills, the card draws a 1px border
instead.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Title:`}),` 22px Bold, on a 30px line, in
`,(0,v.jsx)(c,{data:l(`az.color.brand.azurite`)}),`. 8px below the title's line.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Text:`}),` 18px Regular, on a 28px line, in
`,(0,v.jsx)(c,{data:l(`az.color.brand.tinta`)}),`.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Shape and padding:`}),` 16px corners, and 24px between the photo or the card's edges and
its content.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Hover:`}),` the fill turns `,(0,v.jsx)(c,{data:l(`az.color.bg.card.cloud-hover`)}),`,
the text turns `,(0,v.jsx)(c,{data:l(`az.color.brand.white`)}),`, and the title turns
`,(0,v.jsx)(c,{data:l(`az.color.brand.rain`)}),` and is underlined.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Keyboard focus:`}),` when `,(0,v.jsx)(`kbd`,{children:`Tab`}),` reaches the title link, the card shows its hover
colors and zoom, and the link's ring is Rain. Its width is the shared
`,(0,v.jsx)(c,{data:l(`az.focus-ring.width.md`)}),` (2px).`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Touch screens:`}),` on a device that can't hover, such as a phone, the title is always
underlined.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Motion:`}),` the colors fade over 300ms, ease-out. The fade turns off when someone asks
for reduced motion; the colors still change.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(n.p,{children:[`Each part of the card and each of its design properties, from its contract
(`,(0,v.jsx)(n.code,{children:`image-card.contract.json`}),`): the token it uses, or the card's own value and what it's
for.`]}),`
`,(0,v.jsx)(f,{contract:`image-card`})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),s(),u(),d(),m()})))()}y();export{_ as default};