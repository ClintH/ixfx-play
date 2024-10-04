import { Grids, Point, Points } from '../../ixfx/geometry.js';
import { visitPanel } from './visit.js';
import { offsetPanel } from './offset.js';
import { linePanel } from './line.js';
import { tabSet } from '../../ixfx/dom.js';
import { Draw } from './draw.js';

const canvasEl = document.querySelector(`#grid`) as HTMLCanvasElement;
const coordsEl = document.querySelector(`#coords`) as HTMLElement;

let grid = {
  rows: 10,
  cols: 10,
  size: 50
}
const draw = new Draw(grid);

const tabbedPanels = tabSet({
  panels: [
    visitPanel(grid, draw), offsetPanel(grid, draw),
    linePanel(grid, draw)
  ],
  parent: `#tools`,
  onPanelChanging: (_newPanel, _oldPanel) => {

    draw.reset();
  },
  preselectId: `visit`
});

canvasEl.addEventListener(`pointermove`, event => {
  let ptr = { x: event.offsetX, y: event.offsetY };
  ptr = scaleCanvasCoordinateForGrid(ptr);
  const cell = Grids.cellAtPoint(grid, ptr);
  draw.setHighlighted(cell);
  coordsEl.innerHTML = cell ? `Cell: ${ cell.x },${ cell.y }` : ``;
});


const scaleCanvasCoordinateForGrid = (point: Point) => {
  const size = canvasEl.getBoundingClientRect();
  const actualCellSize = size.width / 10;
  const scaling = grid.size / actualCellSize;
  return Points.multiplyScalar(point, scaling);
}

canvasEl.addEventListener(`pointerup`, event => {
  let ptr = { x: event.offsetX, y: event.offsetY };
  ptr = scaleCanvasCoordinateForGrid(ptr);
  tabbedPanels.notify(`click`, Grids.cellAtPoint(grid, ptr));
});


draw.draw();
