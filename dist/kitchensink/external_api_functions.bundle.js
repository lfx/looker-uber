"use strict";(self.webpackChunkextension_kitchensink=self.webpackChunkextension_kitchensink||[]).push([["external_api_functions"],{79444:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var a,r=n(32735),o=n(22538),i=n(65979),l=n(2280),c=n(76676),s=n(28913),u=n(71547),d=n(36199),h=n(9732),p=n(90871),m=n(83562),y=n(47169),f=n(18950),v=n(54770),g=n(23125),b=n(19329),E=n(67520),k=n(55266),w=n(62112),x=n(6027),T=n(953);!function(e){e.Custom="Custom",e.Google="Google",e.Github="Github",e.Auth0="Auth0",e.Auth0Alt="Auth0Alt"}(a||(a={}));var D="http://127.0.0.1:3000";function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A,S={posts:[],name:"",title:"",errorMessage:void 0};!function(e){e[e.initialize=0]="initialize",e[e.updatePosts=1]="updatePosts",e[e.updateName=2]="updateName",e[e.updateTitle=3]="updateTitle",e[e.updateErrorMessage=4]="updateErrorMessage",e[e.updateSheetData=5]="updateSheetData"}(A||(A={}));var _=(e,t)=>{var{type:n,payload:a}=t;switch(n){case A.updatePosts:return P(P({},e),{},{posts:a});case A.updateName:return P(P({},e),{},{name:a});case A.updateTitle:return P(P({},e),{},{title:a});case A.updateErrorMessage:return P(P({},e),{},{errorMessage:a});case A.updateSheetData:return P(P({},e),{},{sheetData:a});case A.initialize:return P({},S);default:return e}},C=(e,t)=>e({type:A.updatePosts,payload:t}),j=(e,t)=>e({type:A.updateName,payload:t}),z=(e,t)=>e({type:A.updateTitle,payload:t}),G=(e,t)=>e({type:A.updateErrorMessage,payload:t}),I=e=>"string"==typeof e?e:e.message?e.message:"".concat(e),U=(e,t)=>{var n={};return t&&t.jwtToken&&(n.headers={Authorization:"Bearer ".concat(t.jwtToken)}),e.createFetchProxy(void 0,n)};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=e=>{var t,{dataState:n,dataDispatch:l}=e,{extensionSDK:s,coreSDK:u}=(0,r.useContext)(T.n),[d,h]=(0,r.useState)(!1),p=(0,o.k6)(),m=(0,o.TH)(),{name:y}=n;(0,r.useEffect)((()=>{!function(){var e=(0,f.Z)((function*(){G(l,"Google, Github or Auth0 client id has not been defined. Please see README.md for instructions.")}));return function(){return e.apply(this,arguments)}}()()}),[]);var O=function(){var e=(0,f.Z)((function*(e){try{e.client_secret=s.createSecretKeyTag("custom_secret_key");var t=yield s.serverProxy("".concat(D,"/auth"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});if(t.ok&&t.body&&t.body.jwt_token)return t.body.jwt_token}catch(e){console.error(e)}}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,f.Z)((function*(){try{U(s,m.state).fetchProxy("".concat(D,"/authout"))}catch(e){console.error(e)}j(l,"")}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,f.Z)((function*(){var{jwtToken:e}=m.state||{};G(l,void 0),e?(l({type:A.initialize}),yield P(),p.replace(m.pathname,{})):h(!0)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,f.Z)((function*(){try{var e=yield s.oauth2Authenticate("https://accounts.google.com/o/oauth2/v2/auth",{client_id:"",scope:"https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/userinfo.profile",response_type:"token"}),{access_token:t,expires_in:n}=e,{id:r,name:o}=yield C(t),i=yield L(a.Google,r,o,t,n);R(a.Google,i,t,t)}catch(e){I(e).startsWith("Extension not entitled to access external oauth2 API url")?G(l,"Please add 'https://accounts.google.com/o/oauth2/v2/auth' to the extensions oauth2_urls entitlements"):(G(l,"Login failed"),console.error("failed to login",e))}}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,f.Z)((function*(e){var t="Unknown",n="Unknown";try{var a,r,o=yield s.fetchProxy("https://www.googleapis.com/oauth2/v2/userinfo",{headers:{Authorization:"Bearer ".concat(e)}});o.ok&&(t=(null===(a=o.body)||void 0===a?void 0:a.name)||"Unknown",n=(null===(r=o.body)||void 0===r?void 0:r.id)||"Unknown")}catch(e){var i=I(e);G(l,i),console.error(e)}return j(l,t),{id:n,name:t}}));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=(0,f.Z)((function*(){try{var e={client_id:"",code:(yield s.oauth2Authenticate("https://github.com/login/oauth/authorize",{client_id:"",response_type:"code"},"GET")).code,client_secret:s.createSecretKeyTag("github_secret_key")},t=yield s.oauth2ExchangeCodeForToken("https://github.com/login/oauth/access_token",e),{access_token:n,error_description:r}=t;if(n){var{id:o,name:i}=yield Z(n);if(o){var c=yield L(a.Github,o,i,n);R(a.Github,c,n)}else G(l,"Failed to retrieve information about user")}else G(l,r||"Authentication failed")}catch(e){I(e).startsWith("Extension not entitled to access external oauth2 API url")?G(l,"Please add 'https://github.com/login/oauth/authorize' and 'https://github.com/login/oauth/access_token' to the extensions oauth2_urls entitlements"):(G(l,"Login failed"),console.error("failed to login",e))}}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,f.Z)((function*(e){var t,n;try{var a,r,o=yield s.fetchProxy("https://api.github.com/user",{headers:{Authorization:"Bearer ".concat(e)}});o.ok&&(t=(null===(a=o.body)||void 0===a?void 0:a.name)||"Unknown",n=(null===(r=o.body)||void 0===r?void 0:r.id)||"Unknown")}catch(e){var i=I(e);G(l,i),console.error(e)}return j(l,t),{id:n,name:t}}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=(0,f.Z)((function*(e){try{var t={client_id:"",response_type:"code",scope:"openid profile email https://www.googleapis.com/auth/spreadsheets.readonly"};e&&(t.code_challenge_method="S256");var n={grant_type:"authorization_code",client_id:"",code:(yield s.oauth2Authenticate("".concat("","/authorize"),t,"GET")).code};e||(n.client_secret=s.createSecretKeyTag("auth0_secret_key"));var r=yield s.oauth2ExchangeCodeForToken("".concat("","/login/oauth/token"),n),{access_token:o,expires_in:i}=r,{id:c,name:u}=yield N(o),d=yield L(a.Auth0,c,u,o,i);R(a.Auth0,d,o)}catch(e){I(e).startsWith("Extension not entitled to access external oauth2 API url")?G(l,"Please add '".concat("","/authorize' and '").concat("","/login/oauth/token' to the extensions oauth2_urls entitlements")):(G(l,"Login failed"),console.error("failed to login",e))}}));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=(0,f.Z)((function*(e){var t="Unknown",n="Unknown";try{var a,r,o=yield s.fetchProxy("".concat("","/userinfo"),{headers:{Authorization:"Bearer ".concat(e)}});o.ok&&(t=(null===(a=o.body)||void 0===a?void 0:a.name)||"Unknown",n=(null===(r=o.body)||void 0===r?void 0:r.sub)||"Unknown")}catch(e){var i=I(e);G(l,i),console.error(e)}return j(l,t),{id:n,name:t}}));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,f.Z)((function*(){var{id:e,name:t}=yield K();try{var n=yield L(a.Custom,e,t);R(a.Custom,n)}catch(e){G(l,"Login failed"),console.error("failed to login",e)}}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,f.Z)((function*(){var e="Unknown",t="Unknown";try{var n=yield u.ok(u.me());e=n.display_name||"Unknown",t=n.id||"Unknown"}catch(e){var a=I(e);G(l,a),console.error(e)}return j(l,e),{id:t,name:e}}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,f.Z)((function*(e,t,n,a,r){var o=yield O({type:e,access_token:a,expires_in:r,name:n,id:t});return o||G(l,"Login failed"),o}));return function(t,n,a,r,o){return e.apply(this,arguments)}}(),R=(e,t,n,a)=>{t?p.replace(m.pathname,F(F({},m.state),{},{authOption:e,accessToken:n,jwtToken:t,googleAccessToken:a})):p.replace(m.pathname,{})},W=e=>{switch(h(!1),e){case a.Google:_();break;case a.Github:z();break;case a.Auth0:H(!1);break;case a.Auth0Alt:H(!0);break;default:M()}},B="",{jwtToken:Y,authOption:q}=m.state||{};if(Y)switch(q){case a.Google:B="".concat(y,", you are authorized using Google");break;case a.Github:B="".concat(y,", you are authorized using Github");break;case a.Auth0:B="".concat(y,", you are authorized using Auth0");break;default:B="".concat(y,", you are authorized")}else B="You are not authorized!";return(0,v.intersects)(">=7.17.0",(null===(t=s.lookerHostData)||void 0===t?void 0:t.lookerVersion)||"7.0.0",!0),r.createElement(c.x,{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems:"center"},r.createElement(g.x,null,B),r.createElement(b.z,{onClick:S},Y?"Sign out":"Sign in"),r.createElement(E.V,{isOpen:d,onClose:()=>{h(!1)},width:"50vw"},r.createElement(k.c,null,r.createElement(i.X,null,"Choose an authentication method"),r.createElement(w.s,{mt:"xlarge",mb:"large"},r.createElement(x.I,{width:"100%",onClick:W.bind(null,a.Google),disabled:!0},"Sign with Google (OAUTH implicit flow)"),r.createElement(x.I,{width:"100%",onClick:W.bind(null,a.Github),disabled:!0},"Sign with Github (OAUTH code flow with secret key)"),r.createElement(x.I,{width:"100%",onClick:W.bind(null,a.Auth0),disabled:!0},"Sign with Auth0 (OAUTH code flow with secret key)"),r.createElement(x.I,{width:"100%",onClick:W.bind(null,a.Auth0Alt),disabled:!0},"Sign with Auth0 (OAUTH PKCE flow with code challenge)"),r.createElement(x.I,{width:"100%",onClick:W.bind(null,a.Custom)},"Sign in (with custom secret key)")))))},N=n(98226),M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Unexpected error. Has the data server been started? yarn start start-data-server",a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{ok:r,status:o}=e;return r?(a||G(t,void 0),!0):(G(t,401===o?"Token expired!":n),!1)},K=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.error(e);var a=I(e);a.startsWith("Extension not entitled to access external ")?G(t,a):a.startsWith("Required Looker version ")?G(t,"This version of Looker does not support external API functions"):a.startsWith("Entitlements must be defined")?G(t,"Entitlements must be defined to use external API functionality"):G(t,n?"Has the data server been started? yarn start start-data-server":"An unexpected error occured: ".concat(a))},L=e=>{var{dataDispatch:t,dataState:n}=e,a=(0,r.useContext)(T.n),{extensionSDK:i}=a,l=(0,o.TH)(),{posts:s,name:u,title:d}=n;(0,r.useEffect)((()=>{m(!0)}),[]);var h=function(){var e=(0,f.Z)((function*(e){e.preventDefault();try{var n=U(i,l.state),a=yield n.fetchProxy("".concat(D,"/posts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:d,author:u})});M(a,t,"Failed to create post")&&(z(t,""),m())}catch(e){K(e,t)}}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,f.Z)((function*(e){try{var n=U(i,l.state),a=yield n.fetchProxy("".concat(D,"/posts/").concat(e.id),{method:"DELETE"});M(a,t,"Failed to delete post")&&(z(t,""),m())}catch(e){K(e,t)}}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,f.Z)((function*(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var n=U(i,l.state),a=yield n.fetchProxy("".concat(D,"/posts"));M(a,t,void 0,e)&&C(t,a.body.reverse())}catch(t){K(t,dispatchEvent,e)}}));return function(){return e.apply(this,arguments)}}(),y=s.map((e=>{var t=r.createElement(r.Fragment,null,r.createElement(N.DataTableAction,{onClick:p.bind(null,e)},"Delete")),{id:n,title:a,author:o}=e;return r.createElement(N.DataTableItem,{key:n,id:n,actions:t},r.createElement(N.DataTableCell,null,n),r.createElement(N.DataTableCell,null,a),r.createElement(N.DataTableCell,null,o))}));return r.createElement(r.Fragment,null,r.createElement(c.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",mb:"medium",alignItems:"baseline"},r.createElement(g.x,null,"Posts data is being served from ",D),r.createElement(c.x,{display:"flex",flexDirection:"row",alignItems:"baseline"},r.createElement(b.z,{ml:"small",onClick:()=>m()},"Refresh data"))),r.createElement(c.x,{mb:"medium",px:"xlarge",pt:"small",border:"1px solid",borderColor:"palette.charcoal200",borderRadius:"4px"},r.createElement(N.Form,{onSubmit:h},r.createElement(N.FieldText,{label:"Title",name:"title",value:d,onChange:e=>{z(t,e.currentTarget.value)},required:!0}),r.createElement(b.z,{disabled:0===d.length},"Create Post"))),r.createElement(N.DataTable,{columns:[{id:"id",title:"ID",type:"number",size:10},{id:"title",title:"Title",type:"string",size:60},{id:"author",title:"Author",type:"string",size:30}],caption:"Posts"},y))},R=e=>{var{dataDispatch:t,dataState:n}=e,a=(0,r.useContext)(T.n),{extensionSDK:i}=a;(0,o.TH)(),(0,r.useEffect)((()=>{!function(){var e=(0,f.Z)((function*(){G(t,"Google client id has not been defined. Please see README.md for instructions.")}));return function(){return e.apply(this,arguments)}}()()}),[]);var{sheetData:l}=n,c=(l||[]).map((e=>{var[t,n,a,o,i]=e;return r.createElement(N.DataTableItem,{key:t,id:t},r.createElement(N.DataTableCell,null,t),r.createElement(N.DataTableCell,null,n),r.createElement(N.DataTableCell,null,a),r.createElement(N.DataTableCell,null,o),r.createElement(N.DataTableCell,null,i))}));return r.createElement(r.Fragment,null,l&&r.createElement(N.DataTable,{columns:[{id:"name",title:"Name",type:"string",size:"medium"},{id:"sex",title:"Sex",type:"string",size:"medium"},{id:"collegeYear",title:"Year",type:"string",size:"medium"},{id:"state",title:"State",type:"string",size:"medium"},{id:"major",title:"Major",type:"string",size:"medium"}],caption:"Sheet items"},c))};const W=()=>{var[e,t]=(0,r.useReducer)(_,S),n=(0,o.k6)(),a=(0,o.TH)(),y=(0,o.$B)("/:func/:tab");(0,r.useEffect)((()=>{var e,t=parseInt((null==y||null===(e=y.params)||void 0===e?void 0:e.tab)||"-1");(t<0||t>1)&&n.push("".concat(a.pathname,"/0"),a.state)}),[]);var f=y?Number(y.params.tab):0;f=isNaN(f)?-1:f;var{errorMessage:v}=e,{jwtToken:g}=a.state||{};return r.createElement(r.Fragment,null,r.createElement(i.X,{mt:"xlarge"},"External API Functions"),r.createElement(m.p,null),v&&r.createElement(l.c,{intent:"critical",onPrimaryClick:()=>{G(t,void 0)}},v),r.createElement(c.x,{padding:"small"},r.createElement(s.i,null),r.createElement(H,{dataDispatch:t,dataState:e}),r.createElement(s.i,null),g&&r.createElement(r.Fragment,null,r.createElement(u.t,{selectedIndex:f,onSelectTab:e=>{var t,r;parseInt((null==y||null===(t=y.params)||void 0===t?void 0:t.tab)||"-1")!==e&&n.push("/".concat(null==y||null===(r=y.params)||void 0===r?void 0:r.func,"/").concat(e),a.state)}},r.createElement(d.O,null,"Data Server Demo"),r.createElement(d.O,null,"Google Sheets Demo")),r.createElement(h.n,{selectedIndex:f},r.createElement(p.x,null,r.createElement(L,{dataDispatch:t,dataState:e})),r.createElement(p.x,null,r.createElement(R,{dataDispatch:t,dataState:e}))))))}},83562:(e,t,n)=>{n.d(t,{p:()=>o});var a=n(32735),r=n(25116),o=()=>{var[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>{try{var e;null===(e=window.parent.looker)||void 0===e||e.version,t("NOT")}catch(e){t("")}}),[]),a.createElement(r.n,{my:"medium"},"This extension is ",a.createElement("b",null,e)," sandboxed.")}}}]);
//# sourceMappingURL=external_api_functions.bundle.js.map