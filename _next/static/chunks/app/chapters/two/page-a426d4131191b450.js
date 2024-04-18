(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{8673:function(e,t,o){Promise.resolve().then(o.bind(o,5265))},2748:function(e,t,o){e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,(function(t){return e[t]}).bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t){e.exports=o(4404)},function(e,t){e.exports=o(2265)},function(e,t,o){"use strict";o.r(t);var r=o(1),n=o(0),a=function(){return(a=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o},i=0,l=r.forwardRef(function(e,t){var o=e.title,n=void 0===o?null:o,l=e.description,c=void 0===l?null:l,d=e.size,h=void 0===d?null:d,u=e.color,m=void 0===u?"currentColor":u,p=e.horizontal,f=void 0===p?null:p,y=e.vertical,v=void 0===y?null:y,b=e.rotate,g=void 0===b?null:b,w=e.spin,x=void 0===w?null:w,j=e.style,k=void 0===j?{}:j,T=e.children,N=s(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);i++;var O,P=null!==x&&x,I=r.Children.map(T,function(e){!0!==P&&(P=!0===(null===x?e.props.spin:x));var t=e.props.size;"number"==typeof h&&"number"==typeof e.props.size&&(t=e.props.size/h);var o={size:t,color:null===m?e.props.color:m,horizontal:null===f?e.props.horizontal:f,vertical:null===v?e.props.vertical:v,rotate:null===g?e.props.rotate:g,spin:null===x?e.props.spin:x,inStack:!0};return r.cloneElement(e,o)});null!==h&&(k.width="string"==typeof h?h:1.5*h+"rem");var S,E="stack_labelledby_"+i,A="stack_describedby_"+i;if(n)O=c?E+" "+A:E;else if(S="presentation",c)throw Error("title attribute required when description is set");return r.createElement("svg",a({ref:t,viewBox:"0 0 24 24",style:k,role:S,"aria-labelledby":O},N),n&&r.createElement("title",{id:E},n),c&&r.createElement("desc",{id:A},c),P&&r.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),I)});l.displayName="Stack",l.propTypes={size:n.oneOfType([n.number,n.string]),color:n.string,horizontal:n.bool,vertical:n.bool,rotate:n.number,spin:n.oneOfType([n.bool,n.number]),children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,className:n.string,style:n.object},l.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null},o.d(t,"Icon",function(){return u}),o.d(t,"Stack",function(){return l});var c=function(){return(c=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},d=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o},h=0,u=r.forwardRef(function(e,t){var o=e.path,n=e.id,a=void 0===n?++h:n,s=e.title,i=void 0===s?null:s,l=e.description,u=void 0===l?null:l,m=e.size,p=void 0===m?null:m,f=e.color,y=void 0===f?"currentColor":f,v=e.horizontal,b=void 0!==v&&v,g=e.vertical,w=void 0!==g&&g,x=e.rotate,j=void 0===x?0:x,k=e.spin,T=void 0!==k&&k,N=e.style,O=void 0===N?{}:N,P=e.inStack,I=void 0!==P&&P,S=d(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),E={},A=[];null!==p&&(I?A.push("scale("+p+")"):(O.width="string"==typeof p?p:1.5*p+"rem",O.height=O.width)),b&&A.push("scaleX(-1)"),w&&A.push("scaleY(-1)"),0!==j&&A.push("rotate("+j+"deg)"),null!==y&&(E.fill=y);var _=r.createElement("path",c({d:o,style:E},I?S:{})),z=_;A.length>0&&(O.transform=A.join(" "),O.transformOrigin="center",I&&(z=r.createElement("g",{style:O},_,r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var C,H=z,R=!0===T||"number"!=typeof T?2:T,D=!I&&(b||w);if(R<0&&(D=!D),T&&(H=r.createElement("g",{style:{animation:"spin"+(D?"-inverse":"")+" linear "+Math.abs(R)+"s infinite",transformOrigin:"center"}},z,!(b||w||0!==j)&&r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),I)return H;var W,q="icon_labelledby_"+a,G="icon_describedby_"+a;if(i)C=u?q+" "+G:q;else if(W="presentation",u)throw Error("title attribute required when description is set");return r.createElement("svg",c({ref:t,viewBox:"0 0 24 24",style:O,role:W,"aria-labelledby":C},S),i&&r.createElement("title",{id:q},i),u&&r.createElement("desc",{id:G},u),!I&&T&&(D?r.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):r.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),H)});u.displayName="Icon",u.propTypes={path:n.string.isRequired,size:n.oneOfType([n.number,n.string]),color:n.string,horizontal:n.bool,vertical:n.bool,rotate:n.number,spin:n.oneOfType([n.bool,n.number]),style:n.object,inStack:n.bool,className:n.string},u.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=u}])},8314:function(e,t,o){"use strict";var r=o(1811);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,o,n,a,s){if(s!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return o.PropTypes=o,o}},4404:function(e,t,o){e.exports=o(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5265:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return l}});var r=o(7437),n=o(2748),a=o.n(n),s=o(143),i=o(1789);function l(){return(0,r.jsxs)("div",{className:"flex flex-col justify-center py-2 mx-4 md:mx-12",children:[(0,r.jsx)(a(),{path:i.yyh,size:"4em",className:"mx-auto mt-7"}),(0,r.jsx)("h1",{className:"flex justify-center text-center mt-5 text-4xl font-extrabold tracking-tight lg:text-5xl",children:"Opinion of the general public on SHD and studies"}),(0,r.jsxs)("p",{className:"leading-7 mt-10 text-pretty mx-auto w-5/6 md:w-3/6",children:["Understanding what a smart home device is plays a huge role when searching for information about what the general public is thinking about smart home devices.",(0,r.jsx)("br",{}),"Public opinion about these devices can vary widely depending on the viewpoint, for example, convenience, efficiency, security, safety, privacy risks, cost and integration issues. As well as individual opinions can vary from the general public’s thoughts.  ",(0,r.jsx)("br",{}),"There are already many studies, surveys and articles about data transparency, privacy and risks and dangers related to smart home devices. In addition, articles about what the general public think about topics related to smart home devices. And here is few of them:"]}),(0,r.jsxs)("div",{className:"flex flex-col text-justify mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10",children:[(0,r.jsx)("h3",{className:"mt-8 text-3xl font-semibold tracking-tight",children:"3.1. Articles"}),(0,r.jsxs)("p",{className:"leading-7 mt-3 md:mt-6",children:['The article "User Perceptions of Smart Home IoT Privacy" explores the thoughts of smart homeowners about their privacy. They interviewed eleven people about why they bought IoT devices, what they think about privacy risks, and what they do to keep their privacy safe. The questions were about awareness and worries about privacy. The results showed that people with smart homes like how these devices make their lives easier and more convenient. Their opinions about who should see their data depend on how much they trust the companies that make the devices and how useful they find them.',(0,r.jsx)("br",{}),"Before buying any smart home devices, all the people interviewed said they did some research. They chose devices based on what they read in online reviews and the reputation of the brands.",(0,r.jsx)("br",{}),"For example, one person said, “I try to make sure it’s a reputable brand… I don’t just get the cheapest thing because those are less secure… I want something that’s more established so I kind of assume that they have more security”. People are also unsure about the privacy risks of devices that don't record sound or video. (Chetty et al. 2018.)",(0,r.jsx)("br",{}),"The article “I Want it Anyway: Consumer Perceptions of Smart Home Devices” looks at how the benefits and risks affect people’s decisions to use smart home devices. They collected information through an online survey. The results showed that people usually don’t pay much attention to the possible risks and focus more on the benefits they can get from using these devices. People thought that good performance and compatibility were positive things about these devices. Among the possible risks, only issues related to privacy, performance and time were seen as real risks. (Klobas et al. 2018.)",(0,r.jsx)("br",{}),"The paper \"Consumer Attitudes Towards Privacy and Security in Home Assistants\" looks at what people have said online about privacy and security after buying home assistants like Amazon's Echo or Google's Home. They found three main worries: data collection, the extent of information gathered, strange device behavior, and violations of personal privacy. They collected over 109,000 reviews from online stores like Target, Amazon, Walmart, and Best Buy. They used a list of 53 keywords to find relevant reviews. After their research, they discovered that only about 2% of the reviews mentioned one of the keywords. The device mentioned the most was the Amazon Echo Show, mentioned in 6.1% of reviews. In the end, they found that people who review these devices usually don't talk about privacy and security worries. If they do mention these issues, it's usually about the kind and amount of data that the devices collect. (Fruchter et al. 2018.)",(0,r.jsx)("br",{}),"The article \"Privacy Norms for Smart Home Personal Assistants\" talks about an online survey done by researchers. They wanted to know what users think about security and privacy when it comes to data from smart home devices. One of the findings was a chart that showed how comfortable people are with others seeing their data. For instance, most people don't mind if their partner sees their data, but they're not okay with neighbors or guests seeing it. (Abdi et al. 2021.)",(0,r.jsx)("br",{}),'In addition, article "Trust in the Institution and Privacy Management of Internet of Things Devices: A Comparative Study of Dutch and Norwegian Households" explores how trust in national institutions and government rules affects the way people in Norway and the Netherlands think about privacy and IoT devices in their homes.',(0,r.jsx)("br",{}),"Overall, people in both countries behave similarly. In a two-adult household, usually one person, often a man, is enthusiastic about IoT and makes decisions about devices and privacy. The other person, often a woman, cares more about how the devices look in their home. So, one person worries about risks for the other, and the second person trusts their partner. People's trust in the companies that make the devices, their government, and policies also varies. The GDPR, a European law, was said to increase trust in the companies that make the devices, but not in the companies themselves. (Paupini et al. 2022.)"]}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-4 mx-auto mt-5",children:[(0,r.jsx)(s.Z,{title:"I Want It Anyway",caption:"Consumer Perceptions of Smart Home Devices",href:"https://www.tandfonline.com/doi/full/10.1080/08874417.2018.1528486"}),(0,r.jsx)(s.Z,{title:"User Perceptions of Smart Home IoT Privacy",caption:"A study on smart homeowners",href:"https://dl.acm.org/doi/10.1145/3274469"})]}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-4 mx-auto mt-5",children:[(0,r.jsx)(s.Z,{title:"Consumer Attitudes Towards Privacy and Security in Home Assistants",caption:"A study on online reviews",href:"https://dl.acm.org/doi/10.1145/3170427.3188448"}),(0,r.jsx)(s.Z,{title:"Privacy Norms for Smart Home Personal Assistants",caption:"A study on privacy and security",href:"https://dl.acm.org/doi/10.1145/3411764.3445122"})]}),(0,r.jsx)("div",{className:"flex flex-col md:flex-row gap-4 mx-auto mt-5",children:(0,r.jsx)(s.Z,{title:"Trust in the Institution and Privacy Management of Internet of Things Devices",caption:"A comparative case study of Dutch and Norwegian households",href:"https://www.sciencedirect.com/science/article/pii/S0160791X22001671?via%3Dihub"})}),(0,r.jsx)("h3",{className:"mt-8 text-3xl font-semibold tracking-tight pt-10 border-t-2 border-primary/20",children:"3.2. The EPS project survey"}),(0,r.jsx)("p",{className:"leading-7 mt-3",children:"There was also a survey to gather information about people’s current knowledge about smart home devices. This survey was conducted by the EPS project group. There are already about 70 respondents, which are a group of students and older people. There are 20 questions in the survey and here are some results."}),(0,r.jsx)("h3",{className:"mt-8 text-2xl font-bold tracking-tight",children:"How would you rate your knowledge of smart home devices?"}),(0,r.jsx)("p",{className:"leading-7",children:"INSERT GRAPHIC"}),(0,r.jsx)("h3",{className:"mt-8 text-2xl font-bold tracking-tight",children:"Do you own a smart home device?"}),(0,r.jsx)("p",{className:"leading-7",children:"INSERT GRAPHIC"}),(0,r.jsx)("h3",{className:"mt-8 text-2xl font-bold tracking-tight",children:"What smart home device(s)?"}),(0,r.jsx)("p",{className:"leading-7",children:"Respondents were also asked to name what device they own, and the answers were for example Google Home, heating, lights, speaker and smart TV."}),(0,r.jsx)("h3",{className:"mt-8 text-2xl font-bold tracking-tight",children:"When thinking of smart home devices, which one comes to mind first?"}),(0,r.jsx)("p",{className:"leading-7",children:"After this, respondents were asked “When thinking of smart home devices, which one comes to mind first?” and respondents answered, for example, Alexa (31%), Google Home (21%), lights, smart tv, fridge, camera doorbells and heating. Therefore, it can be seen that some respondents have already experience and knowledge with some smart home devices and can also identify what can be a smart home device.  "}),(0,r.jsx)("h3",{className:"mt-8 text-2xl font-bold tracking-tight",children:"Do you know if there is AI in any smart home device you use? & Specify which device?"}),(0,r.jsx)("p",{className:"leading-7",children:"INSERT GRAPHIC"}),(0,r.jsx)("p",{className:"leading-7",children:"Respondents who answered yes, were told to specify which device and answers were, for example, Google Home, Alexa, solar system, speaker and heating. Accordingly, to this question, some people do not know everything about smart home devices.  "}),(0,r.jsx)("h3",{className:"mt-8 text-2xl font-bold tracking-tight",children:"If you were to buy a smart home device, would you rather put your trust in a big company (Google, Amazon, etc.) or in a small company?"}),(0,r.jsx)("p",{className:"leading-7",children:"In addition, respondents were asked to rate if they trust a big company or a small company when buying a smart home device and most respondents answered a small company.   "}),(0,r.jsx)("h3",{className:"mt-8 text-2xl font-bold tracking-tight",children:"Do you have anything you want to mention or tell us about?"}),(0,r.jsxs)("p",{className:"leading-7",children:["One of the last questions of the survey was “Do you have anything you want to mention or tell us about?” and most answered no. However, there were answers such as:",(0,r.jsx)("br",{}),"“I have no idea what a smart device means”,",(0,r.jsx)("br",{}),"“Everything is being processed locally is one of the most important parts of a smart home for me. No external dependencies.” and",(0,r.jsx)("br",{}),"“Not knowing about something is very scary. No movement is what happens”.",(0,r.jsx)("br",{}),"Thus, it can be said based on these answers that someone has already had experience with smart home devices but some not at all.  "]}),(0,r.jsx)("h3",{className:"mt-8 text-2xl font-bold tracking-tight",children:"Summary"}),(0,r.jsxs)("p",{className:"leading-7",children:["In conclusion, based on the survey and articles, it can be seen that some people already have some experience with smart home devices. Based on the survey, respondents have already some experiences with smart home devices, and they find their knowledge of smart home devices the most as little, average and advanced knowledge.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"This also makes it easier to identify what a smart home device is because they were already able to name a few of these devices. In addition, based on articles, people’s opinion about smart home devices can vary depending on, for example, manufacturers, companies, data collection, privacy and security risks, online reviews, brand reputation, efficiency and easy-to-use devices. "]})]})]})}},143:function(e,t,o){"use strict";var r=o(7437),n=o(8792),a=o(703);t.Z=function(e){let{title:t,caption:o,href:s,image:i}=e;return(0,r.jsxs)("div",{className:"max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg",children:[(0,r.jsx)(n.default,{href:s,children:i&&(0,r.jsx)(a.default,{className:"rounded-t-lg",src:i,alt:""})}),(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsx)(n.default,{href:s,children:(0,r.jsx)("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline hover:decoration-wavy hover:decoration-primary",children:t})}),(0,r.jsx)("p",{className:"mb-3 font-normal text-gray-700",children:o}),(0,r.jsxs)(n.default,{href:s,className:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-destructive rounded-lg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300",children:["Read more",(0,r.jsx)("svg",{className:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})})]})]})]})}}},function(e){e.O(0,[603,250,607,971,69,744],function(){return e(e.s=8673)}),_N_E=e.O()}]);