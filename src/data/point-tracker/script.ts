import * as Dom from '../../ixfx/dom.js';
import {DataTable} from '../../ixfx/dom.js';
import {Points} from '../../ixfx/geometry.js';
import {pointTracker} from '../../ixfx/data.js';
import {drawDot, drawLine, getContext, setText} from '../../util.js';
import {Rects} from 'ixfx/lib/geometry';

const settings = Object.freeze({
  tracker: pointTracker({
    id: `pt`,
    storeIntermediate: true
  }),
  dtInitial: DataTable.fromObject(`#infoInitial`, undefined, {formatter}),
  dtLast: DataTable.fromObject(`#infoLast`, undefined, {formatter}),
});

type State = Readonly<{
  bounds: Rects.Rect
  lastPoint: Points.Point
}>

let state: State = Object.freeze({
  bounds: {
    width: 0,
    height: 0,
    center: {x: 0, y: 0}
  },
  lastPoint: {x: -1, y: -1}
});

/**
 * New click point
 */
const handlePoint = (pt: Points.Point) => {
  const {dtInitial, dtLast, tracker} = settings;
  const {lastPoint} = state;

  const r = tracker.seen(pt);

  const context = getContext();
  if (!context) return;

  const firstPoint = (lastPoint.x === -1 && lastPoint.y === -1);

  if (firstPoint) {
    drawDot(context, pt, `red`);
  } else if (!firstPoint) {
    // Draw line
    drawLine(context, lastPoint, pt);
    drawDot(context, pt);
  }

  updateState({lastPoint: pt});

  dtInitial.update(r.fromInitial);
  dtLast.update(r.fromLast);


  setText(`totalLength`, Math.round(tracker.length));
  setText(`elapsed`, Math.round(tracker.elapsed / 1000) + `s`);

};



/**
 * Setup and run main loop 
 */
const setup = () => {
  Dom.fullSizeCanvas(`#canvas`, arguments_ => {
    // Update state with new size of canvas
    updateState({bounds: arguments_.bounds});
  });

  document.addEventListener(`click`, event => {
    handlePoint({x: event.x, y: event.y});
  });
};
setup();

function formatter(data: object, path: string) {
  if (path === `centroid` || path === `average`) {
    return Points.toString(Points.apply(data as Points.Point, Math.round));
  }
  return;
}

/**
 * Update state
 */
function updateState(s: Partial<State>) {
  state = Object.freeze({
    ...state,
    ...s
  });
}
