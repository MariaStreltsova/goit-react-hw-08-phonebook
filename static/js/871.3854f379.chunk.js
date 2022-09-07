"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{65:function(n,e,t){t.r(e),t.d(e,{default:function(){return fn}});var r,i,o,a,c,u,s,d,l,h,m,p,f,x,g,b,Z,j,w,v=t(2791),y=t(9434),P=t(4270),k=t(9442),C=function(n){return n.phonebook.items.contacts},z=function(n){return n.phonebook.items.isLoading},A=function(n){return n.phonebook.filter.value},F=function(n){var e=C(n),t=A(n);return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},S=t(5984),I=t(168),N=t(6031),T=N.ZP.label(r||(r=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 24px;\n  color: ",";\n  justify-content: center;\n"])),(function(n){return n.theme.colors.accentText})),_=N.ZP.input(i||(i=(0,I.Z)(["\n  width: 800px;\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  box-shadow: 2px 4px rgba(0, 0, 0, 0.25);\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.none})),q=t(861),L=t(9014),B=t(184),J=(0,S.x0)(),K=function(){var n=(0,y.v9)(A),e=(0,y.I0)();return(0,B.jsxs)(T,{children:[(0,B.jsxs)("label",{children:[" ","Find contacts by name ",(0,B.jsx)(q.adB,{})]}),(0,B.jsx)(_,{type:"text",name:"filter",value:n,onChange:function(n){return e(L.Fr.actions.changeFilter(n.target.value))},id:J})]})},W=N.ZP.h2(o||(o=(0,I.Z)(["\n  text-shadow: ",";\n  color: ",";\n\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.textShadow.standart}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold})),E=N.ZP.span(a||(a=(0,I.Z)(["\n  margin-right: 215px;\n"]))),G=N.ZP.ul(c||(c=(0,I.Z)(["\n  width: ","px;\n  margin: ","px;\n"])),(function(n){return n.theme.space[9]}),(function(n){return n.theme.space[0]})),M=N.ZP.div(u||(u=(0,I.Z)(["\n  display: flex;\n\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[5]})),V=t(885),$=t(6157),D=N.ZP.li(s||(s=(0,I.Z)(["\n  margin-left: ","px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n"])),(function(n){return n.theme.space[0]})),H=N.ZP.div(d||(d=(0,I.Z)(["\n  width: calc(100% / 2);\n"]))),O=(0,N.ZP)($.Z)(l||(l=(0,I.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: end;\n"]))),Q=N.ZP.p(h||(h=(0,I.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),R=N.ZP.div(m||(m=(0,I.Z)(["\n  display: flex;\n  height: 40px;\n  padding: ","px;\n  padding-right: ","px;\n\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: 2px 4px rgba(0, 0, 0, 0.25);\n\n  & + & {\n    margin-top: 10px;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.normal})),U=t(398),X=t(473),Y=function(n){var e=n.id,t=n.name,r=n.number,i=(0,y.I0)(),o=(0,y.v9)(z),a=(0,v.useState)(null),c=(0,V.Z)(a,2),u=c[0],s=c[1];return(0,B.jsxs)(R,{children:[(0,B.jsxs)(D,{children:[(0,B.jsxs)(H,{children:[" ",(0,B.jsx)(Q,{children:t})]}),(0,B.jsxs)(H,{children:[" ",(0,B.jsx)(Q,{children:r})]})]})," ",(0,B.jsx)(O,{type:"button",id:e,onClick:function(){s(e),i((0,k.GK)(e))},disabled:o,variant:"light",children:e===u?(0,B.jsx)(U.Z,{}):(0,B.jsx)(X.Z,{})})]})},nn=function(){var n=(0,y.v9)(F);return(0,B.jsxs)(M,{children:[(0,B.jsx)(W,{children:"Contacts list"}),(0,B.jsxs)(G,{children:[(0,B.jsx)(E,{children:"Name"})," ",(0,B.jsx)("span",{children:"Phone"}),n&&n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,B.jsx)(Y,{id:e,name:t,number:r},e)}))]})]})},en=t(5705),tn=(0,N.ZP)(en.l0)(p||(p=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  height: 300px;\n  padding: ","px;\n\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal})),rn=N.ZP.h2(f||(f=(0,I.Z)(["\n  color: ",";\n  text-shadow: ",";\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(n){return n.theme.colors.accentText}),(function(n){return n.theme.textShadow.standart})),on=(0,N.ZP)(en.gN)(x||(x=(0,I.Z)(["\n  width: 300px;\n  margin-top: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.normal})),an=N.ZP.label(g||(g=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ","px;\n  color: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.accentText})),cn=(0,N.ZP)($.Z)(b||(b=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 200px;\n  padding: ","px;\n  margin-top: ","px;\n  margin-bottom: ","px;\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]})),un=(0,S.x0)(),sn=(0,S.x0)(),dn=function(){var n=(0,y.v9)(C),e=(0,y.I0)();return(0,B.jsx)(en.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var i=t.name,o=t.number,a=t.id,c=r.resetForm;if(n.map((function(n){return n.name})).includes(i))alert(" ".concat(i," is already in contacts."));else{var u={name:i,number:o,id:a};e((0,k.uK)(u))}c()},children:(0,B.jsxs)(tn,{children:[(0,B.jsx)(rn,{children:"Add new contact"}),(0,B.jsxs)(an,{children:["Name",(0,B.jsx)(on,{autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:un})]}),(0,B.jsxs)(an,{children:["Phone",(0,B.jsx)(on,{autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:sn})," "]}),(0,B.jsx)(cn,{type:"submit",variant:"info",children:"Add"})]})})},ln=N.ZP.div(Z||(Z=(0,I.Z)(["\n  display: flex;\n  justify-content: space-around;\n\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[5]})),hn=N.ZP.p(j||(j=(0,I.Z)(["\n  width: fit-content;\n  margin: 0 auto;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  padding: ","px;\n  margin-top: ","px;\n  border-radius: ",";\n  opacity: 0.9;\n  background-color: ",";\n  text-shadow: ",";\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.textShadow.standart})),mn=N.ZP.div(w||(w=(0,I.Z)(["\n  background-color: ",";\n  padding: ","px;\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal})),pn=t(7834),fn=function(){var n=(0,y.v9)(F),e=(0,y.I0)(),t=(0,pn.a)().user;return(0,v.useEffect)((function(){e((0,k.yF)())}),[e]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(P.q,{children:(0,B.jsx)("title",{children:"".concat(t.name,"'s contacts")})}),0!==n.length?(0,B.jsxs)(ln,{children:[(0,B.jsx)(dn,{})," ",(0,B.jsxs)(mn,{children:[(0,B.jsx)(K,{}),(0,B.jsx)(nn,{})]})]}):(0,B.jsxs)(ln,{children:[" ",(0,B.jsx)(dn,{}),(0,B.jsxs)(mn,{children:[(0,B.jsx)(K,{}),(0,B.jsx)(hn,{children:"There are no contacts"})]})]})]})}}}]);
//# sourceMappingURL=871.3854f379.chunk.js.map