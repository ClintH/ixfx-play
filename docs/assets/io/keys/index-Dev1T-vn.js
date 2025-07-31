import"../../modulepreload-polyfill-B5Qt9EMX.js";import{l as d}from"../../log-BkcsJhgr.js";import{c as l}from"../../forms-C4su1Q0P.js";import"../../resolve-el-BUhvOf7L.js";import"../../result-aflA1LW7.js";const i=Object.freeze({lastEl:document.querySelector("#last"),log:d("#log",{timestamp:!0})}),p=o=>{const{altKey:e,metaKey:r,ctrlKey:s,shiftKey:y,key:c,code:t,repeat:n,type:a}=o;return{altKey:e,metaKey:r,ctrlKey:s,shiftKey:y,key:c,code:t,repeat:n,type:a}},K=o=>{const e=p(o);return`{
    key: ${e.key},
    code: ${e.code},
    altKey: ${e.altKey},
    metaKey: ${e.metaKey},
    ctrlKey: ${e.ctrlKey},
    shiftKey: ${e.shiftKey},
    repeat: ${e.repeat},
    type: ${e.type}
  }`},m=()=>{const{log:o,lastEl:e}=i,r=l("#evKeydown"),s=l("#evKeyup"),y=l("#evKeypress"),c=t=>{const n=K(t);o.log(n.split(`
`).join("")),e.textContent=n};document.addEventListener("keydown",t=>{r.checked&&c(t)}),document.addEventListener("keyup",t=>{s.checked&&c(t)}),document.addEventListener("keypress",t=>{y.checked&&c(t)}),document.querySelector("#btnLogClear")?.addEventListener("click",()=>{o.clear()})};m();
