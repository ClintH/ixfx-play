/**
 * Returns a result of a merged into b.
 * B is always the 'newer' data that takes
 * precedence.
 */
type MergeReconcile<V> = (a: V, b: V) => V;
type MinMaxAvgTotal = {
    /**
     * Smallest value in array
     */
    readonly min: number;
    /**
     * Total of all items
     */
    readonly total: number;
    /**
     * Largest value in array
     */
    readonly max: number;
    /**
     * Average value in array
     */
    readonly avg: number;
};
type MinMaxAvgOpts = {
    /**
     * Start index, inclusive
     */
    readonly startIndex?: number;
    /**
     * End index, exclusive
     */
    readonly endIndex?: number;
};

export type { MinMaxAvgTotal as M, MergeReconcile as a, MinMaxAvgOpts as b };
