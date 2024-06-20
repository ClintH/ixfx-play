import { scaler, pull, wrap, scale } from '../../ixfx/data.js';
import * as Rx from '../../ixfx/rx.js';
import * as Dom from '../../ixfx/dom.js';
import { continuously, frequencyTimer } from '../../ixfx/flow.js';
import * as Visuals from '../../ixfx/visual.js';
import { Points, Polar, degreeToRadian, Line, Lines, Point, Rect } from '../../ixfx/geometry.js';
import * as Modulation from '../../ixfx/modulation.js';
import { reactiveUpdate } from '../../ixfx/data.js';

// Todo: colour range for hue cycling
// alt colourspaces, high range
// make rotation amount relative to ms


const piPi = Math.PI * 2;
const halfPi = Math.PI / 2;

const defaultSettings = {
  armLengthMin: 0.05,
  armLengthMax: 0.4,
  armThickness: 20,
  armOrigin: { x: 0.5, y: 1 },
  armAngleMin: degreeToRadian(180),
  armAngleMax: degreeToRadian(360),
  canvasRpm: 0.01,
  canvasFade: 0.1,
  canvasRpmMax: 120,
  canvasBg: Visuals.Colour.toHsl(`whitesmoke`),
  drawFreq: 0.5,
  armDraw: true,
};

const settings = Rx.From.object({ ...defaultSettings });

const uiState = Rx.combineLatestToObject({
  armLengthMin: Rx.From.domNumberInputValue(`#armLengthMin`, { relative: true }),
  armLengthMax: Rx.From.domNumberInputValue(`#armLengthMax`, { relative: true }),
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
  console.log(`onCanvasRpmUpdatd ${ settings.last().canvasRpm }`);
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
})

// Update UI with loaded settings
uiState.setWith(settings.last());
onCanvasBgUpdated();

const rxState = reactiveUpdate(
  {
    /**
     * Amount of rotation to apply
     */
    canvasRotationRadian: 0,
    /** 
     * Angle of arm in radians
     */
    armAngle: degreeToRadian(-90),
    armLength: 1,
    /**
     * Time of last draw
     */
    lastDraw: 0
  },
  {
    canvasRotationRadian: Modulation.perSecond(piPi * settings.last().canvasRpm),
    armAngle: Rx.run(
      // Angle of arm based on sine oscillator
      Modulation.Oscillators.sine(frequencyTimer(0.1)),
      // Scale
      Rx.Ops.transform(v => {
        const s = settings.last();
        return scale(v, 0, 1, s.armAngleMin, s.armAngleMax);
      })
    ),
    armLength: Rx.run(
      Modulation.Oscillators.sine(frequencyTimer(0.01)),
      Rx.Ops.transform(v => {
        const s = settings.last();
        const l = scale(v, 0, 1, s.armLengthMin, s.armLengthMax);

        return l;
      })
    )
  }
);


//d.clear(Visuals.Colour.toHex(settings.last().canvasBg));

continuously(async () => {
  await update();
  //await use();
}, 30).start();


const drawArm = (armAbsolute: Line, thickness: number) => {
  overlayContext.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
  // overlayContext.strokeStyle = `hsl(0,0%,30%)`;
  overlayContext.strokeStyle = `black`;
  overlayContext.lineWidth = thickness;
  overlayContext.beginPath();
  overlayContext.moveTo(armAbsolute.a.x, armAbsolute.a.y);
  overlayContext.lineTo(armAbsolute.b.x, armAbsolute.b.y);
  overlayContext.stroke();
  overlayContext.closePath();
};

let hue = 0;
const drawAtHead = () => {
  const size = 50;

  canvasContext.fillStyle = `hsl(${ hue * 360 },100%,50%,0.4)`;

  const square = () => {
    canvasContext.fillRect(-size / 2, -size / 2, size, size);
  }

  const dot = () => {
    canvasContext.beginPath();
    canvasContext.arc(0, 0, size, 0, piPi);
    canvasContext.fill();
  }
  dot();
  hue += 0.001;
  if (hue > 360) hue = 0;
}

const overlayCanvas = document.querySelector(`#overlay`) as HTMLCanvasElement;
const overlayContext = overlayCanvas.getContext(`2d`,) as CanvasRenderingContext2D;

const canvas = document.querySelector(`#canvas`) as HTMLCanvasElement;
const canvasContext = canvas.getContext(`2d`) as CanvasRenderingContext2D;

const bufferCanvas = document.querySelector(`#buffer`) as HTMLCanvasElement;
const bufferContext = bufferCanvas.getContext(`2d`, { alpha: false }) as CanvasRenderingContext2D;

const canvasSize = {
  width: window.innerWidth * 2,
  height: window.innerHeight * 2
}
const dpi = window.devicePixelRatio || 1;

const scaleCanvas = (c: HTMLCanvasElement, lw: number, lh: number) => {
  c.width = lw * dpi;
  c.height = lh * dpi;
  c.style.width = `${ lw }px`;
  c.style.height = `${ lh }px`;

}
const setupCanvas = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  console.log(`window: ${ w }x${ h }`);
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

  //bufferContext.fillStyle = `black`;
  //bufferContext.fillRect(0, 0, canvasSize.width, canvas.height);

}

setupCanvas();

async function update() {
  const state = await rxState.pull();
  const set = settings.last();
  const dimension = Math.min(window.innerHeight, window.innerWidth);
  let armL = state.armLength * (dimension / 2);
  //0.5 * dimension * state.armLength
  const armA = -Math.PI / 2;

  let armOriginAbs = Points.multiply(set.armOrigin, window.innerWidth, window.innerHeight);
  const armEnd = Polar.toCartesian(
    state.armLength * dimension,
    state.armAngle,
    armOriginAbs
  );

  const armAbsolute: Line = { a: armOriginAbs, b: armEnd };

  //drawBox(canvasContext, canvasSize, `red`);
  //drawBox(bufferContext, canvasSize, `yellow`);

  drawArm(armAbsolute, set.armThickness);

  // Fade out canvas
  canvasContext.filter = ``;
  //canvasContext.globalCompositeOperation = `hard-light`;
  canvasContext.fillStyle = `hsla(100,100%,0%,0.001)`;
  canvasContext.fillRect(0, 0, canvasSize.width, canvasSize.height);
  //canvasContext.globalCompositeOperation = `darken`;

  // Draw head

  canvasContext.save();
  canvasContext.filter = `blur(10px)`;
  canvasContext.translate(armEnd.x + (canvasSize.width / 4), armEnd.y + (canvasSize.height / 4));
  drawAtHead();
  canvasContext.restore();

  // Make a copy
  bufferContext.save();
  bufferContext.filter = `blur(20px)`;

  bufferContext.clearRect(0, 0, canvasSize.width, canvasSize.height);
  bufferContext.scale(1 / dpi, 1 / dpi);
  bufferContext.drawImage(canvas, 0, 0);
  bufferContext.restore();

  // Rotate canvas
  canvasContext.save();
  canvasContext.translate(canvasSize.width / 2, canvasSize.height / 2);
  canvasContext.rotate(state.canvasRotationRadian);//state.canvasRotationRadian);
  canvasContext.translate(-canvasSize.width / 2, -canvasSize.height / 2);

  // Draw buffer back down again
  canvasContext.scale(1 / dpi, 1 / dpi);

  canvasContext.drawImage(bufferCanvas, 0, 0);
  canvasContext.restore();

};

const drawBox = (c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, size: Rect, colour = `white`) => {
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
