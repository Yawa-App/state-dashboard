import{V as j,J as b,r as d,j as e,y as f,X as w,p as y,S as c,Y as F,T as h,I as P,L as S,W as v}from"./index-690d25d7.js";import{u as g,L as E}from"./LoadingButton-eaea74e7.js";import"./authSlide-7e62207c.js";import{C}from"./Card-8d1f3c65.js";import{I,T as L}from"./TextField-182a1ec5.js";const k=j.injectEndpoints({endpoints:o=>({forgetPassword:o.mutation({query:t=>({url:"/api/auth/forgot-password",method:"POST",body:t})})})}),{useForgetPasswordMutation:T}=k,B=()=>{const o=g(),[t]=T();return{handleForgetPassword:async(i,l,n)=>{try{const r=await t({email:i}).unwrap();o.push("/reset-password")}catch(r){n(r.data),console.log(r)}finally{l(!1)}}}};function R(){const o=b(),t=g(),[s,i]=d.useState(""),[l,n]=d.useState(!1),[r,m]=d.useState(null),{handleForgetPassword:x}=B(),p=async a=>{a.preventDefault(),n(!0),await x(s,n,m)},u=a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a);return e.jsx(f,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",...w({color:y(o.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"})},children:e.jsxs(c,{sx:{width:"45%",height:"104%",p:5,alignItems:"center",justifyContent:"center"},children:[e.jsx(F,{sx:{mb:6}}),e.jsx(h,{variant:"h4",style:{marginBottom:30,textAlign:"center"},children:"Forgot Password?"}),e.jsx(C,{sx:{p:4,width:"100%",maxWidth:659,borderRadius:1,boxSizing:"border-box"},children:e.jsxs("form",{onSubmit:p,children:[e.jsxs(c,{spacing:2,sx:{display:"grid",width:"100%"},children:[e.jsx(I,{htmlFor:"email",children:"Email"}),e.jsx(L,{id:"email",name:"email",value:s,onChange:a=>i(a.target.value),error:!!s&&!u(s),helperText:s&&!u(s)?"Enter a valid email":"",placeholder:"Enter your email address",inputProps:{"aria-label":"Email"},fullWidth:!0,size:"small",sx:{"& .MuiInputBase-root":{boxSizing:"border-box"},py:0}})]}),r&&e.jsx(h,{color:"error",sx:{mb:3},children:r}),e.jsx(E,{fullWidth:!0,type:"submit",variant:"contained",size:"medium",sx:{mt:5,py:1,backgroundColor:"#03BDE9",color:"#FFF","&:hover":{backgroundColor:"#02A8D1"},boxSizing:"border-box"},loading:l,children:"Reset Password"})]})}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"center",sx:{my:3},children:[e.jsx(P,{onClick:()=>t.push("/login"),children:e.jsx("img",{src:"assets/icons/Feather_Icons.svg",alt:""})}),e.jsx(S,{variant:"subtitle2",underline:"hover",onClick:()=>t.push("/login"),sx:{color:"#204D88"},children:"Return to Log in"})]})]})})}function M(){return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx("title",{children:" Password Reset "})}),e.jsx(R,{})]})}export{M as default};