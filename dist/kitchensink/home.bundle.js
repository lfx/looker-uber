"use strict";(self.webpackChunkextension_kitchensink=self.webpackChunkextension_kitchensink||[]).push([["home"],{6613:(e,t,n)=>{n.d(t,{oZ:()=>i,so:()=>s,T:()=>m}),n(8547);var r=n(6576),a=n(62226),o=n(42723),i="u4",s=(0,r.iv)([""," "," display:flex;"],o.C,a.flexbox),l=function(e){var t=e.gap,n=void 0===t?i:t,a=e.reverse;return(0,r.iv)(["&& > *{margin-right:",";}",""],(function(e){return e.theme.space[n]}),(function(e){var t=e.theme.space;return a?"&& > *:first-child { margin-right: ".concat(t.none,"; }"):"&& > *:last-child { margin-right: ".concat(t.none,"; }")}))},c=function(e){var t=e.gap,n=void 0===t?i:t,a=e.reverse;return(0,r.iv)(["@supports (-moz-appearance:none){gap:0 ",";}@supports not (-moz-appearance:none){","}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){","}"],(function(e){return e.theme.space[n]}),l({gap:n,reverse:a}),l({gap:n,reverse:a}))},u=(0,a.variant)({prop:"align",variants:{center:{alignItems:"center"},end:{alignItems:"flex-end"},start:{alignItems:"flex-start"}}}),d=(0,a.variant)({prop:"justify",variants:{center:{justifyContent:"center"},end:{justifyContent:"flex-end"},start:{justifyContent:"flex-start"}}}),m=r.ZP.div.withConfig({shouldForwardProp:a.shouldForwardProp}).attrs((function(e){var t=e.alignItems,n=void 0===t?"center":t,r=e.width;return{alignItems:n,width:void 0===r?"100%":r}})).withConfig({displayName:"Space",componentId:"sc-zsz5hl-0"})([""," "," "," flex-direction:",";"," "," "," ",""],s,(function(e){return!e.stretch&&u}),(function(e){return!e.stretch&&d}),(function(e){return e.reverse?"row-reverse":"row"}),(function(e){return e.around&&"justify-content: space-around;"}),(function(e){return e.between&&"justify-content: space-between;"}),(function(e){return e.evenly&&"justify-content: space-evenly;"}),(function(e){var t=e.around,n=e.between,r=e.evenly;return!t&&!n&&!r&&c}))},62112:(e,t,n)=>{n.d(t,{s:()=>i}),n(8547),n(75093);var r=n(62226),a=n(6576),o=n(6613),i=a.ZP.div.withConfig({shouldForwardProp:r.shouldForwardProp}).attrs((function(e){var t=e.align,n=void 0===t?"flex-start":t,r=e.width,a=void 0===r?"100%":r;return["start","end"].includes("align")&&(n="flex-".concat(n)),{alignItems:n,width:a}})).withConfig({displayName:"SpaceVertical",componentId:"sc-tnj0rp-0"})([""," "," flex-direction:",";"],o.so,(function(e){var t=e.gap,n=void 0===t?o.oZ:t,r=e.reverse;return(0,a.iv)(["@supports (-moz-appearance:none){gap:",";}@supports not (-moz-appearance:none){&& > *{margin-top:",";}","}"],(function(e){return e.theme.space[n]}),(function(e){return e.theme.space[n]}),(function(e){var t=e.theme.space;return r?"&& > *:last-child { margin-top: ".concat(t.none,"; }"):"&& > *:first-child { margin-top: ".concat(t.none,"; }")}))}),(function(e){return e.reverse?"column-reverse":"column"}))},65979:(e,t,n)=>{n.d(t,{X:()=>c});var r=n(6576),a=n(62226),o=n(2026),i=n(22528),s=function(e){switch(e){case"h1":return"xxlarge";case"h3":return"large";case"h4":return"medium";case"h5":return"small";case"h6":return"xsmall";default:return"xlarge"}},l=function(e,t){return t||s(e)},c=(0,r.ZP)(o.d).attrs((function(e){var t=e.as,n=void 0===t?"h2":t,r=e.color,a=void 0===r?"title":r,o=e.fontFamily,i=void 0===o?"brand":o,c=e.fontSize,u=e.fontWeight,d=void 0===u?"normal":u,m=e.lineHeight;return{as:n,color:a,fontFamily:i,fontSize:c||s(n),fontWeight:d,lineHeight:m||l(n,c)}})).withConfig({displayName:"Heading",componentId:"sc-63s0tz-0"})([""," ",""],a.textTransform,i.B)},17065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(32735),a=n(65979),o=n(62112),i=n(25116),s=n(83562);const l=()=>r.createElement(r.Fragment,null,r.createElement(a.X,{mt:"xlarge"},"Home"),r.createElement(s.p,null),r.createElement(o.s,null,r.createElement(i.n,null,"Welcome to the kitchen sink which demonstrates how to exercise the capabilities of the extension framework."),r.createElement(i.n,null,"The ",r.createElement("b",null,"Api Functions view")," demonstrates the basic capabilties of the extension framework, for example navigation and local storage access."),r.createElement(i.n,null,"The ",r.createElement("b",null,"Core Functions view")," demonstrates using the Looker SDK."),r.createElement(i.n,null,"The ",r.createElement("b",null,"Embed Dashboard view")," demonstrates using the embed SDK to display an embedded dashboard in an extension."),r.createElement(i.n,null,"The ",r.createElement("b",null,"Embed Explore view")," demonstrates using the embed SDK to display an embedded explore in an extension."),r.createElement(i.n,null,"The ",r.createElement("b",null,"Embed Look view")," demonstrates using the embed SDK to display an embedded look in an extension."),r.createElement(i.n,null,"The ",r.createElement("b",null,"External Api Functions view")," demonstrates various ways to access external APIs from an extension. It also demonstrates how to integrate with OAUTH2 providers. Note that a data server is required to exercise this functionality. Running"," ",r.createElement("code",null,"yarn start-data-server")," from your work space starts the data server."),r.createElement(i.n,null,"The ",r.createElement("b",null,"Miscellaneous view")," demonstrates unclassifiable functionality of the extension framework. An example is how the framework handles an attempt to navigate away from the initial extension page (it reloads the extension). It also shows a specialized logout button for ",r.createElement("b",null,"Spartan")," extensions (extensions that run without the Looker chrome)."),r.createElement(i.n,null,"The ",r.createElement("b",null,"Configuration view")," demonstrates how to use the extension context API to save configuration data. Basically views can be hidden or shown. Default artifact ids can be overridden for embedded views.")))},83562:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(32735),a=n(25116),o=()=>{var[e,t]=(0,r.useState)("");return(0,r.useEffect)((()=>{try{var e;null===(e=window.parent.looker)||void 0===e||e.version,t("NOT")}catch(e){t("")}}),[]),r.createElement(a.n,{my:"medium"},"This extension is ",r.createElement("b",null,e)," sandboxed.")}},8547:(e,t,n)=>{var r=n(29638),a=n(70936),o=n(20119),i=a([].reverse),s=[1,2];r({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i(this)}})}}]);
//# sourceMappingURL=home.bundle.js.map