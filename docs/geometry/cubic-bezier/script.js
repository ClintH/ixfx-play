import { Plot } from '../../ixfx/visual.js';
import * as Rx from '../../ixfx/rx.js';
import { Beziers, Points } from '../../ixfx/geometry.js';
import * as Dom from '../../ixfx/dom.js';
const snippetEl = document.querySelector(`#snippet`);
const setPoint = (prefix, point) => {
    const inputX = document.querySelector(`#${prefix}-x`);
    inputX.value = point.x.toString();
    const inputY = document.querySelector(`#${prefix}-y`);
    inputY.value = point.y.toString();
};
const pointA = Rx.From.object({ x: 0, y: 0 });
pointA.onValue(value => {
    setPoint(`a`, value);
    use();
});
const pointB = Rx.From.object({ x: 1, y: 1 });
pointB.onValue(value => {
    setPoint(`b`, value);
    use();
});
const cubic1 = Rx.From.object({ x: 1, y: 0 });
cubic1.onValue(value => {
    setPoint(`cubic1`, value);
    use();
});
const cubic2 = Rx.From.object({ x: 0, y: 1 });
cubic2.onValue(value => {
    setPoint(`cubic2`, value);
    use();
});
const ds = new Plot.DataSet();
const p = new Plot.CartesianCanvasPlot(`#plot`, ds, {
    margin: 20,
    coordinateScale: `width`,
    canvasResize: `min`,
    canvasHeight: 100,
    canvasWidth: 100,
    grid: {
        increments: 0.1
    },
    range: { min: { x: 0, y: 0 }, max: { x: 1, y: 1 } },
    connectStyle: `line`,
    valueStyle: `dot`,
    textStyle: {
        size: `8px`,
        colour: `gray`
    },
    axisStyle: {
        colour: `hsl(0,0%,20%)`
    },
    show: {
        grid: false,
        axes: true,
        axisValues: true,
        whiskers: true
    },
    whiskerLength: 10
});
p.setMeta(`default`, {
    colour: `hsl(50,100%,50%)`
});
Dom.Rx.windowResize(200).onValue(v => {
    p.positionAt(pointA.last(), `#point-a`, `middle`, `#left`);
    p.positionAt(pointB.last(), `#point-b`, `middle`, `#left`);
    p.positionAt(cubic1.last(), `#point-cubic1`, `middle`, `#left`);
    p.positionAt(cubic2.last(), `#point-cubic2`, `middle`, `#left`);
});
function drag(suffix, rx) {
    Dom.DragDrop.draggable(`#point-${suffix}`, {
        progress: (state) => {
            let v = p.screenToValue(state.viewport);
            if (suffix === `a` || suffix === `b`) {
                v = Points.clamp(v);
            }
            rx.set(v);
            return {
                viewport: p.valueToScreen(v)
            };
        },
        abort: (reason, state) => {
            console.log(`abort: ${reason} - ${state}`);
        },
        success: (state) => {
            let v = p.screenToValue(state.viewport);
            if (suffix === `a` || suffix === `b`) {
                v = Points.clamp(v);
            }
            rx.set(v);
        }
    }, {
        autoTranslate: true,
        quickDrag: true
    });
    p.positionAt(rx.last(), `#point-${suffix}`, `middle`, `#left`);
    setPoint(suffix, rx.last());
    makeRxPair(suffix, rx);
}
function use() {
    ds.clear();
    const a = pointA.last();
    const b = pointB.last();
    const c1 = cubic1.last();
    const c2 = cubic2.last();
    //console.log(`a: ${ a.x }x${ a.y } \tb:${ b.x }x${ b.y } c1: ${ c1.x }x${ c1.y } c2: ${ c2.x }x${ c2.y }`);
    const bzr = Beziers.cubic(a, b, c1, c2);
    const i = Beziers.interpolator(bzr);
    let resolution = 0.03;
    for (let x = 0; x < 1; x += resolution) {
        const v = i(x);
        ds.add(v);
    }
    ds.add(i(1));
    // Draw rays from anchors to control points
    p.overlayLines = [
        { a: a, b: c1, colour: `white`, width: 4 },
        { a: b, b: c2, colour: `white`, width: 4 }
    ];
    const snippet = [
        `const a = { x: ${a.x.toFixed(3)}, y: ${a.y.toFixed(3)} };`,
        `const b = { x: ${b.x.toFixed(3)}, y: ${b.y.toFixed(3)} };`,
        `const cubic1 = { x: ${c1.x.toFixed(3)}, y: ${c1.y.toFixed(3)} };`,
        `const cubic2 = { x: ${c2.x.toFixed(3)}, y: ${c2.y.toFixed(3)} };`,
        `Beziers.cubic(a, b, cubic1, cubic2);`
    ];
    snippetEl.innerHTML = snippet.join(`<br>`);
    p.draw();
}
use();
function makeRxPair(prefix, rx) {
    const pair = Rx.combineLatestToObject({
        x: Rx.From.domNumberInputValue(`#${prefix}-x`),
        y: Rx.From.domNumberInputValue(`#${prefix}-y`, { emitInitialValue: true })
    });
    pair.onValue(value => {
        rx.set(value);
        use();
        p.positionAt(rx.last(), `#point-${prefix}`, `middle`, `#left`);
    });
}
drag(`a`, pointA);
drag(`b`, pointB);
drag(`cubic1`, cubic1);
drag(`cubic2`, cubic2);
//# sourceMappingURL=script.js.map