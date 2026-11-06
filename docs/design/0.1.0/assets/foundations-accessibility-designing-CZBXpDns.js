import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{l as i,u as a}from"./blocks-BPMKbNKk.js";function o(e){let n={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Primary/Foundations/Accessibility/Designing`}),`
`,(0,c.jsx)(n.h1,{id:`designing`,children:`Designing`}),`
`,(0,c.jsx)(n.p,{children:`Accessibility is part of the design process, not a final check. Make inclusive decisions during discovery, design, prototyping, review, and handoff; changing a pattern before it is built is usually less costly than retrofitting it.`}),`
`,(0,c.jsxs)(n.p,{children:[`Use `,(0,c.jsx)(n.strong,{children:`WCAG 2.1 Level AA as the minimum conformance target`}),` identified by `,(0,c.jsx)(n.a,{href:`https://accessibility.arizona.edu/`,rel:`nofollow`,children:`University of Arizona Digital Accessibility`}),`. Where practical, account for relevant WCAG 2.2 additions, including `,(0,c.jsx)(n.strong,{children:`Target Size (Minimum)`}),` and `,(0,c.jsx)(n.strong,{children:`Focus Not Obscured (Minimum)`}),`; they are Level AA criteria in WCAG 2.2, not part of the WCAG 2.1 baseline.`]}),`
`,(0,c.jsx)(n.h2,{id:`structure-and-reading-order`,children:`Structure and reading order`}),`
`,(0,c.jsx)(n.p,{children:`Plan a clear content hierarchy that remains understandable when the layout changes.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Establish a logical heading outline; use headings to describe sections, not just to style text.`}),`
`,(0,c.jsx)(n.li,{children:`Arrange content in a meaningful reading and keyboard order, even when visual layout uses columns or cards.`}),`
`,(0,c.jsx)(n.li,{children:`Show how labels, instructions, controls, and supporting content relate to one another.`}),`
`,(0,c.jsx)(n.li,{children:`Check that rearranging or stacking content at narrow widths does not change its intended meaning.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`color-and-visual-communication`,children:`Color and visual communication`}),`
`,(0,c.jsx)(n.p,{children:`Choose combinations and states that remain perceivable without relying on color alone.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Meet WCAG contrast minimums: 4.5:1 for normal text, 3:1 for large text, and 3:1 for meaningful graphical objects and UI component boundaries or states.`}),`
`,(0,c.jsx)(n.li,{children:`Pair color with another cue, such as text, an icon, a shape, or a pattern, to communicate selected, error, warning, or success states.`}),`
`,(0,c.jsx)(n.li,{children:`Make interactive, selected, error, warning, and disabled states distinguishable; do not use color as the only difference.`}),`
`,(0,c.jsx)(n.li,{children:`Review important content and controls in high-contrast and reduced-color conditions, and check focus indicators against adjacent colors.`}),`
`,(0,c.jsxs)(n.li,{children:[`Start with documented Arizona Digital components and design tokens where available. A brand color token alone does not guarantee an accessible color pairing; verify the foreground and background together. See `,(0,c.jsx)(`a`,{href:`./?path=/docs/primary-foundations-tokens-how-to-use--docs`,target:`_top`,children:`How to use Arizona Digital design tokens`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`typography`,children:`Typography`}),`
`,(0,c.jsx)(n.p,{children:`Use the design system's type scale to support comfortable reading at different sizes.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Choose readable type sizes and line spacing; avoid relying on very small text for essential information.`}),`
`,(0,c.jsx)(n.li,{children:`Prefer live, selectable text over text embedded in images.`}),`
`,(0,c.jsx)(n.li,{children:`Check longer passages and controls at enlarged text sizes to catch clipping, overlap, or lost content.`}),`
`,(0,c.jsxs)(n.li,{children:[`For link text, instructions, and editorial choices, follow `,(0,c.jsx)(`a`,{href:`./?path=/docs/primary-foundations-accessibility-writing-text--docs`,target:`_top`,children:`Writing & Text guidance`}),` and the `,(0,c.jsx)(`a`,{href:`./?path=/docs/primary-foundations-content-design-style-guide-for-writing--docs`,target:`_top`,children:`Style guide for writing`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`interaction-and-keyboard-behavior`,children:`Interaction and keyboard behavior`}),`
`,(0,c.jsx)(n.p,{children:`Describe the interaction, not just its appearance, so keyboard behavior can be implemented and reviewed.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Define a logical focus order and a visible focus treatment for each interactive control.`}),`
`,(0,c.jsx)(n.li,{children:`Keep focused items visible; consider sticky headers, banners, dialogs, and overlays that may cover them. WCAG 2.2 adds the AA criterion Focus Not Obscured (Minimum).`}),`
`,(0,c.jsx)(n.li,{children:`Specify expected keyboard interactions, including how users move through and activate controls.`}),`
`,(0,c.jsx)(n.li,{children:`For dialogs, menus, and other temporary interfaces, note where focus starts, how users leave or dismiss the interface, and where focus returns.`}),`
`,(0,c.jsx)(n.li,{children:`Provide alternatives to hover-only, dragging, or precise pointer interactions.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`forms-errors-and-feedback`,children:`Forms, errors, and feedback`}),`
`,(0,c.jsx)(n.p,{children:`Make it clear what information is needed, what went wrong, and what happens next.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Show persistent labels for fields; do not use placeholder text as the only label.`}),`
`,(0,c.jsx)(n.li,{children:`Place instructions before users need them, and make required fields clear in text as well as visually.`}),`
`,(0,c.jsx)(n.li,{children:`Identify errors specifically, associate them with the affected field, and explain how to correct them.`}),`
`,(0,c.jsx)(n.li,{children:`Define success, warning, loading, and status messages, including when and where they appear.`}),`
`,(0,c.jsx)(n.li,{children:`Use more than color to distinguish a state or message. Note in handoff when updates need to be announced to assistive technology.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`motion-and-media`,children:`Motion and media`}),`
`,(0,c.jsx)(n.p,{children:`Design media and movement so they do not create unnecessary barriers or distraction.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Avoid unnecessary animation and provide a reduced-motion alternative when motion is not essential.`}),`
`,(0,c.jsx)(n.li,{children:`Give users control over moving, blinking, or automatically updating content when required by WCAG.`}),`
`,(0,c.jsx)(n.li,{children:`Plan for captions and transcripts for audio or video, and audio descriptions when important visual information is not conveyed in the soundtrack.`}),`
`,(0,c.jsxs)(n.li,{children:[`Link image decisions to `,(0,c.jsx)(`a`,{href:`./?path=/docs/primary-foundations-accessibility-alt-text-guidance--docs`,target:`_top`,children:`Alt text guidance`}),` rather than putting essential text in an image.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`responsive-design-zoom-and-reflow`,children:`Responsive design, zoom, and reflow`}),`
`,(0,c.jsx)(n.p,{children:`Layouts should adapt to user settings and content, not only to a fixed set of device mockups.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Review narrow layouts at 320 CSS pixels and at 200% browser zoom; preserve content and functionality without unnecessary two-direction scrolling.`}),`
`,(0,c.jsx)(n.li,{children:`Allow text enlargement and longer labels, translated content, and user-generated content without clipping or overlap.`}),`
`,(0,c.jsx)(n.li,{children:`Keep controls usable when content reflows, and ensure the visual order still matches the meaningful reading order.`}),`
`,(0,c.jsx)(n.li,{children:`For WCAG 2.2 readiness, design touch targets at least 24 by 24 CSS pixels or provide the spacing required by Target Size (Minimum), subject to the criterion's exceptions.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`design-annotations-and-developer-handoff`,children:`Design annotations and developer handoff`}),`
`,(0,c.jsx)(n.p,{children:`Design specifies intended meaning and behavior; implementation and testing confirm that the interface works with assistive technology and meets the target.`}),`
`,(0,c.jsx)(n.p,{children:`Include the following in handoff when relevant:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Semantic intent, such as whether an element is a button or a link, and which regions are landmarks.`}),`
`,(0,c.jsx)(n.li,{children:`Heading structure, accessible names, descriptions, and relationships between controls and instructions.`}),`
`,(0,c.jsx)(n.li,{children:`Focus order, focus management, keyboard interactions, and behavior when a dialog or menu opens and closes.`}),`
`,(0,c.jsx)(n.li,{children:`Component states, required-field treatment, error recovery, and status feedback.`}),`
`,(0,c.jsxs)(n.li,{children:[`Content alternatives for images and media, including links to the relevant `,(0,c.jsx)(`a`,{href:`./?path=/docs/primary-foundations-accessibility-alt-text-guidance--docs`,target:`_top`,children:`Alt text guidance`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Developers are responsible for implementing semantic markup, keyboard and assistive-technology behavior, and programmatic status announcements. Designers should provide the intended content, states, and interaction behavior; teams should review the result together.`}),`
`,(0,c.jsx)(n.h2,{id:`design-review-checklist`,children:`Design review checklist`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Does the content have a logical hierarchy and reading order?`}),`
`,(0,c.jsx)(n.li,{children:`Do text, meaningful icons, controls, and focus indicators have sufficient contrast?`}),`
`,(0,c.jsx)(n.li,{children:`Is meaning communicated by more than color, and are all important states distinguishable?`}),`
`,(0,c.jsx)(n.li,{children:`Can users understand and operate each interaction with a keyboard?`}),`
`,(0,c.jsx)(n.li,{children:`Are form labels, instructions, errors, and feedback clear and complete?`}),`
`,(0,c.jsx)(n.li,{children:`Does the layout work with enlarged text, at narrow widths, and with long or translated content?`}),`
`,(0,c.jsx)(n.li,{children:`Are motion and media alternatives planned, and are accessibility expectations captured in handoff?`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`further-guidance`,children:`Further guidance`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(`a`,{href:`https://accessibility.arizona.edu/`,target:`_blank`,rel:`noreferrer`,children:`University of Arizona Digital Accessibility`}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(`a`,{href:`https://accessibility.arizona.edu/tools-checklists`,target:`_blank`,rel:`noreferrer`,children:`Accessibility at Arizona quick reference cards`}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(`a`,{href:`https://accessibility.arizona.edu/tools-checklists/dodont-library`,target:`_blank`,rel:`noreferrer`,children:`Accessibility Do/Don't Library`}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(`a`,{href:`https://www.w3.org/WAI/WCAG22/Understanding/`,target:`_blank`,rel:`noreferrer`,children:`Understanding WCAG 2.2`}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),n(),a()})))()}l();export{s as default};