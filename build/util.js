export function setText(id, text, fallback) {
    const element = document.querySelector(`#${id}`);
    if (text) {
        element.textContent = text.toString();
    }
    else if (fallback) {
        element.textContent = fallback;
    }
}
export const setHtml = (id, text, fallback) => {
    const element = document.querySelector(`#${id}`);
    if (element !== null) {
        if (text) {
            element.innerHTML = text.toString();
        }
        else if (fallback) {
            element.innerHTML = fallback;
        }
    }
};
/**
 * Draws a line from a -> b.
 * Coordinates in absolute units
 * @returns
 */
export const drawLine = (context, a, b) => {
    context.beginPath();
    context.strokeStyle = `black`;
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.stroke();
};
/**
 * Draws a filled dot.
 * Coordinates in absolute units.
* @param context
 * @param a
 * @param fillStyle
 */
export const drawDot = (context, a, fillStyle = `black`) => {
    context.fillStyle = fillStyle;
    context.save();
    context.translate(a.x, a.y);
    context.beginPath();
    context.arc(0, 0, 5, 0, Math.PI * 2);
    context.fill();
    context.restore();
};
export const pc = (v) => {
    if (v === undefined)
        return `?`;
    return Math.round(v * 100) + `%`;
};
export const value = (v) => typeof v === `undefined` ? `` : Math.round(v).toString();
//# sourceMappingURL=util.js.map