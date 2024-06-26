import { Point, Points } from "./ixfx/geometry";

export function setText(id: string, text: number | string | undefined, fallback?: string) {
  const element = document.querySelector(`#${ id }`) as HTMLElement;
  if (text) {
    element.textContent = text.toString();
  } else if (fallback) {
    element.textContent = fallback;
  }
}

export const setHtml = (id: string, text: string | number | undefined, fallback?: string) => {
  const element = document.querySelector(`#${ id }`);
  if (element !== null) {
    if (text) {
      element.innerHTML = text.toString();
    } else if (fallback) {
      element.innerHTML = fallback;
    }
  }
};

/**
 * Draws a line from a -> b.
 * Coordinates in absolute units
 * @returns 
 */
export const drawLine = (context: CanvasRenderingContext2D, a: Point, b: Point) => {
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
export const drawDot = (context: CanvasRenderingContext2D, a: Point, fillStyle = `black`) => {
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
