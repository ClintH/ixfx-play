import"../../modulepreload-polyfill-Dezn_h7o.js";import{G as e,ln as t,w as n}from"../../src-DyTd46TV-DheFLCEO.js";import{a as r,t as i,u as a}from"../../src-BoQVyMUt-DAkNNa-T.js";import"../../dom-6Do7ciFG.js";import"../../geometry-W4ncjMPh.js";import{t as o}from"../../ui-DW5NXsxP.js";import"../../iterables-W4ncjMPh.js";var s=(e,r)=>{let i={x:0,y:0},a,s=()=>{},c=async()=>{r&&r.clearVisited(),u&&u.restart()},l=()=>{let t=a.last(),r=t[`visit-type`],o=t.reverse;return n.Visit.create(r,{start:i,boundsWrap:`undefined`,reversed:o})(e)},u=t({delay:50,iterator:()=>l(),onValue:e=>(r&&r.addVisited(e),!0)});return{id:`visit`,label:`Visit`,dismount:()=>{u.cancel(),s()},mount:e=>{e.innerHTML=`
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
      `,a=o.domForm(`form`),s=a.onValue(e=>{c()})},notify:(e,t)=>{switch(e){case`click`:t||={x:0,y:0},i=t,c();break;default:console.warn(`visitPanel.notify: ${e}`)}}}},c=(t,r)=>{let i={x:0,y:0},a,s=()=>{},c=o=>{o===void 0&&a&&(o=a.last());let s=e.fromString(o.xy??`0,0`);if(!e.isNaN(s))if(r&&(r.clearVisited(),r.clearCellText()),o.cardinals){if(e.isEmpty(s))return;let a=n.offsetCardinals(t,i,Math.max(s.x,s.y),o[`wrap-type`]);for(let[e,t]of Object.entries(a))r&&t&&(r.addVisited(t),r.appendCellText(e+` `,t))}else{let e=n.offset(t,i,s,o[`wrap-type`]);r&&e&&r.addVisited(e)}};return{id:`offset`,label:`Offset`,dismount:()=>{s()},mount:e=>{e.innerHTML=`
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
      `,a=o.domForm(`form`),s=a.onValue(e=>{c(e)})},notify:(e,t)=>{switch(e){case`click`:t||={x:0,y:0},i=t,r&&(r.activated=[t]),c();break;default:console.warn(`visitPanel.notify: ${e}`)}}}},l=(t,r)=>{let i,a={x:0,y:0},s={x:0,y:0},c=!1,l=()=>{},u=t=>{let n=e.fromString(t[`a-xy`]??`0,0`),r=e.fromString(t[`b-xy`]??`0,0`);e.isNaN(n)||e.isNaN(r)||(a=n,s=r)},d=()=>{r&&r.clearVisited();let e=n.getLine(a,s);for(let t of e)r.addVisited(t)};return{id:`line`,label:`Line`,dismount:()=>{l()},mount:e=>{e.innerHTML=`
      <form>
        <label for="a-xy">A (x,y)</label>
        <input id="a-xy" type="text" name="a-xy" value="2,6">
        
        <label for="b-xy">B (x,y)</label>
        <input id="a-xy" type="text" name="b-xy" value="7,2">
        
      <form>
      `,i=o.domForm(`form`),l=i.onValue(e=>{u(e),d()}),u(i.last()),d()},notify:(e,t)=>{switch(e){case`click`:t||={x:0,y:0},c?(s=t,i.setNamedValue(`b-xy`,`${s.x},${s.y}`)):(a=t,i.setNamedValue(`a-xy`,`${a.x},${a.y}`)),c=!c,d();break;default:console.warn(`visitPanel.notify: ${e}`)}}}},u=class{highlighted=[];visited=[];activated=[];cellText;grid;gridlineStrokeStyle=`red`;textFillStyle=`white`;activatedFillStyle=`gray`;highlightedStrokeStyle=`orangered`;visitedFillStyle=`indigo`;ctx;canvasEl;constructor(e){this.grid=e,this.cellText=this.clearCellText(),this.canvasEl=document.querySelector(`#grid`),this.ctx=this.canvasEl.getContext(`2d`);let t=r({chrome_1:`white`,chrome_2:`silver`,chrome_5:`black`,chrome_active_1:`red`,chrome_active_2:`red`,chrome_active_3:`red`,chrome_active_4:`red`,chrome_active_5:`red`});this.gridlineStrokeStyle=t.chrome_2,this.activatedFillStyle=t.chrome_active_3,this.textFillStyle=t.chrome_active_5,this.highlightedStrokeStyle=t.chrome_active_3,this.visitedFillStyle=t.chrome_active_1}clearCellText(){return this.cellText=n.Array1d.createMutable(``,this.grid),this.cellText}reset(){this.clearCellText(),this.clearVisited(),this.activated=[],this.setHighlighted(void 0)}appendCellText(e,t){if(!n.inside(this.cellText,t))return;let r=this.cellText.get(t);r||=``,r+=e,this.cellText.set(r,t)}setHighlighted(e){e===void 0?this.highlighted=[]:Array.isArray(e)?this.highlighted=[...this.highlighted,...e]:this.highlighted=[e],this.draw()}addVisited(e){this.visited.push(e),this.draw()}clearVisited(){this.visited=[],this.draw()}fillCell(e,t=`yellow`){let{ctx:r}=this,i=n.rectangleForCell(this.grid,e);r.fillStyle=t,r.fillRect(i.x,i.y,i.width,i.height),r.strokeStyle=this.gridlineStrokeStyle,r.strokeRect(i.x,i.y,i.width,i.height)}draw(){this.ctx.font=`12pt system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,this.drawBg(),this.drawGrid(),this.drawVisited(),this.drawActivated(),this.drawHighlighted(),this.drawText()}drawText(){let{ctx:e}=this;for(let{cell:t,value:r}of n.By.cellsAndValues(this.cellText)){let i=n.rectangleForCell(this.grid,t),{x:a,y:o}=i,s=r??``;if(s.length===0)continue;let c=e.measureText(s);a+=i.width/2-c.width/2,o+=i.height/2-(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent)/2,e.textBaseline=`middle`,e.fillStyle=this.textFillStyle,e.fillText(s,a,o)}}drawVisited(){let{ctx:e}=this;for(let t of this.visited){let r=n.rectangleForCell(this.grid,t);e.fillStyle=this.visitedFillStyle,e.fillRect(r.x,r.y,r.width,r.height),e.strokeStyle=this.gridlineStrokeStyle,e.strokeRect(r.x,r.y,r.width,r.height)}}drawHighlighted(){let{ctx:e}=this;for(let t of this.highlighted){let r=n.rectangleForCell(this.grid,t);e.strokeStyle=this.highlightedStrokeStyle,e.strokeRect(r.x,r.y,r.width,r.height)}}drawActivated(){let{ctx:e}=this;for(let t of this.activated){let r=n.rectangleForCell(this.grid,t);e.fillStyle=this.activatedFillStyle,e.fillRect(r.x,r.y,r.width,r.height)}}drawGrid(){let{ctx:e}=this;e.strokeStyle=this.gridlineStrokeStyle,e.lineWidth=1;for(let t of n.asRectangles(this.grid))e.strokeRect(t.x,t.y,t.width,t.height)}drawBg(){let{ctx:e}=this;e.clearRect(0,0,e.canvas.width,e.canvas.height)}},d=document.querySelector(`#grid`),f=document.querySelector(`#coords`),p=!1,m={rows:10,cols:10,size:50};i.canvasParent(`#grid`,{naturalSize:{height:200,width:200},stretch:`min`,onSizeChanging(e,t){v()}});var h=new u(m),g=a({panels:[s(m,h),c(m,h),l(m,h)],parent:`#tools`,onPanelChanging:(e,t)=>{h.reset()},preselectId:`visit`});d.addEventListener(`pointermove`,e=>{let t={x:e.offsetX,y:e.offsetY};t=_(t);let r=n.cellAtPoint(m,t);h.setHighlighted(r),f.innerHTML=r?`Cell: ${r.x},${r.y}`:``});var _=t=>{let n=d.getBoundingClientRect().width/10,r=m.size/n;return e.multiplyScalar(t,r)};d.addEventListener(`pointerup`,e=>{let t={x:e.offsetX,y:e.offsetY};t=_(t),g.notify(`click`,n.cellAtPoint(m,t))});function v(){let e=d.getBoundingClientRect(),t=Math.min(e.width,e.height),n=10,r=Math.floor(t/n);r<15&&(n=5,r=Math.floor(t/n)),m={rows:n,cols:n,size:r},p&&(h.grid=m,h.draw())}h.draw(),p=!0;