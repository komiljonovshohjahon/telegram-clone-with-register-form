(this["webpackJsonptelegram-clone"]=this["webpackJsonptelegram-clone"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(23),n=a.n(c),r=a(20),l=a(16),i=a(10),o=a(108),u=a(109),j=a(110),d=a(1),b=function(e){var t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],n=a[1],r=e.chatID,b=e.creds,m=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(l.n)(b,r,{text:t}),n("")};return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"message-form",onSubmit:m,children:[Object(d.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(l.k)(e,r)},onSubmit:m}),Object(d.jsx)("label",{htmlFor:"upload-button",children:Object(d.jsxs)("span",{className:"send-button",children:[Object(d.jsx)(o.a,{className:"picture-icon"}),Object(d.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.n)(b,r,{files:e.target.files,text:""})}})]})}),Object(d.jsx)("button",{type:"submit",className:"send-button",children:Object(d.jsx)(u.a,{className:"send-button"})}),Object(d.jsx)("button",{className:"logout",onClick:function(e){localStorage.removeItem("username"),localStorage.removeItem("password"),document.location.reload()},children:Object(d.jsx)(j.a,{className:"send-button"})})]})})},m=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(d.jsx)("img",{src:a.attachments[0].file,alt:"MESSAGE-ATTACHMENT",className:"message-image",style:{float:"right"}}):Object(d.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},p=function(e){var t,a,s=e.lastMessage,c=e.message,n=!s||s.sender.username!==c.sender.username;return Object(d.jsxs)("div",{className:"message-row",children:[n&&Object(d.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(d.jsx)("img",{src:c.attachments[0].file,alt:"MESSAGE-ATTACHMENT",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(d.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:c.text})]})},h=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],l=function(e,t){return n.people.map((function(a,s){var c;return a.last_read===e.id&&Object(d.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a.person)||void 0===c?void 0:c.avatar,")")}},"read_".concat(s))}))};return n?Object(d.jsxs)("div",{className:"chat-feed",children:[Object(d.jsxs)("div",{className:"chat-title-container",children:[Object(d.jsx)("div",{className:"chat-title",children:null===n||void 0===n?void 0:n.title}),Object(d.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return"".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],i=s===n.sender.username;return Object(d.jsxs)("div",{style:{width:"100%"},children:[Object(d.jsx)("div",{className:"message-block",children:i?Object(d.jsx)(m,{message:n}):Object(d.jsx)(p,{message:n,lastMessage:c[r]})}),Object(d.jsx)("div",{className:"read-reciepts",style:{marginRight:i?"18px":"0px",marginLeft:i?"0px":"68px "},children:l(n,i)})]},"msg_".concat(a))}))}(),Object(d.jsx)("div",{style:{height:"100px"}}),Object(d.jsx)("div",{className:"message-form-container",children:Object(d.jsx)(b,Object(r.a)(Object(r.a)({},e),{},{chatID:a}))})]}):"Loading..."},x=a(15),g=a.n(x),O=a(24),v=a(3),f=a.n(v),N=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(s.useState)(""),j=Object(i.a)(u,2),b=j[0],m=j[1],p=Object(s.useState)(""),h=Object(i.a)(p,2),x=h[0],v=h[1],N=Object(s.useState)(""),S=Object(i.a)(N,2),y=S[0],w=S[1],C=function(){var e=Object(O.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.a.post("https://api.chatengine.io/users/",{username:a,secret:l,first_name:b,last_name:x},{headers:{"PRIVATE-KEY":"36038e03-6686-4394-98c6-c58b0136eb88"}});case 4:return e.next=6,f.a.post("https://api.chatengine.io/chats/5471/people/",{username:a},{headers:{"Project-ID":"b9623237-4ac1-48fc-b999-d0dc80b802c4","User-Name":"jameskidd312","User-Secret":"123123"}});case 6:w("Please enter your information on Log In section!"),o(""),m(""),c(""),v(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("h1",{style:{textTransform:"uppercase"},className:"title",children:"Register"}),Object(d.jsxs)("form",{onSubmit:C,children:[Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(d.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(d.jsx)("input",{type:"text",value:b,onChange:function(e){return m(e.target.value)},className:"input",placeholder:"First Name",required:!0}),Object(d.jsx)("input",{type:"text",value:x,onChange:function(e){return v(e.target.value)},className:"input",placeholder:"Last Name",required:!0}),Object(d.jsx)("div",{align:"center",children:Object(d.jsx)("button",{type:"submit",className:"button",children:Object(d.jsx)("span",{children:"Register"})})}),Object(d.jsx)("h1",{style:{textTransform:"uppercase",fontSize:"25px",color:"#D6FF79",paddingTop:"25px"},className:"title",children:y})]})]})})},S=a(33),y=a(4),w=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(s.useState)(""),j=Object(i.a)(u,2),b=j[0],m=j[1],p=Object(s.useState)("/register"),h=Object(i.a)(p,2),x=h[0],v=h[1],w=function(){var e=Object(O.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"b9623237-4ac1-48fc-b999-d0dc80b802c4","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,f.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),m("Oops, incorrect credentials!");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"wrapper",style:{paddingLeft:"250px"},children:Object(d.jsxs)(S.a,{children:[Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("h1",{style:{textTransform:"uppercase"},className:"title",children:"Log In"}),Object(d.jsxs)("form",{onSubmit:w,children:[Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(d.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(d.jsx)("div",{align:"center",children:Object(d.jsx)("button",{type:"submit",className:"button",children:Object(d.jsx)("span",{children:"Start chatting"})})})]}),Object(d.jsx)("h1",{style:{textTransform:"uppercase",fontSize:"35px",color:"#BEBBBB",paddingTop:"60px"},className:"title",children:b})]}),Object(d.jsx)(S.b,{to:x,children:Object(d.jsx)("button",{className:"button",onClick:function(){v("/"===x?"/register":"/")},children:Object(d.jsx)("span",{children:"Register"})})}),Object(d.jsx)(y.a,{path:"/register",component:N})]})})};a(105);var C=function(){return localStorage.getItem("username")?Object(d.jsx)(l.c,{height:"100vh",projectID:"b9623237-4ac1-48fc-b999-d0dc80b802c4",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(d.jsx)(h,Object(r.a)({},e))}}):Object(d.jsx)(w,{})};n.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.359cd0e0.chunk.js.map