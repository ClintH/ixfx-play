export function setText(id, text, fallback) {
    const el = document.getElementById(id);
    if (text) {
        el.innerText = text.toString();
    }
    else if (fallback) {
        el.innerText = fallback;
    }
}
export const setHtml = (id, text, fallback) => {
    const el = document.getElementById(id);
    if (el !== null) {
        if (text) {
            el.innerHTML = text.toString();
        }
        else if (fallback) {
            el.innerHTML = fallback;
        }
    }
};
export const getCtx = (id = 'canvas') => {
    const canvasEl = document.getElementById(`canvas`);
    const ctx = canvasEl?.getContext(`2d`);
    if (!ctx || !canvasEl)
        return;
    return ctx;
};
/**
 * Draws a line from a -> b
 * @returns
 */
export const drawLine = (ctx, a, b) => {
    ctx.beginPath();
    ctx.strokeStyle = `black`;
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
};
export const drawDot = (ctx, a, fillStyle = `black`) => {
    ctx.fillStyle = fillStyle;
    ctx.save();
    ctx.translate(a.x, a.y);
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
};
export const pc = (v) => {
    if (v === undefined)
        return '?';
    return Math.round(v * 100) + `%`;
};
export const val = (v) => typeof v === `undefined` ? `` : Math.round(v).toString();
//# sourceMappingURL=util.js.map