"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{5094:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(7437),a=r(2265),i=r(518),s=r(7592),l=(r(3550),r(7138)),o=r(9354),c=r(9733);let d=e=>{let{className:t,...r}=e;return(0,n.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,o.cn)("mx-auto flex w-full justify-center",t),...r})};d.displayName="Pagination";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("ul",{ref:t,className:(0,o.cn)("flex flex-row items-center gap-1",r),...a})});u.displayName="PaginationContent";let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("li",{ref:t,className:(0,o.cn)("",r),...a})});f.displayName="PaginationItem";let h=e=>{let{className:t,isActive:r,size:a="icon",...i}=e;return(0,n.jsx)(l.default,{href:i.href||"","aria-current":r?"page":void 0,className:(0,o.cn)((0,c.d)({variant:r?"outline":"ghost",size:a}),t),...i})};h.displayName="PaginationLink";let m=e=>{let{className:t,...r}=e;return(0,n.jsxs)(h,{"aria-label":"Go to previous page",size:"default",className:(0,o.cn)("gap-1 pl-2.5",t),...r,children:[(0,n.jsx)(i.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:"Previous"})]})};m.displayName="PaginationPrevious";let p=e=>{let{className:t,...r}=e;return(0,n.jsxs)(h,{"aria-label":"Go to next page",size:"default",className:(0,o.cn)("gap-1 pr-2.5",t),...r,children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(s.Z,{className:"h-4 w-4"})]})};function x(e){let{previousUrl:t,nextUrl:r}=e;return(0,n.jsx)(d,{className:"mt-5 text-white",children:(0,n.jsxs)(u,{children:[(0,n.jsx)(f,{className:"bg-primary rounded-full",children:(0,n.jsx)(m,{href:t})}),(0,n.jsx)(f,{className:"bg-primary rounded-full",children:(0,n.jsx)(p,{href:r})})]})})}p.displayName="PaginationNext"},5743:function(e,t,r){var n=r(7437);r(2265);var a=r(5265);t.Z=e=>{let{chapters:t}=e,r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.map((e,a)=>(0,n.jsxs)("li",{className:"",children:[(0,n.jsx)("a",{href:"#".concat(e.id),className:"hover:text-foreground hover:underline ".concat(e.isInViewport?"md:text-foreground md:font-bold":"md:text-right-foreground"),children:e.title}),e.subChapters&&(0,n.jsx)("ul",{className:"text-xs list-decimal list-inside pl-4 pb-2",children:r(e.subChapters,t+1)})]},e.id))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex justify-center w-screen bg-primary/5 border border-b-2 border-primary-foreground md:hidden",children:(0,n.jsx)(a.UQ,{type:"single",collapsible:!0,className:"",children:(0,n.jsxs)(a.Qd,{value:"item-1",children:[(0,n.jsx)(a.o4,{className:"text-2xl font-semibold",children:"Contents of the page"}),(0,n.jsx)(a.vF,{children:(0,n.jsx)("ol",{className:"list-decimal list-inside text-base",children:r(t)})})]})})}),(0,n.jsx)("div",{className:"hidden md:flex sticky top-0 min-h-fit md:left-0 md:min-w-38 md:max-w-44 md:h-dvh md:px-4 bg-primary/10",children:(0,n.jsxs)("div",{className:"justify-normal md:pt-6",children:[(0,n.jsx)("p",{className:"text-2xl font-semibold",children:"Contents"}),(0,n.jsx)("ol",{className:"list-decimal list-inside text-sm pt-2",children:r(t)})]})})]})}},5265:function(e,t,r){r.d(t,{Qd:function(){return c},UQ:function(){return o},o4:function(){return d},vF:function(){return u}});var n=r(7437),a=r(2265),i=r(4756),s=r(2421),l=r(9354);let o=i.fC,c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.ck,{ref:t,className:(0,l.cn)("border-b",r),...a})});c.displayName="AccordionItem";let d=a.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsx)(i.h4,{className:"flex",children:(0,n.jsxs)(i.xz,{ref:t,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",r),...o,children:[a,(0,n.jsx)(s.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=i.xz.displayName;let u=a.forwardRef((e,t)=>{let{className:r,children:a,...s}=e;return(0,n.jsx)(i.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...s,children:(0,n.jsx)("div",{className:(0,l.cn)("pb-4 pt-0",r),children:a})})});u.displayName=i.VY.displayName},9733:function(e,t,r){r.d(t,{d:function(){return o},z:function(){return c}});var n=r(7437),a=r(2265),i=r(1538),s=r(2218),l=r(9354);let o=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",rounded:"rounded-full h-12 px-6",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:r,variant:a,size:s,asChild:c=!1,...d}=e,u=c?i.g7:"button";return(0,n.jsx)(u,{className:(0,l.cn)(o({variant:a,size:s,className:r})),ref:t,...d})});c.displayName="Button"},5642:function(e,t,r){r.d(t,{KI:function(){return h},Pz:function(){return x},am:function(){return p},d$:function(){return m},lr:function(){return f}});var n=r(7437),a=r(2265),i=r(1171),s=r(5137),l=r(1976),o=r(9354),c=r(9733);let d=a.createContext(null);function u(){let e=a.useContext(d);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=a.forwardRef((e,t)=>{let{orientation:r="horizontal",opts:s,setApi:l,plugins:c,className:u,children:f,...h}=e,[m,p]=(0,i.Z)({...s,axis:"horizontal"===r?"x":"y"},c),[x,g]=a.useState(!1),[v,b]=a.useState(!1),N=a.useCallback(e=>{e&&(g(e.canScrollPrev()),b(e.canScrollNext()))},[]),j=a.useCallback(()=>{null==p||p.scrollPrev()},[p]),y=a.useCallback(()=>{null==p||p.scrollNext()},[p]),A=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),j()):"ArrowRight"===e.key&&(e.preventDefault(),y())},[j,y]);return a.useEffect(()=>{p&&l&&l(p)},[p,l]),a.useEffect(()=>{if(p)return N(p),p.on("reInit",N),p.on("select",N),()=>{null==p||p.off("select",N)}},[p,N]),(0,n.jsx)(d.Provider,{value:{carouselRef:m,api:p,opts:s,orientation:r||((null==s?void 0:s.axis)==="y"?"vertical":"horizontal"),scrollPrev:j,scrollNext:y,canScrollPrev:x,canScrollNext:v},children:(0,n.jsx)("div",{ref:t,onKeyDownCapture:A,className:(0,o.cn)("relative",u),role:"region","aria-roledescription":"carousel",...h,children:f})})});f.displayName="Carousel";let h=a.forwardRef((e,t)=>{let{className:r,...a}=e,{carouselRef:i,orientation:s}=u();return(0,n.jsx)("div",{ref:i,className:"overflow-hidden",children:(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex","horizontal"===s?"-ml-4":"-mt-4 flex-col",r),...a})})});h.displayName="CarouselContent";let m=a.forwardRef((e,t)=>{let{className:r,...a}=e,{orientation:i}=u();return(0,n.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===i?"pl-4":"pt-4",r),...a})});m.displayName="CarouselItem";let p=a.forwardRef((e,t)=>{let{className:r,variant:a="outline",size:i="icon",...l}=e,{orientation:d,scrollPrev:f,canScrollPrev:h}=u();return(0,n.jsxs)(c.z,{ref:t,variant:a,size:i,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===d?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!h,onClick:f,...l,children:[(0,n.jsx)(s.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});p.displayName="CarouselPrevious";let x=a.forwardRef((e,t)=>{let{className:r,variant:a="outline",size:i="icon",...s}=e,{orientation:d,scrollNext:f,canScrollNext:h}=u();return(0,n.jsxs)(c.z,{ref:t,variant:a,size:i,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===d?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!h,onClick:f,...s,children:[(0,n.jsx)(l.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Next slide"})]})});x.displayName="CarouselNext"},9354:function(e,t,r){r.d(t,{cn:function(){return i}});var n=r(4839),a=r(6164);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},1633:function(e,t,r){r.d(t,{J:function(){return a},m:function(){return i}});var n=r(9256);let a=[{title:"Our team",href:"/about/us",description:"Our project and the team behind it."},{title:"RELINK",href:"/about/relink",description:"The RELINK project."},{title:"EPS",href:"/about/eps",description:"What is the European Project Semester?"}],i=[{title:"Kick-off",href:"/chapters/kickoff",description:"What this lesson is about.",icon:n.nlE},{title:"1. Introduction",href:"/chapters/one",description:"What is a smart home device?",icon:n.ANJ},{title:"2. Opinions and studies",href:"/chapters/two",description:"Thoughts of the general public on smart home devices.",icon:n.q8o},{title:"3. Transparency",href:"/chapters/three",description:"What it means and why it is important.",icon:n.yyh},{title:"4. Internal workings",href:"/chapters/four",description:"Internals working of smart home devices.",icon:n.sVq},{title:"5. Artificial Intelligence",href:"/chapters/five",description:"The role of AI in smart home devices.",icon:n.hiP},{title:"6. Usabilities and Dangers",href:"/chapters/six",description:"The usabilities and dangers of smart home devices.",icon:n.hnm},{title:"6. Benefits and Risks",href:"/chapters/six",description:"Benefits and risks of smart home devices.",icon:n.hnm},{title:"Resources",href:"/chapters/resources",description:"To go further on resources for privacy in smart homes.",icon:n.hnm}]},9966:function(e,t){t.Z={src:"/eps/_next/static/media/SmartDoorbell.9a58a039.png",height:2304,width:3159,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEUdHR05NTRMaXEeGhkwKysaGBY2LisTExMTExM1Li0+RkkUFBRXudqSAAAACXRSTlMCSgBbL0LBrFwBCK8YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGNgYGJhZ2dlYmBgYGLk5uaAMDg5mSEMLnQGCxsbKxMDABJSAKgmhpESAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}}}]);