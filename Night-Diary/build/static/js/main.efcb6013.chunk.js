(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{74:function(e,t,n){},75:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(20),i=n.n(c),a=(n(74),n(23)),l=n(39),s=n(4),b=(n.p,n(75),n(5)),h=n(34),j=n(16),d=n(35),x=n(36),u=n(26),p=n(3),g=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),i=Object(b.a)(c,2),a=i[0],l=i[1],g=Object(r.useState)(""),O=Object(b.a)(g,2),f=O[0],w=O[1],m=Object(s.f)();return Object(p.jsx)(h.c,{direction:"column",w:"100vw",h:"100vh",align:"center",bgColor:"black",justify:"center",bgGradient:"linear(360deg, #232A33 ,black)",children:Object(p.jsxs)(h.f,{align:"center",spacing:6,h:"full",justify:"center",textColor:"whiteAlpha.100",children:[Object(p.jsx)(h.e,{textColor:"blue.400",fontSize:{base:"2xl",md:"4xl"},my:5,children:"Night Diary"}),Object(p.jsx)(h.e,{textColor:"blue.200",fontSize:{base:"sm",md:"2xl"},children:"Your own safe space to let it all out."}),Object(p.jsxs)(j.a,{px:5,h:"30%",children:[Object(p.jsxs)(d.b,{my:5,children:[Object(p.jsx)(d.c,{pointerEvents:"none",children:Object(p.jsx)(u.a,{color:"white"})}),Object(p.jsx)(d.a,{focusBorderColor:"white",textColor:"white",onChange:function(e){o(e.target.value)},placeholder:"Your name.."})]}),Object(p.jsxs)(d.b,{children:[Object(p.jsx)(d.c,{pointerEvents:"none",children:Object(p.jsx)(u.b,{color:"white"})}),Object(p.jsx)(d.a,{type:"password",focusBorderColor:"white",textColor:"white",onChange:function(e){l(e.target.value)},placeholder:"Enter your password.."})]}),Object(p.jsx)(x.a,{h:"20%",w:"100%",onClick:function(){0==n.length?w("[ Please enter your name. ]"):n.length>50?w("[ Username too long. ]"):0==a.length?w("[ Password cannot be empty. ]"):a.length>100?w("[ Password size overflow. ]"):fetch("https://night-diary.herokuapp.com/entry",{method:"POST",body:JSON.stringify({username:n,password:a}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.Status;"Successfully entered."==t||"New user account created."==t?m("/diary/"+n,{state:{Name:n}}):w(t)}))},bgColor:"#093A53",textColor:"whiteAlpha.600",_hover:{bgColor:"#0C3E66"},boxShadow:"0px 4px 4px #031A2D ",_selected:{bg:"None"},_active:{bg:"None"},mt:5,mb:7,children:Object(p.jsx)(h.e,{fontSize:"lg",children:"Enter"})})]}),Object(p.jsx)(h.e,{textColor:"red.700",fontSize:"2xl",children:f}),Object(p.jsxs)(h.e,{mt:5,px:5,textColor:"#B5E1F8",children:["This site can't see your password. ",Object(p.jsx)(h.d,{textColor:"#67C1EF",children:"Learn more."})]})]})})},O=n(37),f=n(21),w=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),i=Object(b.a)(c,2),a=i[0],l=i[1],j=Object(r.useState)("none"),u=Object(b.a)(j,2),g=u[0],w=u[1],m=Object(r.useState)(""),y=Object(b.a)(m,2),S=y[0],C=y[1],v=Object(r.useState)(""),k=Object(b.a)(v,2),z=(k[0],k[1],Object(r.useState)([])),G=Object(b.a)(z,2),D=(G[0],G[1],Object(r.useState)("")),E=Object(b.a)(D,2),N=(E[0],E[1]),P=Object(s.g)().name,J=Object(s.f)(),_=["January","February","March","April","May","June","July","August","September","October","November","December"],A=function(){w("block"),fetch("https://night-diary.herokuapp.com/diaries",{method:"POST",body:JSON.stringify({name:P}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.Diaries;o(t)})),w("none")};return Object(r.useEffect)((function(){A()}),[n]),Object(p.jsxs)(h.c,{direction:"column",w:"full",align:"center",justify:"center",p:10,bgGradient:"linear(360deg, #232A33 ,black)",children:[Object(p.jsxs)(h.e,{fontSize:"5xl",textColor:"white",my:10,children:[P,"'s Entry"]}),Object(p.jsx)(d.a,{mt:10,mb:5,value:S,fontSize:"2xl",fontWeight:"bold",textColor:"#b1caf0",placeholder:"Title...",onChange:function(e){C(e.target.value)},w:"full",h:"8vh"}),Object(p.jsx)(O.a,{w:"full",h:"60vh",bg:"#292C2D",value:a,focusBorderColor:"#292C2D",border:"none",_focus:{boxShadow:"0px 5px 5px black"},onChange:function(e){l(e.target.value)},boxShadow:"0px 5px 5px black",fontSize:"2xl",textColor:"white",p:10,resize:"none"}),Object(p.jsxs)(h.c,{direction:"row",bgGradient:"linear(#676579,#01101a)",align:"center",justify:"space-evenly",boxShadow:"0px 5px 5px black",w:"45%",h:"10vh",children:[Object(p.jsx)(x.a,{w:"15%",bgGradient:"linear(green.500,green.700)",boxShadow:"0px 5px 5px black",_hover:{bgGradient:"linear(green.700,green.800)"},onClick:function(){var e;e=function(){var e=new Date,t=_[e.getMonth()],n=e.getHours(),r=e.getMinutes(),o="";return 0==n&&(o="0"),t+" "+String(e.getDate()).padStart(2,"0")+","+e.getFullYear()+" "+o+n+":"+r}(),w("block"),fetch("https://night-diary.herokuapp.com/new",{method:"POST",body:JSON.stringify({name:P,message:a,title:S,time:e}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.Status;"Successfully entered."==t?console.log("Submit: ",t):N(t),w("none")})),w("none")},children:Object(p.jsx)(h.e,{fontSize:"lg",textColor:"white",children:"Post"})}),Object(p.jsx)(x.a,{w:"15%",bgGradient:"linear(yellow.300,yellow.500)",boxShadow:"0px 5px 5px black",_hover:{bgGradient:"linear(yellow,yellow.700)"},onClick:function(){l("")},mx:3,children:Object(p.jsx)(h.e,{fontSize:"lg",textColor:"black",children:"Clear"})}),Object(p.jsx)(x.a,{w:"15%",bgGradient:"linear(red.800,red.700)",boxShadow:"0px 5px 5px black",_hover:{bgGradient:"linear(red.800,red.500)"},onClick:function(){J("/")},mx:3,children:Object(p.jsx)(h.e,{fontSize:"lg",textColor:"black",children:"Exit"})})]}),Object(p.jsx)(h.b,{w:"75%",mt:10}),Object(p.jsx)(h.e,{my:7,fontSize:"5xl",textColor:"white",children:"My Diary"}),Object(p.jsxs)(h.f,{spacing:6,mt:10,w:"50%",h:"50vh",overflowY:"auto",css:{"&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-track":{width:"6px"},"&::-webkit-scrollbar-thumb":{background:"#3888ff",borderRadius:"24px"}},children:["none"==g&&n.map((function(e){return Object(p.jsxs)(h.a,{w:"full",h:"25vh",boxShadow:"0px 2px 2px white",textColor:"white",bgGradient:"linear(to-r,#2a3545,black)",p:10,children:[Object(p.jsxs)(h.e,{fontSize:"2xl",children:[e.time,Object(p.jsx)("br",{}),e.title]}),Object(p.jsx)(x.a,{w:"15%",bgGradient:"linear(green.300,green.700)",mt:2,_hover:{bgGradient:"linear(green.700,green.800)"},onClick:function(){var t,n;t=e.title,n=e.message,C(t),l(n)},children:Object(p.jsx)(h.e,{fontSize:"lg",textColor:"white",children:"Open"})}),Object(p.jsx)(x.a,{w:"15%",bgGradient:"linear(red.300,red.700)",mt:2,ml:4,_hover:{bgGradient:"linear(red.700,red.800)"},onClick:function(){var t;t=e.time,fetch("https://night-diary.herokuapp.com/delete",{method:"POST",body:JSON.stringify({time:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){A()}))},children:Object(p.jsx)(h.e,{fontSize:"lg",textColor:"white",children:"Delete"})})]})})),Object(p.jsx)(f.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl",display:g})]})]})},m=function(){return Object(p.jsx)(l.a,{children:Object(p.jsx)(a.a,{children:Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/",element:Object(p.jsx)(g,{})}),Object(p.jsx)(s.a,{path:"/diary/:name",element:Object(p.jsx)(w,{})})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),y()}},[[84,1,2]]]);
//# sourceMappingURL=main.efcb6013.chunk.js.map