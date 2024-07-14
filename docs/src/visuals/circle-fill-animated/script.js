/* eslint-disable unicorn/no-array-callback-reference */
import { CanvasHelper } from '../../ixfx/dom.js';
import { repeat, debounce } from '../../ixfx/flow.js';
import * as Random from '../../ixfx/random.js';
import { Colour } from '../../ixfx/visual.js';
import { Points, Polar } from '../../ixfx/geometry.js';
import * as Numbers from '../../ixfx/numbers.js';
const settings = Object.freeze({
    canvas: new CanvasHelper(`#canvas`, {
        fill: `viewport`,
        onResize(context, size, helper) {
            onCodeUpdated();
        },
    }),
    piPi: Math.PI * 2,
    pointSize: 0.005,
    pointColour: Colour.resolveToString(`--point-fill`),
    radius: 0.5,
    origin: { x: 0.5, y: 0.5 },
    pingPong: Numbers.pingPongPercent(0.001)
});
let state = {
    randomSource: Math.random,
    numberOfPoints: 500,
    startPoints: [],
    endPoints: [],
    startExpression: `r()`,
    endExpression: `1 - r()`,
    animationPoint: 0
};
const evaluateExpression = (txt, contextLabel) => {
    try {
        // @ts-ignore
        window.r = state.randomSource;
        let result = eval(txt);
        clearError();
        return result;
    }
    catch (error) {
        handleError(error, contextLabel);
    }
};
// Expressions or # particles changed
const onCodeUpdated = () => {
    const { canvas, radius, piPi, origin } = settings;
    const { numberOfPoints } = state;
    const startExpr = () => evaluateExpression(state.startExpression, `start expression`);
    const endExpr = () => evaluateExpression(state.endExpression, `end expression`);
    // Get start and end distances
    const startDistances = /** @type number[] */ ([...repeat(numberOfPoints, startExpr)]);
    // If eval failed, exit
    if (startDistances.length < numberOfPoints)
        return;
    let endDistances = /** @type number[] */ ([...repeat(numberOfPoints, endExpr)]);
    // If eval failed, use the same as start
    if (endDistances.length < numberOfPoints)
        endDistances = [...startDistances];
    // Create random angles
    const angles = [...repeat(numberOfPoints, () => Math.random() * piPi)];
    const absOrigin = canvas.toAbsolute(origin);
    const makePoint = (d, index) => Polar.toCartesian(d * radius * canvas.dimensionMin, angles[index], absOrigin);
    // Make into points
    const startPoints = startDistances.map(makePoint);
    const endPoints = endDistances.map(makePoint);
    updateState({
        startPoints,
        endPoints,
    });
    drawState();
};
const computeState = () => {
    const { pingPong } = settings;
    const v = pingPong.next().value;
    updateState({ animationPoint: v });
};
const drawState = () => {
    const { canvas, pointColour, pointSize } = settings;
    const { animationPoint, startPoints, endPoints, numberOfPoints } = state;
    const { ctx, width, height } = canvas;
    // Haven't computed points yet
    if (startPoints.length === 0 || startPoints.length === 0)
        return;
    // Make background transparent
    ctx.clearRect(0, 0, width, height);
    const size = pointSize * canvas.dimensionMin;
    for (let index = 0; index < numberOfPoints; index++) {
        // Compute particle
        const p = Points.interpolate(animationPoint, startPoints[index], endPoints[index], true);
        // Draw
        drawPoint(ctx, p, pointColour, size);
    }
};
/**
 * Setup and run main loop
 */
const setup = () => {
    const loop = () => {
        computeState();
        drawState();
        window.requestAnimationFrame(loop);
    };
    loop();
    const numberParticlesElement = document.querySelector(`#numberParticles`);
    numberParticlesElement?.addEventListener(`change`, () => {
        updateState({ numberOfPoints: Number.parseInt(numberParticlesElement.value) });
    });
    inputChangeDebounce(`startExpr`, (v) => {
        updateState({
            startExpression: v
        });
    });
    inputChangeDebounce(`endExpr`, (v) => {
        updateState({
            endExpression: v
        });
    });
    const sourceElement = document.querySelector(`#source`);
    sourceElement?.addEventListener(`change`, () => {
        const v = sourceElement.value;
        if (v === `Gaussian`) {
            updateState({ randomSource: Random.gaussian });
        }
        else if (v.startsWith(`Weighted (`)) {
            const easing = v.slice(10, -1);
            // @ts-ignore
            updateState({ randomSource: Random.weightedSource(easing) });
        }
        else {
            updateState({ randomSource: Math.random });
        }
    });
    onCodeUpdated();
};
setup();
/**
 * Update state
 */
function updateState(s) {
    state = Object.freeze({
        ...state,
        ...s
    });
    if (`numberOfPoints` in s)
        onCodeUpdated();
    else if (`randomSource` in s)
        onCodeUpdated();
    else if (`startExpression` in s)
        onCodeUpdated();
    else if (`endExpression` in s)
        onCodeUpdated();
}
/**
 * Draws a point (in pixel coordinates)
 */
function drawPoint(context, position, fillStyle = `black`, size = 1) {
    context.fillStyle = fillStyle;
    context.beginPath();
    context.arc(position.x, position.y, size, 0, settings.piPi);
    context.fill();
}
/**
 * Invokes `callback` with value of HTML element when it changes
 */
function inputChangeDebounce(id, callback) {
    const element = document.querySelector(`#${id}`);
    if (!element)
        throw new Error(`${id} not found`);
    const debouncer = debounce((event) => {
        callback(element.value);
    }, 500);
    element?.addEventListener(`input`, event => {
        debouncer(event);
    });
}
function handleError(ex, headline) {
    const errorElement = document.querySelector(`#error`);
    if (!errorElement)
        return;
    errorElement.classList.remove(`hidden`);
    errorElement.innerHTML = `<h1>Error with ${headline}</h1><p>${ex}</p>`;
}
function clearError() {
    const errorElement = document.querySelector(`#error`);
    if (!errorElement)
        return;
    if (errorElement.classList.contains(`hidden`))
        return;
    errorElement.innerHTML = ``;
    errorElement.classList.add(`hidden`);
}
//# sourceMappingURL=script.js.map