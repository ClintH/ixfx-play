import * as Rx from '../../ixfx/rx.js';
import { continuously } from '../../ixfx/flow.js';
import * as Visuals from '../../ixfx/visual.js';
import { Scaler } from '../../ixfx/geometry.js';
import * as Modulation from '../../ixfx/modulation.js';
import { reactiveUpdate } from '../../ixfx/data.js';
import { Things } from './things.js';
import * as LineThing from './line-thing.js';
import * as Heads from './heads/index.js';
import { Drawing } from '../../ixfx/visual.js';
// Todo: colour range for hue cycling
// alt colourspaces, high range
// make rotation amount relative to ms
const piPi = Math.PI * 2;
const halfPi = Math.PI / 2;
const things = new Things();
things.add(LineThing.create());
const defaultSettings = {
    bufferFilter: ``, //blur(2px)`,
    canvasRpm: 0.01,
    canvasFade: 0.1,
    canvasRpmMax: 120,
    canvasBg: Visuals.Colour.toHsl(`whitesmoke`),
    drawFreq: 0.5,
    //armDraw: true,
};
const settings = Rx.From.object({ ...defaultSettings });
const uiState = Rx.combineLatestToObject({
    // armLengthMin: Rx.From.domNumberInputValue(`#armLengthMin`, { relative: true }),
    // armLengthMax: Rx.From.domNumberInputValue(`#armLengthMax`, { relative: true }),
    canvasRpm: Rx.From.domNumberInputValue(`#canvasRpm`, { relative: true }),
    canvasFade: Rx.From.domNumberInputValue(`#canvasFade`, { relative: true }),
    canvasBg: Rx.From.domHslInputValue(`#canvasBg`),
    drawFreq: Rx.From.domNumberInputValue(`#drawFreq`, { relative: true })
});
// If UI changes, sync back to settings
uiState.onValue(value => {
    settings.update(value);
});
function onCanvasBgUpdated() {
    //d.clear(Visuals.Colour.toHex(settings.last().canvasBg));
}
function onCanvasRpmUpdated() {
    console.log(`onCanvasRpmUpdatd ${settings.last().canvasRpm}`);
    const r = Modulation.perSecond(piPi * settings.last().canvasRpm);
    rxState.replaceSource(`canvasRotationRadian`, r);
}
// If settings change, update state perhaps
settings.onDiff(changes => {
    console.log(changes);
    if (changes.some(c => c.path.startsWith(`canvasBg`))) {
        onCanvasBgUpdated();
    }
    if (changes.some(c => c.path === `canvasRpm`)) {
        onCanvasRpmUpdated();
    }
});
settings.onValue(value => {
    console.log(`settings onValue`, value);
});
// Update UI with loaded settings
uiState.setWith(settings.last());
onCanvasBgUpdated();
const rxState = reactiveUpdate({
    /**
     * Amount of rotation to apply
     */
    canvasRotationRadian: 0,
    /**
     * Angle of arm in radians
     */
    //armAngle: degreeToRadian(-90),
    //armLength: 1,
    /**
     * Time of last draw
     */
    lastDraw: 0
}, {
    canvasRotationRadian: Modulation.perSecond(piPi * settings.last().canvasRpm),
});
//d.clear(Visuals.Colour.toHex(settings.last().canvasBg));
continuously(async () => {
    await update();
    //await use();
}, 30).start();
let hue = 0;
const drawAtHead = () => {
    const size = 50;
    canvasContext.fillStyle = `hsl(${hue * 360},100%,50%,0.4)`;
    const square = () => {
        canvasContext.fillRect(-size / 2, -size / 2, size, size);
    };
    const dot = () => {
        canvasContext.beginPath();
        canvasContext.arc(0, 0, size, 0, piPi);
        canvasContext.fill();
    };
    dot();
    hue += 0.001;
    if (hue > 360)
        hue = 0;
};
const overlayCanvas = document.querySelector(`#overlay`);
const overlayContext = overlayCanvas.getContext(`2d`);
const canvas = document.querySelector(`#canvas`);
const canvasContext = canvas.getContext(`2d`);
const bufferCanvas = document.querySelector(`#buffer`);
const bufferContext = bufferCanvas.getContext(`2d`, { alpha: false });
const canvasSize = {
    width: window.innerWidth * 2,
    height: window.innerHeight * 2
};
const dpi = window.devicePixelRatio || 1;
const scaleCanvas = (c, lw, lh) => {
    c.width = lw * dpi;
    c.height = lh * dpi;
    c.style.width = `${lw}px`;
    c.style.height = `${lh}px`;
};
const setupCanvas = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    console.log(`window: ${w}x${h}`);
    scaleCanvas(overlayCanvas, w, h);
    overlayContext.scale(dpi, dpi);
    scaleCanvas(canvas, canvasSize.width, canvasSize.height);
    canvasContext.scale(dpi, dpi);
    canvasContext.imageSmoothingQuality = `low`;
    canvasContext.imageSmoothingEnabled = true;
    // Nice: darken, color-burn, hard-light, lighten, luminosity
    // with light theme: darken, color-burn
    // with dark theme: hard-light, lighten
    //canvasContext.globalCompositeOperation = `lighten`;
    //canvasContext.fillStyle = `black`;
    //canvasContext.fillRect(0, 0, canvasSize.width, canvas.height);
    scaleCanvas(bufferCanvas, canvasSize.width, canvasSize.height);
    bufferContext.scale(dpi, dpi);
    // Doesn't make a difference?
    bufferContext.imageSmoothingQuality = `high`;
    bufferContext.imageSmoothingEnabled = true;
    bufferContext.filter = settings.last().bufferFilter;
    //bufferContext.fillStyle = `black`;
    //bufferContext.fillRect(0, 0, canvasSize.width, canvas.height);
};
setupCanvas();
const canvasDrawing = Drawing.makeHelper(canvasContext);
const scalers = {
    pos: Scaler.scaler(`both`, { width: window.innerWidth, height: window.innerHeight }).abs,
    size: (value) => value * (Math.min(window.innerHeight, window.innerWidth))
};
async function update() {
    const state = await rxState.pull();
    const set = settings.last();
    const dimension = Math.min(window.innerHeight, window.innerWidth);
    //let armL = state.armLength * (dimension / 2);
    //0.5 * dimension * state.armLength
    // const armA = -Math.PI / 2;
    // let armOriginAbs = Points.multiply(set.armOrigin, window.innerWidth, window.innerHeight);
    // const armEnd = Polar.toCartesian(
    //   state.armLength * dimension,
    //   state.armAngle,
    //   armOriginAbs
    // );
    //const armAbsolute: Line = { a: armOriginAbs, b: armEnd };
    overlayContext.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    for (const t of things.data) {
        if (t.stateCompute === undefined)
            t.stateCompute = t.createStateComputer(t);
        t.state = t.stateCompute(t.state, scalers);
        t.draw(overlayContext, t, scalers);
    }
    //drawBox(canvasContext, canvasSize, `red`);
    //drawBox(bufferContext, canvasSize, `yellow`);
    //drawArm(armAbsolute, set.armThickness);
    // Fade out canvas
    canvasContext.filter = ``;
    //canvasContext.globalCompositeOperation = `hard-light`;
    canvasContext.fillStyle = `hsla(100,100%,0%,0.001)`;
    canvasContext.fillRect(0, 0, canvasSize.width, canvasSize.height);
    //canvasContext.globalCompositeOperation = `darken`;
    // Draw head
    canvasContext.save();
    canvasContext.translate(canvasSize.width / 4, canvasSize.height / 4);
    for (const t of things.data) {
        canvasContext.save();
        const heads = t.getHeads(t);
        Heads.draw(heads, canvasDrawing);
        canvasContext.restore();
    }
    canvasContext.restore();
    // canvasContext.save();
    // canvasContext.filter = `blur(10px)`;
    // canvasContext.translate(armEnd.x + (canvasSize.width / 4), armEnd.y + (canvasSize.height / 4));
    // drawAtHead();
    // canvasContext.restore();
    // Make a copy
    bufferContext.save();
    bufferContext.clearRect(0, 0, canvasSize.width, canvasSize.height);
    bufferContext.scale(1 / dpi, 1 / dpi);
    bufferContext.drawImage(canvas, 0, 0);
    bufferContext.restore();
    // Rotate canvas
    canvasContext.save();
    canvasContext.translate(canvasSize.width / 2, canvasSize.height / 2);
    canvasContext.rotate(state.canvasRotationRadian); //state.canvasRotationRadian);
    canvasContext.translate(-canvasSize.width / 2, -canvasSize.height / 2);
    // Draw buffer back down again
    canvasContext.scale(1 / dpi, 1 / dpi);
    canvasContext.drawImage(bufferCanvas, 0, 0);
    canvasContext.restore();
}
;
const drawBox = (c, size, colour = `white`) => {
    c.beginPath();
    c.strokeStyle = colour;
    c.moveTo(0, 0);
    c.lineTo(size.width, 0);
    c.moveTo(size.width, 0);
    c.lineTo(0, size.height);
    c.moveTo(0, 0);
    c.lineTo(size.width, size.height);
    c.lineWidth = 5;
    c.stroke();
};
//# sourceMappingURL=script.js.map