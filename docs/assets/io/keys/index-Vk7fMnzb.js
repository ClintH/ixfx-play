import"../../modulepreload-polyfill-Dezn_h7o.js";import{i as e,o as t}from"../../src-BoQVyMUt-DAkNNa-T.js";import"../../dom-6Do7ciFG.js";var n=Object.freeze({lastEl:document.querySelector(`#last`),log:t(`#log`,{timestamp:!0})}),r=e=>{let{altKey:t,metaKey:n,ctrlKey:r,shiftKey:i,key:a,code:o,repeat:s,type:c}=e;return{altKey:t,metaKey:n,ctrlKey:r,shiftKey:i,key:a,code:o,repeat:s,type:c}},i=e=>{let t=r(e);return`{
    key: ${t.key},
    code: ${t.code},
    altKey: ${t.altKey},
    metaKey: ${t.metaKey},
    ctrlKey: ${t.ctrlKey},
    shiftKey: ${t.shiftKey},
    repeat: ${t.repeat},
    type: ${t.type}
  }`};(()=>{let{log:t,lastEl:r}=n,a=e.checkbox(`#evKeydown`),o=e.checkbox(`#evKeyup`),s=e.checkbox(`#evKeypress`),c=e=>{let n=i(e);t.log(n.split(`
`).join(``)),r.textContent=n};document.addEventListener(`keydown`,e=>{a.checked&&c(e)}),document.addEventListener(`keyup`,e=>{o.checked&&c(e)}),document.addEventListener(`keypress`,e=>{s.checked&&c(e)}),document.querySelector(`#btnLogClear`)?.addEventListener(`click`,()=>{t.clear()})})();