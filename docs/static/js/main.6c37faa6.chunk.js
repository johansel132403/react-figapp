(this.webpackJsonpsecondapp=this.webpackJsonpsecondapp||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n(8),i=n.n(r),s=(n(16),n(5)),o=n(2),u=function(t){var e=t.setCategory,n=Object(c.useState)(""),r=Object(o.a)(n,2),i=r[0],u=r[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(s.a)(t))})),u(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){u(t.target.value)}})})},j=n(10),d=n(7),l=n.n(d),b=n(9),p=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=10&api_key=lpr5DsZ9Qpegs1gE96PueMTLvlDsB04T"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,c=a.data,r=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized.url}})),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.title,n=t.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__zoomIn",children:[Object(a.jsx)("h3",{children:e}),Object(a.jsx)("img",{src:n,alt:e}),Object(a.jsx)("p",{children:e})]})},f=function(t){var e=t.nameCategory,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(o.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:e}),i?"Cargando...":"Datos Cargados",Object(a.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(a.jsx)(O,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)(["Dragon Ball"]),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(u,{setCategory:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{onClick:function(){r(["Johansel Perez"].concat(Object(s.a)(n)))},children:"Add"}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(f,{nameCategory:t},t)}))})]})};i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6c37faa6.chunk.js.map