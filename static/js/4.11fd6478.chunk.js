(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{291:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},296:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(124),r=t(291),o=t.n(r),l=t(17),c=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:o.a.dialog+" "+o.a.active},s.a.createElement(l.b,{to:a},e.name))},m=function(e){return s.a.createElement("div",{className:o.a.dialog},e.message)},u=t(9),d=t(85),g=t(125),b=t(32),p=t(56),f=Object(p.a)(100),v=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:b.b,validate:[p.b,f],name:"newMessageBody",placeholder:"enter message"})),s.a.createElement("div",null,s.a.createElement("button",null,"send")))})),E=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(c,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(m,{message:e.message,key:e.id})}));a.newMessageBody;return e.isAuth?s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},t),s.a.createElement("div",{className:o.a.messages},s.a.createElement("div",null,n)),s.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):s.a.createElement(u.a,{to:"/login"})},h=t(16),_=t(35),j=t(36),O=t(38),y=t(37),w=function(e){return{isAuth:e.auth.isAuth}},A=t(8);a.default=Object(A.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),(function(e){var a=function(a){Object(O.a)(n,a);var t=Object(y.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"login"})}}]),n}(s.a.Component);return Object(h.b)(w)(a)}))(E)}}]);
//# sourceMappingURL=4.11fd6478.chunk.js.map