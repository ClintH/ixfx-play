import * as Dom from 'ixfx/dist/dom.js';
import {repeat, debounce} from 'ixfx/dist/flow.js';
import * as Random from 'ixfx/dist/random.js';
import {Points, Polar} from 'ixfx/dist/geometry.js';
import {pingPongPercent} from 'ixfx/dist/generators.js';

const settings = Object.freeze({
  piPi: Math.PI * 2,
  pointSize: 0.005,
  pointColour: `hsla(70, 100%, 50%, 50%)`,
  radius: 0.5,
  origin: {x: 0.5, y: 0.5},
  pingPong: pingPongPercent(0.001)
});

type State = Readonly<{
  bounds: {width: number, height: number}
  scaleBy: number
  randomSource: Random.RandomSource
  numberOfPoints: number
  startPoints: Points.Point[]
  endPoints: Points.Point[]
  startExpression: string
  endExpression: string
  animationPoint: number
}>

let state: State = {
  bounds: {width: 0, height: 0},
  scaleBy: 1,
  randomSource: Math.random,
  numberOfPoints: 500,
  startPoints: [] as Points.Point[],
  endPoints: [] as Points.Point[],
  startExpression: `r()`,
  endExpression: `1 - r()`,
  animationPoint: 0
};

const evaluateExpression = (txt: string, contextLabel: string) => {
  try {
    // @ts-ignore
    window.r = state.randomSource;
    let distance = eval(txt);
    clearError();
    return distance;
  } catch (ex) {
    handleError(ex, contextLabel);
  }
};

// Expressions or # particles changed
const onCodeUpdated = () => {
  const {radius, piPi, origin} = settings;
  const {numberOfPoints, scaleBy} = state;
  const startExpr = () => evaluateExpression(state.startExpression, `start expression`);
  const endExpr = () => evaluateExpression(state.endExpression, `end expression`);

  // Get start and end distances
  const startDistances = /** @type number[] */([...repeat(numberOfPoints, startExpr)]);

  // If eval failed, exit
  if (startDistances.length < numberOfPoints) return;
  let endDistances = /** @type number[] */([...repeat(numberOfPoints, endExpr)]);

  // If eval failed, use the same as start
  if (endDistances.length < numberOfPoints) endDistances = [...startDistances];

  // Create random angles
  const angles = [...repeat(numberOfPoints, () => Math.random() * piPi)];

  const absOrigin = Points.multiply(origin, state.bounds.width, state.bounds.height);

  //console.log(`radius: ${radius} scaleBy: ${scaleBy} d: ${d}`);

  const makePoint = (d: number, index: number) => Polar.toCartesian(d * radius * scaleBy, angles[index], absOrigin);

  // Make into points
  const startPoints = startDistances.map(makePoint);
  const endPoints = endDistances.map(makePoint);

  updateState({
    startPoints,
    endPoints
  });
  drawState();
};

const computeState = () => {
  const {pingPong} = settings;
  const v = pingPong.next().value;

  updateState({animationPoint: v});
};


const drawState = () => {
  const {pointColour, pointSize} = settings;
  const {animationPoint, startPoints, endPoints, bounds, numberOfPoints} = state;

  // Haven't computed points yet
  if (startPoints.length === 0 || startPoints.length === 0) return;

  const canvasEl = document.querySelector(`#canvas`) as HTMLCanvasElement;
  const ctx = canvasEl.getContext(`2d`);
  if (!ctx || !canvasEl) return;

  // Make background transparent
  ctx.clearRect(0, 0, bounds.width, bounds.height);

  const size = pointSize * state.scaleBy;
  for (let i = 0; i < numberOfPoints; i++) {
    // Compute particle
    const p = Points.interpolate(animationPoint, startPoints[i], endPoints[i]);

    // Draw
    drawPoint(ctx, p, pointColour, size);
  }
};


/**
 * Setup and run main loop 
 */
const setup = () => {
  Dom.fullSizeCanvas(`#canvas`, args => {
    updateState({
      bounds: args.bounds,
      scaleBy: Math.min(args.bounds.width, args.bounds.height)
    });
    onCodeUpdated();
  });

  const loop = () => {
    computeState();
    drawState();
    window.requestAnimationFrame(loop);
  };
  loop();

  const numberParticlesEl = document.getElementById(`numberParticles`) as HTMLInputElement
  numberParticlesEl?.addEventListener(`change`, () => {
    updateState({numberOfPoints: parseInt(numberParticlesEl.value)});
  });

  inputChangeDebounce(`startExpr`, (v: string) => {
    updateState({
      startExpression: v
    });
  });

  inputChangeDebounce(`endExpr`, (v: string) => {
    updateState({
      endExpression: v
    });
  });

  const sourceEl = document.getElementById(`source`) as HTMLSelectElement;
  sourceEl?.addEventListener(`change`, () => {
    const v = sourceEl.value;

    if (v === `Gaussian`) {
      updateState({randomSource: Random.gaussian});
    } else if (v.startsWith(`Weighted (`)) {
      const easing = v.substring(10, v.length - 1);
      // @ts-ignore
      updateState({randomSource: Random.weightedFn(easing)});
    } else {
      updateState({randomSource: Math.random});
    }
  });

  onCodeUpdated();
};
setup();

/**
 * Update state
 */
function updateState(s: Partial<typeof state>) {
  state = Object.freeze({
    ...state,
    ...s
  });
  if (`numberOfPoints` in s) onCodeUpdated();
  else if (`randomSource` in s) onCodeUpdated();
  else if (`startExpression` in s) onCodeUpdated();
  else if (`endExpression` in s) onCodeUpdated();
}

/**
 * Draws a point (in pixel coordinates)
 */
function drawPoint(ctx: CanvasRenderingContext2D, position: Points.Point, fillStyle = `black`, size = 1) {
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.arc(position.x, position.y, size, 0, settings.piPi);
  ctx.fill();
}

/**
 * Invokes `callback` with value of HTML element when it changes
 */
function inputChangeDebounce(id: string, callback: (value: string) => void) {
  const el = document.getElementById(id) as HTMLInputElement;
  if (!el) throw new Error(`${id} not found`);
  const debouncer = debounce((evt) => {
    callback(el.value);
  }, 500);

  el?.addEventListener(`input`, evt => {
    debouncer(evt);
  });
}

function handleError(ex: unknown, headline: string) {
  const errorEl = document.getElementById(`error`);
  if (!errorEl) return;
  errorEl.classList.remove(`hidden`);
  errorEl.innerHTML = `<h1>Error with ${headline}</h1><p>${ex}</p>`;
}

function clearError() {
  const errorEl = document.getElementById(`error`);
  if (!errorEl) return;
  if (errorEl.classList.contains(`hidden`)) return;
  errorEl.innerHTML = ``;
  errorEl.classList.add(`hidden`);
}