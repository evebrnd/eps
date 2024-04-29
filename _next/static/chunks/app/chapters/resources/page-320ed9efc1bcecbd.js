(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{8258:function(e,t,r){Promise.resolve().then(r.bind(r,5902))},3064:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=r(1448)},function(e,t){e.exports=r(2265)},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=0,l=n.forwardRef(function(e,t){var r=e.title,o=void 0===r?null:r,l=e.description,c=void 0===l?null:l,d=e.size,u=void 0===d?null:d,p=e.color,h=void 0===p?"currentColor":p,A=e.horizontal,m=void 0===A?null:A,f=e.vertical,x=void 0===f?null:f,y=e.rotate,g=void 0===y?null:y,v=e.spin,b=void 0===v?null:v,w=e.style,j=void 0===w?{}:w,N=e.children,O=a(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);i++;var k,E=null!==b&&b,z=n.Children.map(N,function(e){!0!==E&&(E=!0===(null===b?e.props.spin:b));var t=e.props.size;"number"==typeof u&&"number"==typeof e.props.size&&(t=e.props.size/u);var r={size:t,color:null===h?e.props.color:h,horizontal:null===m?e.props.horizontal:m,vertical:null===x?e.props.vertical:x,rotate:null===g?e.props.rotate:g,spin:null===b?e.props.spin:b,inStack:!0};return n.cloneElement(e,r)});null!==u&&(j.width="string"==typeof u?u:1.5*u+"rem");var B,P="stack_labelledby_"+i,C="stack_describedby_"+i;if(o)k=c?P+" "+C:P;else if(B="presentation",c)throw Error("title attribute required when description is set");return n.createElement("svg",s({ref:t,viewBox:"0 0 24 24",style:j,role:B,"aria-labelledby":k},O),o&&n.createElement("title",{id:P},o),c&&n.createElement("desc",{id:C},c),E&&n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),z)});l.displayName="Stack",l.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},l.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null},r.d(t,"Icon",function(){return p}),r.d(t,"Stack",function(){return l});var c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},u=0,p=n.forwardRef(function(e,t){var r=e.path,o=e.id,s=void 0===o?++u:o,a=e.title,i=void 0===a?null:a,l=e.description,p=void 0===l?null:l,h=e.size,A=void 0===h?null:h,m=e.color,f=void 0===m?"currentColor":m,x=e.horizontal,y=void 0!==x&&x,g=e.vertical,v=void 0!==g&&g,b=e.rotate,w=void 0===b?0:b,j=e.spin,N=void 0!==j&&j,O=e.style,k=void 0===O?{}:O,E=e.inStack,z=void 0!==E&&E,B=d(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),P={},C=[];null!==A&&(z?C.push("scale("+A+")"):(k.width="string"==typeof A?A:1.5*A+"rem",k.height=k.width)),y&&C.push("scaleX(-1)"),v&&C.push("scaleY(-1)"),0!==w&&C.push("rotate("+w+"deg)"),null!==f&&(P.fill=f);var I=n.createElement("path",c({d:r,style:P},z?B:{})),S=I;C.length>0&&(k.transform=C.join(" "),k.transformOrigin="center",z&&(S=n.createElement("g",{style:k},I,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var T,R=S,_=!0===N||"number"!=typeof N?2:N,D=!z&&(y||v);if(_<0&&(D=!D),N&&(R=n.createElement("g",{style:{animation:"spin"+(D?"-inverse":"")+" linear "+Math.abs(_)+"s infinite",transformOrigin:"center"}},S,!(y||v||0!==w)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),z)return R;var Q,L="icon_labelledby_"+s,M="icon_describedby_"+s;if(i)T=p?L+" "+M:L;else if(Q="presentation",p)throw Error("title attribute required when description is set");return n.createElement("svg",c({ref:t,viewBox:"0 0 24 24",style:k,role:Q,"aria-labelledby":T},B),i&&n.createElement("title",{id:L},i),p&&n.createElement("desc",{id:M},p),!z&&N&&(D?n.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),R)});p.displayName="Icon",p.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},p.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=p}])},518:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(3480).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},7592:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(3480).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},3550:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(3480).Z)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},9949:function(e,t,r){"use strict";var n=r(8877);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,s,a){if(a!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return r.PropTypes=r,r}},1448:function(e,t,r){e.exports=r(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5902:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7437),o=r(3064),s=r.n(o),a=r(9256),i=r(7138),l=r(6648),c=r(1672),d=r(2736),u=JSON.parse('[{"question":"Privacy Not Included is a fondation from which company?","answerOptions":[{"answer":"Google"},{"answer":"Apple"},{"answer":"Mozilla","isCorrect":true},{"answer":"Chrome"}]},{"question":"Which type of settings is not concerned by this article?","answerOptions":[{"answer":"Data collection"},{"answer":"Activity of devices"},{"answer":"Activity of smart devices","isCorrect":true},{"answer":"Data sharing"}]},{"question":"Which is not a way to collect data from users?","answerOptions":[{"answer":"Location tracking via wi-fi or bluetooth"},{"answer":"Apps access request to microphone","isCorrect":true},{"answer":"Apps analytics"},{"answer":"Voice recognition"}]}]'),p=r(5094),h={src:"/eps/_next/static/media/privacyNotIncluded.c72b8386.png",height:288,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEXl291bXM/Hu7WTlOzh3vLl1sfSx7zh3Ory4cru4NXt6Oyxqdzk0L3q07PW1e67qpZQUbqspNldXeagoPPIpPEnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nBXGxxEAIAwDMBMSTOhl/1059BIcVMIzejNTImNKSuVHqOPGWOEoe4UTHhdBASCp+63xAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},A={src:"/eps/_next/static/media/electronicFrontierFoundation.ce3743b6.jpg",height:600,width:1200,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABnA6P/8QAFRABAQAAAAAAAAAAAAAAAAAAFAL/2gAIAQEAAQUCRRv/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAIAQMBAT8BdN//xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8BWn//xAAYEAACAwAAAAAAAAAAAAAAAAAAAgESkf/aAAgBAQAGPwKVquH/xAAXEAADAQAAAAAAAAAAAAAAAAAAETFB/9oACAEBAAE/IUUG0f/aAAwDAQACAAMAAAAQD//EABYRAAMAAAAAAAAAAAAAAAAAAAABUf/aAAgBAwEBPxCln//EABYRAAMAAAAAAAAAAAAAAAAAAAAxcf/aAAgBAgEBPxB6P//EABkQAAIDAQAAAAAAAAAAAAAAAAERACFBUf/aAAgBAQABPxBKBBbJXXP/2Q==",blurWidth:8,blurHeight:4},m=r(6081),f={src:"/eps/_next/static/media/infographDeviceSettings.eeea2ea4.webp",height:607,width:735,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAcAAkA4JZwCdAEO/dXAAP72NHzFPueYzc2sJ+hB2RhC4OCvvW8sP2GiZTkuO0dGAAAA",blurWidth:8,blurHeight:7},x=r(1633);function y(){return(0,n.jsxs)("div",{className:"flex flex-col justify-center py-2 mx-4 md:mx-12",children:[(0,n.jsx)(s(),{path:a.hnm,size:"4em",className:"mx-auto mt-7"}),(0,n.jsx)("h1",{className:"flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl",children:"Making Your Smart Home More Privacy-Secure"}),(0,n.jsxs)("div",{className:"flex flex-col text-justify mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10",children:[(0,n.jsx)("p",{className:"text-pretty mx-auto py-6",children:"Hi everyone! I'm Bob, and like many of you, I love the convenience of smart home devices. But after learning more about privacy and transparency concerns, I decided to take back control and make my smart home more secure. Here's what I found:"}),(0,n.jsxs)("h3",{className:"text-pretty mt-6 mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary",children:["First, a few ",(0,n.jsx)("span",{className:"text-primary",children:"HELPFUL"})," links"]}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-row gap-4 mx-auto",children:[(0,n.jsx)(c.Z,{title:"Privacy Not Included",caption:"Reviews of most IT devices (smart home, cars, toys, etc) and how they respect the users' privacy.",href:"https://foundation.mozilla.org/en/privacynotincluded/",image:h}),(0,n.jsx)(c.Z,{title:"Electronic Frontier Foundation",caption:"To go further on privacy and how you could improve your smart home resilience.",href:"https://www.eff.org/fr/deeplinks/2022/06/keeping-your-smart-home-secure-private",image:A})]}),(0,n.jsx)("div",{className:"flex flex-col md:flex-row gap-4 mx-auto mt-3",children:(0,n.jsx)(c.Z,{title:"Privacy & Security Brainiacs",caption:"A sum-up leaflet of the most important privacy and security tips for your smart home.",href:"https://designrr.s3.amazonaws.com/noahherold_at_gmx.com_146874/cybersecurity-for-grandparents-volume-4-copy_617ed985.pdf",image:m.Z})}),(0,n.jsxs)("h3",{className:"text-pretty mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 mt-10 border-t-2 border-primary/20",children:["Now let's take a look at your ",(0,n.jsx)("span",{className:"text-primary",children:"settings"})]}),(0,n.jsxs)("p",{className:"text-pretty py-6",children:["Most platforms allow you to adjust settings regarding data collection and its usage. But more often than not, it is hidden in the tranches of the app in question... ",(0,n.jsx)("br",{})," This section aims to give a list of a few easy settings to opt out of in order to limit the data being accessed!"]}),(0,n.jsxs)("ol",{className:"relative border-s border-gray-900",children:[(0,n.jsxs)("li",{className:"mb-10 ms-4",children:[(0,n.jsx)("div",{className:"absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:"Data Collection"}),(0,n.jsx)("p",{className:"mb-4 text-base font-normal",children:"See if you can turn off features that collect unnecessary data, like location tracking or microphone access."}),(0,n.jsxs)("ul",{className:"list-inside list-['-_'] ml-6",children:[(0,n.jsx)("li",{children:'  Turn off "Allow Apps to Request to Track" in Tracking settings'}),(0,n.jsx)("li",{children:"  Consider sharing only approximate location data rather than precise data with apps"}),(0,n.jsx)("li",{children:"  Opt-out of microphone, camera, location and file access when possible"}),(0,n.jsx)("li",{children:"  Opt-out of voice recognition settings"})]})]}),(0,n.jsxs)("li",{className:"mb-10 ms-4",children:[(0,n.jsx)("div",{className:"absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800 "}),(0,n.jsx)("h3",{className:"text-lg font-semibold ",children:"Data Sharing"}),(0,n.jsx)("p",{className:"mb-4 text-base font-normal ",children:"Check if you can control who your device shares data with. Can you opt-out of third-party data sharing?"}),(0,n.jsxs)("ul",{className:"list-inside list-['-_'] ml-6",children:[(0,n.jsx)("li",{children:'  Disable "Personalized Ads" in Advertising settings'}),(0,n.jsx)("li",{children:'  Toggle off "Share Analytics" in Analytics & Improvements'}),(0,n.jsx)("li",{children:'  Restrict visibility of shared content to "Only Me" or "Friends" in privacy settings'}),(0,n.jsx)("li",{children:"  Limit the visibility of personal information like birthday and contact details. You could even delete / not share information non mandatory or give approximations for sensitive data e.g birthday, home address etc "})]})]}),(0,n.jsxs)("li",{className:"ms-4",children:[(0,n.jsx)("div",{className:"absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800"}),(0,n.jsx)("h3",{className:"text-lg font-semibold",children:"Device Activity"}),(0,n.jsx)("p",{className:"mb-4 text-base font-normal",children:" See if you can review and delete past voice commands or activity logs"}),(0,n.jsxs)("ul",{className:"list-inside list-['-_'] ml-6",children:[(0,n.jsx)("li",{children:"  Specific to Echo speakers and Ring cameras: turn off Amazon Sidewalk feature to prevent data sharing with other devices"}),(0,n.jsx)("li",{children:"  Set auto-delete for Web & App Activity and Location History to delete data older than three months"}),(0,n.jsx)("li",{children:"  In general, you should regularly visit your history to delete any voice or video recordings, research history and else. This could improve your overall privacy"})]})]})]}),(0,n.jsx)(i.default,{href:"https://www.nytimes.com/2022/07/27/technology/personaltech/default-settings-turn-off.html",className:"mt-4 italic text-gray-500",children:"https://www.nytimes.com/2022/07/27/technology/personaltech/default-settings-turn-off.html"}),(0,n.jsxs)("h3",{className:"text-pretty mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 mt-10 border-t-2 border-primary/20",children:["Finally read carefully the ",(0,n.jsx)("span",{className:"text-primary",children:"infograph"})," on smartphone data collection"]}),(0,n.jsx)("p",{className:"text-pretty py-6",children:"At this point you might be wondering, but Bob why are now talking about smartphones? Well the answer is simple, every smart phone device is connected to a hub in some way. In a vast majority of cases, this hub is your own personal smartphone. That is why it is important to also review the privacy settings and setup of this device!"}),(0,n.jsxs)("figure",{className:"max-w-lg mx-auto my-6",children:[(0,n.jsx)(l.default,{className:"h-auto max-w-full rounded-lg",src:f,alt:"Smartphone & privacy"}),(0,n.jsx)("figcaption",{className:"mt-2 text-sm text-center text-gray-500",children:"https://vpnoverview.com/privacy/devices/privacy-risks-smartphone/"})]}),(0,n.jsxs)("h3",{className:"text-pretty mt-6 mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 border-t-2 border-primary/20",children:[(0,n.jsx)("span",{className:"text-primary",children:"Test your knowledge"})," on this chapter!"]}),(0,n.jsx)(d.Z,{questions:u})]}),(0,n.jsx)("blockquote",{className:"mx-auto my-8 text-center text-xl italic font-semibold",children:(0,n.jsxs)("p",{children:["Don't see the resource you're looking for? ",(0,n.jsx)("br",{})," ",(0,n.jsx)(i.default,{href:"mailto:evber2263@oslomet.no",className:"hover:underline hover:decoration-wavy hover:decoration-primary text-primary",children:"Let us know"})," what information you wish to see"]})}),(0,n.jsx)(p.Z,{previousUrl:x.m[4].href,nextUrl:"/about"})]})}},1672:function(e,t,r){"use strict";var n=r(7437),o=r(7138),s=r(6648);t.Z=function(e){let{title:t,caption:r,href:a,image:i}=e;return(0,n.jsxs)("div",{className:"max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg",children:[(0,n.jsx)(o.default,{href:a,children:i&&(0,n.jsx)(s.default,{className:"rounded-t-lg",src:i,alt:""})}),(0,n.jsxs)("div",{className:"p-5",children:[(0,n.jsx)(o.default,{href:a,children:(0,n.jsx)("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline hover:decoration-wavy hover:decoration-primary",children:t})}),(0,n.jsx)("p",{className:"mb-3 font-normal text-gray-700",children:r}),(0,n.jsxs)(o.default,{href:a,className:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-destructive rounded-lg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300",children:["Read more",(0,n.jsx)("svg",{className:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:(0,n.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})})]})]})]})}},5094:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7437),o=r(2265),s=r(518),a=r(7592),i=(r(3550),r(7138)),l=r(9354),c=r(9733);let d=e=>{let{className:t,...r}=e;return(0,n.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,l.cn)("mx-auto flex w-full justify-center",t),...r})};d.displayName="Pagination";let u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("ul",{ref:t,className:(0,l.cn)("flex flex-row items-center gap-1",r),...o})});u.displayName="PaginationContent";let p=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("li",{ref:t,className:(0,l.cn)("",r),...o})});p.displayName="PaginationItem";let h=e=>{let{className:t,isActive:r,size:o="icon",...s}=e;return(0,n.jsx)(i.default,{href:s.href||"","aria-current":r?"page":void 0,className:(0,l.cn)((0,c.d)({variant:r?"outline":"ghost",size:o}),t),...s})};h.displayName="PaginationLink";let A=e=>{let{className:t,...r}=e;return(0,n.jsxs)(h,{"aria-label":"Go to previous page",size:"default",className:(0,l.cn)("gap-1 pl-2.5",t),...r,children:[(0,n.jsx)(s.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:"Previous"})]})};A.displayName="PaginationPrevious";let m=e=>{let{className:t,...r}=e;return(0,n.jsxs)(h,{"aria-label":"Go to next page",size:"default",className:(0,l.cn)("gap-1 pr-2.5",t),...r,children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(a.Z,{className:"h-4 w-4"})]})};function f(e){let{previousUrl:t,nextUrl:r}=e;return(0,n.jsx)(d,{className:"mt-5 text-white",children:(0,n.jsxs)(u,{children:[(0,n.jsx)(p,{className:"bg-primary rounded-full",children:(0,n.jsx)(A,{href:t})}),(0,n.jsx)(p,{className:"bg-primary rounded-full",children:(0,n.jsx)(m,{href:r})})]})})}m.displayName="PaginationNext"},2736:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(7437),o=r(2265),s=r(295),a=r(4697),i=r(9354);let l=s.fC;s.xz;let c=s.h_,d=s.x8,u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(s.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...o})});u.displayName=s.aV.displayName;let p=o.forwardRef((e,t)=>{let{className:r,children:o,...l}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{}),(0,n.jsxs)(s.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...l,children:[o,(0,n.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(a.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=s.VY.displayName;let h=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};h.displayName="DialogHeader";let A=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};A.displayName="DialogFooter";let m=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(s.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",r),...o})});m.displayName=s.Dx.displayName;let f=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(s.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...o})});f.displayName=s.dk.displayName;var x=r(9733);function y(e){let{questions:t}=e,[r,s]=(0,o.useState)([]),[a,i]=(0,o.useState)(!1),c=(e,t)=>{s(r=>{let n=[...r];return n[e]=t,n})},u=e=>{let r=t[e].answerOptions.findIndex(e=>e.isCorrect);return t[e].answerOptions[r].answer};return(0,n.jsxs)("div",{className:"mx-auto flex flex-col",children:[t.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"font-bold pt-6 pb-2",children:e.question}),e.answerOptions.map((e,o)=>(0,n.jsxs)("div",{className:"w-3/4 mx-auto flex py-4 pl-5 m-2 space-x-2 cursor-pointer rounded-xl ".concat(r[t]===o?"border-2 border-primary bg-white/5":"border-2"),onClick:()=>c(t,o),children:[(0,n.jsx)("input",{type:"radio",className:"w-6 h-6 bg-black",checked:r[t]===o,onChange:()=>{}}),(0,n.jsx)("p",{className:"ml-6 text-left",children:e.answer})]},o))]},t)),(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 items-center mx-auto text-white font-bold my-5 py-2 px-4 rounded",onClick:()=>{i(!0)},children:"Show Results"}),(0,n.jsx)(l,{open:a,children:(0,n.jsxs)(p,{children:[(0,n.jsx)(h,{children:(0,n.jsx)(m,{children:"Quiz Results"})}),(0,n.jsxs)(f,{children:[(0,n.jsxs)("p",{className:"text-center text-2xl ml-4",children:["Your score is ",(0,n.jsxs)("span",{className:"text-primary",children:[(()=>{let e=0;for(let n=0;n<t.length;n++)r[n]===t[n].answerOptions.findIndex(e=>e.isCorrect)&&e++;return e})()," out of ",t.length]})]}),(0,n.jsx)("p",{className:"mt-4 font-bold",children:"Correct Answers:"}),t.map((e,t)=>(0,n.jsxs)("p",{children:[t+1," - ",u(t)]},t))]}),(0,n.jsx)(A,{children:(0,n.jsx)(d,{asChild:!0,children:(0,n.jsx)(x.z,{onClick:()=>i(!1),children:"Close"})})})]})})]})}},9733:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return c}});var n=r(7437),o=r(2265),s=r(1538),a=r(2218),i=r(9354);let l=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",rounded:"rounded-full h-12 px-6",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,t)=>{let{className:r,variant:o,size:a,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:o,size:a,className:r})),ref:t,...d})});c.displayName="Button"},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(4839),o=r(6164);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},1633:function(e,t,r){"use strict";r.d(t,{J:function(){return n},m:function(){return o}});let n=[{title:"Our team",href:"/about/us",description:"Our project and the team behind it."},{title:"RELINK",href:"/about/relink",description:"The RELINK project."},{title:"EPS",href:"/about/eps",description:"What is the European Project Semester?"}],o=[{title:"0. Kick-off",href:"/chapters/kickoff",description:"What this lesson is about."},{title:"1. Introduction",href:"/chapters/one",description:"What is a smart home device?"},{title:"2. Opinions and studies",href:"/chapters/two",description:"Thoughts of the general public on smart home devices."},{title:"3. Transparency",href:"/chapters/three",description:"What it means and why it is important."},{title:"4. Internal workings",href:"/chapters/four",description:"Internals working of smart home devices."},{title:"5. Artificial Intelligence",href:"/chapters/five",description:"The role of AI in smart home devices."},{title:"6. Usabilities and Dangers",href:"/chapters/six",description:"The usabilities and dangers of smart home devices."},{title:"Resources",href:"/chapters/resources",description:"To go further on resources for privacy in smart homes."}]},6081:function(e,t){"use strict";t.Z={src:"/eps/_next/static/media/relinkLogo.2821f074.png",height:361,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEUHFzcAAAAEGEAPQqgAAAAPTL4ROpIAAwYLOZMIJVwQS70AAAtro85dAAAADHRSTlMLGz4/ATEWS1gsjCwmdEdkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nB3BiREAIAgEsT0B+frv1xkTnJ5pHFZVWpDIdIl7PrhmERY8D+gAnelMggQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[603,231,27,648,42,776,971,23,744],function(){return e(e.s=8258)}),_N_E=e.O()}]);