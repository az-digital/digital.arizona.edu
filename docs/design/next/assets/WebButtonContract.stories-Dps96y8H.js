import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,l as r,u as i}from"./iframe-CpEEqbaz.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{n as o,t as s}from"./contractCheck-C3Lx3hID.js";function c(){t()}function l(){return(l=e((()=>{n(),typeof customElements<`u`&&c()})))()}var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),l(),o(),u=a(),{expect:d}=__STORYBOOK_MODULE_TEST__,f=[`red`,`outline-red`,`blue`,`outline-blue`,`rain`,`outline-rain`,`white-text-red`,`white-text-blue`,`outline-white`],p=[void 0,`small`,`large`],m=f.flatMap(e=>p.map(t=>i({label:`Label`,color:e,size:t}))).join(` `),h={"root fill":`var(--hover-fill)`,"root border.color":`var(--hover-fill)`,"root color":`var(--hover-label)`},g={title:`Primary/Components/Buttons/Web Components contract check`,tags:[`!dev`,`!autodocs`],render:()=>(t(),(0,u.jsx)(`div`,{dangerouslySetInnerHTML:{__html:m}}))},_={play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`az-button`)].flatMap(e=>{let t=e.shadowRoot?.querySelector(`button`);if(!t)return[`${e.outerHTML}: no button in its shadow root`];let n=[`color`,`size`].flatMap(t=>e.hasAttribute(t)?[`${t}.${e.getAttribute(t)}`]:[]);return s({parts:{root:t,label:t},hover:{...h,"label color":`var(--hover-label)`}},`button`,n)});await d(t).toEqual([])}},v=[`AzButton`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const mismatches = [...canvasElement.querySelectorAll('az-button')].flatMap(element => {
      const button = element.shadowRoot?.querySelector('button');
      if (!button) return [\`\${element.outerHTML}: no button in its shadow root\`];
      const options = ['color', 'size'].flatMap(axis => element.hasAttribute(axis) ? [\`\${axis}.\${element.getAttribute(axis)}\`] : []);
      return checkContract({
        parts: {
          root: button,
          label: button
        },
        hover: {
          ...hover,
          'label color': 'var(--hover-label)'
        }
      }, 'button', options);
    });
    await expect(mismatches).toEqual([]);
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as AzButton,v as __namedExportsOrder,g as default};