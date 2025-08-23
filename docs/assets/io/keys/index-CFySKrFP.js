import"../../modulepreload-polyfill-B5Qt9EMX.js";import{l as d,f as l}from"../../dom-DCcQsJJW.js";import"../../src-BeVDUOoq-B6OoJ3p3.js";import"../../src-C7XtfIer-DYL4nwfS.js";import"../../dist-DE4H3J9W-BscYlIcj.js";const i=Object.freeze({lastEl:document.querySelector("#last"),log:d("#log",{timestamp:!0})}),p=o=>{const{altKey:e,metaKey:n,ctrlKey:s,shiftKey:y,key:c,code:t,repeat:r,type:a}=o;return{altKey:e,metaKey:n,ctrlKey:s,shiftKey:y,key:c,code:t,repeat:r,type:a}},K=o=>{const e=p(o);return`{
    key: ${e.key},
    code: ${e.code},
    altKey: ${e.altKey},
    metaKey: ${e.metaKey},
    ctrlKey: ${e.ctrlKey},
    shiftKey: ${e.shiftKey},
    repeat: ${e.repeat},
    type: ${e.type}
  }`},m=()=>{const{log:o,lastEl:e}=i,n=l.checkbox("#evKeydown"),s=l.checkbox("#evKeyup"),y=l.checkbox("#evKeypress"),c=t=>{const r=K(t);o.log(r.split(`
`).join("")),e.textContent=r};document.addEventListener("keydown",t=>{n.checked&&c(t)}),document.addEventListener("keyup",t=>{s.checked&&c(t)}),document.addEventListener("keypress",t=>{y.checked&&c(t)}),document.querySelector("#btnLogClear")?.addEventListener("click",()=>{o.clear()})};m();
