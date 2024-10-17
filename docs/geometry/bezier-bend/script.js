import { Plot } from '../../ixfx/visual.js';
import * as Rx from '../../ixfx/rx.js';
import { Beziers, Points } from '../../ixfx/geometry.js';
import * as Dom from '../../ixfx/dom.js';
let maxPlotWidth = 0.7;
if (window.location.hash.includes(`hide-panel`)) {
    document.querySelector(`#right`).style.display = `none`;
    maxPlotWidth = 1;
}
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
const bend = Rx.From.number(0);
bend.onValue(value => {
    const inputY = document.querySelector(`#bend`);
    inputY.value = value.toString();
    use();
});
//const region = { height: 0.7, width: maxPlotWidth, x: 0, y: 0.15 }
const p = Plot.insert({
    canvasResizeTo: `viewport`,
    region: { match: `#target`, marginPx: 50 },
}, {
    grid: {
        increments: 0.1
    },
    clear: `canvas`,
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
    colour: `hsl(50,100%,50%)`,
    lineWidth: 10
});
Dom.Rx.windowResize(200).onValue(v => {
    p.positionElementAt(pointA.last(), `#point-a`, `middle`);
    p.positionElementAt(pointB.last(), `#point-b`, `middle`);
});
function drag(suffix, rx) {
    Dom.DragDrop.draggable(`#point-${suffix}`, {
        progress: (state) => {
            //console.log(state.viewport);
            let v = p.pointToValue(state.viewport, `screen`);
            if (suffix === `a` || suffix === `b`) {
                v = Points.clamp(v);
            }
            rx.set(v);
            return {
                viewport: p.valueToScreenSpace(v)
            };
        },
        abort: (reason, state) => {
            console.log(`abort: ${reason} - ${state}`);
        },
        success: (state) => {
            let v = p.pointToValue(state.viewport, `screen`);
            if (suffix === `a` || suffix === `b`) {
                v = Points.clamp(v);
            }
            rx.set(v);
        }
    }, {
        autoTranslate: true,
        quickDrag: true
    });
    p.positionElementAt(rx.last(), `#point-${suffix}`, `middle`);
    setPoint(suffix, rx.last());
    makeRxPair(suffix, rx);
}
function use() {
    const ds = p.dataSet;
    ds.clear();
    const a = pointA.last();
    const b = pointB.last();
    const x = bend.last();
    const bzr = Beziers.quadraticSimple(a, b, x);
    const i = Beziers.interpolator(bzr);
    let resolution = 0.03;
    for (let x = 0; x < 1; x += resolution) {
        const v = i(x);
        ds.add(v);
    }
    ds.add(i(1));
    const snippet = [
        `const a = { x: ${a.x.toFixed(3)}, y: ${a.y.toFixed(3)} };`,
        `const b = { x: ${b.x.toFixed(3)}, y: ${b.y.toFixed(3)} };`,
        `Beziers.quadraticSimple(a, b, ${x});`
    ];
    snippetEl.innerHTML = snippet.join(`<br>`);
    p.draw();
}
function makeRxPair(prefix, rx) {
    const pair = Rx.combineLatestToObject({
        x: Rx.From.domNumberInputValue(`#${prefix}-x`),
        y: Rx.From.domNumberInputValue(`#${prefix}-y`, { emitInitialValue: true })
    });
    pair.onValue(value => {
        rx.set(value);
        use();
        p.positionElementAt(rx.last(), `#point-${prefix}`, `middle`);
    });
}
const bendInput = Rx.From.domNumberInputValue(`#bend`, { when: `changing` });
bendInput.onValue(v => {
    bend.set(v);
    use();
});
drag(`a`, pointA);
drag(`b`, pointB);
use();
//# sourceMappingURL=script.js.map