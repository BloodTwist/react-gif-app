(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},l=n(1),o=n(8),s=function(e){var t=e.setCategories,n=(e.categories,Object(a.useState)("")),c=Object(l.a)(n,2),i=c[0],u=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(o.a)(e))})),u(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)}}))},m=n(4),f=n.n(m),p=n(7),d=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=HyDooWpDn4V6sMLUrKdllOXWQNgvAJfQ"),e.next=3,fetch(n);case 3:return e.next=5,e.sent.json();case 5:return a=e.sent,r=a.data,c=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){e.id;var t=e.url,n=e.title;return r.a.createElement("div",{className:"card__item animate__animated animate__backInUp"},r.a.createElement("img",{src:t,alt:n,className:"card__img"}),r.a.createElement("p",null,n))},v=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){d(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),console.log(r),r}(t),c=n.data,i=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),i&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"card__grid"},c.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)(["Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai"]),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(s,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(v,{key:e,category:e})}))))};n(15),n(16);i.a.render(r.a.createElement(E,null),document.getElementById("root")),u()},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.fbee300d.chunk.js.map