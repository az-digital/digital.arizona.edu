import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,l as a,n as o,u as s}from"./blocks-BPMKbNKk.js";import{i as c,o as l,t as u}from"./src-Dw2eT6cU.js";import{n as d,t as f}from"./ContractAnatomy-C4xKYKjN.js";import{n as p,r as m,t as h}from"./Link Card.stories-BxRDTRoC.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(n.h1,{id:`link-card`,children:`Link Card`}),`
`,(0,v.jsx)(n.p,{children:`A title and text that go to one page. The whole card is the link.`}),`
`,(0,v.jsx)(o,{of:h,sourceState:`hidden`}),`
`,(0,v.jsx)(i,{of:h}),`
`,(0,v.jsxs)(n.p,{children:[`The card above is Arizona Bootstrap v5.3.0. Hover it, or press `,(0,v.jsx)(`kbd`,{children:`Tab`}),` to
reach its title link, for its hover colors.`]}),`
`,(0,v.jsx)(n.h2,{id:`when-to-use-it`,children:`When to use it`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Use it`}),` to send people to one page, with a sentence on what they'll find there.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`The title is the link,`}),` so write it as the page's name or what people will do there.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Don't put a button or other links in it:`}),` the whole card is already one link.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`To show what the page is about,`}),` use an
`,(0,v.jsx)(`a`,{href:`./?path=/docs/primary-components-containers-cards-icon-card--docs`,target:`_top`,children:`Icon Card`}),`
or an
`,(0,v.jsx)(`a`,{href:`./?path=/docs/primary-components-containers-cards-image-card--docs`,target:`_top`,children:`Image Card`}),`.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`design-decisions`,children:`Design decisions`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Fill:`}),` `,(0,v.jsx)(c,{data:l(`az.color.bg.card.cloud`)}),`, with no border. In a
forced colors (high contrast) mode, which removes fills, the card draws a 1px border
instead.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Title:`}),` 22px Bold, on a 30px line, in
`,(0,v.jsx)(c,{data:l(`az.color.brand.azurite`)}),`. 8px below the title's line.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Text:`}),` 18px Regular, on a 28px line, in
`,(0,v.jsx)(c,{data:l(`az.color.brand.tinta`)}),`.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Shape and padding:`}),` 16px corners, and 24px between the card's edges and its content.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Hover:`}),` the fill turns `,(0,v.jsx)(c,{data:l(`az.color.bg.card.cloud-hover`)}),`,
the text turns `,(0,v.jsx)(c,{data:l(`az.color.brand.white`)}),`, and the title turns
`,(0,v.jsx)(c,{data:l(`az.color.brand.rain`)}),` and is underlined.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Keyboard focus:`}),` when `,(0,v.jsx)(`kbd`,{children:`Tab`}),` reaches the title link, the card shows its hover
colors, and the link's ring is Rain, so it stands out from the fill as much as the title
does. Its width is the shared `,(0,v.jsx)(c,{data:l(`az.focus-ring.width.md`)}),`
(2px).`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Touch screens:`}),` on a device that can't hover, such as a phone, the title is always
underlined.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.strong,{children:`Motion:`}),` the colors fade over 300ms, ease-out. The fade turns off when someone asks
for reduced motion; the colors still change.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(n.p,{children:[`Each part of the card and each of its design properties, from its contract
(`,(0,v.jsx)(n.code,{children:`link-card.contract.json`}),`): the token it uses, or the card's own value and what it's for.`]}),`
`,(0,v.jsx)(f,{contract:`link-card`})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),s(),u(),d(),m()})))()}y();export{_ as default};