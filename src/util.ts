import {Points} from "./ixfx/geometry";

export function setText(id: string, text: number | string | undefined, fallback?: string) {
  const element = document.querySelector(`#${id}`) as HTMLElement;
  if (text) {
    element.textContent = text.toString();
  } else if (fallback) {
    element.textContent = fallback;
  }
}

export const setHtml = (id: string, text: string | number | undefined, fallback?: string) => {
  const element = document.querySelector(`#${id}`);
  if (element !== null) {
    if (text) {
      element.innerHTML = text.toString();
    } else if (fallback) {
      element.innerHTML = fallback;
    }
  }
};

export const getContext = (id = `canvas`) => {
  const canvasElement = document.querySelector(`#canvas`) as HTMLCanvasElement;
  const context = canvasElement?.getContext(`2d`);
  if (!context || !canvasElement) return;
  return context;
};

/**
 * Draws a line from a -> b
 * @returns 
 */
export const drawLine = (context: CanvasRenderingContext2D, a: Points.Point, b: Points.Point) => {
  context.beginPath();
  context.strokeStyle = `black`;
  context.moveTo(a.x, a.y);
  context.lineTo(b.x, b.y);
  context.stroke();
};

export const drawDot = (context: CanvasRenderingContext2D, a: Points.Point, fillStyle = `black`) => {
  context.fillStyle = fillStyle;
  context.save();
  context.translate(a.x, a.y);
  context.beginPath();
  context.arc(0, 0, 5, 0, Math.PI * 2);
  context.fill();
  context.restore();
};

export const pc = (v?: number) => {
  if (v === undefined) return `?`;
  return Math.round(v * 100) + `%`;
};

export const value = (v: number | undefined) => typeof v === `undefined` ? `` : Math.round(v).toString();
