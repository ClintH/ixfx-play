/**
 * Applies a function `fn` to the elements of an array, weighting them based on their relative position.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 *
 * // Six items
 * Arrays.weight([1,1,1,1,1,1], Easings.gaussian());
 *
 * // Yields:
 * // [0.02, 0.244, 0.85, 0.85, 0.244, 0.02]
 * ```
 *
 * `fn` is expected to map (0..1) => (0..1), such as an {@link Modulation.Easings.EasingFn}. The input to the
 * `fn` is the relative position of an element. Thus the first element will be 0, the middle 0.5 and so on.
 * The output of `fn` is then multiplied by the original value.
 *
 * In the below example (which is also the default if `fn` is not specified), the relative position is
 * how values are weighted:
 *
 * ```js
 * Arrays.weight([1,1,1,1,1,1], (relativePos) => relativePos);
 * // Yields:
 * // [0, 0.2, 0.4, 0.6, 0.8, 1]
 * ```
 *
 * Non-numbers in `data` will be silently ignored (this filtering happens first, so relative index values are sane still).
 *
 * @param data Array of numbers
 * @param fn Returns a weighting based on the given relative position. If unspecified, `(x) => x` is used.
 */
declare const weight: (data: Array<number> | ReadonlyArray<number>, fn?: (relativePos: number) => number) => Array<number>;
/**
 * Returns an array of all valid numbers from `data`
 *
 * @param data
 * @returns
 */
declare const validNumbers: (data: ReadonlyArray<number>) => number[];
/**
 * Returns the dot product of two arbitrary-sized arrays. Assumed they are of the same length.
 * @param a
 * @param b
 * @returns
 */
declare const dotProduct: (values: ReadonlyArray<ReadonlyArray<number>>) => number;
/**
 * Calculates the average of all numbers in an array.
 * Array items which aren't a valid number are ignored and do not factor into averaging.
 *
 * Use {@link minMaxAvg} if you want min, max and total as well.
 *
 * @example
 * ```
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 *
 * // Average of a list
 * const avg = Arrays.average([1, 1.4, 0.9, 0.1]);
 *
 * // Average of a variable
 * let data = [100,200];
 * Arrays.average(data);
 * ```
 *
 * See also: [Numbers.average](Numbers.average.html) which takes a list of parameters
 * @param data Data to average.
 * @returns Average of array
 */
declare const average: (data: ReadonlyArray<number>) => number;
/**
 * Returns the minimum number out of `data`.
 * Undefined and non-numbers are silently ignored.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * Arrays.min([10, 20, 0]); // Yields 0
 * ```
 * @param data
 * @returns Minimum number
 */
declare const min: (data: ReadonlyArray<number>) => number;
/**
 * Returns the index of the largest value.
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * const v = [ 10, 40, 5 ];
 * Arrays.maxIndex(v); // Yields 1
 * ```
 * @param data Array of numbers
 * @returns Index of largest value
 */
declare const maxIndex: (data: ReadonlyArray<number>) => number;
/**
 * Returns the index of the smallest value.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * const v = [ 10, 40, 5 ];
 * Arrays.minIndex(v); // Yields 2
 * ```
 * @param data Array of numbers
 * @returns Index of smallest value
 */
declare const minIndex: (...data: ReadonlyArray<number>) => number;
/**
 * Returns the maximum number out of `data`.
 * Undefined and non-numbers are silently ignored.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * Arrays.max(100, 200, 50); // 200
 * ```
 * @param data List of numbers
 * @returns Maximum number
 */
declare const max: (data: ReadonlyArray<number>) => number;
/**
 * Returns the total of `data`.
 * Undefined and non-numbers are silently ignored.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * Arrays.total([1, 2, 3]); // 6
 * ```
 * @param data Array of numbers
 * @returns Total
 */
declare const total: (data: ReadonlyArray<number>) => number;
/**
 * Returns the maximum out of `data` without pre-filtering for speed.
 *
 * For most uses, {@link max} should suffice.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * Arrays.maxFast([ 10, 0, 4 ]); // 10
 * ```
 * @param data
 * @returns Maximum
 */
declare const maxFast: (data: ReadonlyArray<number> | Float32Array) => number;
/**
 * Returns the total of `data` without pre-filtering for speed.
 *
 * For most uses, {@link total} should suffice.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * Arrays.totalFast([ 10, 0, 4 ]); // 14
 * ```
 * @param data
 * @returns Maximum
 */
declare const totalFast: (data: ReadonlyArray<number> | Float32Array) => number;
/**
 * Returns the maximum out of `data` without pre-filtering for speed.
 *
 * For most uses, {@link max} should suffice.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * Arrays.minFast([ 10, 0, 100 ]); // 0
 * ```
 * @param data
 * @returns Maximum
 */
declare const minFast: (data: ReadonlyArray<number> | Float32Array) => number;

/**
 * Computes an average of an array with a set of weights applied.
 *
 * Weights can be provided as an array, expected to be on 0..1 scale, with indexes
 * matched up to input data. Ie. data at index 2 will be weighed by index 2 in the weightings array.
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * // All items weighted evenly
 * Arrays.averageWeighted([1,2,3], [1,1,1]); // 2
 *
 * // First item has full weight, second half, third quarter
 * Arrays.averageWeighted([1,2,3], [1, 0.5, 0.25]); // 1.57
 *
 * // With reversed weighting of [0.25,0.5,1] value is 2.42
 * ```
 *
 * A function can alternatively be provided to compute the weighting based on array index, via {@link weight}.
 *
 * ```js
 * Arrays.averageWeighted[1,2,3], Easings.gaussian()); // 2.0
 * ```
 *
 * This is the same as:
 *
 * ```js
 * import { Arrays } from 'https://unpkg.com/ixfx/dist/collections.js';
 * import { Easings } from 'https://unpkg.com/ixfx/dist/modulation.js';
 *
 * const data = [1,2,3];
 * const w = Arrays.weight(data, Easings.gaussian());
 * const avg = Arrays.averageWeighted(data, w); // 2.0
 * ```
 * @param data Data to average
 * @param weightings Array of weightings that match up to data array, or an easing function
 */
declare const averageWeighted: (data: Array<number> | ReadonlyArray<number>, weightings: Array<number> | ReadonlyArray<number> | ((value: number) => number)) => number;

export { average as a, averageWeighted as b, maxFast as c, dotProduct as d, maxIndex as e, min as f, minFast as g, minIndex as h, totalFast as i, max as m, total as t, validNumbers as v, weight as w };
