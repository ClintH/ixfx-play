"use strict";
// import * as Dom from '../../ixfx/dom.js';
// import { Line } from '../../ixfx/geometry.js';
// import * as Visuals from '../../ixfx/visual.js';
// export const initDrawing = () => {
//   const overlayCanvas = new Dom.CanvasHelper(`#overlay`, { fill: `viewport` })
//   const composedCanvas = new Dom.CanvasHelper(`#canvas`, { fill: `viewport` });
//   const composedContext = composedCanvas.ctx;
//   const overlayContext = overlayCanvas.ctx;
//   console.log(`ratio: ${ composedCanvas.ratio }`);
//   const clear = (colour: string) => {
//     composedContext.fillStyle = Visuals.Colour.toString(colour);
//     composedContext.fillRect(0, 0, composedCanvas.width, composedCanvas.height);
//   }
//   const drawArm = (armAbsolute: Line, thickness: number) => {
//     overlayCanvas.clear();
//     overlayContext.strokeStyle = `hsl(0,0%,30%)`;
//     overlayContext.lineWidth = thickness;
//     overlayContext.beginPath();
//     overlayContext.moveTo(armAbsolute.a.x, armAbsolute.a.y);
//     overlayContext.lineTo(armAbsolute.b.x, armAbsolute.b.y);
//     overlayContext.stroke();
//     overlayContext.closePath();
//   };
//   let hue = 0;
//   const drawAtArmEnd = (context: CanvasRenderingContext2D) => {
//     const radius = 60;
//     context.beginPath();
//     //context.globalCompositeOperation = `xor`;
//     // Draw a circle
//     // context.arc(-radius / 2, 0, radius, 0, Math.PI * 2);
//     context.fillStyle = `hsla(${ hue }, 100%, 50%, 0.9)`;
//     // context.fill();
//     // Draw a rect
//     // const w = 100;
//     // const h = 100;
//     // context.lineWidth = 5;
//     // context.strokeStyle = `hsla(${ hue }, 100%, 50%, 0.8)`;
//     // context.fillStyle = `hsla(${ hue }, 100%, 50%, 0.8)`;
//     // context.strokeRect(-w / 2, -h / 2, w, h);
//     // context.fillRect(-w / 2, -h / 2, w, h);
//     // Draw a line
//     context.strokeStyle = `hsla(${ hue }, 100%, 50%, 1)`;
//     context.globalCompositeOperation = `source-over`;
//     context.lineWidth = 10;
//     const brushWidth = 100;
//     context.beginPath();
//     context.moveTo(-brushWidth / 2, 0);
//     context.lineTo(brushWidth / 2, 0);
//     context.stroke();
//     context.closePath();
//     // Draw text
//     //context.fillStyle = context.strokeStyle;
//     //context.font = `20px system-ui`;
//     //context.fillText(`my dad is the best ilove him too the moon and back and my mum:)`, 0, 0);
//     hue += 1;
//     if (hue === 360) hue = 0;
//   };
//   return {
//     clear,
//     drawArm,
//     drawAtArmEnd,
//     composedSize: composedCanvas.size,
//     composedContext,
//     ratio: Math.min(composedCanvas.width, composedCanvas.height)
//   }
// }
//# sourceMappingURL=drawing.js.map