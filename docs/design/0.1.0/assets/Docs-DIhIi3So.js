import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,b as n,n as r,r as i}from"./iframe-CpEEqbaz.js";import{i as a,r as o}from"./react-DITjJg24.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{l as c,u as l}from"./blocks-BPMKbNKk.js";import{i as u,n as d,s as f,t as p}from"./src-Dw2eT6cU.js";import{n as m,r as h,t as g}from"./tokenStats-BY8gUx_U.js";var _;function v(){return(v=e((()=>{_=`:root {
  --az-color-brand-red: #ab0520; /** Arizona Red, primary color 1. */
  --az-color-brand-blue: #0c234b; /** Arizona Blue, primary color 2. */
  --az-color-brand-tinta: #03132e;
  --az-color-brand-azurite: #1e5288;
  --az-color-brand-arroyo-blue: #106ab1;
  --az-color-brand-rain: #81ceeb;
  --az-color-brand-sonoran-red: #850000;
  --az-color-brand-bougainvillea: #c62840;
  --az-color-brand-saguaro: #7f8b5a;
  --az-color-brand-shade: #3f7a7a;
  --az-color-brand-brick: #85372b;
  --az-color-brand-cloud: #e5eff7;
  --az-color-brand-caliche: #f2efea;
  --az-color-brand-white: #ffffff;
  --az-color-brand-black: #000000;
  --az-color-brand-gray-100: #f8f9fa;
  --az-color-brand-gray-200: #e9ecef;
  --az-color-brand-gray-300: #dee2e6;
  --az-color-brand-gray-400: #ced4da;
  --az-color-brand-gray-500: #adb5bd;
  --az-color-brand-gray-600: #6c757d;
  --az-color-brand-gray-700: #495057;
  --az-color-brand-gray-800: #343a40;
  --az-color-brand-gray-900: #212529;
  --az-color-bg-button-blue-active: #3d4f6f;
  --az-color-bg-button-rain-hover: #65c0db;
  --az-color-bg-button-rain-active: #9ad8ef;
  --az-breakpoint-sm: 576px; /** Minimum viewport width for the small breakpoint. */
  --az-breakpoint-md: 768px; /** Minimum viewport width for the medium breakpoint. */
  --az-breakpoint-lg: 992px; /** Minimum viewport width for the large breakpoint. */
  --az-breakpoint-xl: 1200px; /** Minimum viewport width for the extra large breakpoint. */
  --az-breakpoint-xxl: 1400px; /** Minimum viewport width for the extra extra large breakpoint. */
  --az-spacing-0: 0px;
  --az-spacing-100: 8px;
  --az-spacing-150: 12px;
  --az-spacing-200: 16px;
  --az-spacing-250: 20px;
  --az-spacing-300: 24px;
  --az-spacing-400: 32px;
  --az-spacing-500: 40px;
  --az-spacing-600: 48px;
  --az-spacing-800: 64px;
  --az-spacing-1000: 80px;
  --az-spacing-025: 2px;
  --az-spacing-050: 4px;
  --az-spacing-075: 6px;
  --az-container-max-width-sm: 540px; /** Maximum container width from the sm breakpoint. Source: current implementation (5.2.2). */
  --az-container-max-width-md: 720px; /** Maximum container width from the md breakpoint. Source: current implementation (5.2.2). */
  --az-container-max-width-lg: 960px; /** Maximum container width from the lg breakpoint. Source: current implementation (5.2.2). */
  --az-container-max-width-xl: 1140px; /** Maximum container width from the xl breakpoint. Source: current implementation (5.2.2). */
  --az-container-max-width-xxl: 1320px; /** Maximum container width from the xxl breakpoint. Source: current implementation (5.2.2). */
  --az-grid-columns: 12; /** Number of columns in the shared page grid. Source: current implementation (5.2.2). */
  --az-radius-0: 0px;
  --az-radius-1: 4px;
  --az-radius-2: 6px;
  --az-radius-3: 8px;
  --az-radius-4: 16px;
  --az-radius-5: 32px;
  --az-radius-pill: 800px;
  --az-font-family-sans-serif: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --az-font-family-sans-serif-condensed: proxima-nova-extra-condensed, sans-serif;
  --az-font-family-serif: "MiloSerifWeb", Georgia, Cambria, "Times New Roman", Times, serif;
  --az-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --az-font-weight-light: 300;
  --az-font-weight-normal: 400;
  --az-font-weight-medium: 500;
  --az-font-weight-semibold: 600;
  --az-font-weight-bold: 700;
  --az-line-height-base: 1.5;
  --az-line-height-sm: 1.25;
  --az-line-height-medium: 1.2;
  --az-font-size-root: 16px;
  --az-font-size-sm: 14px;
  --az-font-size-lg: 20px;
  --az-font-size-h6: 16px;
  --az-font-size-h5: 20px;
  --az-font-size-h4: 24px;
  --az-font-size-h3: 28px;
  --az-font-size-h2: 32px;
  --az-font-size-h1: 40px;
  --az-font-size-button: 18px;
  --az-border-width-sm: 1px;
  --az-border-width-md: 2px;
  --az-opacity-button-disabled: 0.65;
  --az-focus-ring-width-sm: 1px;
  --az-focus-ring-width-md: 2px; /** Width of the keyboard focus ring, everywhere one is drawn, such as links and buttons. */
  --az-focus-ring-width-lg: 4px;
  --az-color-bg-card-cloud: var(--az-color-brand-cloud); /** Card fill. */
  --az-color-bg-card-cloud-hover: var(--az-color-brand-blue); /** Clickable card fill on hover and with keyboard focus. */
  --az-color-bg-card-cloud-active: var(--az-color-brand-blue); /** Clickable card fill while pressed. */
  --az-color-bg-button-red: var(--az-color-brand-red);
  --az-color-bg-button-red-hover: var(--az-color-brand-sonoran-red);
  --az-color-bg-button-red-active: var(--az-color-brand-red);
  --az-color-bg-button-blue: var(--az-color-brand-blue);
  --az-color-bg-button-blue-hover: var(--az-color-brand-azurite);
  --az-color-bg-button-rain: var(--az-color-brand-rain);
  --az-color-bg-button-white: var(--az-color-brand-white);
  --az-color-bg-button-white-hover: var(--az-color-brand-gray-200);
  --az-color-bg-button-white-active: var(--az-color-brand-gray-100);
  --az-color-fg-white: var(--az-color-brand-white);
  --az-color-fg-blue: var(--az-color-brand-blue);
  --az-color-fg-tinta: var(--az-color-brand-tinta);
  --az-color-fg-red: var(--az-color-brand-red);
  --az-color-fg-rain: var(--az-color-brand-rain);
  --az-grid-gutter: var(--az-spacing-300); /** Space between grid columns, 12px on each side of a column. Source: current implementation (5.2.2). */
}
`})))()}var y;function b(){return(b=e((()=>{y=`$az-color-brand-red: #ab0520; // Arizona Red, primary color 1.
$az-color-brand-blue: #0c234b; // Arizona Blue, primary color 2.
$az-color-brand-tinta: #03132e;
$az-color-brand-azurite: #1e5288;
$az-color-brand-arroyo-blue: #106ab1;
$az-color-brand-rain: #81ceeb;
$az-color-brand-sonoran-red: #850000;
$az-color-brand-bougainvillea: #c62840;
$az-color-brand-saguaro: #7f8b5a;
$az-color-brand-shade: #3f7a7a;
$az-color-brand-brick: #85372b;
$az-color-brand-cloud: #e5eff7;
$az-color-brand-caliche: #f2efea;
$az-color-brand-white: #ffffff;
$az-color-brand-black: #000000;
$az-color-brand-gray-100: #f8f9fa;
$az-color-brand-gray-200: #e9ecef;
$az-color-brand-gray-300: #dee2e6;
$az-color-brand-gray-400: #ced4da;
$az-color-brand-gray-500: #adb5bd;
$az-color-brand-gray-600: #6c757d;
$az-color-brand-gray-700: #495057;
$az-color-brand-gray-800: #343a40;
$az-color-brand-gray-900: #212529;
$az-color-bg-button-blue-active: #3d4f6f;
$az-color-bg-button-rain-hover: #65c0db;
$az-color-bg-button-rain-active: #9ad8ef;
$az-breakpoint-sm: 576px; // Minimum viewport width for the small breakpoint.
$az-breakpoint-md: 768px; // Minimum viewport width for the medium breakpoint.
$az-breakpoint-lg: 992px; // Minimum viewport width for the large breakpoint.
$az-breakpoint-xl: 1200px; // Minimum viewport width for the extra large breakpoint.
$az-breakpoint-xxl: 1400px; // Minimum viewport width for the extra extra large breakpoint.
$az-spacing-0: 0px;
$az-spacing-100: 8px;
$az-spacing-150: 12px;
$az-spacing-200: 16px;
$az-spacing-250: 20px;
$az-spacing-300: 24px;
$az-spacing-400: 32px;
$az-spacing-500: 40px;
$az-spacing-600: 48px;
$az-spacing-800: 64px;
$az-spacing-1000: 80px;
$az-spacing-025: 2px;
$az-spacing-050: 4px;
$az-spacing-075: 6px;
$az-container-max-width-sm: 540px; // Maximum container width from the sm breakpoint. Source: current implementation (5.2.2).
$az-container-max-width-md: 720px; // Maximum container width from the md breakpoint. Source: current implementation (5.2.2).
$az-container-max-width-lg: 960px; // Maximum container width from the lg breakpoint. Source: current implementation (5.2.2).
$az-container-max-width-xl: 1140px; // Maximum container width from the xl breakpoint. Source: current implementation (5.2.2).
$az-container-max-width-xxl: 1320px; // Maximum container width from the xxl breakpoint. Source: current implementation (5.2.2).
$az-grid-columns: 12; // Number of columns in the shared page grid. Source: current implementation (5.2.2).
$az-radius-0: 0px;
$az-radius-1: 4px;
$az-radius-2: 6px;
$az-radius-3: 8px;
$az-radius-4: 16px;
$az-radius-5: 32px;
$az-radius-pill: 800px;
$az-font-family-sans-serif: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$az-font-family-sans-serif-condensed: proxima-nova-extra-condensed, sans-serif;
$az-font-family-serif: "MiloSerifWeb", Georgia, Cambria, "Times New Roman", Times, serif;
$az-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
$az-font-weight-light: 300;
$az-font-weight-normal: 400;
$az-font-weight-medium: 500;
$az-font-weight-semibold: 600;
$az-font-weight-bold: 700;
$az-line-height-base: 1.5;
$az-line-height-sm: 1.25;
$az-line-height-medium: 1.2;
$az-font-size-root: 16px;
$az-font-size-sm: 14px;
$az-font-size-lg: 20px;
$az-font-size-h6: 16px;
$az-font-size-h5: 20px;
$az-font-size-h4: 24px;
$az-font-size-h3: 28px;
$az-font-size-h2: 32px;
$az-font-size-h1: 40px;
$az-font-size-button: 18px;
$az-border-width-sm: 1px;
$az-border-width-md: 2px;
$az-opacity-button-disabled: 0.65;
$az-focus-ring-width-sm: 1px;
$az-focus-ring-width-md: 2px; // Width of the keyboard focus ring, everywhere one is drawn, such as links and buttons.
$az-focus-ring-width-lg: 4px;
$az-color-bg-card-cloud: $az-color-brand-cloud; // Card fill.
$az-color-bg-card-cloud-hover: $az-color-brand-blue; // Clickable card fill on hover and with keyboard focus.
$az-color-bg-card-cloud-active: $az-color-brand-blue; // Clickable card fill while pressed.
$az-color-bg-button-red: $az-color-brand-red;
$az-color-bg-button-red-hover: $az-color-brand-sonoran-red;
$az-color-bg-button-red-active: $az-color-brand-red;
$az-color-bg-button-blue: $az-color-brand-blue;
$az-color-bg-button-blue-hover: $az-color-brand-azurite;
$az-color-bg-button-rain: $az-color-brand-rain;
$az-color-bg-button-white: $az-color-brand-white;
$az-color-bg-button-white-hover: $az-color-brand-gray-200;
$az-color-bg-button-white-active: $az-color-brand-gray-100;
$az-color-fg-white: $az-color-brand-white;
$az-color-fg-blue: $az-color-brand-blue;
$az-color-fg-tinta: $az-color-brand-tinta;
$az-color-fg-red: $az-color-brand-red;
$az-color-fg-rain: $az-color-brand-rain;
$az-grid-gutter: $az-spacing-300; // Space between grid columns, 12px on each side of a column. Source: current implementation (5.2.2).
`})))()}var x;function S(){return(S=e((()=>{x=`export const az = {
  "color": {
    "brand": {
      "red": "var(--az-color-brand-red)",
      "blue": "var(--az-color-brand-blue)",
      "tinta": "var(--az-color-brand-tinta)",
      "azurite": "var(--az-color-brand-azurite)",
      "arroyoBlue": "var(--az-color-brand-arroyo-blue)",
      "rain": "var(--az-color-brand-rain)",
      "sonoranRed": "var(--az-color-brand-sonoran-red)",
      "bougainvillea": "var(--az-color-brand-bougainvillea)",
      "saguaro": "var(--az-color-brand-saguaro)",
      "shade": "var(--az-color-brand-shade)",
      "brick": "var(--az-color-brand-brick)",
      "cloud": "var(--az-color-brand-cloud)",
      "caliche": "var(--az-color-brand-caliche)",
      "white": "var(--az-color-brand-white)",
      "black": "var(--az-color-brand-black)",
      "gray": {
        "100": "var(--az-color-brand-gray-100)",
        "200": "var(--az-color-brand-gray-200)",
        "300": "var(--az-color-brand-gray-300)",
        "400": "var(--az-color-brand-gray-400)",
        "500": "var(--az-color-brand-gray-500)",
        "600": "var(--az-color-brand-gray-600)",
        "700": "var(--az-color-brand-gray-700)",
        "800": "var(--az-color-brand-gray-800)",
        "900": "var(--az-color-brand-gray-900)"
      }
    },
    "bg": {
      "card": {
        "cloud": "var(--az-color-bg-card-cloud)",
        "cloudHover": "var(--az-color-bg-card-cloud-hover)",
        "cloudActive": "var(--az-color-bg-card-cloud-active)"
      },
      "button": {
        "red": "var(--az-color-bg-button-red)",
        "redHover": "var(--az-color-bg-button-red-hover)",
        "redActive": "var(--az-color-bg-button-red-active)",
        "blue": "var(--az-color-bg-button-blue)",
        "blueHover": "var(--az-color-bg-button-blue-hover)",
        "blueActive": "var(--az-color-bg-button-blue-active)",
        "rain": "var(--az-color-bg-button-rain)",
        "rainHover": "var(--az-color-bg-button-rain-hover)",
        "rainActive": "var(--az-color-bg-button-rain-active)",
        "white": "var(--az-color-bg-button-white)",
        "whiteHover": "var(--az-color-bg-button-white-hover)",
        "whiteActive": "var(--az-color-bg-button-white-active)"
      }
    },
    "fg": {
      "white": "var(--az-color-fg-white)",
      "blue": "var(--az-color-fg-blue)",
      "tinta": "var(--az-color-fg-tinta)",
      "red": "var(--az-color-fg-red)",
      "rain": "var(--az-color-fg-rain)"
    }
  },
  "breakpoint": {
    "sm": "var(--az-breakpoint-sm)",
    "md": "var(--az-breakpoint-md)",
    "lg": "var(--az-breakpoint-lg)",
    "xl": "var(--az-breakpoint-xl)",
    "xxl": "var(--az-breakpoint-xxl)"
  },
  "spacing": {
    "0": "var(--az-spacing-0)",
    "100": "var(--az-spacing-100)",
    "150": "var(--az-spacing-150)",
    "200": "var(--az-spacing-200)",
    "250": "var(--az-spacing-250)",
    "300": "var(--az-spacing-300)",
    "400": "var(--az-spacing-400)",
    "500": "var(--az-spacing-500)",
    "600": "var(--az-spacing-600)",
    "800": "var(--az-spacing-800)",
    "1000": "var(--az-spacing-1000)",
    "025": "var(--az-spacing-025)",
    "050": "var(--az-spacing-050)",
    "075": "var(--az-spacing-075)"
  },
  "container": {
    "maxWidth": {
      "sm": "var(--az-container-max-width-sm)",
      "md": "var(--az-container-max-width-md)",
      "lg": "var(--az-container-max-width-lg)",
      "xl": "var(--az-container-max-width-xl)",
      "xxl": "var(--az-container-max-width-xxl)"
    }
  },
  "grid": {
    "columns": "var(--az-grid-columns)",
    "gutter": "var(--az-grid-gutter)"
  },
  "radius": {
    "0": "var(--az-radius-0)",
    "1": "var(--az-radius-1)",
    "2": "var(--az-radius-2)",
    "3": "var(--az-radius-3)",
    "4": "var(--az-radius-4)",
    "5": "var(--az-radius-5)",
    "pill": "var(--az-radius-pill)"
  },
  "fontFamily": {
    "sansSerif": "var(--az-font-family-sans-serif)",
    "sansSerifCondensed": "var(--az-font-family-sans-serif-condensed)",
    "serif": "var(--az-font-family-serif)",
    "monospace": "var(--az-font-family-monospace)"
  },
  "fontWeight": {
    "light": "var(--az-font-weight-light)",
    "normal": "var(--az-font-weight-normal)",
    "medium": "var(--az-font-weight-medium)",
    "semibold": "var(--az-font-weight-semibold)",
    "bold": "var(--az-font-weight-bold)"
  },
  "lineHeight": {
    "base": "var(--az-line-height-base)",
    "sm": "var(--az-line-height-sm)",
    "medium": "var(--az-line-height-medium)"
  },
  "fontSize": {
    "root": "var(--az-font-size-root)",
    "sm": "var(--az-font-size-sm)",
    "lg": "var(--az-font-size-lg)",
    "h6": "var(--az-font-size-h6)",
    "h5": "var(--az-font-size-h5)",
    "h4": "var(--az-font-size-h4)",
    "h3": "var(--az-font-size-h3)",
    "h2": "var(--az-font-size-h2)",
    "h1": "var(--az-font-size-h1)",
    "button": "var(--az-font-size-button)"
  },
  "border": {
    "width": {
      "sm": "var(--az-border-width-sm)",
      "md": "var(--az-border-width-md)"
    }
  },
  "opacity": {
    "buttonDisabled": "var(--az-opacity-button-disabled)"
  },
  "focusRing": {
    "width": {
      "sm": "var(--az-focus-ring-width-sm)",
      "md": "var(--az-focus-ring-width-md)",
      "lg": "var(--az-focus-ring-width-lg)"
    }
  }
};
`})))()}var C;function w(){return(w=e((()=>{C=`export const az: {
  "color": {
    "brand": {
      "red": string,
      "blue": string,
      "tinta": string,
      "azurite": string,
      "arroyoBlue": string,
      "rain": string,
      "sonoranRed": string,
      "bougainvillea": string,
      "saguaro": string,
      "shade": string,
      "brick": string,
      "cloud": string,
      "caliche": string,
      "white": string,
      "black": string,
      "gray": {
        "100": string,
        "200": string,
        "300": string,
        "400": string,
        "500": string,
        "600": string,
        "700": string,
        "800": string,
        "900": string
      }
    },
    "bg": {
      "card": {
        "cloud": string,
        "cloudHover": string,
        "cloudActive": string
      },
      "button": {
        "red": string,
        "redHover": string,
        "redActive": string,
        "blue": string,
        "blueHover": string,
        "blueActive": string,
        "rain": string,
        "rainHover": string,
        "rainActive": string,
        "white": string,
        "whiteHover": string,
        "whiteActive": string
      }
    },
    "fg": {
      "white": string,
      "blue": string,
      "tinta": string,
      "red": string,
      "rain": string
    }
  },
  "breakpoint": {
    "sm": string,
    "md": string,
    "lg": string,
    "xl": string,
    "xxl": string
  },
  "spacing": {
    "0": string,
    "100": string,
    "150": string,
    "200": string,
    "250": string,
    "300": string,
    "400": string,
    "500": string,
    "600": string,
    "800": string,
    "1000": string,
    "025": string,
    "050": string,
    "075": string
  },
  "container": {
    "maxWidth": {
      "sm": string,
      "md": string,
      "lg": string,
      "xl": string,
      "xxl": string
    }
  },
  "grid": {
    "columns": string,
    "gutter": string
  },
  "radius": {
    "0": string,
    "1": string,
    "2": string,
    "3": string,
    "4": string,
    "5": string,
    "pill": string
  },
  "fontFamily": {
    "sansSerif": string,
    "sansSerifCondensed": string,
    "serif": string,
    "monospace": string
  },
  "fontWeight": {
    "light": string,
    "normal": string,
    "medium": string,
    "semibold": string,
    "bold": string
  },
  "lineHeight": {
    "base": string,
    "sm": string,
    "medium": string
  },
  "fontSize": {
    "root": string,
    "sm": string,
    "lg": string,
    "h6": string,
    "h5": string,
    "h4": string,
    "h3": string,
    "h2": string,
    "h1": string,
    "button": string
  },
  "border": {
    "width": {
      "sm": string,
      "md": string
    }
  },
  "opacity": {
    "buttonDisabled": string
  },
  "focusRing": {
    "width": {
      "sm": string,
      "md": string,
      "lg": string
    }
  }
};
`})))()}function T(e){let t=e.replace(`#`,``);return{r:Number.parseInt(t.slice(0,2),16),g:Number.parseInt(t.slice(2,4),16),b:Number.parseInt(t.slice(4,6),16)}}function E({color:e,pinColor:t}){return(0,A.jsxs)(`div`,{style:{position:`relative`,height:180,width:`min(100%, 160px)`,margin:`0 auto`,background:e,borderRadius:`999px 999px 0 0`,border:`1px solid #d7dce3`},children:[(0,A.jsx)(`div`,{style:{position:`absolute`,top:-20,left:`50%`,width:4,height:100,background:t,transform:`translateX(-50%)`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,top:80,left:`50%`,width:12,height:12,borderRadius:`50%`,background:t,transform:`translate(-50%, -50%)`}})]})}function D({left:e,right:t}){return(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:t?`28px 1fr 28px 1fr`:`28px 1fr`,gap:6,alignItems:`baseline`},children:[(0,A.jsxs)(`span`,{style:N,children:[e[0],`:`]}),(0,A.jsx)(`span`,{style:P,children:e[1]}),t&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`span`,{style:N,children:[t[0],`:`]}),(0,A.jsx)(`span`,{style:P,children:t[1]})]})]})}function O({color:e}){let t=F(e.name??e.token),n=T(e.hex),r=e.extensions?.cmyk,i=e.extensions?.pantone,a=[`blue`,`tinta`,`black`].includes((e.name??``).toLowerCase())?`var(--az-color-brand-red)`:`var(--az-color-brand-blue)`,o=[[`R`,String(n.r)],[`G`,String(n.g)],[`B`,String(n.b)]],s=r&&[[`C`,String(r.c)],[`M`,String(r.m)],[`Y`,String(r.y)],[`K`,String(r.k)]];return(0,A.jsxs)(`div`,{style:j,children:[(0,A.jsx)(u,{data:e,style:{margin:`0 0 8px`}}),(0,A.jsx)(`p`,{style:M,children:t}),(0,A.jsx)(E,{color:e.hex,pinColor:a}),(0,A.jsxs)(`div`,{style:{display:`grid`,gap:5},children:[s?s.map((e,t)=>(0,A.jsx)(D,{left:e,right:o[t]},e[0])):o.map(e=>(0,A.jsx)(D,{left:e},e[0])),(0,A.jsx)(D,{left:[`HEX`,e.hex]}),i&&(0,A.jsx)(D,{left:[`PMS`,i]})]})]})}function k({prefix:e}){n();let t=f(e,{order:`source`}).filter(e=>e.hex!==void 0);return(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(190px, 1fr))`,gap:24,margin:`16px 0`},children:t.map(e=>(0,A.jsx)(O,{color:e},e.token))})}var A,j,M,N,P,F;function I(){return(I=e((()=>{p(),A=s(),j={display:`grid`,gap:14,fontFamily:`'Helvetica Neue', Helvetica, Arial, sans-serif`},M={margin:`0 0 20px`,color:`var(--az-color-brand-blue)`,fontWeight:700,fontSize:15,textAlign:`center`},N={color:`var(--az-color-brand-blue)`,fontWeight:700,fontSize:11,letterSpacing:`0.02em`},P={color:`#3d4f66`,fontWeight:500,fontSize:11},F=e=>e.replace(/(^|[-_])(\w)/g,(e,t,n)=>`${t?` `:``}${n.toUpperCase()}`),k.__docgenInfo={description:"Swatch cards for every color token under `prefix` (e.g. `az.color.brand.`),\neach painted with the token's resolved value. CMYK and Pantone come from the\ntoken's `$extensions.cmyk` / `$extensions.pantone` when present.",methods:[],displayName:`ColorSwatchGrid`,props:{prefix:{required:!0,tsType:{name:`string`},description:``}}}})))()}function L(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[`
`,`
`,`
`,(0,z.jsx)(c,{title:`Primary/Foundations/Tokens`}),`
`,(0,z.jsx)(t.h1,{id:`design-tokens`,children:`Design Tokens`}),`
`,(0,z.jsx)(t.h2,{id:`guidance`,children:`Guidance`}),`
`,(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(`a`,{href:`./?path=/docs/primary-foundations-tokens-how-to-use--docs`,target:`_top`,children:`How to use design tokens`}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(`a`,{href:`./?path=/docs/primary-foundations-tokens-contributing--docs`,target:`_top`,children:`Contribute token changes`}),`
`]}),`
`]}),`
`,(0,z.jsx)(t.h2,{id:`downloads-and-useful-links`,children:`Downloads and useful links`}),`
`,(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Tokens:`}),` `,Y.total,` · `,(0,z.jsx)(t.strong,{children:`Colors:`}),` `,Y.color,` · `,(0,z.jsx)(t.strong,{children:`Format:`}),` JSON`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(`a`,{href:U,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub`}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),m(i,`tokens.json`)},children:`Download raw JSON`}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),h(_,`tokens.css`,`text/css`)},children:`Download tokens.css`}),` · `,(0,z.jsx)(`a`,{href:W,target:`_blank`,rel:`noopener noreferrer`,children:`View tokens.css on this branch`})]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),h(y,`tokens.scss`,`text/x-scss`)},children:`Download tokens.scss`}),` · `,(0,z.jsx)(`a`,{href:G,target:`_blank`,rel:`noopener noreferrer`,children:`View tokens.scss on this branch`})]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),h(x,`tokens.vars.js`,`text/javascript`)},children:`Download tokens.vars.js`}),` · `,(0,z.jsx)(`a`,{href:K,target:`_blank`,rel:`noopener noreferrer`,children:`View tokens.vars.js on this branch`})]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),h(C,`tokens.vars.d.ts`,`text/plain`)},children:`Download tokens.vars.d.ts`}),` · `,(0,z.jsx)(`a`,{href:q,target:`_blank`,rel:`noopener noreferrer`,children:`View tokens.vars.d.ts on this branch`})]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(`a`,{href:J,target:`_blank`,rel:`noopener noreferrer`,children:`DTCG Color Format Spec`}),`
`]}),`
`]}),`
`,(0,z.jsxs)(t.p,{children:[`Source file: `,(0,z.jsx)(t.code,{children:`packages/tokens/tokens.json`})]}),`
`,(0,z.jsx)(t.h2,{id:`colors`,children:`Colors`}),`
`,(0,z.jsxs)(t.p,{children:[`Arizona's brand palette (`,(0,z.jsx)(t.code,{children:`az.color.brand.*`}),`), the raw color values every other color token is built from.`]}),`
`,(0,z.jsx)(k,{prefix:`az.color.brand.`}),`
`,(0,z.jsx)(t.h2,{id:`shared-decisions`,children:`Shared decisions`}),`
`,(0,z.jsxs)(t.p,{children:[`Decisions every component that needs them shares, so they change in one place. Each is named the way implementations already name the same decision: `,(0,z.jsx)(t.code,{children:`az.focus-ring.width.md`}),` is the focus ring's width wherever one is drawn.`]}),`
`,(0,z.jsx)(d,{items:f(`az.focus-ring.`,{order:`source`}),layout:`table`}),`
`,(0,z.jsx)(t.h2,{id:`components`,children:`Components`}),`
`,(0,z.jsxs)(t.p,{children:[`Each component's contract (`,(0,z.jsx)(t.code,{children:`packages/contracts`}),`) sets each of its parts' design properties: colors point at color tokens for what they color and where (`,(0,z.jsx)(t.code,{children:`az.color.bg.button.red`}),`, `,(0,z.jsx)(t.code,{children:`az.color.fg.white`}),`), shared decisions at their shared token, and everything specific to the component, such as its sizes and timings, is a value in the contract itself, with a description of what it's for. Its docs page shows the contract as an Anatomy table.`]})]})}function R(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{z=s(),o(),l(),r(),v(),b(),S(),w(),p(),I(),{sourceFiles:B,artifacts:V}=t(),H=e=>V.find(t=>t.path.endsWith(`/${e}`))?.url,U=B[0]?.url,W=H(`tokens.css`),G=H(`tokens.scss`),K=H(`tokens.vars.js`),q=H(`tokens.vars.d.ts`),J=`https://www.designtokens.org/tr/2025.10/color/`,Y=g(i)})))()}X();export{V as artifacts,R as default,U as githubUrl,H as outputUrl,B as sourceFiles,J as specUrl,Y as tokenCounts,W as tokensCssGithubUrl,G as tokensScssGithubUrl,q as tokensVarsDtsGithubUrl,K as tokensVarsJsGithubUrl};