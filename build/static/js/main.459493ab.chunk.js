(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e){e.exports={dashboard:"Dashboard",about:"About"}},118:function(e){e.exports={dashboard:"Tableau de bord",about:"A propos de"}},138:function(e,t,a){e.exports=a(162)},150:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(97),l=a(39),o=a.n(l),i=a(4),u=a(112),s=a(6),m=a(209),d=r.a.createContext({data:[],selectedTuple:[],bucketList:{},triggerEffect:function(){},onChange:{}});function f(e){var t=e.children,a=r.a.useState({}),c=Object(s.a)(a,2),l=c[0],o=c[1],f=r.a.useState({}),p=Object(s.a)(f,2),E=p[0],b=p[1],g=Object(n.useState)(!1),h=Object(s.a)(g,2),x=h[0],y=h[1],v=Object(n.useState)([]),j=Object(s.a)(v,2),O=j[0],S=j[1],k=Object(n.useCallback)(function(e){var t=e.action,a=e.payload;switch(t){case"dequeue":m.a.put("http://localhost:7001/v1/put/dequeue",a).then(function(e){console.log("Response data :",e.data[1]),b(Object(u.a)({},E,Object(i.a)({},e.data[0],e.data[1])))}).catch(function(e){console.error(e)});break;case"enqueue":m.a.put("http://localhost:7001/v1/put/enqueue",a).then(function(e){console.log("Enqueue Success",e)}).catch(function(e){console.error("Error doing enqueue",e)});break;case"getBuckets":return m.a.get("http://localhost:7001/v1/get/buckets/",a).then(function(e){return e.data}).catch(function(e){return console.error(e),{0:0}});case"error":break;default:return"not recgonized"}},[l]);Object(n.useEffect)(function(){m.a.get("http://localhost:7001/v1/get/sessions").then(function(e){o(e.data)}).catch(function(e){console.error(e)})},[x]);var C={bucketList:E,onChange:k,data:l,selectedTuple:O,changeSelectedSession:function(e){S([e,l[e]])},triggerEffect:function(){return y(!x)}};return r.a.createElement(d.Provider,{value:C}," ",t," ")}a(150);var p=a(100),E=a(113),b=a(62),g={en:{translation:a(117)},fr:{translation:a(118)}};localStorage.getItem("I18N_LANGUAGE")||localStorage.setItem("I18N_LANGUAGE","en"),p.a.use(E.a).use(b.a).init({resources:g,lng:localStorage.getItem("I18N_LANGUAGE")||"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});p.a;var h=a(217),x=a(9),y=a(7),v=a(205),j=a(218),O=a(219),S=Object(y.a)(j.a)(function(e){var t=e.theme;e.open;return{backgroundColor:"#f5f6fa",width:"100%",transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}});function k(e){var t=e.children,a=e.topbar;return n.createElement(h.a,{sx:{display:"flex",width:"100%"}},n.createElement(v.a,null),n.createElement(S,{position:"fixed"},n.createElement(O.a,{sx:{maxHeight:"70px",minHeight:"56px"}},a)),n.createElement(h.a,{sx:{padding:"70px 0px 0px 0px",margin:"0px",width:"100%"}},t))}var C=a(215),w=a(121),N=a.n(w),q=a(122),I=a.n(q),A=a(220),L=a(211);function T(e){var t=e.icon,a=e.href,n=e.children;return r.a.createElement(A.a,{component:L.a,href:a,sx:{fontSize:"14px",borderRadius:"0px"}},t,r.a.createElement(h.a,{sx:{marginLeft:"12px"}},n))}var V=a(214);function D(){var e=Object(b.b)().i18n;return r.a.createElement(h.a,{sx:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(V.a,{variant:"outlined",color:"primary",onClick:function(){return t="en"===e.language?"fr":"en",void e.changeLanguage(t);var t}},"en"===e.language?"EN":"FR"))}function G(){var e=Object(b.b)(),t=Object(s.a)(e,1)[0];return r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:11},r.a.createElement(T,{href:"/",icon:r.a.createElement(N.a,null)},t("dashboard")),r.a.createElement(T,{href:"/about",icon:r.a.createElement(I.a,null)},t("about"))),r.a.createElement(C.a,{item:!0,xs:1},r.a.createElement(D,null)))}var B=a(221),F=a(216);function R(e){var t=e.sessionKey,a=e.value,c=Object(n.useContext)(d),l=c.changeSelectedSession,o=c.selectedTuple;return r.a.createElement(h.a,{key:t,sx:{width:1,justifyContent:"space-between",border:"1px solid",borderColor:"grey.400",borderRadius:1,p:1,backgroundColor:o[1]===a?"#fff9c4":""},component:V.a,onClick:function(){l(t)}},r.a.createElement(h.a,{sx:{flexDirection:"row",display:"flex",flex:1,justifyContent:"space-between"}},r.a.createElement(h.a,{typography:"subtitle",sx:{alignItems:"left"}},"["+a+"]"),r.a.createElement(h.a,{typography:"subtitle",sx:{alignItems:"right"}},new Date(parseInt(t)).toLocaleString())))}function H(){var e=Object(n.useContext)(d).data,t=Object(n.useMemo)(function(){return Object.entries(e).reverse()},[e]);return r.a.createElement(F.a,{spacing:2},t.map(function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement(R,{key:a,sessionKey:a,value:n})}))}var K=a(56),M=a(208),U=a(91);function _(){var e=Object(n.useContext)(d),t=e.triggerEffect,a=e.onChange,c=Object(n.useState)(!1),l=Object(s.a)(c,2),o=l[0],i=l[1],u=U.b().shape({field1:U.c().matches(/^[\d,]+$/,"Value must be a sequence of numbers separated by commas").required("Field is required"),field2:U.a().integer("Value must be an integer").min(2,"Value must be at least 2").max(10,"Value cannot be greater than 10").required("Field is required")});return r.a.createElement(K.d,{initialValues:{field1:"",field2:""},onSubmit:function(e,n){var r=n.resetForm;i(!0);var c={numbers:e.field1.split(",").map(Number),time:Date.now(),rateLimit:parseInt(e.field2)};a({action:"enqueue",payload:c}),i(!1),t(),r()},validationSchema:u},function(e){var t=e.touched,a=e.errors,n=e.isValid,c=e.isSubmitting;return r.a.createElement(K.c,null,r.a.createElement(F.a,{spacing:4},r.a.createElement(h.a,null,r.a.createElement(K.b,{name:"field1"},function(e){var n=e.field;return r.a.createElement(M.a,Object.assign({},n,{id:"outlined-basic",autoComplete:"off",label:"New Inputs",variant:"outlined",placeholder:"Ex: 1,3,4,4",error:t.fieldName1&&Boolean(a.fieldName1),helperText:t.fieldName1&&a.fieldName1}))}),r.a.createElement(K.a,{name:"field1"},function(e){return r.a.createElement("div",{style:{color:"red"}},e)})),r.a.createElement(h.a,null,r.a.createElement(K.b,{name:"field2"},function(e){var n=e.field;return r.a.createElement(M.a,Object.assign({},n,{id:"outlined-basic",label:"Rate Limit",variant:"outlined",placeholder:"Ex: 3",autoComplete:"off",error:t.fieldName2&&Boolean(a.fieldName2),helperText:t.fieldName2&&a.fieldName2,inputProps:{inputMode:"numeric"}}))}),r.a.createElement(K.a,{name:"field2"},function(e){return e?r.a.createElement(h.a,{typography:"body1",style:{color:"red"}},e):r.a.createElement(h.a,{height:16})})),r.a.createElement(V.a,{disabled:!n||c||o,type:"submit",variant:"contained",color:"primary"},"Enqueue")))})}function z(){return r.a.createElement(C.a,{container:!0,direction:"column",spacing:2},r.a.createElement(C.a,{item:!0},r.a.createElement(h.a,{typography:"h4"}," History")),r.a.createElement(C.a,{item:!0},r.a.createElement(_,null)),r.a.createElement(C.a,{item:!0},r.a.createElement(B.a,null)),r.a.createElement(C.a,{item:!0},r.a.createElement(H,null)))}var J=a(12),P=a(213);function $(e){return r.a.createElement(C.a,{item:!0,xs:4},r.a.createElement(h.a,{typography:"body1",sx:{color:"grey"},align:"center"},e.index),r.a.createElement(B.a,null),r.a.createElement(P.a,null,r.a.createElement(h.a,{typography:"h5",align:"center",height:50},e.value)))}function Q(e){var t=e.buckets,a=Object(n.useContext)(d),c=a.data,l=a.changeSelectedSession;return Object(n.useEffect)(function(){"undefined"!==typeof c&&"undefined"!==c&&l(Object.keys(c)[Object.keys(c).length-1])},[c]),r.a.createElement(C.a,{container:!0,spacing:2},Object.entries(t).map(function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement($,{key:a,index:a,value:n})}))}function W(){var e=Object(n.useContext)(d),t=e.selectedTuple,a=e.onChange,c=Object(n.useState)({}),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),f=m[0],p=(m[1],Object(n.useState)([])),E=Object(s.a)(p,2),b=E[0],g=E[1];return Object(n.useEffect)(function(){t!==[]&&"undefined"!==typeof t[0]&&a({action:"getBuckets",payload:{params:{sessionKey:t[0]}}}).then(function(e){i(e),console.log(e)}).catch(function(e){console.error(e)})},[t,f]),Object(n.useEffect)(function(){g([])},[t]),r.a.createElement(C.a,{container:!0,direction:"column",spacing:2},r.a.createElement(C.a,{item:!0},r.a.createElement(h.a,{typography:"h4"}," Simulation ")),r.a.createElement(C.a,{item:!0},r.a.createElement(F.a,{direction:"row",spacing:2},r.a.createElement(V.a,{variant:"contained",color:"secondary",onClick:function(){a({action:"dequeue",payload:{time:t[0]}}),g([].concat(Object(J.a)(b),["Dequeue"]))}},"Next"),r.a.createElement(V.a,{variant:"contained",color:"secondary",onClick:function(){console.log("All")}},"All"))),r.a.createElement(C.a,{item:!0},r.a.createElement(Q,{buckets:o})),r.a.createElement(C.a,{item:!0},r.a.createElement(B.a,null)),r.a.createElement(C.a,{item:!0},b.map(function(e,t){return r.a.createElement(h.a,{key:t,typography:"body2"},t+1,". ",e)})))}function X(){return Object(n.useEffect)(function(){m.a.get("http://localhost:7001/v1/health").then(function(){console.log("Server is up")})},[]),r.a.createElement(C.a,{container:!0,spacing:2,sx:{padding:"14px"}},r.a.createElement(C.a,{item:!0,xs:8},r.a.createElement(C.a,{sx:{padding:"12px",boxShadow:3}},r.a.createElement(z,null))),r.a.createElement(C.a,{item:!0,xs:4},r.a.createElement(C.a,{sx:{padding:"12px",boxShadow:3}},r.a.createElement(W,null))))}function Y(){return r.a.createElement(k,{topbar:r.a.createElement(G,null)},r.a.createElement(X,null))}function Z(){return r.a.createElement(k,{topbar:r.a.createElement(G,null)},r.a.createElement(C.a,{container:!0,spacing:2,sx:{padding:"14px"}},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(h.a,{typography:"subtitle",sx:{padding:"12px",boxShadow:3}},"DFM Technical Assessment"))))}function ee(){return r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",element:r.a.createElement(Y,null)}),r.a.createElement(x.a,{exact:!0,path:"/about",element:r.a.createElement(Z,null)}))}function te(){return r.a.createElement(h.a,null,r.a.createElement(ee,null))}var ae=document.getElementById("root");o.a.render(r.a.createElement(f,null,r.a.createElement(c.a,null,r.a.createElement(te,null))),ae)}},[[138,1,2]]]);
//# sourceMappingURL=main.459493ab.chunk.js.map