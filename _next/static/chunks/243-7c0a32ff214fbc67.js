(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{2421:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(8030).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},6198:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(8030).Z)("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]])},2873:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(8030).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},7131:function(e){e.exports={style:{fontFamily:"'__Inter_6eaa63', '__Inter_Fallback_6eaa63'",fontStyle:"normal"},className:"__className_6eaa63",variable:"__variable_6eaa63"}},976:function(e,t,n){"use strict";n.d(t,{B:function(){return l}});var r=n(2265),o=n(8324),a=n(1584),i=n(1538);function l(e){let t=e+"CollectionProvider",[n,l]=(0,o.b)(t),[u,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,l=c(s,n),u=(0,a.e)(t,l.collectionRef);return r.createElement(i.g7,{ref:u},o)}),d=e+"CollectionItemSlot",v="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return r.createElement(u,{scope:t,itemMap:a,collectionRef:o},n)},Slot:f,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:o,...l}=e,u=r.useRef(null),s=(0,a.e)(t,u),f=c(d,n);return r.useEffect(()=>(f.itemMap.set(u,{ref:u,...l}),()=>void f.itemMap.delete(u))),r.createElement(i.g7,{[v]:"",ref:s},o)})},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${v}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},l]}},7513:function(e,t,n){"use strict";n.d(t,{gm:function(){return a}});var r=n(2265);let o=(0,r.createContext)(void 0);function a(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},245:function(e,t,n){"use strict";n.d(t,{VY:function(){return ep},z$:function(){return em},ck:function(){return ef},rU:function(){return ev},aV:function(){return es},fC:function(){return ec},xz:function(){return ed},l_:function(){return ew}});var r=n(2988),o=n(2265),a=n(4887),i=n(8324),l=n(8149),u=n(5171),c=n(1715),s=n(1584),f=n(7513),d=n(1383),v=n(3201),m=n(976),p=n(3938),w=n(1336),E=n(5137);let g=(0,o.forwardRef)((e,t)=>(0,o.createElement)(u.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),M="NavigationMenu",[R,C,h]=(0,m.B)(M),[y,b,_]=(0,m.B)(M),[T,N]=(0,i.b)(M,[h,_]),[k,x]=T(M),[P,I]=T(M),L=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:a,onValueChange:i,defaultValue:l,delayDuration:d=200,skipDelayDuration:v=300,orientation:m="horizontal",dir:p,...w}=e,[E,g]=(0,o.useState)(null),M=(0,s.e)(t,e=>g(e)),R=(0,f.gm)(p),C=(0,o.useRef)(0),h=(0,o.useRef)(0),y=(0,o.useRef)(0),[b,_]=(0,o.useState)(!0),[T="",N]=(0,c.T)({prop:a,onChange:e=>{let t=v>0;""!==e?(window.clearTimeout(y.current),t&&_(!1)):(window.clearTimeout(y.current),y.current=window.setTimeout(()=>_(!0),v)),null==i||i(e)},defaultProp:l}),k=(0,o.useCallback)(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>N(""),150)},[N]),x=(0,o.useCallback)(e=>{window.clearTimeout(h.current),N(e)},[N]),P=(0,o.useCallback)(e=>{T===e?window.clearTimeout(h.current):C.current=window.setTimeout(()=>{window.clearTimeout(h.current),N(e)},d)},[T,N,d]);return(0,o.useEffect)(()=>()=>{window.clearTimeout(C.current),window.clearTimeout(h.current),window.clearTimeout(y.current)},[]),(0,o.createElement)(D,{scope:n,isRootMenu:!0,value:T,dir:R,orientation:m,rootNavigationMenu:E,onTriggerEnter:e=>{window.clearTimeout(C.current),b?P(e):x(e)},onTriggerLeave:()=>{window.clearTimeout(C.current),k()},onContentEnter:()=>window.clearTimeout(h.current),onContentLeave:k,onItemSelect:e=>{N(t=>t===e?"":e)},onItemDismiss:()=>N("")},(0,o.createElement)(u.WV.nav,(0,r.Z)({"aria-label":"Main","data-orientation":m,dir:R},w,{ref:M})))}),D=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:a,orientation:i,children:l,value:u,onItemSelect:c,onItemDismiss:s,onTriggerEnter:f,onTriggerLeave:d,onContentEnter:m,onContentLeave:p}=e,[w,g]=(0,o.useState)(null),[M,C]=(0,o.useState)(new Map),[h,y]=(0,o.useState)(null);return(0,o.createElement)(k,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:u,previousValue:function(e){let t=(0,o.useRef)({value:e,previous:e});return(0,o.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(u),baseId:(0,v.M)(),dir:a,orientation:i,viewport:w,onViewportChange:g,indicatorTrack:h,onIndicatorTrackChange:y,onTriggerEnter:(0,E.W)(f),onTriggerLeave:(0,E.W)(d),onContentEnter:(0,E.W)(m),onContentLeave:(0,E.W)(p),onItemSelect:(0,E.W)(c),onItemDismiss:(0,E.W)(s),onViewportContentChange:(0,o.useCallback)((e,t)=>{C(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:(0,o.useCallback)(e=>{C(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[])},(0,o.createElement)(R.Provider,{scope:t},(0,o.createElement)(P,{scope:t,items:M},l)))},S=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,i=x("NavigationMenuList",n),l=(0,o.createElement)(u.WV.ul,(0,r.Z)({"data-orientation":i.orientation},a,{ref:t}));return(0,o.createElement)(u.WV.div,{style:{position:"relative"},ref:i.onIndicatorTrackChange},(0,o.createElement)(R.Slot,{scope:n},i.isRootMenu?(0,o.createElement)(Q,{asChild:!0},l):l))}),[V,F]=T("NavigationMenuItem"),A=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:a,...i}=e,l=(0,v.M)(),c=(0,o.useRef)(null),s=(0,o.useRef)(null),f=(0,o.useRef)(null),d=(0,o.useRef)(()=>{}),m=(0,o.useRef)(!1),p=(0,o.useCallback)((e="start")=>{if(c.current){d.current();let t=en(c.current);t.length&&er("start"===e?t:t.reverse())}},[]),w=(0,o.useCallback)(()=>{if(c.current){let e=en(c.current);e.length&&(d.current=(e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}))}},[]);return(0,o.createElement)(V,{scope:n,value:a||l||"LEGACY_REACT_AUTO_VALUE",triggerRef:s,contentRef:c,focusProxyRef:f,wasEscapeCloseRef:m,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:w,onContentFocusOutside:w},(0,o.createElement)(u.WV.li,(0,r.Z)({},i,{ref:t})))}),W="NavigationMenuTrigger",Z=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,disabled:a,...i}=e,c=x(W,e.__scopeNavigationMenu),f=F(W,e.__scopeNavigationMenu),d=(0,o.useRef)(null),v=(0,s.e)(d,f.triggerRef,t),m=ei(c.baseId,f.value),p=el(c.baseId,f.value),w=(0,o.useRef)(!1),E=(0,o.useRef)(!1),M=f.value===c.value;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(R.ItemSlot,{scope:n,value:f.value},(0,o.createElement)(et,{asChild:!0},(0,o.createElement)(u.WV.button,(0,r.Z)({id:m,disabled:a,"data-disabled":a?"":void 0,"data-state":ea(M),"aria-expanded":M,"aria-controls":p},i,{ref:v,onPointerEnter:(0,l.M)(e.onPointerEnter,()=>{E.current=!1,f.wasEscapeCloseRef.current=!1}),onPointerMove:(0,l.M)(e.onPointerMove,eu(()=>{a||E.current||f.wasEscapeCloseRef.current||w.current||(c.onTriggerEnter(f.value),w.current=!0)})),onPointerLeave:(0,l.M)(e.onPointerLeave,eu(()=>{a||(c.onTriggerLeave(),w.current=!1)})),onClick:(0,l.M)(e.onClick,()=>{c.onItemSelect(f.value),E.current=M}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===c.dir?"ArrowLeft":"ArrowRight"}[c.orientation];M&&e.key===t&&(f.onEntryKeyDown(),e.preventDefault())})})))),M&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(g,{"aria-hidden":!0,tabIndex:0,ref:f.focusProxyRef,onFocus:e=>{let t=f.contentRef.current,n=e.relatedTarget,r=n===d.current,o=null==t?void 0:t.contains(n);(r||!o)&&f.onFocusProxyEnter(r?"start":"end")}}),c.viewport&&(0,o.createElement)("span",{"aria-owns":p})))}),K="navigationMenu.linkSelect",O=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,active:a,onSelect:i,...c}=e;return(0,o.createElement)(et,{asChild:!0},(0,o.createElement)(u.WV.a,(0,r.Z)({"data-active":a?"":void 0,"aria-current":a?"page":void 0},c,{ref:t,onClick:(0,l.M)(e.onClick,e=>{let t=e.target,n=new CustomEvent(K,{bubbles:!0,cancelable:!0});if(t.addEventListener(K,e=>null==i?void 0:i(e),{once:!0}),(0,u.jH)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(G,{bubbles:!0,cancelable:!0});(0,u.jH)(t,e)}},{checkForDefaultPrevented:!1})})))}),z="NavigationMenuIndicator",$=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...i}=e,l=x(z,e.__scopeNavigationMenu),u=!!l.value;return l.indicatorTrack?a.createPortal((0,o.createElement)(d.z,{present:n||u},(0,o.createElement)(H,(0,r.Z)({},i,{ref:t}))),l.indicatorTrack):null}),H=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,i=x(z,n),l=C(n),[c,s]=(0,o.useState)(null),[f,d]=(0,o.useState)(null),v="horizontal"===i.orientation,m=!!i.value;(0,o.useEffect)(()=>{var e;let t=null===(e=l().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&s(t)},[l,i.value]);let p=()=>{c&&d({size:v?c.offsetWidth:c.offsetHeight,offset:v?c.offsetLeft:c.offsetTop})};return eo(c,p),eo(i.indicatorTrack,p),f?(0,o.createElement)(u.WV.div,(0,r.Z)({"aria-hidden":!0,"data-state":m?"visible":"hidden","data-orientation":i.orientation},a,{ref:t,style:{position:"absolute",...v?{left:0,width:f.size+"px",transform:`translateX(${f.offset}px)`}:{top:0,height:f.size+"px",transform:`translateY(${f.offset}px)`},...a.style}})):null}),U="NavigationMenuContent",j=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...a}=e,i=x(U,e.__scopeNavigationMenu),u=F(U,e.__scopeNavigationMenu),c=(0,s.e)(u.contentRef,t),f=u.value===i.value,v={value:u.value,triggerRef:u.triggerRef,focusProxyRef:u.focusProxyRef,wasEscapeCloseRef:u.wasEscapeCloseRef,onContentFocusOutside:u.onContentFocusOutside,onRootContentClose:u.onRootContentClose,...a};return i.viewport?(0,o.createElement)(B,(0,r.Z)({forceMount:n},v,{ref:c})):(0,o.createElement)(d.z,{present:n||f},(0,o.createElement)(q,(0,r.Z)({"data-state":ea(f)},v,{ref:c,onPointerEnter:(0,l.M)(e.onPointerEnter,i.onContentEnter),onPointerLeave:(0,l.M)(e.onPointerLeave,eu(i.onContentLeave)),style:{pointerEvents:!f&&i.isRootMenu?"none":void 0,...v.style}})))}),B=(0,o.forwardRef)((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=x(U,e.__scopeNavigationMenu);return(0,w.b)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,w.b)(()=>()=>r(e.value),[e.value,r]),null}),G="navigationMenu.rootContentDismiss",q=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:a,triggerRef:i,focusProxyRef:u,wasEscapeCloseRef:c,onRootContentClose:f,onContentFocusOutside:d,...v}=e,m=x(U,n),w=(0,o.useRef)(null),E=(0,s.e)(w,t),g=ei(m.baseId,a),M=el(m.baseId,a),R=C(n),h=(0,o.useRef)(null),{onItemDismiss:y}=m;(0,o.useEffect)(()=>{let e=w.current;if(m.isRootMenu&&e){let t=()=>{var t;y(),f(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(G,t),()=>e.removeEventListener(G,t)}},[m.isRootMenu,e.value,i,y,f]);let b=(0,o.useMemo)(()=>{let e=R().map(e=>e.value);"rtl"===m.dir&&e.reverse();let t=e.indexOf(m.value),n=e.indexOf(m.previousValue),r=a===m.value,o=n===e.indexOf(a);if(!r&&!o)return h.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(o&&-1!==t)return t>n?"to-start":"to-end"}return null})();return h.current=i,i},[m.previousValue,m.value,m.dir,R,a]);return(0,o.createElement)(Q,{asChild:!0},(0,o.createElement)(p.XB,(0,r.Z)({id:M,"aria-labelledby":g,"data-motion":b,"data-orientation":m.orientation},v,{ref:E,onDismiss:()=>{var e;let t=new Event(G,{bubbles:!0,cancelable:!0});null===(e=w.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,l.M)(e.onFocusOutside,e=>{var t;d();let n=e.target;null!==(t=m.rootNavigationMenu)&&void 0!==t&&t.contains(n)&&e.preventDefault()}),onPointerDownOutside:(0,l.M)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=R().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=m.isRootMenu&&(null===(t=m.viewport)||void 0===t?void 0:t.contains(n));(r||o||!m.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=en(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(er(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=u.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,l.M)(e.onEscapeKeyDown,e=>{c.current=!0})})))}),Y="NavigationMenuViewport",X=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...a}=e,i=!!x(Y,e.__scopeNavigationMenu).value;return(0,o.createElement)(d.z,{present:n||i},(0,o.createElement)(J,(0,r.Z)({},a,{ref:t})))}),J=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,children:a,...i}=e,c=x(Y,n),f=(0,s.e)(t,c.onViewportChange),v=I(U,e.__scopeNavigationMenu),[m,p]=(0,o.useState)(null),[w,E]=(0,o.useState)(null),g=m?(null==m?void 0:m.width)+"px":void 0,M=m?(null==m?void 0:m.height)+"px":void 0,R=!!c.value,C=R?c.value:c.previousValue;return eo(w,()=>{w&&p({width:w.offsetWidth,height:w.offsetHeight})}),(0,o.createElement)(u.WV.div,(0,r.Z)({"data-state":ea(R),"data-orientation":c.orientation},i,{ref:f,style:{pointerEvents:!R&&c.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":g,"--radix-navigation-menu-viewport-height":M,...i.style},onPointerEnter:(0,l.M)(e.onPointerEnter,c.onContentEnter),onPointerLeave:(0,l.M)(e.onPointerLeave,eu(c.onContentLeave))}),Array.from(v.items).map(([e,{ref:t,forceMount:n,...a}])=>{let i=C===e;return(0,o.createElement)(d.z,{key:e,present:n||i},(0,o.createElement)(q,(0,r.Z)({},a,{ref:(0,s.F)(t,e=>{i&&e&&E(e)})})))}))}),Q=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,i=x("FocusGroup",n);return(0,o.createElement)(y.Provider,{scope:n},(0,o.createElement)(y.Slot,{scope:n},(0,o.createElement)(u.WV.div,(0,r.Z)({dir:i.dir},a,{ref:t}))))}),ee=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],et=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,i=b(n),c=x("FocusGroupItem",n);return(0,o.createElement)(y.ItemSlot,{scope:n},(0,o.createElement)(u.WV.button,(0,r.Z)({},a,{ref:t,onKeyDown:(0,l.M)(e.onKeyDown,e=>{if(["Home","End",...ee].includes(e.key)){let t=i().map(e=>e.ref.current);if(["rtl"===c.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),ee.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>er(t)),e.preventDefault()}})})))});function en(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function er(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function eo(e,t){let n=(0,E.W)(t);(0,w.b)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function ea(e){return e?"open":"closed"}function ei(e,t){return`${e}-trigger-${t}`}function el(e,t){return`${e}-content-${t}`}function eu(e){return t=>"mouse"===t.pointerType?e(t):void 0}let ec=L,es=S,ef=A,ed=Z,ev=O,em=$,ep=j,ew=X}}]);