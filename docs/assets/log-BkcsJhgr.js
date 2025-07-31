import{r as S}from"./resolve-el-BUhvOf7L.js";const L=(r,s)=>{const l=document.createElement("style");l.textContent=s;let a;return r.shadowRoot?(a=r.shadowRoot,a.innerHTML=""):a=r.attachShadow({mode:"open"}),a.append(l),a},H=(r,s={})=>{const{capacity:l=0,monospaced:a=!0,timestamp:v=!1,collapseDuplicates:w=!0,css:y=""}=s;let d=0,c,f=0;const b=S(r),h=L(b,`
  .log {
    font-family: ${a?'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", Monaco, "Courier New", Courier, monospace':"normal"};
    background-color: var(--code-background-color);
    padding: var(--padding1, 0.2em);
    overflow-y: auto;
    height:100%;
  }
  .timestamp {
    margin-right: 0.5em;
    opacity: 0.5;
    font-size: 70%;
    align-self: center;
  }
  .line {
    display: flex;
    padding-bottom: 0.1em;
    padding-top: 0.1em;
  }
  .line:hover {
  
  }
  .error {
    color: red;
  }
  .badge {
    border: 1px solid currentColor;
    align-self: center;
    font-size: 70%;
    padding-left: 0.2em;
    padding-right: 0.2em;
    border-radius: 1em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .msg {
    flex: 1;
    word-break: break-word;
  }
  ${y}
  `),n=document.createElement("div");n.className="log",h.append(n);const C=t=>{const e=document.createElement("div");if(typeof t=="string")e.innerHTML=t;else if(t instanceof Error){const i=t.stack;e.innerHTML=i===void 0?t.toString():i.toString()}else e.innerHTML=t;e.classList.add("error"),u(e),c=void 0,f=0};let p=0;const M=(t="")=>{const e=g(t);return e&&(e.classList.add("warning"),e)},g=(t="")=>{let e;const i=window.performance.now()-p;if(!(s.minIntervalMs&&i<s.minIntervalMs))if(p=window.performance.now(),typeof t=="object"?e=JSON.stringify(t):t===void 0?e="(undefined)":t===null?e="(null)":typeof t=="number"?(Number.isNaN(e)&&(e="(NaN)"),e=t.toString()):e=t,e.length===0){const o=document.createElement("hr");c=void 0,u(o)}else if(e===c&&w){const o=n.firstElementChild;let m=o.querySelector(".badge");return m===null&&(m=document.createElement("div"),m.className="badge",o.insertAdjacentElement("beforeend",m)),o!==null&&(m.textContent=(++f).toString()),o}else{const o=document.createElement("div");return o.textContent=e,u(o),c=e,o}},u=t=>{if(v){const e=document.createElement("div"),i=document.createElement("div");i.className="timestamp",i.textContent=new Date().toLocaleTimeString(),e.append(i,t),t.classList.add("msg"),e.classList.add("line"),t=e}else t.classList.add("line","msg");if(s.reverse?n.append(t):n.insertBefore(t,n.firstChild),l>0&&++d>l*2)for(;d>l;)n.lastChild?.remove(),d--;s.reverse&&(n.scrollTop=n.scrollHeight),f=0};return{error:C,log:g,warn:M,append:u,clear:()=>{n.innerHTML="",c=void 0,f=0,d=0},dispose:()=>{n.remove()},get isEmpty(){return d===0}}};export{H as l};
