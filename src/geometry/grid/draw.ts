import * as Geo from '../../ixfx/geometry.js';
import { Grids } from '../../ixfx/geometry.js';
import { Variables } from '../../ixfx/dom.js';

export class Draw {
  highlighted: Geo.GridCell[] = [];
  visited: Geo.GridCell[] = [];
  activated: Geo.GridCell[] = [];
  cellText: Geo.GridArray1d<string>;

  grid: Geo.GridVisual;

  gridlineStrokeStyle = `red`;
  textFillStyle = `white`;
  activatedFillStyle = `gray`;
  highlightedStrokeStyle = `orangered`;
  visitedFillStyle = `indigo`;

  ctx;
  canvasEl;

  constructor(grid: Geo.GridVisual) {
    this.grid = grid;
    this.cellText = this.clearCellText();
    this.canvasEl = document.querySelector(`#grid`) as HTMLCanvasElement;
    this.ctx = this.canvasEl.getContext(`2d`) as CanvasRenderingContext2D;

    const vars = Variables.getWithFallback({
      chrome_1: `white`,
      chrome_2: `silver`,
      chrome_5: `black`,
      chrome_active_1: `red`,
      chrome_active_2: `red`,
      chrome_active_3: `red`,
      chrome_active_4: `red`,
      chrome_active_5: `red`,
    });
    this.gridlineStrokeStyle = vars.chrome_2;
    this.activatedFillStyle = vars.chrome_active_3;
    this.textFillStyle = vars.chrome_active_5;
    //this.textShadowStyle = vars.chrome_active_5;
    this.highlightedStrokeStyle = vars.chrome_active_3;
    this.visitedFillStyle = vars.chrome_active_1;
  }

  clearCellText() {
    this.cellText = Grids.Array1d.createMutable(``, this.grid);
    return this.cellText;
  }

  reset() {
    this.clearCellText();
    this.clearVisited();
    this.activated = [];
    this.setHighlighted(undefined);
  }

  appendCellText(text: string, cell: Geo.GridCell) {
    if (!Grids.inside(this.cellText, cell)) return;

    let existing = this.cellText.get(cell);
    if (!existing) existing = ``;
    existing += text;
    this.cellText.set(existing, cell);
  }

  setHighlighted(cells: Geo.GridCell | Geo.GridCell[] | undefined) {
    if (cells === undefined) {
      this.highlighted = [];
    } else if (Array.isArray(cells)) {
      this.highlighted = [ ...this.highlighted, ...cells ];
    } else {
      this.highlighted = [ cells ];
    }
    this.draw();
  }

  addVisited(cell: Geo.GridCell) {
    this.visited.push(cell);
    this.draw();
  }

  clearVisited() {
    this.visited = [];
    this.draw();
  }


  fillCell(cell: Geo.GridCell, colour = `yellow`) {
    const { ctx } = this;

    const rect = Grids.rectangleForCell(this.grid, cell);
    ctx.fillStyle = colour;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    ctx.strokeStyle = this.gridlineStrokeStyle;
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }

  draw() {
    this.ctx.font = `12pt system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`;
    this.drawBg();
    this.drawGrid();
    this.drawVisited();
    this.drawActivated();
    this.drawHighlighted();
    this.drawText();
  }

  drawText() {
    const { ctx } = this;
    for (const { cell, value } of Grids.By.cellsAndValues(this.cellText)) {
      const rect = Grids.rectangleForCell(this.grid, cell);
      let { x, y } = rect;
      let txt = value ?? ``;
      if (txt.length === 0) continue;

      const m = ctx.measureText(txt);
      x += (rect.width / 2) - m.width / 2;
      y += (rect.height / 2) - (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) / 2;

      ctx.textBaseline = `middle`;
      ctx.fillStyle = this.textFillStyle;
      ctx.fillText(txt, x, y);
    }
  }

  drawVisited() {
    const { ctx } = this;

    for (const hc of this.visited) {
      const rect = Grids.rectangleForCell(this.grid, hc);
      ctx.fillStyle = this.visitedFillStyle;
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

      ctx.strokeStyle = this.gridlineStrokeStyle;
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }
  }

  drawHighlighted() {
    const { ctx } = this;
    for (const hc of this.highlighted) {
      const rect = Grids.rectangleForCell(this.grid, hc);
      ctx.strokeStyle = this.highlightedStrokeStyle;
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }
  }

  drawActivated() {
    const { ctx } = this;
    for (const hc of this.activated) {
      const rect = Grids.rectangleForCell(this.grid, hc);
      ctx.fillStyle = this.activatedFillStyle;
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
  }

  drawGrid() {
    const { ctx } = this;
    ctx.strokeStyle = this.gridlineStrokeStyle;
    ctx.lineWidth = 1;
    for (const rect of Grids.asRectangles(this.grid)) {
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }
  }

  drawBg() {
    const { ctx } = this;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}