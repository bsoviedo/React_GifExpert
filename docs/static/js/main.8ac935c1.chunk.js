(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),i=(n(15),n(2)),s=n(9),j=n(0),u=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),u(""))},children:[Object(j.jsx)("label",{})," Por favor ingresa una categor\xeda",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){u(e.target.value)},placeholder:"Categoria"})]})},o=n(10),b=n(6),d=n.n(b),l=n(8),p=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"xPnqzSijoXkXdhjeKHbpnUdAL4Xfk82x","https://api.giphy.com/v1/gifs/search",n="https://api.giphy.com/v1/gifs/search?api_key=xPnqzSijoXkXdhjeKHbpnUdAL4Xfk82x&q="+encodeURI(t),e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){e.id;var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsxs)("p",{children:[" ",t]})]})},O=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(e).then((function(e){a({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,a=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{children:[" ",t]}),a&&Object(j.jsx)("p",{children:"Loading ..."}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(j.jsx)(x,Object(o.a)({},e),e.id)}))})]})},f=function(){var e=Object(r.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)(u,{setCategories:c}),Object(j.jsx)("br",{}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(O,{category:e},e)}))})]})},h=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)("hr",{}),Object(j.jsx)(f,{})]})};a.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8ac935c1.chunk.js.map