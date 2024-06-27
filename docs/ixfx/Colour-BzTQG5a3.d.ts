import Color from 'colorjs.io';
import { R as RandomSource } from './Types-Tj0rQbez.js';

type Hsl = {
    h: number;
    s: number;
    l: number;
    opacity?: number;
};
type Hsla = Hsl & {
    opacity: number;
};
type Rgb = {
    r: number;
    g: number;
    b: number;
    opacity?: number;
};
type Rgba = Rgb & {
    opacity: number;
};
type Spaces = `hsl` | `hsluv` | `rgb` | `srgb` | `lch` | `oklch` | `oklab` | `okhsl` | `p3` | `lab` | `hcl` | `cubehelix`;
/**
 * A representation of colour. Eg: `blue`, `rgb(255,0,0)`, `hsl(20,100%,50%)`
 */
type Colourish = Color | Hsl | Hsla | Rgb | Rgba | string;
/**
 * Options for interpolation
 */
type InterpolationOpts = {
    space: Spaces;
    hue: `longer` | `shorter` | `increasing` | `decreasing` | `raw`;
};
declare const toHsla: (colour: Colourish) => Hsla;
/**
 * Parses colour to `{ h, s, l }`, each field being on 0..1 scale.
 *
 * Note that some colours will return NaN for h,s or l. This is because they have
 * indeterminate hue. For example white, black and transparent.
 * @param colour
 * @returns
 */
declare const toHsl: (colour: Colourish) => Hsl;
/**
 * Returns a colour in the best-possible CSS colour form.
 * The return value can be used setting colours in the canvas or DOM manipulations.
 * @param colour
 */
declare const toString: (colour: Colourish) => string;
/**
 * Returns a colour in hsla(0-360,100%,1) form.
 * See also: {@link toString}
 * @param colour
 * @returns
 */
/**
 * Returns a full HSL colour string (eg `hsl(20,50%,75%)`) based on a index.
 * It's useful for generating perceptually different shades as the index increments.
 *
 * ```
 * el.style.backgroundColor = goldenAgeColour(10);
 * ```
 *
 * Saturation and lightness can be specified, as numeric ranges of 0-1.
 *
 * @param saturation Saturation (0-1), defaults to 0.5
 * @param lightness Lightness (0-1), defaults to 0.75
 * @param alpha Opacity (0-1), defaults to 1.0
 * @returns HSL colour string eg `hsl(20,50%,75%)`
 */
declare const goldenAngleColour: (index: number, saturation?: number, lightness?: number, alpha?: number) => string;
/**
 * Returns a random hue component (0..359)
 * ```
 * // Generate hue
 * const h =randomHue(); // 0-359
 *
 * // Generate hue and assign as part of a HSL string
 * el.style.backgroundColor = `hsl(${randomHue(), 50%, 75%})`;
 * ```
 * @param rand
 * @returns
 */
declare const randomHue: (rand?: RandomSource) => number;
/**
 * Returns a Colorjs 'Color' object based on relative hue, saturation, lightness
 * and opacity.
 * @param h Hue (0..1)
 * @param s Saturation (0..1) Default: 1
 * @param l Lightness (0..1) Default: 0.5
 * @param opacity Opacity (0..1) Default: 1
 * @returns
 */
declare const fromHsla: (h: number, s?: number, l?: number, opacity?: number) => Color;
/**
 * Parses colour to `{ r, g, b }` where each field is on 0..1 scale.
 * `opacity` field is added if opacity is not 1.
 * [Named colours](https://html-color-codes.info/color-names/)
 * @param colour
 * @returns
 */
declare const toRgb: (colour: Colourish) => Rgb;
/**
 * Parses a string representation of colour, or a Rgb/Hsl object.
 * If the string starts with '--' it's assumed to be a CSS variable
 *
 * See also {@link resolveToString} to resolve to a CSS colour string.
 * @param colour Colour to resolve
 * @returns Color.js Color object
 */
declare const resolve: (colour: Colourish) => Color;
/**
 * Like {@link resolve}, but returns a CSS-ready string
 * representation.
 * ```js
 * element.style.backgroundColor = resolveToString(`red`);
 * ```
 *
 * Tries each parameter in turn, returning the value
 * for the first that resolves. This can be useful for
 * having fallback values.
 *
 * ```js
 * // Try a CSS variable, a object property or finally fallback to red.
 * element.style.backgroundColor = resolveToString('--some-var', opts.background, `red`);
 * ```
 * @param colour
 * @returns
 */
declare const resolveToString: (...colours: Array<Colourish | undefined>) => string;
/**
 * Returns a colour in hex format `#000000`.
 * ```js
 * canvas.fillStyle = Colour.toHex(`blue`);
 * canvas.fillStyle = Colour.toHex({ h:0.5, s:0.1, l:1 });
 * canvas.fillStyle = Colour.toHex({ r: 1, g: 0.3, b: 0 });
 * ```
 *
 * Input colour can be a human-friendly colour name ("blue"), a HSL
 * colour (eg. "hsl(0, 50%, 50%)")", an object {h,s,l} or {r,g,b}.
 * '#' is included in the return string.
 *
 * Transparent colour is returned as #00000000
 * @param colour
 * @returns Hex format, including #
 */
