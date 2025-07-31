import { clamp, scale } from '@ixfx/numbers';

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
export function pressureOrForce(element: HTMLElement, onChange: PressureForceStateChange, options: PressureForceOpts = {}) {
  const resetOnLeave = options.resetOnLeave ?? true;
  const webkitForceMax = options.webkitForceMax ?? 3;
  const webkitForceMin = options.webkitForceMin ?? 1;

  let elementState: PressureForceState = {
    webkitForce: 0,
    normalised: 0,
    pointerPressure: 0
  };

  let seenWebkitForce = false;

  const updateElementState = (s: PressureForceState) => {
    elementState = {
      ...elementState,
      ...s
    };
    onChange(elementState);
  };

  const updateWebkitForce = (event: WebkitForceEvent) => {
    console.log(`which: ${ event.which } type: ${ event.type }`);
    seenWebkitForce = true;
    event.preventDefault();
    updateElementState({
      webkitForce: event.webkitForce,
      normalised: clamp(scale(event.webkitForce, webkitForceMin, webkitForceMax))
    });
  };

  // @ts-ignore
  element.addEventListener(`webkitmouseforcewillbegin`, updateWebkitForce);
  // @ts-ignore
  element.addEventListener(`webkitmouseforcedown`, updateWebkitForce);
  // @ts-ignore
  element.addEventListener(`webkitmouseforceup`, updateWebkitForce);
  // @ts-ignore
  element.addEventListener(`webkitmouseforcechanged`, updateWebkitForce);

  const updatePressure = (event: PointerEvent) => {
    event.preventDefault();
    if (event.type === `pointerleave` || event.type === `pointerup`) {
      if (resetOnLeave) updateElementState({ pointerPressure: 0, normalised: 0, webkitForce: 0 });
    } else {
      if (seenWebkitForce && event.pointerType === `mouse`) {
        // Don't trample on normalised value if it seems we have Webkit force events instead
        updateElementState({
          normalised: elementState.normalised,
          pointerPressure: event.pressure
        });
      } else {
        updateElementState({
          pointerPressure: event.pressure,
          normalised: event.pressure
        });
      }
    }
  };

  element.addEventListener(`pointermove`, updatePressure);
  element.addEventListener(`pointerup`, updatePressure);
  element.addEventListener(`pointerdown`, updatePressure);
  element.addEventListener(`pointerleave`, updatePressure);

  const dispose = () => {
    // @ts-ignore
    element.removeEventListener(`webkitmouseforcewillbegin`, updateWebkitForce);
    // @ts-ignore
    element.removeEventListener(`webkitmouseforcedown`, updateWebkitForce);
    // @ts-ignore
    element.removeEventListener(`webkitmouseforceup`, updateWebkitForce);
    // @ts-ignore
    element.removeEventListener(`webkitmouseforcechanged`, updateWebkitForce);

    element.removeEventListener(`pointermove`, updatePressure);
    element.removeEventListener(`pointerup`, updatePressure);
    element.removeEventListener(`pointerdown`, updatePressure);
    element.removeEventListener(`pointerleave`, updatePressure);
  };
  return dispose;
}