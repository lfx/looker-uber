"use strict";(self.webpackChunkextension_kitchensink=self.webpackChunkextension_kitchensink||[]).push([["configure"],{6027:(e,o,t)=>{t.d(o,{I:()=>a});var n=t(6576),r=t(9820),a=(0,n.ZP)(r.Xd).withConfig({displayName:"ButtonOutline",componentId:"sc-ncggc7-0"})(["background:",";border:1px solid ",";color:",";&[aria-expanded='true']{background:",";border-color:",";color:",";}"],(function(e){var o=e.theme,t=e.color,n=void 0===t?"key":t;return o.colors["".concat(n,"Text")]}),(function(e){return e.theme.colors.ui3}),(function(e){var o=e.theme,t=e.color,n=void 0===t?"key":t;return o.colors[n]}),(function(e){var o=e.theme,t=e.color,n=void 0===t?"key":t;return o.colors["".concat(n,"Accent")]}),(function(e){var o=e.theme,t=e.color,n=void 0===t?"key":t;return o.colors["".concat(n,"Focus")]}),(function(e){var o=e.theme,t=e.color,n=void 0===t?"key":t;return o.colors[n]}))},93255:(e,o,t)=>{t.r(o),t.d(o,{default:()=>p});var n=t(47169),r=t(18950),a=t(32735),c=t(65979),l=t(98226),i=t(19329),s=t(62112),d=t(6027),h=t(953),u=t(83562);function m(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?m(Object(t),!0).forEach((function(o){(0,n.Z)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}const p=e=>{var{canPersistContextData:o,configurationData:t,updateConfigurationData:n}=e,[m,p]=(0,a.useState)({dashboardId:"",exploreId:"",lookId:""}),g=(0,a.useContext)(h.n),{extensionSDK:k}=g;(0,a.useEffect)((()=>{var e=function(){var e=(0,r.Z)((function*(){if(o)try{var e=yield k.refreshContextData();e&&p(e)}catch(e){console.error("failed to get latest context data",e)}}));return function(){return e.apply(this,arguments)}}();p(b({},t)),e()}),[]);var w=e=>e.match(/\d+/g)?parseInt(e,10):e,E=(()=>{var e;return"string"==typeof m.dashboardId&&(e||(e={}),e.dashboardId={type:"error",message:"dashboard id is not numeric"}),""===m.exploreId&&(e||(e={}),e.exploreId={type:"error",message:"explore id is empty"}),"string"==typeof m.lookId&&(e||(e={}),e.lookId={type:"error",message:"look id is not numeric"}),e})();return a.createElement(a.Fragment,null,a.createElement(c.X,{mt:"xlarge"},"Configuration"),a.createElement(u.p,null),a.createElement(l.Form,{width:"50%",validationMessages:E,onSubmit:e=>{e.preventDefault(),n(b({},m))}},a.createElement(l.FieldCheckbox,{label:"Show api functions",name:"showApiFunctions",checked:m.showApiFunctions,onChange:()=>{m.showApiFunctions=!m.showApiFunctions,p(b({},m))}}),a.createElement(l.FieldCheckbox,{label:"Show core sdk functions",name:"showCoreSdkFunctions",checked:m.showCoreSdkFunctions,onChange:()=>{m.showCoreSdkFunctions=!m.showCoreSdkFunctions,p(b({},m))}}),a.createElement(l.FieldCheckbox,{label:"Show embed dashboard",name:"showEmbedDashboard",checked:m.showEmbedDashboard,onChange:()=>{m.showEmbedDashboard=!m.showEmbedDashboard,p(b({},m))}}),a.createElement(l.FieldCheckbox,{label:"Show embed explore",name:"showEmbedExplore",checked:m.showEmbedExplore,onChange:()=>{m.showEmbedExplore=!m.showEmbedExplore,p(b({},m))}}),a.createElement(l.FieldCheckbox,{label:"Show embed look",name:"showEmbedLook",checked:m.showEmbedLook,onChange:()=>{m.showEmbedLook=!m.showEmbedLook,p(b({},m))}}),a.createElement(l.FieldCheckbox,{label:"Show external api functions",name:"showExternalApiFunctions",checked:m.showExternalApiFunctions,onChange:()=>{m.showExternalApiFunctions=!m.showExternalApiFunctions,p(b({},m))}}),a.createElement(l.FieldCheckbox,{label:"Show miscellaneous functions",name:"showMiscFunctions",checked:m.showMiscFunctions,onChange:()=>{m.showMiscFunctions=!m.showMiscFunctions,p(b({},m))}}),a.createElement(l.FieldText,{label:"Dashboard id",name:"dashboardId",value:m.dashboardId,onChange:e=>{m.dashboardId=w(e.currentTarget.value),p(b({},m))}}),a.createElement(l.FieldText,{label:"Explore id",name:"exploreId",value:m.exploreId,onChange:e=>{m.exploreId=e.currentTarget.value,p(b({},m))}}),a.createElement(l.FieldText,{label:"Look id",name:"lookId",value:m.lookId,onChange:e=>{m.lookId=w(e.currentTarget.value),p(b({},m))}}),a.createElement(l.FieldTextArea,{label:"Thought for the day",name:"thoughtForTheDay",value:m.thoughtForTheDay||"",onChange:e=>{m.thoughtForTheDay=e.currentTarget.value,p(b({},m))}}),a.createElement(l.FieldTextArea,{label:"Image data",name:"imageData",value:m.imageData||"",onChange:e=>{m.imageData=e.currentTarget.value,p(b({},m))}}),m.imageData&&a.createElement("img",{src:m.imageData}),a.createElement(i.z,{disabled:!!E},"Update configuration")),o&&a.createElement(s.s,{width:"50%"},a.createElement(d.I,{onClick:()=>{p(b({},t))}},"Reset configuration")))}},83562:(e,o,t)=>{t.d(o,{p:()=>a});var n=t(32735),r=t(25116),a=()=>{var[e,o]=(0,n.useState)("");return(0,n.useEffect)((()=>{try{var e;null===(e=window.parent.looker)||void 0===e||e.version,o("NOT")}catch(e){o("")}}),[]),n.createElement(r.n,{my:"medium"},"This extension is ",n.createElement("b",null,e)," sandboxed.")}}}]);
//# sourceMappingURL=configure.bundle.js.map