import { log, Forms } from 'ixfx/dom.js'

const test = `asdf`;
let x = `asf`;
if (x == `asdf`) {
  console.log(`asf`);
}
const settings = Object.freeze({
  pointerEl: document.querySelector(`#pointerArea`),
  currentEl: document.querySelector(`#current`),
  log: log(`#log`)
});

const clearPointers = () => {
  const { currentEl } = settings;
  if (!currentEl) return;
  currentEl.innerHTML = ``;
};

const round = (v: number) => Math.round(v);

/**
 * 
 * @param {PointerEvent} ev 
 */
const updatePointer = (event: PointerEvent) => {
  const { currentEl, log } = settings;
  const { isPrimary, pointerType, pointerId, type, shiftKey, ctrlKey, metaKey } = event;
  const { movementX, movementY, x, y, offsetX, offsetY, screenX, screenY, } = event;

  log.log(`${ event.type } ${ JSON.stringify(pointerEventSimplify(event)) }`);
  console.log(event);
  let element = document.querySelector(`#ptr-${ pointerId }`);

  if (element === null) {
    element = document.createElement(`div`);
    element.id = `ptr-${ pointerId }`;
    currentEl?.append(element);
  }

  const keys = [];
  if (shiftKey) keys.push(`shift`);
  if (metaKey) keys.push(`meta`);
  if (ctrlKey) keys.push(`ctrl`);
  const keyString = keys.map(k => `<kbd>${ k }</kbd>`).join(` `);


  let penString = ``;
  if (pointerType === `pen`) {
    const { pressure, twist, tangentialPressure, tiltX, tiltY } = event;
    penString += `pressure: ${ pressure }<br />twist: ${ twist } tangentialPressure: ${ tangentialPressure }<br />tilt: ${ tiltX },${ tiltY }<br />`;
    if (`altitudeAngle` in event && `azimuthAngle` in event) {
      penString += `altitudeAngle ${ event.altitudeAngle }<br />azimuthAngle: ${ event.azimuthAngle })<br />`;
    }
    penString += `<br />`;
  }

  const coordsString = `<table class="coords">
  <thead><td></td><td></td><td>offset</td><td>screen</td><td>movement</td></thead>
  <tr><td>x</td><td>${ round(x) }</td><td>${ round(offsetX) }</td><td>${ round(screenX) }</td><td>${ movementX }</td></tr>
  <tr><td>y</td><td>${ round(y) }</td><td>${ round(offsetY) }</td><td>${ round(screenY) }</td><td>${ movementY }</td></tr>
  </table>`;
  element.innerHTML = `
  <h1>${ pointerId } ${ pointerType } ${ isPrimary ? `(primary)` : `` }</h1>
  ${ type }<br />
  ${ penString }
  ${ coordsString }<br />
  ${ keyString }<br >
  `;
};

const pointerEventSimplify = (event: PointerEvent) => {
  const { button, buttons, ctrlKey, isPrimary, metaKey, movementX, movementY, offsetX, offsetY, pageX, pageY, pointerId, pointerType, screenX, screenY, shiftKey, x, y } = event;

  let r = { button, buttons, ctrlKey, isPrimary, metaKey, movementX, movementY, offsetX, offsetY, pageX, pageY, pointerId, pointerType, screenX, screenY, shiftKey, x, y };

  if (event.pointerType !== `mouse`) {
    r = {
      ...r,
      // @ts-ignore
      pressure: event.pressure,
      tangentialPressure: event.tangentialPressure,
      tiltX: event.tiltX,
      tiltY: event.tiltY,
      twist: event.twist
    }
  }
  // @ts-ignore
  if (`altitudeAngle` in event) r.altitudeAngle = event.altitudeAngle;
  // @ts-ignore
  if (`azimuthAngle` in event) r.azimuthAngle = event.azimuthAngle;
  // @ts-ignore
  if (`webkitForce` in event) r.webkitForce = event.webkitForce;
  return r;
};

const setup = () => {
  const { pointerEl, log } = settings;
  if (!pointerEl) return;
  const chkPointermove = Forms.checkbox(`#evPointermove`);
  const chkPointerenter = Forms.checkbox(`#evPointerenter`);
  const chkPointerleave = Forms.checkbox(`#evPointerleave`);
  const chkPointerover = Forms.checkbox(`#evPointerover`);
  const chkPointerdown = Forms.checkbox(`#evPointerdown`);
  const chkPointerup = Forms.checkbox(`#evPointerup`);

  pointerEl.addEventListener(`pointermove`, event => {
    if (!chkPointermove.checked) return;
    updatePointer(event as PointerEvent);
  });

  pointerEl.addEventListener(`pointerenter`, event => {
    if (!chkPointerenter.checked) return;
    updatePointer(event as PointerEvent);
  });

  pointerEl.addEventListener(`pointerleave`, event => {
    if (!chkPointerleave.checked) return;

    updatePointer(event as PointerEvent);
  });

  pointerEl.addEventListener(`pointerover`, event => {
    if (!chkPointerover.checked) return;
    updatePointer(event as PointerEvent);
  });

  pointerEl.addEventListener(`pointerdown`, event => {
    if (!chkPointerdown.checked) return;
    updatePointer(event as PointerEvent);
  });

  pointerEl.addEventListener(`pointerup`, event => {
    if (!chkPointerup.checked) return;
    updatePointer(event as PointerEvent);
  });

  pointerEl.addEventListener(`webkitmouseforcedown`, event => {
    if (!chkPointerdown.checked) return;
    updatePointer(event as PointerEvent);

  });
  pointerEl.addEventListener(`webkitmouseforceup`, event => {
    if (!chkPointerup.checked) return;
    updatePointer(event as PointerEvent);

  });
  pointerEl.addEventListener(`webkitforcechanged`, event => {
    console.log(event);
  });


  document.querySelector(`#btnCurrentReset`)?.addEventListener(`click`, () => {
    clearPointers();
  });


  document.querySelector(`#btnClearLog`)?.addEventListener(`click`, () => {
    log.clear();
  });
};
setup();