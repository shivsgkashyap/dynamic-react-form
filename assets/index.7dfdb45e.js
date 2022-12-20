var C=Object.defineProperty,$=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var T=(e,r,n)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,V=(e,r)=>{for(var n in r||(r={}))A.call(r,n)&&T(e,n,r[n]);if(S)for(var n of S(r))E.call(r,n)&&T(e,n,r[n]);return e},z=(e,r)=>$(e,q(r));import{s as p,j as B,c as I,r as f,W as O,a as P,R as D}from"./vendor.10da754c.js";const H=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))h(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&h(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function h(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};H();const R=p.form`
  box-sizing: border-box;
  letter-spacing: 0.3px;

  img {
    width: 0.875em;
    margin-right: 0.5em;
  }

  button {
    outline: 0;
  }
`,W=p.div`
  border-radius: 3px;
  box-shadow: 0 4px 4px rgb(87 100 126 / 21%);
  background-color: #fff;
  max-width: 752px;
  display: flex;
  flex-direction: column;
  margin: 72px auto;
  width: 100%;
  align-items: flex-start;
  padding: 0 38px;
  list-style: none;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    margin: 0 !important;
    padding: 0 !important;
  }

  @media screen and (max-width: 768px) {
    max-width: inherit !important;
    margin: 0 !important;
    padding: 0 14px !important;
  }
`,G=p.header`
  width: 100%;

  @media screen and (max-width: 480px) {
    margin: 0 !important;
    padding: 28px 14px !important;
  }
  @media screen and (max-width: 768px) {
    margin: 0 -14px;
    padding: 28px;
  }

  .form-header {
    margin: 0 -38px;
    padding: 2.5em 2.5em;
    border-color: #d7d8e1;
    border-bottom: 1px solid #d7d8e1;

    .form-header-text {
      margin-bottom: auto;
      margin-top: auto;
      line-height: 1.45;
      letter-spacing: 0.3px;
      font-size: 1.94em;
    }
  }
`,K=p.section`
  width: 100%;

  .form-buttons-wrapper {
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 10px -38px 10px;
    padding: 30px 52px;
    border-top: 1px solid #e5e7f2;

    @media screen and (max-width: 480px) {
      padding: 30px 14px !important;
      margin: 0 !important;
    }

    @media screen and (max-width: 768px) {
      margin: 0 -14px !important;
      padding: 30px 14px !important;
      flex-wrap: nowrap !important;
    }

    .form-submit-button {
      background-color: #18bd5b;
      border-color: #18bd5b;
      color: #fff;
      width: auto;
      min-width: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3em;
      font-size: 1em;
      border-radius: 4px;
      border: 1px solid;
      cursor: pointer;
      font-weight: 500;

      @media screen and (max-width: 480px) {
        width: 100% !important;
        margin-left: 0 !important;
        justify-content: center !important;
        min-width: 100px !important;
      }
    }
  }
`,Y=p.label`
  color: #2c3345;
  display: inline-block;
  font-size: 16px;
  word-break: break-word;
  width: 100%;
  margin-left: 2px;
  margin-bottom: 14px;
  font-weight: 550;

  .form-required {
    color: #f23a3c;
    margin-left: 4px;
  }
`,U=p.section`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 12px 10px;
  margin: 29px 4px 0px;
  border-radius: 3px;
  position: relative;
  width: 100%;
  transition: background-color 0.15s;
  background-color: ${e=>e.bg};
`,_=p.div`
  input {
    width: 100%;
    outline: none;
    margin: 0;
    text-align: left;
    font-size: 1em;
    border-radius: 4px;
    padding: 0 0.625em;
    height: 2.5em;
    border: ${e=>e.border?"1px solid red":"1px solid #b8bdc9"};

    &:hover {
      border: ${e=>e.border?"1.5px solid red":"1.5px solid blue"};
    }
  }
`,J=p.div`
  width: 100%;
  outline: none;
  margin: 0;
  text-align: left;
  font-size: 1em;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 2em;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    .form-sub-label-container {
      flex: 1 1 auto !important;
    }
  }

  @media screen and (max-width: 480px) {
    .sub-label-media {
      margin-left: 8px;
    }
  }

  .form-sub-label-container {
    vertical-align: top;
    min-width: 0;
    flex: 0 1 100%;
  }

  @media screen and (max-width: 480px) {
    input {
      width: 100% !important;
    }
  }

  .form-sub-label {
    min-height: 13px;
    color: #57647e;
    font-size: 0.75em;
    margin-top: 11px;
    margin-left: 2px;
    display: block;
    word-break: break-word;
  }

  .suggestions-input {
    width: 100%;
  }

  .hear-dropdown,
  .textarea-input {
    min-width: 100%;
    max-width: 100%;
    height: 2.5em;
    background-color: #fff;
    border-color: #b8bdc9;
    color: #2c3345;
    font-size: 1em;
    border-radius: 4px;
    padding: 0.5em;
    outline: none;
  }

  .textarea-input {
    height: 163px;
  }

  .recommend-input {
    width: 100%;
  }

  .form-checkboxes {
    width: 100%;
  }

  .form-checkbox {
    flex: 0 1 5%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px),
    screen and (max-device-width: 768px) and (orientation: portrait),
    screen and (max-device-width: 415px) and (orientation: landscape) {
    .form-label-ref {
      padding-right: 4px !important;
    }
  }

  .form-label-ref {
    width: 100%;
    margin-left: 2px;
    margin-bottom: 14px;
    font-weight: 550;
    color: #2c3345;
    display: inline-block;
    font-size: 16px;
    word-break: break-word;
  }

  @media screen and (max-width: 480px) {
    .form-matrix-table {
      width: 100% !important;
    }
  }

  .form-matrix-table {
    display: grid;
    grid-template-columns: 10% 25% 25% 40%;
    width: 100%;
    margin-top: 1em;
  }

  .form-matrix-values {
    border-left: 1px solid #c3cad8;
    border-bottom: 1px solid #c3cad8;
    position: relative;
  }

  .top-style {
    text-align: center;
    border-top: 1px solid #c3cad8;
    background-color: #e5eaf4;
    font-size: 0.75em;
    font-weight: 500;
    padding: 12px;
  }

  .first-style {
    border-radius: 4px 0 0;
  }

  .end-style {
    border-right: 1px solid #c3cad8;
  }

  .top-style.end-style {
    border-radius: 0 4px 0;
  }

  .bottom-style.end-style {
    border-radius: 0 0 4px;
  }

  .small-top {
    visibility: hidden;
  }

  .small-top,
  .small-middle,
  .small-bottom {
    background-color: #e5eaf4;
    font-size: 0.75em;
    font-weight: 500;
    padding: 12px;
  }

  .small-bottom {
    border-radius: 0 0 0 4px;
  }

  .form-textbox {
    font-size: 1em;
    min-width: 100%;
    outline: none;
    margin: 0;
    text-align: left;
    padding: 0 0.625em;
    height: 2.5em;
    border: 1px solid #fff;
  }

  .form-error-message {
    color: #fff;
    background-color: #f23a3c;
    font-size: 0.75em;
    margin-top: 8px;
    border-radius: 4px;
    display: inline-block;
    padding: 0.25em 0.5em 0.25em 0.5em;
  }
`,Q=p.div`
  animation-name: fadeIn;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  width: 100%;
  position: fixed;
  transition: 0.3s;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: ${e=>e.errorCounter?"rgba(242, 58, 60, 0.94)":"rgba(201, 251, 203, 0.95)"};
  color: ${e=>e.errorCounter?"#fff":"#2c3345"};
  visibility: ${e=>e.errorMessageVisibility?"visible":"hidden"};

  .error-navigation-inner {
    max-width: 752px;
    background-position: 0;
    display: flex;
    padding: 10px;
    align-items: center;
    transition-property: background-color, background-size, background-position,
      padding;
    transition-duration: 0.2s;
    margin: 0 auto;

    .error-navigation-message {
      flex: 1;
      display: ${e=>e.errorCounter?"block":"none"};
    }

    strong {
      background-color: #fff;
      color: #2c3345;
      font-size: 14px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 20px;
    }

    .error-navigation-message-2 {
      flex: 1;
      display: ${e=>e.errorCounter?"none":"block"};
    }

    .error-navigation-button {
      height: 40px;
      padding: 0 20px;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      background-color: ${e=>e.errorCounter?"#fff":"#18bd5b"};
      color: ${e=>e.errorCounter?"#2c3345":"#fff"};
    }
  }
`,X=p.footer`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 0.5em;

  p {
    color: white;
  }

  a {
    align-self: center;
    margin-left: 0.5em;
  }

  img {
    height: 1.5em;
    width: 1.5em;
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: rotate(360deg) scale(1.2);
  }
`,t=B.exports.jsx,l=B.exports.jsxs;function Z({value:e,formErrors:r,handleChange:n,handleBlur:h,inputConfig:{label:a,name:i,type:d,placeHolder:g,initialValue:N,errorMessageFunction:y,subLabel:c,width:w,options:b}}){return d==="smallTextBox"?l("div",{className:"form-sub-label-container",style:{flexBasis:w+"%"},children:[t(_,{border:r[i],children:t("input",{type:d,name:i,value:e,onChange:n,onBlur:h,placeholder:g})}),c?l("label",{className:"form-sub-label",children:[" ",c," "]}):null,r[i]?t("div",{className:"form-error-message",children:r[i]}):null]}):d==="largeTextBox"?l("div",{className:"suggestions-input",children:[t("textarea",{className:"textarea-input"}),r[i]?t("div",{className:"form-error-message",children:r[i]}):null]}):d==="dropdown"?l("div",{className:"hear-input",children:[l("select",{className:"hear-dropdown",children:[t("option",{value:"",children:" Please Select "}),b.map(u=>l("option",{value:u,children:[" ",u," "]}))]}),r[i]?t("div",{className:"form-error-message",children:r[i]}):null]}):d==="checkbox"?l("div",{className:"form-checkboxes",children:[b.map(u=>l("div",{className:"form-checkbox-item",children:[t("input",{type:"checkbox",className:"form-checkbox"}),l("label",{children:[" ",u," "]})]})),r[i]?t("div",{className:"form-error-message",children:r[i]}):null]}):d==="referenceBox"?l("div",{className:"form-matrix-table",children:[t("div",{className:"form-matrix-values small-top"}),b.map((u,v)=>t("div",{className:I("form-matrix-values","top-style",{"first-style":v===0,"end-style":v===b.length-1}),children:u})),t("div",{className:"form-matrix-values small-middle",children:"1"}),t("div",{className:"form-matrix-values middle-style",children:t("input",{type:"text",className:"form-textbox"})}),t("div",{className:"form-matrix-values middle-style",children:t("input",{type:"text",className:"form-textbox"})}),t("div",{className:"form-matrix-values middle-style end-style",children:t("input",{type:"text",className:"form-textbox"})}),t("div",{className:"form-matrix-values small-bottom",children:"2"}),t("div",{className:"form-matrix-values bottom-style",children:t("input",{type:"text",className:"form-textbox"})}),t("div",{className:"form-matrix-values bottom-style",children:t("input",{type:"text",className:"form-textbox"})}),t("div",{className:"form-matrix-values bottom-style end-style",children:t("input",{type:"text",className:"form-textbox"})}),r[i]?t("div",{className:"form-error-message",children:r[i]}):null]}):null}function ee({sections:e}){const r=e.reduce((o,s)=>(s.forEach(m=>{o[m.name]=m.initialValue}),o),{}),[n,h]=f.exports.useState(r),[a,i]=f.exports.useState({}),[d,g]=f.exports.useState([]),[N,y]=f.exports.useState(!1),c=Object.keys(a).length,[w,b]=f.exports.useState(!1);f.exports.useEffect(()=>{N&&(Object.keys(a).length===0?(g([]),y(!1)):(y(!1),g(Object.keys(a))))},[N,a]),f.exports.useEffect(()=>{const o=k(n),s=Object.keys(o).filter(m=>d.includes(m)).reduce((m,x)=>(m[x]||(m[x]=o[x]),m),{});i(s)},[d,n]),f.exports.useEffect(()=>{c>=1&&b(!0)},[c,w]);const u=o=>{const{name:s,value:m}=o.target;h(z(V({},n),{[s]:m}))},v=o=>{o.preventDefault(),i(k(n)),y(!0)},L=o=>{d.includes(o.target.name)||g([...d,o.target.name])},M=o=>{window.scroll({top:document.body.scrollHeight,behavior:"smooth"}),b(!1)},j=o=>{const s=Object.keys(a);s.length>0&&document.querySelector(`[name="${s[0]}"]`).scrollIntoView({behavior:"smooth",block:"center",inline:"start"})},k=o=>e.reduce((s,m)=>(m.forEach(x=>{if(!("errorMessageFunction"in x))return s;const F=x.errorMessageFunction(o[x.name]);F&&(s[x.name]=F)}),s),{});return t(R,{onSubmit:v,children:l(W,{children:[t(Q,{errorCounter:c,errorMessageVisibility:w,children:l("div",{className:"error-navigation-inner",children:[l("span",{className:"error-navigation-message",children:[c>1?"There are ":"There is ",t("strong",{children:c}),c>1?" errors in this page. Please correct them before moving on.":" error in this page. Please correct it before moving on."]}),t("span",{className:"error-navigation-message-2",children:"Well done! All errors are fixed."}),t("button",{className:"error-navigation-button",type:"button",onClick:c>=1?j:M,children:c>=1?"See Errors":"Done"})]})}),t(G,{children:t("div",{className:"form-header",children:t("h1",{className:"form-header-text",children:"Customer Details:"})})}),e.map(o=>l(U,{bg:o.some(s=>a[s.name])?"#ffeded":"white",children:[l(Y,{children:[o[0].label,o[0].errorMessageFunction?t("span",{className:"form-required",children:"*"}):null]}),t(J,{children:o.map(s=>t(Z,{inputConfig:s,value:n[s.name],formErrors:a,handleChange:u,handleBlur:L}))})]})),t(K,{children:t("div",{className:"form-buttons-wrapper",children:t("button",{type:"submit",className:"form-submit-button",children:"Submit"})})})]})})}function te(){return t("main",{className:"App",children:t(ee,{sections:[[{label:"Full Name",name:"firstName",type:"smallTextBox",initialValue:"",errorMessageFunction:e=>e?null:"This field is required!",subLabel:"First Name",width:"47"},{name:"lastName",type:"smallTextBox",initialValue:"",errorMessageFunction:e=>e?null:"This field is required!",subLabel:"Last Name",width:"47"}],[{label:"Address",name:"address-one",type:"smallTextBox",initialValue:"",errorMessageFunction:e=>e?null:"This field is required!",subLabel:"Address Line One"},{name:"address-two",type:"smallTextBox",initialValue:"",errorMessageFunction:e=>e?null:"This field is required",subLabel:"Address Line Two"},{name:"state",type:"smallTextBox",initialValue:"",errorMessageFunction:e=>e?null:"This field is required!",subLabel:"State",width:"47"},{name:"postcode",type:"smallTextBox",initialValue:"",subLabel:"Postcode",width:"47"}],[{label:"Phone Number",name:"number",type:"smallTextBox",placeHolder:"(000) 000-0000",initialValue:"",errorMessageFunction:e=>e?null:"This field is required!",width:"47"}],[{label:"E-mail",name:"email",type:"smallTextBox",placeHolder:"ex: example@hotmail.com",initialValue:"",subLabel:"example@example.com",width:"47"}],[{label:"How did you hear about us?",name:"hearDropdown",type:"dropdown",initialValue:"",options:["Newspaper","Internet","Magazine","Social Media"],width:"47"}],[{label:"Feedback about us:",name:"feedback",type:"largeTextBox",initialValue:""}],[{label:"Suggestions if any for further improvement:",name:"feedback",type:"largeTextBox",initialValue:""}],[{label:"Will you be willing to recommend us?",name:"recommend",type:"checkbox",options:["Yes","Maybe","No"],initialValue:""}],[{label:"Please give reference of any two people whom you feel:",name:"twoReferences",type:"referenceBox",options:["First Name","Last Name","Address"],initialValue:""}]]})})}const re=O`
* {
  box-sizing: border-box;
  margin: 0;
  
}

body {
  font-family: Inter, sans-serif;
  background-color: #f3f3fe;
  color: #2c3345;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;var ie="/<dynamic-react-form>/assets/github.ecbb1b13.png";function ae(){return l(X,{children:[l("p",{children:["Copyright \xA9 ",new Date().getFullYear()," Shiv Kashyap"]}),t("a",{href:"https://github.com/shivsgkashyap",target:"_blank",children:t("img",{src:ie,alt:"Github Logo"})})]})}P.createRoot(document.getElementById("root")).render(l(D.Fragment,{children:[t(re,{}),t(te,{}),t(ae,{})]}));
