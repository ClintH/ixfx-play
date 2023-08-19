import * as Dom from 'ixfx/dist/dom.js';
import { Points } from 'ixfx/dist/geometry.js';
import { pointTracker } from 'ixfx/dist/data.js';

const settings = Object.freeze({
  tracker: pointTracker( {
    id:`pt`,
    storeIntermediate: true 
  }),
  dtInitial: Dom.dataTable(`#infoInitial`, undefined,{ formatter }),
  dtLast: Dom.dataTable(`#infoLast`, undefined, { formatter }),
});

let state = Object.freeze({
  bounds: {
    width: 0,
    height: 0,
    center: { x: 0, y: 0 }
  },
  lastPoint: { x: -1, y: -1 }
});

/**
 * New click point
 * @param {Points.Point} pt 
 */
const handlePoint = (pt) => {
  const { dtInitial, dtLast, tracker } = settings;
  const { lastPoint } = state;

  const r = tracker.seen(pt);

  const ctx = getCtx();
  if (!ctx) return;

  const firstPoint  = (lastPoint.x === -1 && lastPoint.y === -1);

  if (firstPoint) {
    drawDot(ctx, pt, `red`);
  } else if (!firstPoint) {
    // Draw line
    drawLine(ctx, lastPoint, pt);
    drawDot(ctx, pt);
  }

  updateState({ lastPoint: pt });
  console.log(r);

  dtInitial(r.fromInitial);
  dtLast(r.fromLast);

  document.getElementById(`totalLength`).innerText = Math.round(tracker.length);
  document.getElementById(`elapsed`).innerText = Math.round(tracker.elapsed/1000) + `s`;

};

const getCtx = () => {
  /** @type HTMLCanvasElement|null */
  const canvasEl = document.querySelector(`#canvas`);
  const ctx = canvasEl?.getContext(`2d`);
  if (!ctx || !canvasEl) return;
  return ctx;
};

/**
 * Draws a line from a -> b
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Points.Point} a 
 * @param {Points.Point} b 
 * @returns 
 */
const drawLine = (ctx, a, b) => {
  ctx.beginPath();
  ctx.strokeStyle =`black`;
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
};

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Points.Point} a 
 */
const drawDot = (ctx, a, fillStyle = `black`) => {
  ctx.fillStyle = fillStyle;
  ctx.save();
  ctx.translate(a.x, a.y);
  ctx.beginPath();
  ctx.arc(0,0,5,0,Math.PI*2);
  ctx.fill();
  ctx.restore();
};

/**
 * Setup and run main loop 
 */
const setup = () => {
  Dom.fullSizeCanvas(`#canvas`, args => {
    // Update state with new size of canvas
    updateState({ bounds: args.bounds });
  });

  document.addEventListener(`click`, evt => {
    handlePoint({ x: evt.x, y: evt.y });
  });
};
setup();

function formatter(data, path) {
  if (path === `centroid` || path === `average`) {
    return Points.toString(Points.apply(data, Math.round));
  }
  return undefined;
}

/**
 * Update state
 * @param {Partial<state>} s 
 */
function updateState (s) {
  state = Object.freeze({
    ...state,
    ...s
  });
}
