"use strict";(self.webpackChunkextension_kitchensink=self.webpackChunkextension_kitchensink||[]).push([["api_functions"],{6027:(e,t,r)=>{r.d(t,{I:()=>a});var n=r(6576),o=r(9820),a=(0,n.ZP)(o.Xd).withConfig({displayName:"ButtonOutline",componentId:"sc-ncggc7-0"})(["background:",";border:1px solid ",";color:",";&[aria-expanded='true']{background:",";border-color:",";color:",";}"],(function(e){var t=e.theme,r=e.color,n=void 0===r?"key":r;return t.colors["".concat(n,"Text")]}),(function(e){return e.theme.colors.ui3}),(function(e){var t=e.theme,r=e.color,n=void 0===r?"key":r;return t.colors[n]}),(function(e){var t=e.theme,r=e.color,n=void 0===r?"key":r;return t.colors["".concat(n,"Accent")]}),(function(e){var t=e.theme,r=e.color,n=void 0===r?"key":r;return t.colors["".concat(n,"Focus")]}),(function(e){var t=e.theme,r=e.color,n=void 0===r?"key":r;return t.colors[n]}))},79453:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(18950),o=r(32735),a=r(22538),c=r(65979),l=r(76676),i=r(6027),s=r(98226),u=r(953),m=r(83562),d=r(71367);const h=()=>{var e,t=(0,a.k6)(),[r,h]=(0,o.useState)(""),p=(0,o.useContext)(u.n),{extensionSDK:v}=p,f="".concat(null===(e=v.lookerHostData)||void 0===e?void 0:e.extensionId.replace(/(::|-)/g,"_"),"_user_value"),y=e=>{h((t=>{var r=0===t.length?"":"\n";return"".concat(t).concat(r).concat(e)}))},k=function(){var e=(0,n.Z)((function*(){try{var e=yield v.verifyHostConnection();y(!0===e?"Host verification success":"Invalid response "+e)}catch(e){y("Host verification failure"),y(e),console.error("Host verification failure",e)}}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,n.Z)((function*(){try{yield v.localStorageSetItem("testbed",(new Date).toString()),y("Success")}catch(e){y(e),console.error(e)}}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)((function*(){try{var e=yield v.localStorageGetItem("testbed");y(e||"null")}catch(e){y(e),console.error(e)}}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,n.Z)((function*(){try{yield v.localStorageRemoveItem("testbed"),y("Success")}catch(e){y(e),console.error(e)}}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,n.Z)((function*(){try{var e=yield v.userAttributeGetItem("user_value");y("User attribute 'user_value' is ".concat(e))}catch(e){y('Create a user attribute named "'.concat(f,'" and reload to use this attribute')),console.error(e)}try{var t=yield v.userAttributeGetItem("locale");y("User attribute 'locale' is ".concat(t))}catch(e){y(e),console.error(e)}}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,n.Z)((function*(){try{var e=yield v.userAttributeSetItem("user_value",(new Date).toString());e&&y("Updated 'user_value' to '".concat(e,"'"))}catch(e){y('Create a user attribute named "'.concat(f,'" and reload to use this attribute')),console.error(e)}try{var t=(new Date).toString();(yield v.userAttributeSetItem("locale",t))&&y("Updated 'locale' to '".concat(t,"'"))}catch(e){y(e),console.error(e)}}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,n.Z)((function*(){try{yield v.userAttributeResetItem("user_value"),y("Reset 'user_value' to default")}catch(e){y('Create a user attribute named "'.concat(f,'" and reload to use this attribute')),console.error(e)}try{yield v.userAttributeResetItem("locale"),y("Reset 'locale' default")}catch(e){y(e),console.error(e)}}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)((function*(){try{yield v.clipboardWrite("https://trends.google.com/trends/trendingsearches/daily?geo=US"),y("Google's \"I'm feeling lucky\" search has been written to the clipboard. Paste into the browser URL to confirm.")}catch(e){y(e),console.error(e)}}));return function(){return e.apply(this,arguments)}}();return o.createElement(o.Fragment,null,o.createElement(c.X,{mt:"xlarge"},"API Functions"),o.createElement(m.p,null),o.createElement(l.x,{display:"flex",flexDirection:"row"},o.createElement(l.x,{display:"flex",flexDirection:"column",width:"50%",maxWidth:"40vw"},o.createElement(i.I,{mt:"small",onClick:()=>{var e=new Date;v.updateTitle("Extension Title Update ".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds())),y("Title updated")}},"Update title"),o.createElement(i.I,{mt:"small",onClick:()=>{v.updateLocation("/browse")}},"Go to browse (update location)"),o.createElement(i.I,{mt:"small",onClick:()=>{v.updateLocation("/marketplace")}},"Go to Marketplace (update location)"),o.createElement(i.I,{mt:"small",onClick:()=>{v.openBrowserWindow("/marketplace","_marketplace"),y("Window opened")}},"Open marketplace new window"),o.createElement(i.I,{mt:"small",onClick:k},"Verify host connection"),o.createElement(i.I,{mt:"small",onClick:b},"Set local storage"),o.createElement(i.I,{mt:"small",onClick:g},"Get local storage"),o.createElement(i.I,{mt:"small",onClick:I},"Remove local storage"),o.createElement(i.I,{mt:"small",onClick:()=>{throw y("About to generate error"),new Error("Kitchensink threw an error")}},"Generate unhandled error"),o.createElement(i.I,{mt:"small",onClick:()=>{t.push("".concat(d.Z.CORESDK_ROUTE,"?test=abcd"),{count:1})}},"Route test"),o.createElement(i.I,{mt:"small",onClick:E},"Get User Attribute"),o.createElement(i.I,{mt:"small",onClick:w},"Set User Attribute"),o.createElement(i.I,{mt:"small",onClick:C},"Reset User Attribute"),o.createElement(i.I,{mt:"small",onClick:x},"Write to clipboard"),o.createElement(i.I,{mt:"small",onClick:()=>{h("")}},"Clear messages")),o.createElement(l.x,{width:"50%",p:"small",maxWidth:"40vw"},o.createElement(s.TextArea,{height:"60vh",readOnly:!0,value:r}))))}},83562:(e,t,r)=>{r.d(t,{p:()=>a});var n=r(32735),o=r(25116),a=()=>{var[e,t]=(0,n.useState)("");return(0,n.useEffect)((()=>{try{var e;null===(e=window.parent.looker)||void 0===e||e.version,t("NOT")}catch(e){t("")}}),[]),n.createElement(o.n,{my:"medium"},"This extension is ",n.createElement("b",null,e)," sandboxed.")}}}]);
//# sourceMappingURL=api_functions.bundle.js.map