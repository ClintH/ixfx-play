import { Points, radianToDegree, Triangles } from "../../ixfx/geometry.js";
import { reconcileChildren, DataTable } from '../../ixfx/dom.js';
import * as Trackers from "../../ixfx/trackers.js";
import { setText, pc, value } from "../../util.js";
const settings = Object.freeze({
    currentPointsEl: document.querySelector(`#current-points`),
    startPointsEl: document.querySelector(`#start-points`),
    centroidEl: document.querySelector(`#centroid`),
    startCentroidEl: document.querySelector(`#startCentroid`),
    thingSize: 100
});
let state = {
    /** @type {TrackedPointMap} */
    pointers: Trackers.points({ storeIntermediate: false }),
    twoFinger: {
        rotation: Trackers.number(),
        distance: Trackers.number()
    },
    threeFinger: {
        area: Trackers.number()
    },
    centroid: Trackers.point(),
    /** @type number */
    centroidAngle: 0
};
const gestureTwoFinger = (a, b) => {
    if (a === undefined)
        throw new Error(`point a undefined`);
    if (b === undefined)
        throw new Error(`point b undefined`);
    const { twoFinger } = state;
    // Absolute distance between points
    const distanceAbs = Points.distance(a, b); // clamp(Points.distance(a, b) / maxDimension)
    twoFinger.distance.seen(distanceAbs);
    // Calculate rotation
    const rotationAbs = radianToDegree(Points.angleRadian(a, b));
    twoFinger.rotation.seen(rotationAbs / 180);
};
const gestureThreeFinger = (a, b, c) => {
    if (a === undefined)
        throw new Error(`point a undefined`);
    if (b === undefined)
        throw new Error(`point b undefined`);
    if (c === undefined)
        throw new Error(`point c undefined`);
    const tri = Triangles.fromPoints([a, b, c]);
    state.threeFinger.area.seen(Triangles.area(tri));
};
const gestureCentroid = (pointers) => {
    if (pointers.size < 2) {
        state.centroid.reset();
        return;
    }
    const centroid = Points.centroid(...pointers.last());
    state.centroid.seen(centroid);
    updateState({
        centroidAngle: radianToDegree(Points.angleRadian(centroid, state.centroid.initial))
    });
};
const update = () => {
    const { pointers } = state;
    gestureCentroid(pointers);
    // Pointers sorted by age, oldest first
    const byAge = [...pointers.trackedByAge()];
    if (byAge.length >= 2) {
        // Got at least two touches
        gestureTwoFinger(byAge[0].last, byAge[1].last);
    }
    else {
        // Reset state regarding two-finger gestures
        state.twoFinger.distance.reset();
        state.twoFinger.rotation.reset();
    }
    if (byAge.length >= 3) {
        // Got at least three touches
        gestureThreeFinger(byAge[0].last, byAge[1].last, byAge[2].last);
    }
    else {
        state.threeFinger.area.reset();
    }
    const displayMap = new Map();
    for (const v of byAge) {
        if (v === undefined)
            continue;
        const latestPoint = v.last;
        displayMap.set(v.id, {
            id: v.id,
            length: Math.round(v.length),
            angle: Math.round(latestPoint ? radianToDegree(Points.angleRadian(latestPoint, v.initial)) : Number.NaN)
        });
    }
    DataTable.fromList(`#pointers`, displayMap);
    // Update visuals
    draw();
};
const draw = () => {
    const { centroidEl, startCentroidEl, thingSize, currentPointsEl, startPointsEl } = settings;
    const { pointers } = state;
    const { centroid, twoFinger, threeFinger } = state;
    // Create or remove elements based on tracked points
    if (!currentPointsEl)
        return;
    reconcileChildren(currentPointsEl, pointers.store, (trackedPoint, element) => {
        if (element === null) {
            element = document.createElement(`div`);
            element.textContent = trackedPoint.id;
        }
        positionElement(element, trackedPoint, thingSize);
        return element;
    });
    if (!startPointsEl)
        return;
    reconcileChildren(startPointsEl, pointers.store, (trackedPoint, element) => {
        if (element === null) {
            element = document.createElement(`div`);
            element.textContent = trackedPoint.id;
        }
        const initial = trackedPoint.initial;
        if (initial)
            positionElement(element, initial, thingSize);
        return element;
    });
    // Update centroid circle
    const centroidTravelElement = document.querySelector(`#centroidTravel`);
    if (centroidTravelElement)
        centroidTravelElement.textContent = value(centroid.distanceFromStart());
    if (centroid.initial === undefined) {
        positionElement(startCentroidEl, { x: -1000, y: -1000 }, thingSize);
    }
    else {
        positionElement(startCentroidEl, centroid.initial, thingSize);
    }
    if (centroid.last === undefined) {
        positionElement(centroidEl, { x: -1000, y: -1000 }, thingSize);
    }
    else {
        positionElement(centroidEl, centroid.last, thingSize);
    }
    setText(`threePtrArea`, pc(threeFinger.area.relativeDifference()));
    setText(`twoPtrDistance`, pc(twoFinger.distance.relativeDifference()));
    setText(`twoPtrRotation`, pc(twoFinger.rotation.difference()));
    setText(`centroidAngle`, value(state.centroidAngle));
};
const stopTrackingPoint = (event) => {
    state.pointers.delete(event.pointerId.toString());
    update();
};
const trackPoint = (event) => {
    if (event.pointerType === `mouse`)
        return;
    event.preventDefault();
    const { pointers } = state;
    // Track point, associated with pointerId
    pointers.seen(event.pointerId.toString(), { x: event.x, y: event.y });
    update();
};
/**
 * Position element
 */
const positionElement = (element, point, size) => {
    if (!element)
        return;
    element.style.left = (point.x - size / 2) + `px`;
    element.style.top = (point.y - size / 2) + `px`;
};
const setup = () => {
    document.addEventListener(`pointerup`, event => stopTrackingPoint(event));
    document.addEventListener(`pointerleave`, event => stopTrackingPoint(event));
    document.addEventListener(`pointerdown`, event => trackPoint(event));
    document.addEventListener(`pointermove`, event => trackPoint(event));
    document.addEventListener(`contextmenu`, event => event.preventDefault());
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
}
//# sourceMappingURL=script.js.map