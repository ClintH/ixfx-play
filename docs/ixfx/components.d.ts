import * as lit_html from 'lit-html';
import * as lit from 'lit';
import { LitElement, PropertyValues } from 'lit';
import { K as KeyValue } from './PrimitiveTypes-F6miV4Zn.js';
import { Ref } from 'lit/directives/ref.js';
import { C as CanvasHelper } from './CanvasHelper-B8KYtGGK.js';
import { a as RectPositioned, R as Rect } from './RectTypes-CjvCxMc4.js';
import { C as Colourish } from './Types-H_4FI2AJ.js';
import { D as DrawingHelper } from './Drawing-P-NUHo6u.js';
import './Types-Dczm1x8S.js';
import './ISetMutable-hVNWApH3.js';
import './Events-DJgOvcWD.js';
import './IntervalType-B4PbUkjV.js';
import './Scaler-BqD8fmOQ.js';
import './PointType-BDlA07rn.js';
import './LineType-DkIFzpdp.js';
import './PathType-m0JxWZvm.js';
import './CircleType-D9Xd-yDE.js';
import './Ellipse-Dfv4Jz-W.js';
import './IStackImmutable-BNEmWxct.js';

type Bar = {
    readonly percentage: number;
    readonly data: KeyValue;
};
/**
 * Usage in HTML:
 * ```html
 * <style>
 * histogram-vis {
 *  display: block;
 *  height: 7em;
 *  --histogram-bar-color: pink;
 * }
 * </style>
 * <histogram-vis>
 * [
 *  ["apples", 5],
 *  ["oranges", 3],
 *  ["pineapple", 0],
 *  ["limes", 9]
 * ]
 * </histogram-vis>
 * ```
 *
 * CSS colour theming:
 * --histogram-bar-color
 * --histogram-label-color
 *
 * HTML tag attributes
 * showXAxis (boolean)
 * showDataLabels (boolean)
 *
 * @export
 * @class HistogramVis
 * @extends {LitElement}
 **/
declare class HistogramVis extends LitElement {
    static readonly styles: lit.CSSResult;
    data: ReadonlyArray<KeyValue>;
    showDataLabels: boolean;
    height: string;
    showXAxis: boolean;
    json: ReadonlyArray<KeyValue> | undefined;
    constructor();
    connectedCallback(): void;
    barTemplate(bar: Bar, index: number, _totalBars: number): lit_html.TemplateResult<1>;
    render(): lit_html.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        readonly 'histogram-vis': HistogramVis;
    }
}

/**
 * Creates and drives a HistogramVis instance.
 * Data should be an outer array containing two-element arrays for each
 * data point. The first element of the inner array is expected to be the key, the second the frequency.
 * For example,  `[`apples`, 2]` means the key `apples` was counted twice.
 *
 * Usage:
 * .sortBy() automatically sorts prior to visualisation. By default off.
 * .update(data) full set of data to plot
 * .clear() empties plot - same as calling `update([])`
 * .el - The `HistogramVis` instance, or undefined if not created/disposed
 *
 * ```
 * const plot = new FrequencyHistogramPlot(document.getElementById('histogram'));
 * plot.sortBy('key'); // Automatically sort by key
 * ...
 * plot.update([[`apples`, 2], [`oranges', 0], [`bananas`, 5]])
 * ```
 *
 * @export
 * @class FrequencyHistogramPlot
 */
declare class FrequencyHistogramPlot {
    #private;
    readonly el: HistogramVis | undefined;
    constructor(el: HistogramVis);
    setAutoSort(sortStyle: `value` | `value-reverse` | `key` | `key-reverse`): void;
    clear(): void;
    dispose(): void;
    update(data: ReadonlyArray<readonly [key: string, count: number]>): void;
}

/**
 * Attributes
 * * streaming: true/false (default: true)
 * * max-length: number (default: 500). How many data points per series to store
 * * data-width: when streaming, how much horizontal width per point
 * * fixed-max/fixed-min: global input scaling (default: NaN, ie. disabled)
 *
 * * line-width: stroke width of drawing line (default:2)
 *
 * * render: 'dot' or 'line' (default: 'dot')
 * * hide-legend: If added, legend is not shown
 * * manual-draw: If added, automatic drawning is disabled
 *
 * Styling variables
 * * --legend-fg: legend foreground text
 */
declare class PlotElement extends LitElement {
    #private;
    streaming: boolean;
    hideLegend: boolean;
    maxLength: number;
    dataWidth: number;
    fixedMax: number;
    fixedMin: number;
    lineWidth: number;
    renderStyle: string;
    manualDraw: boolean;
    padding: number;
    paused: boolean;
    canvasEl: Ref<HTMLCanvasElement>;
    seriesRanges: Map<string, [min: number, max: number]>;
    get series(): PlotSeries[];
    get seriesCount(): number;
    /**
     * Returns a `PlotElement` instance based on a query
     * ```js
     * PlotElement.fromQuery(`#someplot`); // PlotElement
     * ```
     *
     * Throws an error if query does not match.
     * @param query
     * @returns
     */
    static fromQuery(query: string): PlotElement;
    /**
     * Delete a series.
     * Returns _true_ if there was a series to delete
     * @param name
     * @returns
     */
    deleteSeries(name: string): boolean;
    /**
     * Keeps the series, but deletes its data
     * @param name
     * @returns
     */
    clearSeries(name: string): boolean;
    /**
     * Delete all data & series
     */
    clear(): void;
    /**
     * Keeps all series, but deletes their data
     */
    clearData(): void;
    render(): lit_html.TemplateResult<1>;
    connectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    updateColours(): void;
    plot(value: number, seriesName?: string, skipDrawing?: boolean): PlotSeries;
    /**
     * Draw a set of key-value pairs as a batch.
     * @param value
     */
    plotObject(value: object): void;
    colourGenerator(series: string): Colourish;
    draw(): void;
    drawLegend(cl: RectPositioned, d: DrawingHelper): void;
    drawLineSeries(data: Array<number>, cp: Rect, d: DrawingHelper, colour: string): void;
    drawDotSeries(data: Array<number>, cp: Rect, d: DrawingHelper, colour: string): void;
    computePlot(c: CanvasHelper, plotHeight: number, axisYwidth: number, padding: number): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    computeAxisYWidth(c: CanvasHelper): number;
    computeLegend(c: CanvasHelper, maxWidth: number, padding: number): {
        bounds: {
            width: number;
            height: number;
        };
        parts: {
            width: number;
            height: number;
            x: number;
            y: number;
        }[];
    };
    getSeries(name: string): PlotSeries | undefined;
    static styles: lit.CSSResult;
}
declare class PlotSeries {
    name: string;
    colour: Colourish;
    private plot;
    data: Array<number>;
    minSeen: number;
    maxSeen: number;
    constructor(name: string, colour: Colourish, plot: PlotElement);
    clear(): void;
    /**
     * Returns a copy of the data scaled by the current
     * range of the data
     * @returns
     */
    getScaled(): number[];
    getScaledBy(scaler: (v: number) => number): number[];
    push(value: number): void;
    resetScale(): void;
}

declare function init(): void;
declare global {
    interface HTMLElementTagNameMap {
        "plot-element": PlotElement;
    }
}

export { FrequencyHistogramPlot, HistogramVis, PlotElement, PlotSeries, init };
