import { Grids, Points } from '@ixfx/geometry';
import { visitPanel } from './visit.js';
import { offsetPanel } from './offset.js';
import { linePanel } from './line.js';
import { tabSet, ElementSizer } from '@ixfx/dom';
import { Draw } from './draw.js';
const canvasEl = document.querySelector(`#grid`);
const coordsEl = document.querySelector(`#coords`);
let initialised = false;
let grid = {
    rows: 10,
    cols: 10,
    size: 50
};
ElementSizer.canvasParent(`#grid`, {
    naturalSize: { height: 200, width: 200 },
    stretch: `min`,
    onSizeChanging(size, el) {
        sizeGrid();
    }
});
// const source = new CanvasSource(`#grid`, `min`);
// source.createRegion({
//   scale: `independent`,
// })
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
    coordsEl.innerHTML = cell ? `Cell: ${cell.x},${cell.y}` : ``;
});
const scaleCanvasCoordinateForGrid = (point) => {
    const size = canvasEl.getBoundingClientRect();
    const actualCellSize = size.width / 10;
    const scaling = grid.size / actualCellSize;
    return Points.multiplyScalar(point, scaling);
};
canvasEl.addEventListener(`pointerup`, event => {
    let ptr = { x: event.offsetX, y: event.offsetY };
    ptr = scaleCanvasCoordinateForGrid(ptr);
    tabbedPanels.notify(`click`, Grids.cellAtPoint(grid, ptr));
});
function sizeGrid() {
    const s = canvasEl.getBoundingClientRect();
    let dim = Math.min(s.width, s.height);
    let targetGrid = 10;
    let size = Math.floor(dim / targetGrid);
    if (size < 15) {
        targetGrid = 5;
        size = Math.floor(dim / targetGrid);
    }
    grid = {
        rows: targetGrid,
        cols: targetGrid,
        size
    };
    if (initialised) {
        draw.grid = grid;
        draw.draw();
    }
}
draw.draw();
initialised = true;
//# sourceMappingURL=script.js.map