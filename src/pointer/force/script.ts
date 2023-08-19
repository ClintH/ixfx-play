/**
 * Demonstrates a 'pinch to zoom' style gesture
 */
import {pressureOrForce, PressureForceState} from "./pressureOrForce.js";

const settings = Object.freeze({
  // Max expected value for webkitForce
  webkitForceMax: 3,
  // Min expected value for webkitForce
  webkitForceMin: 1
});

type State = PressureForceState;

let state: State = {
  webkitForce: 0,
  normalised: 0,
  pointerPressure: 0
};

/**
 * Update screen with state
 */
const displayState = () => {
  const {webkitForce, normalised, pointerPressure} = state;

  updateEl(`webkitForce`, webkitForce);
  updateEl(`pointerPressure`, pointerPressure);
  updateEl(`normalised`, normalised);
};

const useState = () => {
  const {normalised} = state;

  // Display numerical readouts
  displayState();

  // Use data to change background
  const el = document.getElementById(`thing`);
  if (!el) return;
  el.style.backgroundColor = `hsl(100, ${Math.round(normalised * 100)}%, 50%)`;
};

const setup = () => {
  const el = document.getElementById(`thing`);
  if (!el) return;

  // Listen for pressure or force events on element,
  // setting state and using it.
  pressureOrForce(el, state => {
    updateState(state);
    useState();
  });
};
setup();

/**
 * Update state
 */
function updateState(s: Partial<State>) {
  state = Object.freeze({
    ...state,
    ...s
  });
}

function updateEl(id: string, text: number | string | undefined) {
  const el = document.getElementById(id) as HTMLElement;
  if (text === undefined) text = `?`;
  el.innerHTML = text.toString();
}
