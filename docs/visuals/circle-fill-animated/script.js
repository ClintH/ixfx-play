/* eslint-disable unicorn/no-array-callback-reference */
import * as Dom from '../../ixfx/dom.js';
import { repeat, debounce } from '../../ixfx/flow.js';
import * as Random from '../../ixfx/random.js';
import { Points, Polar } from '../../ixfx/geometry.js';
import { pingPongPercent } from '../../ixfx/generators.js';
const settings = Object.freeze({
    piPi: Math.PI * 2,
    pointSize: 0.005,
    pointColour: `hsla(70, 100%, 50%, 50%)`,
    radius: 0.5,
    origin: { x: 0.5, y: 0.5 },
    pingPong: pingPongPercent(0.001)
});
let state = {
    bounds: { width: 0, height: 0 },
    scaleBy: 1,
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
        let distance = eval(txt);
        clearError();
        return distance;
    }
    catch (error) {
        handleError(error, contextLabel);
    }
};
// Expressions or # particles changed
const onCodeUpdated = () => {
    const { radius, piPi, origin } = settings;
    const { numberOfPoints, scaleBy } = state;
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
    const absOrigin = Points.multiply(origin, state.bounds.width, state.bounds.height);
    //console.log(`radius: ${radius} scaleBy: ${scaleBy} d: ${d}`);
    const makePoint = (d, index) => Polar.toCartesian(d * radius * scaleBy, angles[index], absOrigin);
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
    const { pingPong } = settings;
    const v = pingPong.next().value;
    updateState({ animationPoint: v });
};
const drawState = () => {
    const { pointColour, pointSize } = settings;
    const { animationPoint, startPoints, endPoints, bounds, numberOfPoints } = state;
    // Haven't computed points yet
    if (startPoints.length === 0 || startPoints.length === 0)
        return;
    const canvasElement = document.querySelector(`#canvas`);
    const context = canvasElement.getContext(`2d`);
    if (!context || !canvasElement)
        return;
    // Make background transparent
    context.clearRect(0, 0, bounds.width, bounds.height);
    const size = pointSize * state.scaleBy;
    for (let index = 0; index < numberOfPoints; index++) {
        // Compute particle
        const p = Points.interpolate(animationPoint, startPoints[index], endPoints[index]);
        // Draw
        drawPoint(context, p, pointColour, size);
    }
};
/**
 * Setup and run main loop
 */
const setup = () => {
    Dom.fullSizeCanvas(`#canvas`, arguments_ => {
        updateState({
            bounds: arguments_.bounds,
            scaleBy: Math.min(arguments_.bounds.width, arguments_.bounds.height)
        });
        onCodeUpdated();
    });
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
            updateState({ randomSource: Random.weightedFn(easing) });
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