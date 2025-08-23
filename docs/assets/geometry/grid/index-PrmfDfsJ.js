import"../../modulepreload-polyfill-B5Qt9EMX.js";import{g as n,p}from"../../geometry-v_W7ixAL.js";import{i as C}from"../../iterables-DLJ6ZhRv.js";import{r as S}from"../../ui-DXRN7ELC.js";import{g as k,E as _,t as F}from"../../dom-DCcQsJJW.js";import"../../src-BeVDUOoq-B6OoJ3p3.js";import"../../src-C7XtfIer-DYL4nwfS.js";import"../../records-Cei7yF1D-Dejnhz0L.js";import"../../is-integer-BmMnD0ra-CbN5m7X_.js";import"../../src-sHR31-XU-C1xj0KeO.js";import"../../dist-DE4H3J9W-BscYlIcj.js";import"../../src-DtTSywET-tUv0MHeI.js";const T=(s,t)=>{let i={x:0,y:0},e,l=()=>{};const d=async()=>{t&&t.clearVisited(),f&&f.restart()},u=()=>{const o=e.last(),h=o["visit-type"],c=o.reverse;return n.Visit.create(h,{start:i,boundsWrap:"undefined",reversed:c})(s)};let f=C({delay:50,iterator:()=>u(),onValue:o=>(t&&t.addVisited(o),!0)});return{id:"visit",label:"Visit",dismount:()=>{f.cancel(),l()},mount:o=>{o.innerHTML=`
      <form>
        <label for="visit-type">Logic</label>
        <select name="visit-type" id="visit-type">
          <option>row</option>
          <option>random</option>
          <option>random-contiguous</option>
          <option>neighbours</option>
          <option>column</option>
          <option>breadth</option>
          <option>depth</option>
        </select>
        
        <label for="reverse">Reverse</label>
        <input name="reverse" type="checkbox" value="true" id="reverse">
      </form>
      `,e=S.domForm("form"),l=e.onValue(h=>{d()})},notify:(o,h)=>{switch(o){case"click":{h||(h={x:0,y:0}),i=h,d();break}default:console.warn(`visitPanel.notify: ${o}`)}}}},V=(s,t)=>{let i={x:0,y:0},e,l=()=>{};const d=a=>{a===void 0&&e&&(a=e.last());const o=p.fromString(a.xy??"0,0");if(!p.isNaN(o))if(t&&(t.clearVisited(),t.clearCellText()),a.cardinals){if(p.isEmpty(o))return;const h=n.offsetCardinals(s,i,Math.max(o.x,o.y),a["wrap-type"]);for(const[c,r]of Object.entries(h))t&&r&&(t.addVisited(r),t.appendCellText(c+" ",r))}else{const h=n.offset(s,i,o,a["wrap-type"]);t&&h&&t.addVisited(h)}};return{id:"offset",label:"Offset",dismount:()=>{l()},mount:a=>{a.innerHTML=`
      <form>
        <label for="xy">x,y</label>
        <input id="xy" type="text" name="xy" value="2,2">
        
        <label for="wrap-type">Wrapping</label>
        <select id="wrap-type" name="wrap-type">
          <option>undefined</option>
          <option>stop</option>
          <option>unbounded</option>
          <option>wrap</option>
        </select>
        
        <label for="cardinals">Cardinals</label>
        <div>
          <input name="cardinals" type="checkbox" value="true" id="cardinals" checked>
          <p>When enabled, the larger of x or y option above is used to calculate an offset on all directions.</p>
        </div>
      <form>
      `,e=S.domForm("form"),l=e.onValue(o=>{d(o)})},notify:(a,o)=>{switch(a){case"click":{o||(o={x:0,y:0}),i=o,t&&(t.activated=[o]),d();break}default:console.warn(`visitPanel.notify: ${a}`)}}}},P=(s,t)=>{let i,e={x:0,y:0},l={x:0,y:0},d=!1,u=()=>{};const f=c=>{const r=p.fromString(c["a-xy"]??"0,0"),v=p.fromString(c["b-xy"]??"0,0");p.isNaN(r)||p.isNaN(v)||(e=r,l=v)},y=()=>{t&&t.clearVisited();const c=n.getLine(e,l);for(const r of c)t.addVisited(r)};return{id:"line",label:"Line",dismount:()=>{u()},mount:c=>{c.innerHTML=`
      <form>
        <label for="a-xy">A (x,y)</label>
        <input id="a-xy" type="text" name="a-xy" value="2,6">
        
        <label for="b-xy">B (x,y)</label>
        <input id="a-xy" type="text" name="b-xy" value="7,2">
        
      <form>
      `,i=S.domForm("form"),u=i.onValue(r=>{f(r),y()}),f(i.last()),y()},notify:(c,r)=>{switch(c){case"click":{r||(r={x:0,y:0}),d?(l=r,i.setNamedValue("b-xy",`${l.x},${l.y}`)):(e=r,i.setNamedValue("a-xy",`${e.x},${e.y}`)),d=!d,y();break}default:console.warn(`visitPanel.notify: ${c}`)}}}};class R{highlighted=[];visited=[];activated=[];cellText;grid;gridlineStrokeStyle="red";textFillStyle="white";activatedFillStyle="gray";highlightedStrokeStyle="orangered";visitedFillStyle="indigo";ctx;canvasEl;constructor(t){this.grid=t,this.cellText=this.clearCellText(),this.canvasEl=document.querySelector("#grid"),this.ctx=this.canvasEl.getContext("2d");const i=k({chrome_1:"white",chrome_2:"silver",chrome_5:"black",chrome_active_1:"red",chrome_active_2:"red",chrome_active_3:"red",chrome_active_4:"red",chrome_active_5:"red"});this.gridlineStrokeStyle=i.chrome_2,this.activatedFillStyle=i.chrome_active_3,this.textFillStyle=i.chrome_active_5,this.highlightedStrokeStyle=i.chrome_active_3,this.visitedFillStyle=i.chrome_active_1}clearCellText(){return this.cellText=n.Array1d.createMutable("",this.grid),this.cellText}reset(){this.clearCellText(),this.clearVisited(),this.activated=[],this.setHighlighted(void 0)}appendCellText(t,i){if(!n.inside(this.cellText,i))return;let e=this.cellText.get(i);e||(e=""),e+=t,this.cellText.set(e,i)}setHighlighted(t){t===void 0?this.highlighted=[]:Array.isArray(t)?this.highlighted=[...this.highlighted,...t]:this.highlighted=[t],this.draw()}addVisited(t){this.visited.push(t),this.draw()}clearVisited(){this.visited=[],this.draw()}fillCell(t,i="yellow"){const{ctx:e}=this,l=n.rectangleForCell(this.grid,t);e.fillStyle=i,e.fillRect(l.x,l.y,l.width,l.height),e.strokeStyle=this.gridlineStrokeStyle,e.strokeRect(l.x,l.y,l.width,l.height)}draw(){this.ctx.font="12pt system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",this.drawBg(),this.drawGrid(),this.drawVisited(),this.drawActivated(),this.drawHighlighted(),this.drawText()}drawText(){const{ctx:t}=this;for(const{cell:i,value:e}of n.By.cellsAndValues(this.cellText)){const l=n.rectangleForCell(this.grid,i);let{x:d,y:u}=l,f=e??"";if(f.length===0)continue;const y=t.measureText(f);d+=l.width/2-y.width/2,u+=l.height/2-(y.actualBoundingBoxAscent+y.actualBoundingBoxDescent)/2,t.textBaseline="middle",t.fillStyle=this.textFillStyle,t.fillText(f,d,u)}}drawVisited(){const{ctx:t}=this;for(const i of this.visited){const e=n.rectangleForCell(this.grid,i);t.fillStyle=this.visitedFillStyle,t.fillRect(e.x,e.y,e.width,e.height),t.strokeStyle=this.gridlineStrokeStyle,t.strokeRect(e.x,e.y,e.width,e.height)}}drawHighlighted(){const{ctx:t}=this;for(const i of this.highlighted){const e=n.rectangleForCell(this.grid,i);t.strokeStyle=this.highlightedStrokeStyle,t.strokeRect(e.x,e.y,e.width,e.height)}}drawActivated(){const{ctx:t}=this;for(const i of this.activated){const e=n.rectangleForCell(this.grid,i);t.fillStyle=this.activatedFillStyle,t.fillRect(e.x,e.y,e.width,e.height)}}drawGrid(){const{ctx:t}=this;t.strokeStyle=this.gridlineStrokeStyle,t.lineWidth=1;for(const i of n.asRectangles(this.grid))t.strokeRect(i.x,i.y,i.width,i.height)}drawBg(){const{ctx:t}=this;t.clearRect(0,0,t.canvas.width,t.canvas.height)}}const m=document.querySelector("#grid"),B=document.querySelector("#coords");let b=!1,g={rows:10,cols:10,size:50};_.canvasParent("#grid",{naturalSize:{height:200,width:200},stretch:"min",onSizeChanging(s,t){A()}});const x=new R(g),z=F({panels:[T(g,x),V(g,x),P(g,x)],parent:"#tools",onPanelChanging:(s,t)=>{x.reset()},preselectId:"visit"});m.addEventListener("pointermove",s=>{let t={x:s.offsetX,y:s.offsetY};t=w(t);const i=n.cellAtPoint(g,t);x.setHighlighted(i),B.innerHTML=i?`Cell: ${i.x},${i.y}`:""});const w=s=>{const i=m.getBoundingClientRect().width/10,e=g.size/i;return p.multiplyScalar(s,e)};m.addEventListener("pointerup",s=>{let t={x:s.offsetX,y:s.offsetY};t=w(t),z.notify("click",n.cellAtPoint(g,t))});function A(){const s=m.getBoundingClientRect();let t=Math.min(s.width,s.height),i=10,e=Math.floor(t/i);e<15&&(i=5,e=Math.floor(t/i)),g={rows:i,cols:i,size:e},b&&(x.grid=g,x.draw())}x.draw();b=!0;
