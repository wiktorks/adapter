(this.webpackJsonpadapter=this.webpackJsonpadapter||[]).push([[0],{13:function(e,n,t){e.exports=t(21)},18:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(8),i=t.n(l),s=(t(18),t(1)),c=t(2),u=t(3);function o(){var e=Object(c.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 500px;\n  border: 1px solid black;\n  box-shadow: 0 5px 20px -10px;\n  padding: 20px;\n\n  label {\n    margin-top: 10px;\n    align-self: flex-start;\n  }\n\n  input,\n  textarea {\n    font-size: 1.1em;\n    width: 100%;\n    margin: 20px 0;\n  }\n\n  input {\n    box-sizing: border-box;\n  }\n\n  input[type="submit"] {\n    width: 100px;\n    align-self: flex-end;\n    margin: 0;\n  }\n\n  textarea {\n    height: 200px;\n  }\n']);return o=function(){return e},e}var d=u.a.form(o()),m=function(e){var n=e.sendMessage,t=Object(a.useState)(""),l=Object(s.a)(t,2),i=l[0],c=l[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),m=o[0],p=o[1],f=Object(a.useState)(""),g=Object(s.a)(f,2),h=g[0],v=g[1];return r.a.createElement("div",null,r.a.createElement(d,{onSubmit:function(e){e.preventDefault(),n({status:200,data:{data:[[m,i]],parameters:{status:200,msg:h}}})}},r.a.createElement("h1",null,"Sender"),r.a.createElement("label",{htmlFor:"send-name"},"Enter name"),r.a.createElement("input",{type:"text",id:"send-name",required:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{htmlFor:"send-email"},"Enter email"),r.a.createElement("input",{type:"email",id:"send-email",required:!0,onChange:function(e){return p(e.target.value)}}),r.a.createElement("label",{htmlFor:"send-message"},"Enter message"),r.a.createElement("textarea",{id:"send-message",required:!0,onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Send"})))},p=t(12),f=function e(n){Object(p.a)(this,e),this.status=void 0,this.data=void 0,this.msg=void 0,this.status=n.status;var t=Object(s.a)(n.data.data,1);this.data=t[0],this.msg=n.data.parameters.msg};function g(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 20%;\n  border: 1px solid black;\n  box-shadow: 0 5px 20px -10px;\n  padding: 20px;\n\n  ul {\n    margin: 0;\n    align-self: flex-start;\n  }\n\n  p {\n    width: 100%;\n\n    span {\n      float: right;\n    }\n  }\n"]);return g=function(){return e},e}var h=u.a.div(g()),v=function(e){var n=e.receiveMessage,t=Object(a.useState)(null),l=Object(s.a)(t,2),i=l[0],c=l[1];return Object(a.useEffect)((function(){n?c(new f(n)):console.log("sdfsdfsdf")}),[n]),r.a.createElement(h,null,r.a.createElement("h1",null,"Receiver"),r.a.createElement("p",null,"Status: ",r.a.createElement("span",null,null===i||void 0===i?void 0:i.status)),r.a.createElement("p",null,"Data array:"),i?r.a.createElement("ul",null,i.data.map((function(e,n){return r.a.createElement("li",{key:n},e)}))):null,r.a.createElement("p",null,"Message: ",r.a.createElement("span",null,null===i||void 0===i?void 0:i.msg)))};function b(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]);return b=function(){return e},e}var x=u.a.div(b());var E=function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),t=n[0],l=n[1];return r.a.createElement(x,{className:"App"},r.a.createElement(m,{sendMessage:l}),r.a.createElement(v,{receiveMessage:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8c9306e7.chunk.js.map