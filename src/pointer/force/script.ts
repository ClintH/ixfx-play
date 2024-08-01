/**
 * Demonstrates a 'pinch to zoom' style gesture
 */
import { pressureOrForce, PressureForceState } from "./pressure-or-force.js";

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
  const { webkitForce, normalised, pointerPressure } = state;

  updateElement(`webkitForce`, webkitForce);
  updateElement(`pointerPressure`, pointerPressure);
  updateElement(`normalised`, normalised);
};

const useState = () => {
  const { normalised } = state;

  // Display numerical readouts
  displayState();

  // Use data to change background
  const element = document.querySelector(`#thing`) as HTMLElement;
  if (!element) return;
  element.style.backgroundColor = `hsl(100, ${ Math.round(normalised * 100) }%, 50%)`;
};

const setup = () => {
  const element = document.querySelector(`#thing`) as HTMLElement;
  if (!element) return;

  // Listen for pressure or force events on element,
  // setting state and using it.
  pressureOrForce(element, state => {
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

function updateElement(id: string, text: number | string | undefined) {
  const element = document.querySelector(`#${ id }`) as HTMLElement;
  if (text === undefined) text = `?`;
  element.innerHTML = text.toString();
}
