import {Points} from "./ixfx/geometry";

export function setText(id: string, text: number | string | undefined, fallback?: string) {
  const el = document.getElementById(id) as HTMLElement;
  if (text) {
    el.innerText = text.toString();
  } else if (fallback) {
    el.innerText = fallback;
  }
}

export const setHtml = (id: string, text: string | number | undefined, fallback?: string) => {
  const el = document.getElementById(id);
  if (el !== null) {
    if (text) {
      el.innerHTML = text.toString();
    } else if (fallback) {
      el.innerHTML = fallback;
    }
  }
};

export const getCtx = (id = 'canvas') => {
  const canvasEl = document.getElementById(`canvas`) as HTMLCanvasElement;
  const ctx = canvasEl?.getContext(`2d`);
  if (!ctx || !canvasEl) return;
  return ctx;
};

/**
 * Draws a line from a -> b
 * @returns 
 */
export const drawLine = (ctx: CanvasRenderingContext2D, a: Points.Point, b: Points.Point) => {
  ctx.beginPath();
  ctx.strokeStyle = `black`;
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
};

export const drawDot = (ctx: CanvasRenderingContext2D, a: Points.Point, fillStyle = `black`) => {
  ctx.fillStyle = fillStyle;
  ctx.save();
  ctx.translate(a.x, a.y);
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
};

export const pc = (v?: number) => {
  if (v === undefined) return '?';
  return Math.round(v * 100) + `%`;
};

export const val = (v: number | undefined) => typeof v === `undefined` ? `` : Math.round(v).toString();