declare const toHex: (colour: Colourish) => string;
/**
 * Returns a variation of colour with its opacity multiplied by `amt`.
 *
 * ```js
 * // Return a colour string for blue that is 50% opaque
 * opacity(`blue`, 0.5);
 * // eg: `rgba(0,0,255,0.5)`
 *
 * // Returns a colour string that is 50% more opaque
 * opacity(`hsla(200,100%,50%,50%`, 0.5);
 * // eg: `hsla(200,100%,50%,25%)`
 * ```
 *
 * [Named colours](https://html-color-codes.info/color-names/)
 * @param colour A valid CSS colour
 * @param amt Amount to multiply opacity by
 * @returns String representation of colour
 */
declare const opacity: (colour: Colourish, amt: number) => string;
/**
 * Gets a CSS variable.
 * ```
 * // Fetch --accent variable, or use `yellow` if not found.
 * getCssVariable(`accent`, `yellow`);
 * ```
 * @param name Name of variable. Omit the `--`
 * @param fallbackColour Fallback colour if not found
 * @param root  Element to search variable from
 * @returns Colour or fallback.
 */
declare const getCssVariable: (name: string, fallbackColour?: string, root?: HTMLElement) => string;
/**
 * Interpolates between two colours, returning a string in the form `rgb(r,g,b)`
 *
 * @example
 * ```js
 * // Get 50% between blue and red
 * interpolate(0.5, `blue`, `red`);
 *
 * // Get midway point, with specified colour space
 * interpolate(0.5, `hsl(200, 100%, 50%)`, `pink`, {space: `hcl`});
 * ```
 *
 * [Named colours](https://html-color-codes.info/color-names/)
 * @param amount Amount (0 = from, 0.5 halfway, 1= to)
 * @param from Starting colour
 * @param to Final colour
 * @param optsOrSpace Options for interpolation, or string name for colour space, eg `hsl`.
 * @returns String representation of colour, eg. `rgb(r,g,b)`
 */
declare const interpolator: (colours: Array<Colourish>, opts?: Partial<InterpolationOpts>) => (amt: number) => Color;
/**
 * Produces a stepped scale of colours.
 *
 * Return result is an array of Color.js 'Colour' objects.
 * ```js
 * import { Colour } from 'ixfx/visual'
 * const steps = Colour.scale(['red','green'], 10);
 * for (const step of steps) {
 *  // Get a 'hsla(...)' string representation of colour
 *  // This can be used with the canvas, setting DOM properties etc.
 *  const css = Colour.toString(step);
 * }
 * ```
 *
 * {@link cssLinearGradient} can produce a smooth gradient in CSS on the basis
 * of the stepped colours.
 * @param colours
 * @param numberOfSteps
 * @param opts
 * @returns
 */
declare const scale: (colours: Array<Colourish>, numberOfSteps: number, opts?: Partial<InterpolationOpts>) => Color[];
/**
 * Returns a CSS `linear-gradient` with stops corresponding to the given list of `colours`.
 * ```js
 * element.style.background = Colour.cssLinearGradient(['red','green','blue']);
 * ```
 *
 *
 * @param colours
 * @returns
 */
declare const cssLinearGradient: (colours: Array<Colourish>) => string;

type Colour_Colourish = Colourish;
type Colour_Hsl = Hsl;
type Colour_Hsla = Hsla;
type Colour_InterpolationOpts = InterpolationOpts;
type Colour_Rgb = Rgb;
type Colour_Rgba = Rgba;
type Colour_Spaces = Spaces;
declare const Colour_cssLinearGradient: typeof cssLinearGradient;
declare const Colour_fromHsla: typeof fromHsla;
declare const Colour_getCssVariable: typeof getCssVariable;
declare const Colour_goldenAngleColour: typeof goldenAngleColour;
declare const Colour_interpolator: typeof interpolator;
declare const Colour_opacity: typeof opacity;
declare const Colour_randomHue: typeof randomHue;
declare const Colour_resolve: typeof resolve;
declare const Colour_resolveToString: typeof resolveToString;
declare const Colour_scale: typeof scale;
declare const Colour_toHex: typeof toHex;
declare const Colour_toHsl: typeof toHsl;
declare const Colour_toHsla: typeof toHsla;
declare const Colour_toRgb: typeof toRgb;
declare const Colour_toString: typeof toString;
declare namespace Colour {
  export { type Colour_Colourish as Colourish, type Colour_Hsl as Hsl, type Colour_Hsla as Hsla, type Colour_InterpolationOpts as InterpolationOpts, type Colour_Rgb as Rgb, type Colour_Rgba as Rgba, type Colour_Spaces as Spaces, Colour_cssLinearGradient as cssLinearGradient, Colour_fromHsla as fromHsla, Colour_getCssVariable as getCssVariable, Colour_goldenAngleColour as goldenAngleColour, Colour_interpolator as interpolator, Colour_opacity as opacity, Colour_randomHue as randomHue, Colour_resolve as resolve, Colour_resolveToString as resolveToString, Colour_scale as scale, Colour_toHex as toHex, Colour_toHsl as toHsl, Colour_toHsla as toHsla, Colour_toRgb as toRgb, Colour_toString as toString };
}

export { Colour as C, type Hsl as H, type Rgb as R, randomHue as r };
