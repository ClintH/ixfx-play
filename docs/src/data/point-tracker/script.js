import { CanvasHelper } from '../../ixfx/dom.js';
import { DataTable } from '../../ixfx/dom.js';
import { Points } from '../../ixfx/geometry.js';
import { pointTracker } from '../../ixfx/data.js';
import { drawDot, drawLine, setText } from '../../util.js';
const settings = Object.freeze({
    canvas: new CanvasHelper(`#canvas`, { fill: `viewport` }),
    tracker: pointTracker({
        id: `pt`,
        storeIntermediate: true
    }),
    dtInitial: DataTable.fromObject(`#infoInitial`, undefined, { formatter }),
    dtLast: DataTable.fromObject(`#infoLast`, undefined, { formatter }),
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
 */
const handlePoint = (pt) => {
    const { canvas, dtInitial, dtLast, tracker } = settings;
    const { lastPoint } = state;
    const { ctx } = canvas;
    const r = tracker.seen(pt);
    const firstPoint = (lastPoint.x === -1 && lastPoint.y === -1);
    if (firstPoint) {
        drawDot(ctx, pt, `red`);
    }
    else if (!firstPoint) {
        // Draw line
        drawLine(ctx, lastPoint, pt);
        drawDot(ctx, pt);
    }
    updateState({ lastPoint: pt });
    dtInitial.update(r.fromInitial);
    dtLast.update(r.fromLast);
    setText(`totalLength`, Math.round(tracker.length));
    setText(`elapsed`, Math.round(tracker.elapsed / 1000) + `s`);
};
function setup() {
    document.addEventListener(`click`, event => {
        handlePoint({ x: event.x, y: event.y });
    });
}
;
setup();
function formatter(data, path) {
    if (path === `centroid` || path === `average`) {
        return Points.toString(Points.apply(data, Math.round));
    }
    return;
}
/**
 * Update state
 */
function updateState(s) {
    state = Object.freeze({
        ...state,
        ...s
    });
}
//# sourceMappingURL=script.js.map