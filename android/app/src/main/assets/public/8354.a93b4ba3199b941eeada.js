(self.webpackChunkadivina=self.webpackChunkadivina||[]).push([[8354],{8354:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>w,keyboardDidResize:()=>c,resetKeyboardAssist:()=>r,setKeyboardClose:()=>g,setKeyboardOpen:()=>b,startKeyboardAssist:()=>h,trackViewportChanges:()=>u});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),w()||c(e)?b(e):f(e)&&g(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>b(e,t)),e.addEventListener("keyboardDidHide",()=>g(e))},b=(e,t)=>{l(e,t),n=!0},g=e=>{y(e),n=!1},w=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,c=e=>n&&!f(e),f=e=>n&&d.height===e.innerHeight,l=(e,t)=>{const i=new CustomEvent(s,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);