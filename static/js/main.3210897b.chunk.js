(this.webpackJsonpcompare_prices=this.webpackJsonpcompare_prices||[]).push([[0],[,function(e,t,n){e.exports={product:"Product_product__11549",row:"Product_row__2mOsb",result:"Product_result__1WNRB",lowest:"Product_lowest__2Ug0C",button__removeprod:"Product_button__removeprod__198uv"}},,function(e,t,n){e.exports={overlay:"ModalInfo_overlay__1nQtl",modal:"ModalInfo_modal__nkhbJ",modal__header:"ModalInfo_modal__header__12K4R",modal__content:"ModalInfo_modal__content__j8wCp",modal__footer:"ModalInfo_modal__footer__4uTvE"}},,,function(e,t,n){e.exports={header:"Header_header__2PY_9",button__info:"Header_button__info__1RSrK"}},function(e,t,n){e.exports={footer:"Footer_footer__2d4U0",button__reset:"Footer_button__reset__1c0Um"}},,,function(e,t,n){e.exports={content:"Content_content__13osd"}},function(e,t,n){e.exports={button_addprod:"ProdAddButton_button_addprod__2K5NH"}},function(e,t,n){e.exports=n.p+"static/media/image_info2.f87b10ce.jpg"},function(e,t,n){e.exports={wrapper:"App_wrapper__1FH5-"}},,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(14),i=n(5),d=n(6),u=n.n(d);function s(e){return o.a.createElement("header",{className:u.a.header},o.a.createElement("h1",null,"\u0421\u0440\u0430\u0432\u043d\u0438 \u0446\u0435\u043d\u0443"),o.a.createElement("button",{className:u.a.button__info,title:"\u0441\u043f\u0440\u0430\u0432\u043a\u0430",onClick:function(){return e.showInfo()}},"i"))}var m=n(1),_=n.n(m);function f(e){var t=e.product,n=t.id===e.coloredId,a=e.removeProd;return o.a.createElement("div",{key:t.id,className:_.a.product},o.a.createElement("div",{className:_.a.row},o.a.createElement("label",{htmlFor:"price"+e.index},"\u0446\u0435\u043d\u0430"),o.a.createElement("input",{id:"price"+e.index,type:"text",placeholder:"125 (\u0440)",value:t.price,onChange:function(n){return e.onHandlePriceChange(t.id,n.target.value)}})),o.a.createElement("div",{className:_.a.row},o.a.createElement("label",{htmlFor:"weight"+e.index},"\u0432\u0435\u0441"),o.a.createElement("input",{id:"weight"+e.index,type:"text",placeholder:"800 (\u0433\u0440)",value:t.weight,onChange:function(n){return e.onHandleWeightChange(t.id,n.target.value)}})),o.a.createElement("div",{className:_.a.row},o.a.createElement("div",{className:"".concat(_.a.result," ").concat(n?_.a.lowest:"")},t.result)),o.a.createElement("button",{className:_.a.button__removeprod,onClick:function(){return a(t.id)}},"+"))}var p=n(10),h=n.n(p),v=n(11),E=n.n(v);function g(e){var t=e.addProd;return o.a.createElement("div",null,o.a.createElement("button",{className:E.a.button_addprod,title:"add new product",onClick:function(){return t()}},"+"))}function b(e){var t=e.products;return o.a.createElement("main",{className:h.a.content},t.map((function(t,n){return o.a.createElement(f,{key:t.id,product:t,index:n,coloredId:e.coloredId,removeProd:e.removeProd,onHandlePriceChange:e.onHandlePriceChange,onHandleWeightChange:e.onHandleWeightChange})})),o.a.createElement(g,{addProd:e.addProd}))}var w=n(7),P=n.n(w);function C(e){return o.a.createElement("footer",{className:P.a.footer},o.a.createElement("button",{className:P.a.button__reset,title:"\u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435",onClick:function(){return e.removeAll()}},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"))}var N=n(3),x=n.n(N),k=n(12),y=n.n(k);function H(e){function t(t){t.stopPropagation(),"close"===t.target.getAttribute("data-close")&&e.closeModal()}return o.a.createElement("div",{className:x.a.overlay,style:{visibility:e.modalVisibility},"data-close":"close",onClick:function(e){return t(e)}},o.a.createElement("div",{className:x.a.modal},o.a.createElement("div",{className:x.a.modal__content},o.a.createElement("p",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443 \u0438 \u0432\u0435\u0441 \u0442\u043e\u0432\u0430\u0440\u0430"),o.a.createElement("p",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u0438\u0442 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 ",o.a.createElement("span",null,"\u0432\u044b\u0433\u043e\u0434\u043d\u0443\u044e")," \u043f\u043e\u0437\u0438\u0446\u0438\u044e"),o.a.createElement("img",{src:y.a,alt:""})),o.a.createElement("div",{className:x.a.modal__footer},o.a.createElement("button",{"data-close":"close",onClick:function(e){return t(e)}},"Ok"))))}var I=n(13),M=n.n(I);var j=function(){var e=o.a.useState([{id:0,price:"",weight:"",result:""}]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=o.a.useState(""),d=Object(i.a)(c,2),u=d[0],m=d[1],_=o.a.useState("hidden"),f=Object(i.a)(_,2),p=f[0],h=f[1];function v(e,t){var n=e/(t||1);return(Math.floor(1e4*n)/1e4*100).toFixed(2)}function E(){var e,t=[];return n.forEach((function(e){t.push({id:e.id,result:e.result})})),(e=t).sort((function(e,t){return+e.result>+t.result?1:-1})),e[0].id,t[0].id}return Object(a.useEffect)((function(){})),o.a.createElement("div",{className:M.a.wrapper},o.a.createElement(s,{showInfo:function(){h("visible")}}),o.a.createElement(b,{products:n,coloredId:u,addProd:function(){r([{id:Date.now(),price:"",weight:"",result:""}].concat(Object(l.a)(n)))},removeProd:function(e){r(n.filter((function(t){return t.id!==e})))},onHandlePriceChange:function(e,t){t>=0&&r(n.map((function(n){return n.id===e&&(n.price=t,n.result=+v(n.price,n.weight)),m(E()),n})))},onHandleWeightChange:function(e,t){t>=0&&r(n.map((function(n){return n.id===e&&(n.weight=t,n.result=+v(n.price,n.weight)),m(E()),n})))}}),o.a.createElement(C,{removeAll:function(){r([{id:Date.now(),price:"",weight:"",result:""}])}}),o.a.createElement(H,{modalVisibility:p,closeModal:function(){h("hidden")}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.3210897b.chunk.js.map