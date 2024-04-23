(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{1217:function(e,t,r){Promise.resolve().then(r.bind(r,8047))},2748:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,(function(t){return e[t]}).bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=r(4404)},function(e,t){e.exports=r(2265)},function(e,t,r){"use strict";r.r(t);var n=r(1),i=r(0),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},a=0,l=n.forwardRef(function(e,t){var r=e.title,i=void 0===r?null:r,l=e.description,c=void 0===l?null:l,d=e.size,u=void 0===d?null:d,h=e.color,m=void 0===h?"currentColor":h,f=e.horizontal,p=void 0===f?null:f,v=e.vertical,y=void 0===v?null:v,x=e.rotate,b=void 0===x?null:x,g=e.spin,j=void 0===g?null:g,w=e.style,N=void 0===w?{}:w,O=e.children,k=s(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);a++;var _,E=null!==j&&j,S=n.Children.map(O,function(e){!0!==E&&(E=!0===(null===j?e.props.spin:j));var t=e.props.size;"number"==typeof u&&"number"==typeof e.props.size&&(t=e.props.size/u);var r={size:t,color:null===m?e.props.color:m,horizontal:null===p?e.props.horizontal:p,vertical:null===y?e.props.vertical:y,rotate:null===b?e.props.rotate:b,spin:null===j?e.props.spin:j,inStack:!0};return n.cloneElement(e,r)});null!==u&&(N.width="string"==typeof u?u:1.5*u+"rem");var A,P="stack_labelledby_"+a,T="stack_describedby_"+a;if(i)_=c?P+" "+T:P;else if(A="presentation",c)throw Error("title attribute required when description is set");return n.createElement("svg",o({ref:t,viewBox:"0 0 24 24",style:N,role:A,"aria-labelledby":_},k),i&&n.createElement("title",{id:P},i),c&&n.createElement("desc",{id:T},c),E&&n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),S)});l.displayName="Stack",l.propTypes={size:i.oneOfType([i.number,i.string]),color:i.string,horizontal:i.bool,vertical:i.bool,rotate:i.number,spin:i.oneOfType([i.bool,i.number]),children:i.oneOfType([i.arrayOf(i.node),i.node]).isRequired,className:i.string,style:i.object},l.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null},r.d(t,"Icon",function(){return h}),r.d(t,"Stack",function(){return l});var c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},u=0,h=n.forwardRef(function(e,t){var r=e.path,i=e.id,o=void 0===i?++u:i,s=e.title,a=void 0===s?null:s,l=e.description,h=void 0===l?null:l,m=e.size,f=void 0===m?null:m,p=e.color,v=void 0===p?"currentColor":p,y=e.horizontal,x=void 0!==y&&y,b=e.vertical,g=void 0!==b&&b,j=e.rotate,w=void 0===j?0:j,N=e.spin,O=void 0!==N&&N,k=e.style,_=void 0===k?{}:k,E=e.inStack,S=void 0!==E&&E,A=d(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),P={},T=[];null!==f&&(S?T.push("scale("+f+")"):(_.width="string"==typeof f?f:1.5*f+"rem",_.height=_.width)),x&&T.push("scaleX(-1)"),g&&T.push("scaleY(-1)"),0!==w&&T.push("rotate("+w+"deg)"),null!==v&&(P.fill=v);var z=n.createElement("path",c({d:r,style:P},S?A:{})),R=z;T.length>0&&(_.transform=T.join(" "),_.transformOrigin="center",S&&(R=n.createElement("g",{style:_},z,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var C,I=R,Z=!0===O||"number"!=typeof O?2:O,W=!S&&(x||g);if(Z<0&&(W=!W),O&&(I=n.createElement("g",{style:{animation:"spin"+(W?"-inverse":"")+" linear "+Math.abs(Z)+"s infinite",transformOrigin:"center"}},R,!(x||g||0!==w)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),S)return I;var B,H="icon_labelledby_"+o,M="icon_describedby_"+o;if(a)C=h?H+" "+M:H;else if(B="presentation",h)throw Error("title attribute required when description is set");return n.createElement("svg",c({ref:t,viewBox:"0 0 24 24",style:_,role:B,"aria-labelledby":C},A),a&&n.createElement("title",{id:H},a),h&&n.createElement("desc",{id:M},h),!S&&O&&(W?n.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),I)});h.displayName="Icon",h.propTypes={path:i.string.isRequired,size:i.oneOfType([i.number,i.string]),color:i.string,horizontal:i.bool,vertical:i.bool,rotate:i.number,spin:i.oneOfType([i.bool,i.number]),style:i.object,inStack:i.bool,className:i.string},h.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=h}])},9108:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(843).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},7805:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(843).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},9230:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(843).Z)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},8792:function(e,t,r){"use strict";r.d(t,{default:function(){return i.a}});var n=r(5250),i=r.n(n)},8314:function(e,t,r){"use strict";var n=r(1811);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},4404:function(e,t,r){e.exports=r(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8047:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),i=r(8792),o=r(2748),s=r.n(o),a=r(1789),l=r(4683),c=r(2183),d=r(3726);function u(){return(0,n.jsxs)("div",{className:"flex flex-wrap",children:[(0,n.jsx)(l.Z,{chapters:[{title:"Introduction",id:"Introduction"},{title:"The definition of a smart home device",id:"Chapter_1.0"},{title:"An example of a smart home device",id:"Chapter_2.0"}]}),(0,n.jsxs)("div",{className:"flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6",children:[(0,n.jsx)(s(),{path:a.ANJ,size:"4em",className:"mx-auto mt-7"}),(0,n.jsx)("h1",{id:"Introduction",className:"flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl",children:"What is a smart home device?"}),(0,n.jsxs)("div",{className:"flex flex-col text-justify py-3 border-y-2 border-primary/20 mt-10",children:[(0,n.jsx)("h3",{id:"Chapter_1.0",className:"mt-8 text-3xl font-semibold tracking-tight",children:"1.0. The definition of smart home device"}),(0,n.jsxs)("p",{className:"leading-7 mt-3 md:mt-6",children:["When people hear the word smart home, they usually first connect it to some device they already know or have at their home. ",(0,n.jsx)("br",{}),"A smart home is a set up where applications or devices can be controlled from anywhere and are connected to the internet and other devices wirelessly.  ",(0,n.jsx)("br",{}),"A device can perform functions independently as well as can be used even remotely when a person who owns it, is not home. Smart homes can provide homeowners security, comfort, convenience and energy efficiency by allowing them to control smart home devices by application on their smart phone or other device. These devices collect information constantly, so they have potential risks related to privacy and security. (Chawda et al. 2020.) ",(0,n.jsx)("br",{}),"Smart home environments can have many benefits, for example:"]}),(0,n.jsxs)("ul",{className:"text-left my-4 ml-6 list-disc [&>li]:mt-2",children:[(0,n.jsx)("li",{children:"Allow users to control their home environment using simple commands"}),(0,n.jsx)("li",{children:"Can make users more aware of possible problems inside their home"}),(0,n.jsx)("li",{children:"Voice assistants, virtual agents and social robots can provide users with some level of companionship and enjoyment when controlling users’ home"}),(0,n.jsx)("li",{children:"Can be effective in improving quality of user’s life"}),(0,n.jsx)("li",{children:"Increase independent living"}),(0,n.jsx)("li",{children:"Have an excellent impact to improve mental and physical health"}),(0,n.jsx)("li",{children:"Are flexible to add to different environments"}),(0,n.jsx)("li",{children:"Can be modified based on every user’s needs"}),(0,n.jsx)("li",{children:"Can help younger people to stay connected with their elder relatives"}),(0,n.jsx)("li",{children:"Warn them about situations that may cause a threat to their relative’s health and well-being (Ellard et al. 2023.)"})]}),(0,n.jsx)("p",{className:"leading-7",children:"All these devices are intended to be used for different cases. These different use cases also need less or more sensors to let the device function properly."}),(0,n.jsx)("h3",{id:"Chapter_2.0",className:"mt-8 text-3xl font-semibold tracking-tight",children:"2.0. An example of smart home device"}),(0,n.jsx)("p",{className:"leading-7",children:"There are many devices which can be classified as smart home devices, and it may be that there are some devices that people cannot even think of being a smart home device.  "}),(0,n.jsx)("p",{className:"leading-7",children:"An example of these devices:"}),(0,n.jsxs)("ul",{className:"text-left my-4 ml-6 list-disc [&>li]:mt-2",children:[(0,n.jsx)("li",{children:"A car"}),(0,n.jsx)("li",{children:"Smart lights"}),(0,n.jsx)("li",{children:"Fridge"}),(0,n.jsx)("li",{children:"Smart speaker"}),(0,n.jsx)("li",{children:"Alarm systems"}),(0,n.jsx)("li",{children:"Doorbells"}),(0,n.jsx)("li",{children:"Smoke sensor"}),(0,n.jsx)("li",{children:"IR camera"}),(0,n.jsx)("li",{children:"Smart window"}),(0,n.jsx)("li",{children:"TV sets and stereos"})]}),(0,n.jsx)("p",{className:"leading-7",children:"There are also some smart home assistant devices, for example:"}),(0,n.jsxs)("ul",{className:"text-left my-4 ml-6 list-disc [&>li]:mt-2",children:[(0,n.jsx)("li",{children:"Amazon Alexa"}),(0,n.jsx)("li",{children:"Amazon Echo"}),(0,n.jsx)("li",{children:"Samsung Smart Things Hub"}),(0,n.jsx)("li",{children:"Google Assistant"}),(0,n.jsx)("li",{children:"LG Smart TV"}),(0,n.jsx)("li",{children:"Ecobee4"})]}),(0,n.jsxs)("p",{className:"leading-7 mt-3",children:["As an example, to illustrate the operation of a smart home device, ",(0,n.jsx)("strong",{children:"Alice"})," and ",(0,n.jsx)("strong",{children:"Bob"})," can be used, which are used for convenience and ease of understanding. To make it easier to understand these devices, we can think of a situation where ",(0,n.jsx)("strong",{children:"Alice is Google Home"})," who follow voice commands and perform tasks such as play music and control other smart devices, and ",(0,n.jsx)("strong",{children:"Bob is Ring Doorbell"})," who is responsible for monitoring the door and alert when someone comes or rings the doorbell, and they are both a part of a smart home.",(0,n.jsx)("br",{}),"When a guest is coming over to your house and presses the Ring Doorbell, Bob as a doorbell sends signal to Alice. Alice as a Google Home receives Bob’s signal and inform that a guest is in front of your door. Now, you are aware that someone is at your door, and you can check who it is and open the door. In a nutshell, Alice and Bob communicate with each other and are aware when someone is at the door and notify homeowners about guests even if they are on the other side of the house."]}),(0,n.jsx)("h3",{className:"mt-8 text-2xl font-semibold tracking-tight",children:"Sources"}),(0,n.jsx)(i.default,{href:"https://www.sciencedirect.com/science/article/pii/S2451958823000337",className:"mt-4 italic text-gray-500",rel:"noopener noreferrer",target:"_blank",children:"https://www.sciencedirect.com/science/article/pii/S2451958823000337"}),(0,n.jsx)(i.default,{href:"https://www.researchgate.net/publication/346211896_A_RESEARCH_PAPER_ON_SMART_HOME",className:"mt-4 italic text-gray-500",rel:"noopener noreferrer",target:"_blank",children:"https://www.researchgate.net/publication/346211896_A_RESEARCH_PAPER_ON_SMART_HOME"})]}),(0,n.jsx)(c.Z,{previousUrl:"/",nextUrl:d.m[1].href})]})]})}},2183:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(7437),i=r(2265),o=r(9108),s=r(7805),a=(r(9230),r(8792)),l=r(2169),c=r(575);let d=e=>{let{className:t,...r}=e;return(0,n.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,l.cn)("mx-auto flex w-full justify-center",t),...r})};d.displayName="Pagination";let u=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("ul",{ref:t,className:(0,l.cn)("flex flex-row items-center gap-1",r),...i})});u.displayName="PaginationContent";let h=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("li",{ref:t,className:(0,l.cn)("",r),...i})});h.displayName="PaginationItem";let m=e=>{let{className:t,isActive:r,size:i="icon",...o}=e;return(0,n.jsx)(a.default,{href:o.href||"","aria-current":r?"page":void 0,className:(0,l.cn)((0,c.d)({variant:r?"outline":"ghost",size:i}),t),...o})};m.displayName="PaginationLink";let f=e=>{let{className:t,...r}=e;return(0,n.jsxs)(m,{"aria-label":"Go to previous page",size:"default",className:(0,l.cn)("gap-1 pl-2.5",t),...r,children:[(0,n.jsx)(o.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let p=e=>{let{className:t,...r}=e;return(0,n.jsxs)(m,{"aria-label":"Go to next page",size:"default",className:(0,l.cn)("gap-1 pr-2.5",t),...r,children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(s.Z,{className:"h-4 w-4"})]})};function v(e){let{previousUrl:t,nextUrl:r}=e;return(0,n.jsx)(d,{className:"mt-5 text-white",children:(0,n.jsxs)(u,{children:[(0,n.jsx)(h,{className:"bg-primary rounded-full",children:(0,n.jsx)(f,{href:t})}),(0,n.jsx)(h,{className:"bg-primary rounded-full",children:(0,n.jsx)(p,{href:r})})]})})}p.displayName="PaginationNext"},4683:function(e,t,r){"use strict";var n=r(7437);r(2265);var i=r(5326);t.Z=e=>{let{chapters:t}=e,r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.map((e,i)=>(0,n.jsxs)("li",{className:"",children:[(0,n.jsx)("a",{href:"#".concat(e.id),className:"hover:text-foreground hover:underline ".concat(e.isInViewport?"md:text-foreground md:font-bold":"md:text-right-foreground"),children:e.title}),e.subChapters&&(0,n.jsx)("ul",{className:"text-xs list-decimal list-inside pl-4 pb-2",children:r(e.subChapters,t+1)})]},e.id))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex justify-center w-screen bg-primary/5 border border-b-2 border-primary-foreground md:hidden",children:(0,n.jsx)(i.UQ,{type:"single",collapsible:!0,className:"",children:(0,n.jsxs)(i.Qd,{value:"item-1",children:[(0,n.jsx)(i.o4,{className:"text-2xl font-semibold",children:"Contents of the page:"}),(0,n.jsx)(i.vF,{children:(0,n.jsx)("ol",{className:"list-decimal list-inside text-base",children:r(t)})})]})})}),(0,n.jsx)("div",{className:"hidden md:flex sticky top-0 min-h-fit md:left-0 md:min-w-38 md:max-w-44 md:h-dvh md:px-4 bg-primary/10",children:(0,n.jsxs)("div",{className:"justify-normal md:pt-6",children:[(0,n.jsx)("p",{className:"text-2xl font-semibold",children:"Contents:"}),(0,n.jsx)("ol",{className:"list-decimal list-inside text-sm pt-2",children:r(t)})]})})]})}},5326:function(e,t,r){"use strict";r.d(t,{Qd:function(){return c},UQ:function(){return l},o4:function(){return d},vF:function(){return u}});var n=r(7437),i=r(2265),o=r(146),s=r(3441),a=r(2169);let l=o.fC,c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(o.ck,{ref:t,className:(0,a.cn)("border-b",r),...i})});c.displayName="AccordionItem";let d=i.forwardRef((e,t)=>{let{className:r,children:i,...l}=e;return(0,n.jsx)(o.h4,{className:"flex",children:(0,n.jsxs)(o.xz,{ref:t,className:(0,a.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",r),...l,children:[i,(0,n.jsx)(s.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=o.xz.displayName;let u=i.forwardRef((e,t)=>{let{className:r,children:i,...s}=e;return(0,n.jsx)(o.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...s,children:(0,n.jsx)("div",{className:(0,a.cn)("pb-4 pt-0",r),children:i})})});u.displayName=o.VY.displayName},575:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return c}});var n=r(7437),i=r(2265),o=r(9143),s=r(7742),a=r(2169);let l=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",rounded:"rounded-full h-12 px-6",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,t)=>{let{className:r,variant:i,size:s,asChild:c=!1,...d}=e,u=c?o.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(l({variant:i,size:s,className:r})),ref:t,...d})});c.displayName="Button"},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(3167),i=r(1367);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}},3726:function(e,t,r){"use strict";r.d(t,{J:function(){return n},m:function(){return i}});let n=[{title:"Our team",href:"/about/us",description:"Our project and the team behind it."},{title:"RELINK",href:"/about/relink",description:"The RELINK project."},{title:"EPS",href:"/about/eps",description:"What is the European Project Semester?"}],i=[{title:"1. Introduction",href:"/chapters/one",description:"What is a smart home device?"},{title:"2. Opinions and studies",href:"/chapters/two",description:"Thoughts of the general public on smart home devices."},{title:"3. Internal Workings",href:"/chapters/three",description:"Internals working of smart home devices."},{title:"4. Transparency",href:"/chapters/four",description:"What it means and why it is important."},{title:"Resources",href:"/chapters/resources",description:"To go further on resources for privacy in smart homes."}]},7742:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(n&&(n+=" "),n+=t);return n},o=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:a}=t,l=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],i=null==a?void 0:a[e];if(null===t)return null;let o=n(t)||n(i);return s[e][o]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return i(e,l,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:n,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...c}[t]):({...a,...c})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[603,250,794,289,146,971,69,744],function(){return e(e.s=1217)}),_N_E=e.O()}]);