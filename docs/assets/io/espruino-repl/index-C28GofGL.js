import"../../modulepreload-polyfill-B5Qt9EMX.js";import{l as f}from"../../log-BkcsJhgr.js";import{p as b,a as p,b as y,i as v,c as S}from"../../StackFns-BOj2Sa9A.js";import{s as E}from"../../sleep-DwDBk_RX.js";import{c as k,s as L}from"../../espruino-lL2Yqgry.js";import"../../resolve-el-BUhvOf7L.js";import"../../result-aflA1LW7.js";import"../../interval-type-CIaujdcR.js";import"../../numbers-SvRH5ijj.js";import"../../error-message-BtgnhF27.js";import"../../queue-fns-Cpl8E1uR.js";import"../../simple-event-emitter-BaCTAiR9.js";import"../../state-machine-ROMMoZIR.js";import"../../with-events-BRQckvzl.js";class D{opts;data;constructor(e={},s=[]){this.opts=e,this.data=s}push(...e){return e.length===0?this.data.length:(this.data=b(this.opts,this.data,...e),this.data.length)}forEach(e){this.data.forEach(e)}forEachFromTop(e){[...this.data].reverse().forEach(e)}pop(){const e=p(this.opts,this.data);return this.data=y(this.opts,this.data),e}get isEmpty(){return v(this.opts,this.data)}get isFull(){return S(this.opts,this.data)}get peek(){return p(this.opts,this.data)}get length(){return this.data.length}}const w=(t={},...e)=>new D({...t},[...e]),c=Object.freeze({log:f("#log",{css:`
    .recv { color: hsl(var(--hue-primary), 88%, 96%);}
    .meta { color: hsl(var(--hue-secondary), 0%, 76%);}
    `,reverse:!0}),txtInput:document.querySelector("#txtInput"),selBoard:document.querySelector("#board")});let n=Object.freeze({board:"puck",espruino:void 0,history:w(),historyIndex:0});const h=()=>{const{txtInput:t}=c;t.focus(),t.setSelectionRange(0,t.value.length)},x=t=>{const{txtInput:e}=c;e.value=t,e.setSelectionRange(0,e.value.length)},d=t=>{const{txtInput:e}=c;t?(document.body.classList.add("disconnected"),e.setAttribute("disabled","true"),document.querySelector("#btnSend")?.setAttribute("disabled","true"),document.querySelector("#btnConnect")?.removeAttribute("disabled"),document.querySelector("#btnDisconnect")?.setAttribute("disabled","true")):(document.body.classList.remove("disconnected"),e.removeAttribute("disabled"),document.querySelector("#btnSend")?.removeAttribute("disabled"),document.querySelector("#btnConnect")?.setAttribute("disabled","true"),document.querySelector("#btnDisconnect")?.removeAttribute("disabled"),h())},l=async t=>{const{log:e,txtInput:s}=c,{espruino:o,history:a}=n;if(o===void 0){console.warn("No Espruino instance");return}t===void 0&&(t=s.value),t.endsWith(";")&&(t=t.slice(0,Math.max(0,t.length-1))),a.peek!==t&&a.push(t),u({history:a,historyIndex:a.data.length-1}),e.log(`> ${t}`)?.classList.add("sent");try{const r=await o.eval(t,{timeoutMs:2e3,assumeExclusive:!0,debug:!1});e.log(`< ${r}`)?.classList.add("recv")}catch(r){console.log(r),e.error(r)}h()};document.querySelector("#btnDemo")?.addEventListener("click",async()=>{const{log:t}=c,{espruino:e}=n,a=n.board==="pico"?`
  // http://www.espruino.com/Pico
  // LED on/off
  LED1.set()
  LED1.reset()
  // Read analog pin 5
  analogRead(A5)
  // Read button state
  digitalRead(BTN)
  `:`
  // https://www.espruino.com/Puck.js
  // LED on/off
  LED1.set()
  LED1.reset()
  // Read button state
  BTN.read()
  // Read magnetometer
  Puck.mag()
  // Read accelerometer
  Puck.accel()
  // Read light sensor
  Puck.light()
  // Read temperature
  E.getTemperature()`,r=!(e===void 0||!e.isConnected);r||t.log("// Connect to an Espruino to run this for real");const g=async i=>{if(i)if(i=i.trim(),i.startsWith("//")||e===void 0||!e.isConnected)t.log(i)?.classList.add("meta");else return l(i+`
`)};for await(const i of a.trim().split(`
`))await g(i),await E(r?1e3:400)});document.querySelector("#btnSend")?.addEventListener("click",()=>l());document.querySelector("#btnDisconnect")?.addEventListener("click",()=>{const{espruino:t}=n;t!==void 0&&t.disconnect()});document.querySelector("#btnConnect")?.addEventListener("click",async()=>{const{log:t,selBoard:e}=c,s=e.value;(s==="pico"||s==="puck")&&(u({board:s}),localStorage.setItem("board",s));try{if(n.board==="puck"){const o=await k({debug:!1});u({espruino:o})}else if(n.board==="pico"){const o=await L();u({espruino:o})}}catch(o){t.error(o)}});const q=()=>{const{txtInput:t,selBoard:e}=c;d(!0),t.addEventListener("keyup",o=>{const{history:a}=n;let{historyIndex:r}=n;o.key==="ArrowUp"||o.key==="ArrowDown"?(o.key==="ArrowUp"?r=Math.max(0,r-1):o.key==="ArrowDown"&&(r=Math.min(a.data.length-1,r+1)),u({historyIndex:r}),x(a.data[r]),o.preventDefault()):o.key==="Enter"&&(l(),o.preventDefault())});const s=localStorage.getItem("board");(s==="pico"||s==="puck")&&(e.value=s,u({board:s}))};q();function m(t){const{log:e}=c;e.log(`State: ${t.newState}`)?.classList.add("meta"),t.newState==="connected"?d(!1):d(!0)}function u(t){const e=n.espruino;n=Object.freeze({...n,...t}),t.espruino&&(e&&e.removeEventListener("change",m),t.espruino.addEventListener("change",m),d(!1))}
