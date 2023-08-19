import {clamp, scale} from 'ixfx/dist/data.js';

export type PressureForceState = Readonly<{
  webkitForce?: number
  normalised: number
  pointerPressure?: number
}>
export type PressureForceOpts = Readonly<{
  resetOnLeave?: boolean
  webkitForceMax?: number
  webkitForceMin?: number
}>

export type PressureForceStateChange = (state: PressureForceState) => void

export type WebkitForceEvent = MouseEvent & {
  webkitForce: number
  WEBKIT_FORCE_AT_MOUSE_DOWN: number

}

/**
 * Helper function to bind to pressure/force events.
 * Event data is available via the `onChange` callback.
 * Returns a function to remove event handlers.
 */
export function pressureOrForce(el: HTMLElement, onChange: PressureForceStateChange, opts: PressureForceOpts = {}) {
  const resetOnLeave = opts.resetOnLeave ?? true;
  const webkitForceMax = opts.webkitForceMax ?? 3;
  const webkitForceMin = opts.webkitForceMin ?? 1;

  let elState: PressureForceState = {
    webkitForce: 0,
    normalised: 0,
    pointerPressure: 0
  };

  let seenWebkitForce = false;

  const updateElState = (s: PressureForceState) => {
    elState = {
      ...elState,
      ...s
    };
    onChange(elState);
  };

  const updateWebkitForce = (evt: WebkitForceEvent) => {
    console.log(`which: ${evt.which} type: ${evt.type}`);
    seenWebkitForce = true;
    evt.preventDefault();
    updateElState({
      webkitForce: evt.webkitForce,
      normalised: clamp(scale(evt.webkitForce, webkitForceMin, webkitForceMax))
    });
  };

  // @ts-ignore
  el.addEventListener(`webkitmouseforcewillbegin`, updateWebkitForce);
  // @ts-ignore
  el.addEventListener(`webkitmouseforcedown`, updateWebkitForce);
  // @ts-ignore
  el.addEventListener(`webkitmouseforceup`, updateWebkitForce);
  // @ts-ignore
  el.addEventListener(`webkitmouseforcechanged`, updateWebkitForce);

  const updatePressure = (evt: PointerEvent) => {
    evt.preventDefault();
    if (evt.type === `pointerleave` || evt.type === `pointerup`) {
      if (resetOnLeave) updateElState({pointerPressure: 0, normalised: 0, webkitForce: 0});
    } else {
      if (seenWebkitForce && evt.pointerType === `mouse`) {
        // Don't trample on normalised value if it seems we have Webkit force events instead
        updateElState({
          normalised: elState.normalised,
          pointerPressure: evt.pressure
        });
      } else {
        updateElState({
          pointerPressure: evt.pressure,
          normalised: evt.pressure
        });
      }
    }
  };

  el.addEventListener(`pointermove`, updatePressure);
  el.addEventListener(`pointerup`, updatePressure);
  el.addEventListener(`pointerdown`, updatePressure);
  el.addEventListener(`pointerleave`, updatePressure);

  const dispose = () => {
    // @ts-ignore
    el.removeEventListener(`webkitmouseforcewillbegin`, updateWebkitForce);
    // @ts-ignore
    el.removeEventListener(`webkitmouseforcedown`, updateWebkitForce);
    // @ts-ignore
    el.removeEventListener(`webkitmouseforceup`, updateWebkitForce);
    // @ts-ignore
    el.removeEventListener(`webkitmouseforcechanged`, updateWebkitForce);

    el.removeEventListener(`pointermove`, updatePressure);
    el.removeEventListener(`pointerup`, updatePressure);
    el.removeEventListener(`pointerdown`, updatePressure);
    el.removeEventListener(`pointerleave`, updatePressure);
  };
  return dispose;
}