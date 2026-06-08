import"../../modulepreload-polyfill-Dezn_h7o.js";import{Mn as e,an as t}from"../../src-DyTd46TV-DheFLCEO.js";import{o as n}from"../../src-BoQVyMUt-DAkNNa-T.js";import"../../dom-6Do7ciFG.js";import{t as r}from"../../io-BFsae_lo.js";import"../../flow-W4ncjMPh.js";var i=Object.freeze({log:n(`#log`,{css:`
    .recv { color: hsl(var(--hue-primary), 88%, 96%);}
    .meta { color: hsl(var(--hue-secondary), 0%, 76%);}
    `,reverse:!0}),txtInput:document.querySelector(`#txtInput`),selBoard:document.querySelector(`#board`)}),a=Object.freeze({board:`puck`,espruino:void 0,history:t.mutable(),historyIndex:0}),o=()=>{let{txtInput:e}=i;e.focus(),e.setSelectionRange(0,e.value.length)},s=e=>{let{txtInput:t}=i;t.value=e,t.setSelectionRange(0,t.value.length)},c=e=>{let{txtInput:t}=i;e?(document.body.classList.add(`disconnected`),t.setAttribute(`disabled`,`true`),document.querySelector(`#btnSend`)?.setAttribute(`disabled`,`true`),document.querySelector(`#btnConnect`)?.removeAttribute(`disabled`),document.querySelector(`#btnDisconnect`)?.setAttribute(`disabled`,`true`)):(document.body.classList.remove(`disconnected`),t.removeAttribute(`disabled`),document.querySelector(`#btnSend`)?.removeAttribute(`disabled`),document.querySelector(`#btnConnect`)?.setAttribute(`disabled`,`true`),document.querySelector(`#btnDisconnect`)?.removeAttribute(`disabled`),o())},l=async e=>{let{log:t,txtInput:n}=i,{espruino:r,history:s}=a;if(r===void 0){console.warn(`No Espruino instance`);return}e===void 0&&(e=n.value),e.endsWith(`;`)&&(e=e.slice(0,Math.max(0,e.length-1))),s.peek!==e&&s.push(e),d({history:s,historyIndex:s.data.length-1}),t.log(`> ${e}`)?.classList.add(`sent`);try{let n=await r.eval(e,{timeoutMs:2e3,assumeExclusive:!0,debug:!1});t.log(`< ${n}`)?.classList.add(`recv`)}catch(e){console.log(e),t.error(e)}o()};document.querySelector(`#btnDemo`)?.addEventListener(`click`,async()=>{let{log:t}=i,{espruino:n}=a,r=a.board===`pico`?`
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
  E.getTemperature()`,o=!(n===void 0||!n.isConnected);o||t.log(`// Connect to an Espruino to run this for real`);let s=async e=>{if(e)if(e=e.trim(),e.startsWith(`//`)||n===void 0||!n.isConnected)t.log(e)?.classList.add(`meta`);else return l(e+`
`)};for await(let t of r.trim().split(`
`))await s(t),await e(o?1e3:400)}),document.querySelector(`#btnSend`)?.addEventListener(`click`,()=>l()),document.querySelector(`#btnDisconnect`)?.addEventListener(`click`,()=>{let{espruino:e}=a;e!==void 0&&e.disconnect()}),document.querySelector(`#btnConnect`)?.addEventListener(`click`,async()=>{let{log:e,selBoard:t}=i,n=t.value;(n===`pico`||n===`puck`)&&(d({board:n}),localStorage.setItem(`board`,n));try{a.board===`puck`?d({espruino:await r.connectBle({debug:!1})}):a.board===`pico`&&d({espruino:await r.serial()})}catch(t){e.error(t)}}),(()=>{let{txtInput:e,selBoard:t}=i;c(!0),e.addEventListener(`keyup`,e=>{let{history:t}=a,{historyIndex:n}=a;e.key===`ArrowUp`||e.key===`ArrowDown`?(e.key===`ArrowUp`?n=Math.max(0,n-1):e.key===`ArrowDown`&&(n=Math.min(t.data.length-1,n+1)),d({historyIndex:n}),s(t.data[n]),e.preventDefault()):e.key===`Enter`&&(l(),e.preventDefault())});let n=localStorage.getItem(`board`);(n===`pico`||n===`puck`)&&(t.value=n,d({board:n}))})();function u(e){let{log:t}=i;t.log(`State: ${e.newState}`)?.classList.add(`meta`),e.newState===`connected`?c(!1):c(!0)}function d(e){let t=a.espruino;a=Object.freeze({...a,...e}),e.espruino&&(t&&t.removeEventListener(`change`,u),e.espruino.addEventListener(`change`,u),c(!1))}