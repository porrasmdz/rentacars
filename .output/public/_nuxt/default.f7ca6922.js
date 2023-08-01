import{_ as z,o as d,c,f as e,k as x,l as M,r as b,m as $,n as t,p as L,a as P,q as B,s as H,j as u,w as _,b as s,d as S}from"./entry.4b7223f3.js";import{_ as O}from"./nuxt-link.eac36034.js";const A={name:"Header",props:["sidebarOpen"],components:{}},E={class:"sticky top-0 bg-white border-b border-slate-200 z-30"},V={class:"px-4 sm:px-6 lg:px-8"},j={class:"flex items-center justify-between h-16 -mb-px"},F={class:"flex"},G=["aria-expanded"],N=M('<span class="sr-only">Open sidebar</span><svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5" width="16" height="2"></rect><rect x="4" y="11" width="16" height="2"></rect><rect x="4" y="17" width="16" height="2"></rect></svg>',2),R=[N],q=e("div",{class:"flex items-center space-x-3"},[e("hr",{class:"w-px h-6 bg-slate-200"}),e("button")],-1);function D(r,i,h,n,o,l){return d(),c("header",E,[e("div",V,[e("div",j,[e("div",F,[e("button",{class:"text-slate-500 hover:text-slate-600 lg:hidden",onClick:i[0]||(i[0]=x(y=>r.$emit("toggle-sidebar"),["stop"])),"aria-controls":"sidebar","aria-expanded":h.sidebarOpen},R,8,G)]),q])])])}const I=z(A,[["render",D]]),T={name:"SidebarLinkGroup",props:["activeCondition"],setup(r){const i=b(r.activeCondition);return{expanded:i,handleClick:()=>{i.value=!i.value}}}};function U(r,i,h,n,o,l){return d(),c("li",{class:t(["px-3 py-2 rounded-sm mb-0.5 last:mb-0",h.activeCondition&&"bg-slate-900"])},[$(r.$slots,"default",{handleClick:n.handleClick,expanded:n.expanded})],2)}const w=z(T,[["render",U]]),J={class:"flex justify-between mb-10 pr-3 sm:px-2"},K=["aria-expanded"],Q=e("span",{class:"sr-only"},"Close sidebar",-1),W=e("svg",{class:"w-6 h-6 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"})],-1),X=[Q,W],Y=e("svg",{width:"32",height:"32",viewBox:"0 0 32 32"},[e("defs",null,[e("linearGradient",{x1:"28.538%",y1:"20.229%",x2:"100%",y2:"108.156%",id:"logo-a"},[e("stop",{"stop-color":"#A5B4FC","stop-opacity":"0",offset:"0%"}),e("stop",{"stop-color":"#A5B4FC",offset:"100%"})]),e("linearGradient",{x1:"88.638%",y1:"29.267%",x2:"22.42%",y2:"100%",id:"logo-b"},[e("stop",{"stop-color":"#38BDF8","stop-opacity":"0",offset:"0%"}),e("stop",{"stop-color":"#38BDF8",offset:"100%"})])]),e("rect",{fill:"#6366F1",width:"32",height:"32",rx:"16"}),e("path",{d:"M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",fill:"#4F46E5"}),e("path",{d:"M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",fill:"url(#logo-a)"}),e("path",{d:"M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",fill:"url(#logo-b)"})],-1),Z={class:"space-y-8"},ee=e("h3",{class:"text-xs uppercase text-slate-500 font-semibold pl-3"},[e("span",{class:"hidden md:block md:sidebar-expanded:hidden lg:hidden text-center w-6","aria-hidden":"true"},"•••"),e("span",{class:"md:hidden md:sidebar-expanded:block lg:block"},"Páginas")],-1),te={class:"mt-3"},se=["onClick"],le={class:"flex items-center justify-between"},ae={class:"flex items-center"},ie={class:"shrink-0 h-6 w-6",viewBox:"0 0 24 24"},oe=e("span",{class:"text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"},"Inicio",-1),ne={class:"flex shrink-0 ml-2"},de=e("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"},null,-1),ce=[de],re={class:"md:hidden md:sidebar-expanded:block lg:block"},he={class:"mb-1 last:mb-0"},ue=["href","onClick"],pe=e("span",{class:"text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"},"Main",-1),_e=[pe],xe=["onClick"],ve={class:"flex items-center justify-between"},me={class:"flex items-center"},fe={class:"shrink-0 h-6 w-6",viewBox:"0 0 24 24"},be=e("span",{class:"text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"},"Comercial ",-1),ge={class:"flex shrink-0 ml-2"},ke=e("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"},null,-1),we=[ke],ye={class:"md:hidden md:sidebar-expanded:block lg:block"},Ce={class:"mb-1 last:mb-0"},ze=["href","onClick"],$e=e("span",{class:"text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"},"Clientes",-1),Me=[$e],Le=["onClick"],Pe={class:"flex items-center justify-between"},Be={class:"flex items-center"},He={class:"shrink-0 h-6 w-6",viewBox:"0 0 24 24"},Se=e("span",{class:"text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"},"Agencia",-1),Oe={class:"flex shrink-0 ml-2"},Ae=e("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"},null,-1),Ee=[Ae],Ve={class:"md:hidden md:sidebar-expanded:block lg:block"},je={class:"mb-1 last:mb-0"},Fe=["href","onClick"],Ge=e("span",{class:"text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"},"Inspectores",-1),Ne=[Ge],Re=["onClick"],qe={class:"flex items-center justify-between"},De={class:"flex items-center"},Ie={class:"shrink-0 h-6 w-6",viewBox:"0 0 24 24"},Te=e("span",{class:"text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"},"Reservas",-1),Ue={class:"flex shrink-0 ml-2"},Je=e("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"},null,-1),Ke=[Je],Qe={class:"md:hidden md:sidebar-expanded:block lg:block"},We={class:"pt-3 hidden md:inline-flex lg:hidden justify-end mt-auto"},Xe={class:"px-3 py-2"},Ye=e("span",{class:"sr-only"},"Expand / collapse sidebar",-1),Ze=e("svg",{class:"w-6 h-6 fill-current sidebar-expanded:rotate-180",viewBox:"0 0 24 24"},[e("path",{class:"text-slate-400",d:"M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"}),e("path",{class:"text-slate-600",d:"M3 23H1V1h2z"})],-1),et=[Ye,Ze],tt=!1,st={__name:"Sidebar",props:["sidebarOpen"],setup(r){const i=r,h=b(null),n=b(null),o=b(tt==="true"),l=L().currentRoute.value,y=({target:v})=>{!n.value||!h.value||!i.sidebarOpen||n.value.contains(v)||h.value.contains(v)||emit("close-sidebar")},C=({keyCode:v})=>{!i.sidebarOpen||v!==27||emit("close-sidebar")};return P(()=>{document.addEventListener("click",y),document.addEventListener("keydown",C)}),B(()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",C)}),H(o,()=>{o.value?document.querySelector("body").classList.add("sidebar-expanded"):document.querySelector("body").classList.remove("sidebar-expanded")}),(v,g)=>{const k=O;return d(),c("div",null,[e("div",{class:t(["fixed inset-0 bg-slate-900 bg-opacity-30 z-40 md:hidden md:z-auto transition-opacity duration-200",r.sidebarOpen?"opacity-100":"opacity-0 pointer-events-none"]),"aria-hidden":"true"},null,2),e("div",{id:"sidebar",ref_key:"sidebar",ref:n,class:t(["flex flex-col absolute z-40 left-0 top-0 md:static md:left-auto md:top-auto md:translate-x-0 h-screen overflow-y-scroll md:overflow-y-auto no-scrollbar w-64 md:w-20 md:sidebar-expanded:!w-64 lg:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out",r.sidebarOpen?"translate-x-0":"-translate-x-64"])},[e("div",J,[e("button",{ref_key:"trigger",ref:h,class:"md:hidden text-slate-500 hover:text-slate-400",onClick:g[0]||(g[0]=x(a=>v.$emit("close-sidebar"),["stop"])),"aria-controls":"sidebar","aria-expanded":r.sidebarOpen},X,8,K),u(k,{class:"block",to:"/"},{default:_(()=>[Y]),_:1})]),e("div",Z,[e("div",null,[ee,e("ul",te,[u(w,{activeCondition:s(l).fullPath==="/"},{default:_(a=>[e("a",{class:t(["block text-slate-200 hover:text-white truncate transition duration-150",s(l).fullPath==="/"&&"hover:text-slate-200"]),href:"#0",onClick:x(p=>o.value?a.handleClick():o.value=!0,["prevent"])},[e("div",le,[e("div",ae,[(d(),c("svg",ie,[e("path",{class:t(["fill-current text-slate-400",s(l).fullPath==="/"&&"!text-indigo-500"]),d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"},null,2),e("path",{class:t(["fill-current text-slate-600",s(l).fullPath==="/"&&"text-indigo-600"]),d:"M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"},null,2),e("path",{class:t(["fill-current text-slate-400",s(l).fullPath==="/"&&"text-indigo-200"]),d:"M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"},null,2)])),oe]),e("div",ne,[(d(),c("svg",{class:t(["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",a.expanded&&"rotate-180"]),viewBox:"0 0 12 12"},ce,2))])])],10,se),e("div",re,[e("ul",{class:t(["pl-9 mt-1",!a.expanded&&"hidden"])},[u(k,{to:"/",custom:""},{default:_(({href:p,navigate:m,isExactActive:f})=>[e("li",he,[e("a",{class:t(["block text-slate-400 hover:text-slate-200 transition duration-150 truncate",f&&"!text-indigo-500"]),href:p,onClick:m},_e,10,ue)])]),_:1})],2)])]),_:1},8,["activeCondition"]),u(w,{activeCondition:s(l).fullPath.includes("comercial")},{default:_(a=>[e("a",{class:t(["block text-slate-200 hover:text-white truncate transition duration-150",s(l).fullPath.includes("comercial")&&"hover:text-slate-200"]),href:"#0",onClick:x(p=>o.value?a.handleClick():o.value=!0,["prevent"])},[e("div",ve,[e("div",me,[(d(),c("svg",fe,[e("path",{class:t(["fill-current text-slate-400",s(l).fullPath.includes("comercial")&&"text-indigo-300"]),d:"M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"},null,2),e("path",{class:t(["fill-current text-slate-700",s(l).fullPath.includes("comercial")&&"!text-indigo-600"]),d:"M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"},null,2),e("path",{class:t(["fill-current text-slate-600",s(l).fullPath.includes("comercial")&&"text-indigo-500"]),d:"M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"},null,2)])),be]),e("div",ge,[(d(),c("svg",{class:t(["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",a.expanded&&"rotate-180"]),viewBox:"0 0 12 12"},we,2))])])],10,xe),e("div",ye,[e("ul",{class:t(["pl-9 mt-1",!a.expanded&&"hidden"])},[u(k,{to:"/comercial/clientes",custom:""},{default:_(({href:p,navigate:m,isExactActive:f})=>[e("li",Ce,[e("a",{class:t(["block text-slate-400 hover:text-slate-200 transition duration-150 truncate",f&&"!text-indigo-500"]),href:p,onClick:m},Me,10,ze)])]),_:1})],2)])]),_:1},8,["activeCondition"]),u(w,{activeCondition:s(l).fullPath.includes("agencia")},{default:_(a=>[e("a",{class:t(["block text-slate-200 hover:text-white truncate transition duration-150",s(l).fullPath.includes("agencia")&&"hover:text-slate-200"]),href:"#0",onClick:x(p=>o.value?a.handleClick():o.value=!0,["prevent"])},[e("div",Pe,[e("div",Be,[(d(),c("svg",He,[e("path",{class:t(["fill-current text-slate-600",s(l).fullPath.includes("agencia")&&"text-indigo-500"]),d:"M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"},null,2),e("path",{class:t(["fill-current text-slate-400",s(l).fullPath.includes("agencia")&&"text-indigo-300"]),d:"M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"},null,2)])),Se]),e("div",Oe,[(d(),c("svg",{class:t(["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",a.expanded&&"rotate-180"]),viewBox:"0 0 12 12"},Ee,2))])])],10,Le),e("div",Ve,[e("ul",{class:t(["pl-9 mt-1",!a.expanded&&"hidden"])},[u(k,{to:"/agencia/inspectores",custom:""},{default:_(({href:p,navigate:m,isExactActive:f})=>[e("li",je,[e("a",{class:t(["block text-slate-400 hover:text-slate-200 transition duration-150 truncate",f&&"!text-indigo-500"]),href:p,onClick:m},Ne,10,Fe)])]),_:1})],2)])]),_:1},8,["activeCondition"]),u(w,{activeCondition:s(l).fullPath.includes("reservas")},{default:_(a=>[e("a",{class:t(["block text-slate-200 hover:text-white truncate transition duration-150",s(l).fullPath.includes("reservas")&&"hover:text-slate-200"]),href:"#0",onClick:x(p=>o.value?a.handleClick():o.value=!0,["prevent"])},[e("div",qe,[e("div",De,[(d(),c("svg",Ie,[e("path",{class:t(["fill-current text-slate-600",s(l).fullPath.includes("reservas")&&"text-indigo-500"]),d:"M8 1v2H3v19h18V3h-5V1h7v23H1V1z"},null,2),e("path",{class:t(["fill-current text-slate-600",s(l).fullPath.includes("reservas")&&"text-indigo-500"]),d:"M1 1h22v23H1z"},null,2),e("path",{class:t(["fill-current text-slate-400",s(l).fullPath.includes("reservas")&&"text-indigo-300"]),d:"M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"},null,2)])),Te]),e("div",Ue,[(d(),c("svg",{class:t(["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",a.expanded&&"rotate-180"]),viewBox:"0 0 12 12"},Ke,2))])])],10,Re),e("div",Qe,[e("ul",{class:t(["pl-9 mt-1",!a.expanded&&"hidden"])},null,2)])]),_:1},8,["activeCondition"])])])]),e("div",We,[e("div",Xe,[e("button",{onClick:g[1]||(g[1]=x(a=>o.value=!o.value,["prevent"]))},et)])])],2)])}}},lt=st,at={class:"flex h-screen overflow-hidden"},it={class:"relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-indigo-50"},dt=S({__name:"default",setup(r){const i=b(!1);return(h,n)=>(d(),c("div",at,[u(lt,{"sidebar-open":s(i),onCloseSidebar:n[0]||(n[0]=o=>i.value=!1)},null,8,["sidebar-open"]),e("div",it,[u(I,{"sidebar-open":s(i),onToggleSidebar:n[1]||(n[1]=o=>i.value=!s(i))},null,8,["sidebar-open"]),e("main",null,[$(h.$slots,"default")])])]))}});export{dt as default};
