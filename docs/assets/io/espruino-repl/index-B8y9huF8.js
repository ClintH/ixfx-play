import"../../modulepreload-polyfill-B5Qt9EMX.js";import{e as p}from"../../io-Dr032n1H.js";import{l as g}from"../../dom-CHyIdTDe.js";import{s as y}from"../../collections-CC1DmOuq.js";import"../../flow-C8Zlxj7K.js";import{f as v}from"../../src-CURfSkGx-Bgs9tt00.js";import"../../src-2eX6lIN8-VI_Nykma.js";import"../../src-CtUbQWIP-Vt_fnXRn.js";import"../../dist-DE4H3J9W-C3hFOwYK.js";const a=Object.freeze({log:g("#log",{css:`
    .recv { color: hsl(var(--hue-primary), 88%, 96%);}
    .meta { color: hsl(var(--hue-secondary), 0%, 76%);}
    `,reverse:!0}),txtInput:document.querySelector("#txtInput"),selBoard:document.querySelector("#board")});let s=Object.freeze({board:"puck",espruino:void 0,history:y.mutable(),historyIndex:0});const b=()=>{const{txtInput:e}=a;e.focus(),e.setSelectionRange(0,e.value.length)},S=e=>{const{txtInput:t}=a;t.value=e,t.setSelectionRange(0,t.value.length)},d=e=>{const{txtInput:t}=a;e?(document.body.classList.add("disconnected"),t.setAttribute("disabled","true"),document.querySelector("#btnSend")?.setAttribute("disabled","true"),document.querySelector("#btnConnect")?.removeAttribute("disabled"),document.querySelector("#btnDisconnect")?.setAttribute("disabled","true")):(document.body.classList.remove("disconnected"),t.removeAttribute("disabled"),document.querySelector("#btnSend")?.removeAttribute("disabled"),document.querySelector("#btnConnect")?.setAttribute("disabled","true"),document.querySelector("#btnDisconnect")?.removeAttribute("disabled"),b())},l=async e=>{const{log:t,txtInput:r}=a,{espruino:o,history:c}=s;if(o===void 0){console.warn("No Espruino instance");return}e===void 0&&(e=r.value),e.endsWith(";")&&(e=e.slice(0,Math.max(0,e.length-1))),c.peek!==e&&c.push(e),u({history:c,historyIndex:c.data.length-1}),t.log(`> ${e}`)?.classList.add("sent");try{const n=await o.eval(e,{timeoutMs:2e3,assumeExclusive:!0,debug:!1});t.log(`< ${n}`)?.classList.add("recv")}catch(n){console.log(n),t.error(n)}b()};document.querySelector("#btnDemo")?.addEventListener("click",async()=>{const{log:e}=a,{espruino:t}=s,c=s.board==="pico"?`
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
  E.getTemperature()`,n=!(t===void 0||!t.isConnected);n||e.log("// Connect to an Espruino to run this for real");const f=async i=>{if(i)if(i=i.trim(),i.startsWith("//")||t===void 0||!t.isConnected)e.log(i)?.classList.add("meta");else return l(i+`
`)};for await(const i of c.trim().split(`
`))await f(i),await v(n?1e3:400)});document.querySelector("#btnSend")?.addEventListener("click",()=>l());document.querySelector("#btnDisconnect")?.addEventListener("click",()=>{const{espruino:e}=s;e!==void 0&&e.disconnect()});document.querySelector("#btnConnect")?.addEventListener("click",async()=>{const{log:e,selBoard:t}=a,r=t.value;(r==="pico"||r==="puck")&&(u({board:r}),localStorage.setItem("board",r));try{if(s.board==="puck"){const o=await p.connectBle({debug:!1});u({espruino:o})}else if(s.board==="pico"){const o=await p.serial();u({espruino:o})}}catch(o){e.error(o)}});const h=()=>{const{txtInput:e,selBoard:t}=a;d(!0),e.addEventListener("keyup",o=>{const{history:c}=s;let{historyIndex:n}=s;o.key==="ArrowUp"||o.key==="ArrowDown"?(o.key==="ArrowUp"?n=Math.max(0,n-1):o.key==="ArrowDown"&&(n=Math.min(c.data.length-1,n+1)),u({historyIndex:n}),S(c.data[n]),o.preventDefault()):o.key==="Enter"&&(l(),o.preventDefault())});const r=localStorage.getItem("board");(r==="pico"||r==="puck")&&(t.value=r,u({board:r}))};h();function m(e){const{log:t}=a;t.log(`State: ${e.newState}`)?.classList.add("meta"),e.newState==="connected"?d(!1):d(!0)}function u(e){const t=s.espruino;s=Object.freeze({...s,...e}),e.espruino&&(t&&t.removeEventListener("change",m),e.espruino.addEventListener("change",m),d(!1))}
