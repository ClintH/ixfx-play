import { l as ReactiveOrSource, T as TransformOpts, k as Reactive, m as ReactiveOp, n as ChunkOptions, o as CombineLatestOptions, p as RxValueTypes, q as RxValueTypeRx, r as RxValueTypeObject, s as ReactiveDiff, t as ReactiveInitial, u as ReactivePingable, D as DebounceOptions, F as FieldOptions, v as FilterPredicate, w as InitStreamOptions, S as SingleFromArrayOptions, x as SplitOptions, y as ReactiveStream, z as SwitcherOptions, A as SyncOptions, B as Processors, E as ReactiveWritable, G as ThrottleOptions, H as TimeoutValueOptions, J as TimeoutPingOptions, V as ValueToPingOptions, W as WithValueOptions, K as ToArrayOptions, P as Passed, L as PassedSignal, M as PassedValue, N as Wrapped, O as Trigger, Q as TriggerValue, X as TriggerFunction, Y as TriggerGenerator, Z as GeneratorOptions, _ as FunctionOptions, $ as ObjectFieldHandler, a0 as PathDataChange, a1 as DomBindSourceValue, a2 as PipeDomBinding, a3 as DomBindValueTarget, a4 as DomBindUnresolvedSource, a5 as BindUpdateOpts, a6 as ElementsOptions, a7 as ArrayOptions, a8 as ReactiveFinite, a9 as ArrayObjectOptions, aa as ReactiveArray, R as ReactiveNonInitial, ab as CountOptions, ac as DerivedOptions, ad as DomNumberInputValueOptions, ae as DomValueOptions, af as DomFormOptions, ag as EventOptions, ah as EventTriggerOptions, ai as FunctionFunction, aj as InitLazyStreamOptions, ak as ObjectOptions, al as symbol, am as DerivedFunction, an as EventPluckedFieldOptions, ao as EventPluckedFieldOptions2, ap as PingedFunctionFunction, aq as PingedFunctionOptions, ar as UpstreamOptions, as as InitLazyStreamInitedOptions, at as ReactiveInitialStream, au as SetHtmlOptions, av as OpMathOptions, aw as TallyOptions, U as Unsubscriber, ax as DomBindInputOptions, ay as DomBindResolvedSource, az as DomBindTargetNode, aA as DomBindTargetNodeResolved, aB as DomCreateOptions, aC as ElementBind, aD as Lazy, aE as OpAsAnnotation, aF as Optional, aG as PipeSet, aH as PrimitiveValueTypeObject, aI as ReactiveOpInit, aJ as ReactiveOpLinks, aK as ResolveOptions, aL as RxValueTypeObjectOrUndefined, aM as SetHtmlOptionsElement, aN as SetHtmlOptionsQuery, aO as SignalKinds, aP as UpstreamInitialOptions, aQ as average, aR as max, aS as min, aT as rank, aU as setHtmlText, aV as sum, aW as tally } from './Types-ZTmH-4jX.js';
import { R as RankFunction, a as RankOptions } from './Types-DaSeYFCm.js';
import { I as Interval } from './IntervalType-B4PbUkjV.js';
import { I as InterpolateOptions } from './Interpolate-Doc6ee_I.js';
import { a as RecursivePartial } from './TsUtil-D3MueCxS.js';
import { C as Colourish, H as Hsl } from './Types-H_4FI2AJ.js';

/**
 * Annotates values from `source`. Output values will be
 * in the form `{ value: TIn, annotation: TAnnotation }`.
 * Where `TIn` is the type of the input, and `TAnnotation` is
 * the return type of the annotator function.
 *
 * Example calculating area from width & height:
 * ```js
 * const data = Rx.From.array(
 *  { w: 1, h: 3 }, { w: 1, h: 1 }, { w: 2, h: 2 }
 * );
 * const annotated = Rx.Ops.annotate(data, v => {
 *  return { area: v.w * v.h }
 * });
 * const data = await Rx.toArray(annotated);
 * // Data =  [ { value: { w:1, h:3 }, annotation: { area:3 } } ...]
 * ```
 *
 * If you would rather annotate and have values merge with the input,
 * use `transform`:
 * ```js
 * const data = Rx.From.array(
 *  { w: 1, h: 3 }, { w: 1, h: 1 }, { w: 2, h: 2 }
 * );
 * const withArea = Rx.Ops.transform(data, v => {
 *  return { ...v, area: v.w * v.h }
 * });
 * const data = await Rx.toArray(withArea);
 * // Data =  [ { w:1, h:3, area:3 }, ...]
 * ```
 */
declare function annotate<In, TAnnotation>(input: ReactiveOrSource<In>, annotator: (value: In) => TAnnotation, options?: Partial<TransformOpts>): Reactive<{
    value: In;
    annotation: TAnnotation;
}>;
/**
 * Annotates the input stream using {@link ReactiveOp} as the source of annotations.
 * The output values will have the shape of `{ value: TIn, annotation: TAnnotation }`.
 * Meaning that the original value is stored under `.value`, and the annotation under `.annotation`.
 *
 * ```js
 * const data = Rx.From.array([ 1, 2, 3 ]);
 * const annotated = Rx.Ops.annotateWithOp(data, Rx.Ops.sum());
 * const data = await annotated.toArray(annotated);
 * // Data =  [ { value: 1, annotation: 1 }, { value: 2, annotation: 3 }, { value: 3, annotation: 6 } ]
 * ```
 * @param annotatorOp Operator to generate annotations
 * @param input Input stream
 * @returns
 */
declare function annotateWithOp<In, TAnnotation>(input: ReactiveOrSource<In>, annotatorOp: ReactiveOp<In, TAnnotation>): Reactive<{
    value: In;
    annotation: TAnnotation;
}>;

/**
 * Queue from `source`, emitting when thresholds are reached.
 * The resulting Reactive produces arrays.
 *
 * Can use a combination of elapsed time or number of data items.
 *
 * By default options are OR'ed together.
 *
 * ```js
 * // Emit data in chunks of 5 items
 * chunk(source, { quantity: 5 });
 * // Emit a chunk of data every second
 * chunk(source, { elapsed: 1000 });
 * ```
 * @param source
 * @param options
 * @returns
 */
declare function chunk<V>(source: ReactiveOrSource<V>, options?: Partial<ChunkOptions>): Reactive<Array<V>>;

/**
 * Create a new object from input, based on cloning fields rather than a destructured copy.
 * This is useful for event args.
 * @param source
 * @returns
 */
declare const cloneFromFields: <In>(source: ReactiveOrSource<In>) => Reactive<In>;

/**
 * Monitors input reactive values, storing values as they happen to an array.
 * Whenever a new value is emitted, the whole array is sent out, containing current
 * values from each source, or _undefined_ if not yet emitted.
 *
 * See {@link combineLatestToObject} to combine streams by name into an object, rather than array.
 *
 * ```
 * const sources = [
 *  Rx.fromFunction(Math.random, { loop: true, interval: 100 }),
 *  Rx.fromFunction(Math.random, { loop: true, interval: 200 })
 * ];
 * const r = Rx.combineLatestToArray(sources);
 * r.onValue(value => {
 *  // Value will be an array of last value from each source:
 *  // [number,number]
 * });
 * ```
 *
 * The tempo of this stream will be set by the fastest source stream.
 * See {@link syncToArray} to have pace determined by slowest source, and only
 * send when each source has produce a new value compared to last time.
 *
 * Set `onSourceDone` to choose behaviour if a source stops. By default it
 * is 'break', meaning the whole merged stream stops.
 *
 * Note: unlike RxJS's `combineLatest`, does not wait for each source to emit once
 * before emitting first value.
 * @param reactiveSources Sources to merge
 * @param options Options for merging
 * @returns
 */
declare function combineLatestToArray<const T extends ReadonlyArray<ReactiveOrSource<any>>>(reactiveSources: T, options?: Partial<CombineLatestOptions>): Reactive<RxValueTypes<T>>;

type CombineLatestToObject<T extends Record<string, ReactiveOrSource<any>>> = {
    hasSource: (field: string) => boolean;
    replaceSource: (field: Extract<keyof T, string>, source: ReactiveOrSource<any>) => void;
    /**
     * Reactive sources being combined
     */
    sources: RxValueTypeRx<T>;
    /**
     * Updates writable sources with values.
     * @param data
     * @returns Keys and values set to writable source(s)
     */
    setWith: (data: Partial<RxValueTypeObject<T>>) => Partial<RxValueTypeObject<T>>;
} & ReactiveDiff<RxValueTypeObject<T>> & ReactiveInitial<RxValueTypeObject<T>>;
/**
 * Monitors input reactive values, storing values as they happen to an object.
 * Whenever a new value is emitted, the whole object is sent out, containing current
 * values from each source (or _undefined_ if not yet emitted)
 *
 * See {@link combineLatestToArray} to combine streams by name into an array instead.
 *
 * ```
 * const sources = {
 *  fast: Rx.fromFunction(Math.random, { loop: true, interval: 100 }),
 *  slow: Rx.fromFunction(Math.random, { loop: true, interval: 200 })
 * ];
 * const r = Rx.combineLatestToObject(sources);
 * r.onValue(value => {
 *  // 'value' will be an object containing the labelled latest
 *  // values from each source.
 *  // { fast: number, slow: number }
 * });
 * ```
 *
 * The tempo of this stream will be set by the fastest source stream.
 * See {@link syncToObject} to have pace determined by slowest source, and only
 * send when each source has produce a new value compared to last time.
 *
 * This source ends if all source streams end.
 * @param reactiveSources Sources to merge
 * @param options Options for merging
 * @returns
 */
declare function combineLatestToObject<const T extends Record<string, ReactiveOrSource<any>>>(reactiveSources: T, options?: Partial<CombineLatestOptions>): CombineLatestToObject<T>;

/**
 * When there is a value from `input`, or the reactive is pinged,
 * this reactive emits the result of `fn`.
 *
 * `fn` is provided the previous value as well as the most recent value.
 *
 * If no previous value is available, the current value is emitted and `fn` is not called.
 * @param input
 * @param fn
 * @returns
 */
declare function computeWithPrevious<TIn>(input: ReactiveOrSource<TIn>, fn: (previous: TIn, current: TIn) => TIn): ReactivePingable<TIn>;

/**
 * Debounce waits for `elapsed` time after the last received value before emitting it.
 *
 * If a flurry of values are received that are within the interval, it won't emit anything. But then
 * as soon as there is a gap in the messages that meets the interval, the last received value is sent out.
 *
 * `debounce` always emits with at least `elapsed` as a delay after a value received. While {@link throttle} potentially
 * sends immediately, if it's outside of the elapsed period.
 *
 * This is a subtly different logic to {@link throttle}. `throttle` more eagerly sends the first value, potentially
 * not sending later values. `debouce` however will send later values, potentially ignoring earlier ones.
 * @param source
 * @param options
 * @returns
 */
declare function debounce<V>(source: ReactiveOrSource<V>, options?: Partial<DebounceOptions>): Reactive<V>;

/**
 * Emits time in milliseconds since last message.
 * If it is the first value, 0 is used.
 * @param input
 * @returns
 */
declare const elapsed: <In>(input: ReactiveOrSource<In>) => Reactive<number>;

/**
 * From a source value, yields a field from it. Only works
 * if stream values are objects.
 *
 * If a source value doesn't have that field, it is skipped.
 *
 * @returns
 */
declare function field<TIn extends object, TFieldType>(fieldSource: ReactiveOrSource<TIn>, fieldName: keyof TIn, options?: Partial<FieldOptions<TIn, TFieldType>>): Reactive<TFieldType>;

/**
 * Passes all values where `predicate` function returns _true_.
 */
declare function filter<In>(input: ReactiveOrSource<In>, predicate: FilterPredicate<In>, options: Partial<InitStreamOptions>): Reactive<In>;
/**
 * Drops all values where `predicate` function returns _true_.
 */
declare function drop<In>(input: ReactiveOrSource<In>, predicate: FilterPredicate<In>, options: Partial<InitStreamOptions>): Reactive<In>;

type OpInterpolateOptions = InterpolateOptions & {
    amount: number;
    /**
     * Percentage of value that we consider 'done'.
     * Since interpolation can never converge to target exactly, this allows us to snap to completion.
     * Default: 0.99, meaning if value gets to within 99%, return the target.
     */
    snapAt: number;
};
/**
 * Interpolates to the source value.
 *
 * Outputs one value for every input value. Thus, to interpolation
 * over time, it's necessary to get the source to emit values at the desired rate.
 *
 * Options can specify an easing name or custom transform of easing progress.
 * @param input
 * @param options
 * @returns
 */
declare function interpolate(input: ReactiveOrSource<number>, options?: Partial<OpInterpolateOptions>): ReactivePingable<number>;

/**
 * Pipes the output of one stream into another, in order.
 * The stream returned is a new stream which captures the final output.
 *
 * If any stream in the pipe closes the whole pipe is closed.
 * @param streams
 * @returns
 */
declare const pipe: <TInput, TOutput>(streams_0: Reactive<TInput>, ...streams: (Reactive<any> & {
    set(value: any): void;
})[]) => Reactive<TOutput>;

/**
 * For a stream that emits arrays of values, this op will select a single value.
 *
 * Can select based on:
 * * predicate: a function that returns _true_ for a value
 * * at: selection based on array index (can be combined with random ordering to select a random value)
 *
 * ```js
 * // If source is Reactive<Array<number>>, picks the first even number
 * singleFromArray(source, {
 *  predicate: v => v % 2 === 0
 * });
 *
 * // Selects a random value from source
 * singleFromArray(source, {
 *  order: `random`,
 *  at: 0
 * });
 * ```
 *
 * If neither `predicate` or `at` options are given, exception is thrown.
 * @param source Source to read from
 * @param options Options for selection
 * @returns
 */
declare function singleFromArray<V>(source: ReactiveOrSource<Array<V>>, options?: Partial<SingleFromArrayOptions<V>>): Reactive<V>;

/**
 * Creates a set of streams each of which receives data from `source`.
 * By default these are lazy and dispose if the upstream source closes.
 *
 * See also {@link splitLabelled} to split into named streams.
 * @param rxOrSource
 * @param options
 * @returns
 */
declare const split: <T>(rxOrSource: ReactiveOrSource<T>, options?: Partial<SplitOptions>) => ReactiveStream<T>[];
/**
 * Splits `source` into several duplicated streams.
 * Returns an object with keys according to `labels`.
 * Each value is a stream which echos the values from `source`.
 * ```js
 * const { a, b, c} = splitLabelled(source, `a`, `b`, `c`);
 * // a, b, c are Reactive types
 * ```
 *
 * See also {@link split} to get an unlabelled split
 * @param rxOrSource
 * @param labels
 * @returns
 */
declare const splitLabelled: <T, K extends PropertyKey>(rxOrSource: ReactiveOrSource<T>, labels: Array<K>) => Record<K, Reactive<T>>;

/**
 * Switcher generates several output streams, labelled according to the values of `cases`.
 * Values from `source` are fed to the output streams if their associated predicate function returns _true_.
 *
 * In this way, we can split one input stream into several output streams, each potentially getting a different
 * subset of the input.
 *
 * With `options`, you can specify whether to send to multiple outputs if several match, or just the first (default behaviour).
 *
 * The below example shows setting up a switcher and consuming the output streams.
 * @example
 * ```js
 * // Initialise a reactive number, starting at 0
 * const switcherSource = Reactive.number(0);
 * // Set up the switcher
 * const x = Reactive.switcher(switcherSource, {
 *  even: v => v % 2 === 0,
 *  odd: v => v % 2 !== 0
 * });
 * // Listen for outputs from each of the resulting streams
 * x.even.on(msg => {
 *   log(`even: ${msg.value}`);
 * });
 * x.odd.on(msg => {
 *   log(`odd: ${msg.value}`);
 * })
 * // Set new values to the number source, counting upwards
 * // ...this will in turn trigger the outputs above
 * setInterval(() => {
 *   switcherSource.set(switcherSource.last() + 1);
 * }, 1000);
 * ```
 *
 * If `source` closes, all the output streams will be closed as well.
 * @param reactiveOrSource
 * @param cases
 * @param options
 * @returns
 */
declare const switcher: <TValue, TRec extends Record<string, FilterPredicate<TValue>>, TLabel extends keyof TRec>(reactiveOrSource: ReactiveOrSource<TValue>, cases: TRec, options?: Partial<SwitcherOptions>) => Record<TLabel, Reactive<TValue>>;

/**
 * Waits for all sources to produce a value, sending the combined results as an array.
 * After sending, it waits again for each source to send at least one value.
 *
 * Use {@link syncToObject} to output objects based on labelled sources rather than an array of values.
 *
 * Pace will be set by the slowest source. Alternatively, use {@link combineLatestToArray} where the rate is determined by fastest source.
 *
 * Only complete results are sent. For example if source A & B finish and source C is still producing values,
 * synchronisation is not possible because A & B stopped producing values. Thus the stream will self-terminate
 * after `maximumWait` (2 seconds). The newer values from C are lost.
 */
declare function syncToArray<const T extends ReadonlyArray<ReactiveOrSource<any>>>(reactiveSources: T, options?: Partial<SyncOptions>): Reactive<RxValueTypes<T>>;

declare function syncToObject<const T extends Record<string, ReactiveOrSource<any>>>(reactiveSources: T, options?: Partial<SyncOptions>): Reactive<RxValueTypeObject<T>>;

/**
 * 'Taps' the values from 'input', passing them to the 'process' function.
 * Return stream is the input stream, unaffected by what 'process' does.
 * @param input Input stream
 * @param processors List of processors
 * @returns
 */
declare function tapProcess<In, T2, T3, T4, T5, T6>(input: ReactiveOrSource<In>, ...processors: Processors<In, T2, T3, T4, T5, T6>): Reactive<In>;
/**
 * 'Taps' the values from 'input', passing them to 'diverged'
 * Returns the original input stream, unaffected by what 'diverged' does.
 * @param input Input stream
 * @param diverged Stream to write to
 * @returns
 */
declare function tapStream<In>(input: ReactiveOrSource<In>, diverged: ReactiveWritable<In>): Reactive<In>;
/**
 * Create a parallel 'tap' of processing
 * @param input Input stream
 * @param ops Series of ops to process data
 * @returns
 */
declare const tapOps: <TIn, TOut>(input: ReactiveOrSource<TIn>, ...ops: Array<ReactiveOp<TIn, TOut>>) => Reactive<TOut>;

/**
 * Only allow a value through if a minimum amount of time has elapsed.
 * since the last value. This effectively slows down a source to a given number
 * of values/ms. Values emitted by the source which are too fast are discarded.
 *
 * Throttle will fire on the first value received.
 *
 * In more detail:
 * Every time throttle passes a value, it records the time it allowed something through. For every
 * value received, it checks the elapsed time against this timestamp, throwing away values if
 * the period hasn't elapsed.
 *
 * With this logic, a fury of values of the source might be discarded if they fall within the elapsed time
 * window. But then if there is not a new value for a while, the actual duration between values can be longer
 * than expected. This is in contrast to {@link debounce}, which will emit the last value received after a duration,
 * even if the source stops sending.
 * @param options
 * @returns
 */
declare function throttle<V>(throttleSource: ReactiveOrSource<V>, options?: Partial<ThrottleOptions>): Reactive<V>;

/**
 * Emits a value if `source` does not emit a value after `interval`
 * has elapsed. This can be useful to reset a reactive to some
 * 'zero' state if nothing is going on.
 *
 * If `source` emits faster than the `interval`, it won't get triggered.
 *
 * Default for 'timeout': 1000s.
 *
 * ```js
 * // Emit 'hello' if 'source' doesn't emit a value after 1 minute
 * const r = Rx.timeoutValue(source, { value: 'hello', interval: { mins: 1 } });
 * ```
 *
 * Can also emit results from a function or generator
 * ```js
 * // Emits a random number if 'source' doesn't emit a value after 500ms
 * const r = Rx.timeoutValue(source, { fn: Math.random, interval: 500 });
 * ```
 *
 * If `immediate` option is _true_ (default), the timer starts from stream initialisation.
 * Otherwise it won't start until it observes the first value from `source`.
 * @param source
 * @param options
 */
declare function timeoutValue<TSource, TTriggerValue>(source: ReactiveOrSource<TSource>, options: TimeoutValueOptions<TTriggerValue>): Reactive<TSource | TTriggerValue>;

/**
 * Pings a reactive if no value is emitted at after `interval`.
 * Returns `source`.
 *
 * ```js
 * // Ping `source` if no value is emitted after one minute
 * const r = Rx.timeoutPing(source, { mins: 1 });
 * ```
 *
 * Behavior can be stopped using an abort signal.
 * @see {@link ReactivePingable}
 * @param source
 * @param options
 */
declare function timeoutPing<TSource>(source: ReactiveOrSource<TSource>, options: TimeoutPingOptions): Reactive<TSource>;

/**
 * Transforms values from `source` using the `transformer` function.
 * @param transformer
 * @returns
 */
declare function transform<In, Out>(input: ReactiveOrSource<In>, transformer: (value: In) => Out, options?: Partial<TransformOpts>): Reactive<Out>;

/**
 * Pings `target` whenever `source` emits a value. The value itself is ignored, it just
 * acts as a trigger.
 *
 * Returns a new stream capturing the output of `target`.
 *
 * It `source` or `target` closes, output stream closes too.
 *
 * @returns
 */
declare function valueToPing<TSource, TTarget>(source: ReactiveOrSource<TSource>, target: ReactivePingable<TTarget>, options?: Partial<ValueToPingOptions<TSource>>): Reactive<TTarget>;

/**
 * A reactive where the last value can be read at any time.
 * An initial value must be provided.
 * ```js
 * const r = Rx.withValue(source, { initial: `hello` });
 * r.last(); // Read last value
 * ```
 *
 * Warning: Since most reactives only active when subscribed to, it's important to also subscribe
 * to the results of `r` for this flow to happen. Alternatively, use `lazy: 'never'` as an option.
 * @param input
 * @param options
 * @returns
 */
declare function withValue<In>(input: ReactiveOrSource<In>, options: WithValueOptions<In>): ReactiveInitial<In>;

/**
 * Build a graph of reactive dependencies for `rx`
 * @param _rx
 */
declare function prepare<V extends Record<string, any>>(_rx: V): Reactive<V>;

/**
 * Reads a set number of values from `source`, returning as an array. May contain
 * empty values if desired values is not reached.
 *
 * After the limit is reached (or `source` completes), `source` is unsubscribed from.
 *
 * If no limit is set, it will read until `source` completes or `maximumWait` is reached.
 * `maximumWait` is 10 seconds by default.
 *
 * Use {@link toArrayOrThrow} to throw if desired limit is not reached.
 *
 * ```js
 * // Read from `source` for 5 seconds
 * const data = await toArray()(source);
 * // Read 5 items from `source`
 * const data = await toArray({ limit: 5 })(source);
 * // Read for 10s
 * const data = await toArray({ maximumWait: 10_1000 })(source);
 * ```
 * @param source
 * @param options
 * @returns
 */
declare function toArray<V>(source: ReactiveOrSource<V>, options?: Partial<ToArrayOptions<V>>): Promise<Array<V | undefined>>;
/**
 * By default, reads all the values from `source`, or until 5 seconds has elapsed.
 *
 * If `limit` is provided as an option, it will exit early, or throw if that number of values was not acheived.
 *
 * ```js
 * // Read from `source` for 5 seconds
 * const data = await toArrayOrThrow()(source);
 * // Read 5 items from `source`
 * const data = await toArrayOrThrow({ limit: 5 })(source);
 * // Read for 10s
 * const data = await toArrayOrThrow({ maximumWait: 10_1000 })(source);
 * ```
 * @param source
 * @param options
 * @returns
 */
declare function toArrayOrThrow<V>(source: ReactiveOrSource<V>, options?: Partial<ToArrayOptions<V>>): Promise<Array<V>>;

/**
 * Returns an AsyncGenerator wrapper around Reactive.
 * This allows values to be iterated over using a `for await` loop,
 * like Chains.
 *
 * ```js
 * // Reactive numerical value
 * const number = Reactive.number(10);
 *
 * const g = Reactive.toGenerator(number);
 * for await (const v of g) {
 *  console.log(v); // Prints out whenever the reactive value changes
 * }
 * // Execution doesn't continue until Reactive finishes
 * ```
 *
 * When/if `source` closes, an exception is thrown.
 * To catch this, wrap the calling `for await` in a try-catch block
 * ```js
 * try {
 *  for await (const v of g) {
 *  }
 * } catch (error) {
 * }
 * // Completed
 * ```
 *
 * Use something like `setTimeout` to loop over the generator
 * without impeding the rest of your code flow. For example:
 * ```js
 * // Listen for every pointerup event
 * const ptr = Reactive.fromEvent(document.body, `pointerup`);
 * // Start iterating
 * setTimeout(async () => {
 *  const gen = Reactive.toGenerator(ptr);
 *  try {
 *    for await (const v of gen) {
 *      // Prints out whenever there is a click
 *      console.log(v);
 *    }
 *  } catch (e) { }
 *  console.log(`Iteration done`);
 * });
 *
 * // Execution continues here immediately
 * ```
 * @param source
 */
declare function toGenerator<V>(source: ReactiveOrSource<V>): AsyncGenerator<V>;

declare function messageIsSignal<V>(message: Passed<V> | PassedSignal): message is PassedSignal;
declare function messageIsDoneSignal<V>(message: Passed<V> | PassedSignal): boolean;
/**
 * Returns _true_ if `v` has a non-undefined value. Note that sometimes
 * _undefined_ is a legal value to pass
 * @param v
 * @returns
 */
declare function messageHasValue<V>(v: Passed<V> | PassedSignal): v is PassedValue<V>;
declare const isPingable: <V>(rx: Reactive<V> | ReactiveDiff<V> | object) => rx is ReactivePingable<V>;
declare const hasLast: <V>(rx: Reactive<V> | ReactiveDiff<V> | object) => rx is ReactiveInitial<V>;
/**
 * Returns _true_ if `rx` is a Reactive
 * @param rx
 * @returns
 */
declare const isReactive: <V>(rx: object) => rx is Reactive<V>;
/**
 * Returns true if `rx` is a disposable reactive.
 * @param rx
 * @returns
 */
/**
 * Returns _true_ if `rx` is a writable Reactive
 * @param rx
 * @returns
 */
declare const isWritable: <V>(rx: Reactive<V> | ReactiveWritable<V>) => rx is ReactiveWritable<V>;
declare const isWrapped: <T>(v: any) => v is Wrapped<T>;
declare const opify: <TIn, TRxOut = Reactive<TIn>>(fn: (source: ReactiveOrSource<TIn>, ...args: Array<any>) => TRxOut, ...args: Array<any>) => (source: ReactiveOrSource<TIn>) => TRxOut;
declare const isTriggerValue: <V>(t: Trigger<V>) => t is TriggerValue<V>;
declare const isTriggerFunction: <V>(t: Trigger<V>) => t is TriggerFunction<V>;
declare const isTriggerGenerator: <V>(t: Trigger<V>) => t is TriggerGenerator<V>;
declare const isTrigger: <V>(t: any) => t is Trigger<V>;
type ResolveTriggerValue<V> = [value: V, false];
type ResolveTriggerDone = [undefined, true];
/**
 * Resolves a trigger value.
 *
 * A trigger can be a value, a function or generator. Value triggers never complete.
 * A trigger function is considered complete if it returns undefined.
 * A trigger generator is considered complete if it returns done.
 *
 * Returns `[value, _false_]` if we have a value and trigger is not completed.
 * Returns `[value, _true_]` trigger is completed
 * @param t
 * @returns
 */
declare function resolveTriggerValue<V>(t: Trigger<V>): ResolveTriggerDone | ResolveTriggerValue<V>;

/**
 * Wrap a reactive source to allow for chained
 * function calls.
 *
 * Example:
 * For every `pointerup` event on the body, chunk the events over
 * periods of 200ms, get the number of events in that period,
 * and print it out.
 *
 * eg. detecting single or double-clicks
 * ```js
 * wrap(Rx.fromEvent<{ x: number, y: number }>(document.body, `pointerup`))
 *  .chunk({ elapsed: 200 })
 *  .transform(v => v.length)
 *  .onValue(v => { console.log(v) });
 * ```
 * @param source
 * @returns
 */
declare function wrap<TIn>(source: ReactiveOrSource<TIn>): Wrapped<TIn>;

type ResolveSourceOptions = {
    /**
     * Options when creating a reactive from a generator
     * Default:  `{ lazy: true, interval: 5 }`
     */
    generator: GeneratorOptions;
    /**
     * Options when creating a reactive from a function.
     */
    function: FunctionOptions;
};
/**
 * Resolves various kinds of sources into a Reactive.
 * If `source` is an iterable/generator, it gets wrapped via `generator()`.
 *
 * Default options:
 * * generator: `{ lazy: true, interval: 5 }`
 * @param source
 * @returns
 */
declare const resolveSource: <V>(source: ReactiveOrSource<V>, options?: Partial<ResolveSourceOptions>) => Reactive<V>;

/**
 * A stream that caches its last value
 */
type CacheStream<T> = {
    /**
     * Clears the last cached value
     * @returns
     */
    resetCachedValue: () => void;
    /**
     * Gets the cached value, if available
     * @returns
     */
    last: () => T | undefined;
};
/**
 * A {@link CacheStream} with an initial value
 */
type CacheStreamInitial<T> = CacheStream<T> & {
    last: () => T;
};
/**
 * Wraps an input stream to cache values, and provide an initial value
 * @param r Input stream
 * @param initialValue Initial value
 */
declare function cache<TValue, RT extends Reactive<TValue>>(r: RT, initialValue: TValue): CacheStreamInitial<TValue> & RT;

/**
 * Reactive stream of array of elements that match `query`.
 * @param query
 * @returns
 */
declare function fromDomQuery(query: string): Reactive<HTMLElement[]> & {
    set(value: HTMLElement[]): void;
} & {
    onField(fieldName: string, handler: (result: ObjectFieldHandler) => void): () => void;
    onDiff(changes: (changes: Array<PathDataChange<any>>) => void): () => void;
    update(changedPart: (RecursivePartial<HTMLElement> | undefined)[]): HTMLElement[];
    updateField(field: string, value: any): void;
} & {
    last(): HTMLElement[];
};
/**
 * Updates an element's `textContent` when the source value changes.
 * ```js
 * bindText(source, `#blah`);
 * ```
 * @param elOrQuery
 * @param source
 * @param bindOpts
 */
declare const bindText: <TSource>(source: Reactive<TSource>, elOrQuery: string | HTMLElement | null, bindOpts?: Partial<DomBindSourceValue<TSource, string>>) => PipeDomBinding;
/**
 * Updates an element's `value` (as well as the 'value' attribute) when the source value changes.s
 * @param source
 * @param elOrQuery
 * @param bindOpts
 * @returns
 */
declare const bindValueText: <TSource>(source: Reactive<TSource>, elOrQuery: string | HTMLInputElement | null, bindOpts?: Partial<DomBindSourceValue<TSource, string>>) => PipeDomBinding;
/**
 * Updates an element's `innerHTML` when the source value changes
 * ```js
 * bindHtml(source, `#blah`);
 * ```
 *
 * Uses {@link bindElement}, with `{elField:'innerHTML'}` as the options.
 * @param elOrQuery
 * @param source
 * @param bindOpts
 * @returns
 */
declare const bindHtml: <TSource>(source: Reactive<TSource>, elOrQuery: string | HTMLElement | null, bindOpts?: DomBindSourceValue<TSource, string>) => PipeDomBinding;
/**
 * Shortcut to bind to an elements attribute
 * @param elOrQuery
 * @param source
 * @param attribute
 * @param bindOpts
 * @returns
 */
/**
 * Shortcut to bind to a CSS variable
 * @param elOrQuery
 * @param source
 * @param cssVariable
 * @param bindOpts
 * @returns
 */
/**
 * Creates a new HTML element, calling {@link bind} on it to update when `source` emits new values.
 *
 *
 * ```js
 * // Set textContent of a SPAN with values from `source`
 * create(source, { tagName: `span`, parentEl: document.body })
 * ```
 *
 * If `parentEl` is not given in the options, the created element needs to be manually added
 * ```js
 * const b = create(source);
 * someEl.append(b.el); // Append manually
 * ```
 *
 * ```
 * // Set 'title' attribute based on values from `source`
 * create(source, { parentEl: document.body, attribName: `title` })
 * ```
 * @param source
 * @param options
 * @returns
 */
/**
 * Update a DOM element's field, attribute or CSS variable when `source` produces a value.
 *
 * ```js
 * // Access via DOM query. Binds to 'textContent' by default
 * bind(readableSource, `#someEl`);
 *
 * // Set innerHTML instead
 * bind(readableSource, someEl, { elField: `innerHTML` });
 *
 * // An attribute
 * bind(readableSource, someEl, { attribName: `width` });
 *
 * // A css variable ('--' optiona)
 * bind(readableSource, someEl, { cssVariable: `hue` });
 *
 * // Pluck a particular field from source data.
 * // Ie someEl.textContent = value.colour
 * bind(readableSource, someEl, { sourceField: `colour` });
 *
 * // Transform value before setting it to field
 * bind(readableSource, someEl, {
 *  field: `innerHTML`,
 *  transform: (v) => `Colour: ${v.colour}`
 * })
 * ```
 *
 * If `source` has an initial value, this is used when first bound.
 *
 * Returns {@link PipeDomBinding} to control binding:
 * ```js
 * const bind = bind(source, `#someEl`);
 * bind.remove();     // Unbind
 * bind.remove(true); // Unbind and remove HTML element
 * ```
 *
 * If several fields need to be updated based on a new value, consider using {@link bindUpdate} instead.
 * @param elOrQuery Element to update to, or query string such as '#someid'
 * @param source Source of data
 * @param binds Bindings
 */
declare const bindElement: <TSource, TDestination>(source: Reactive<TSource>, elOrQuery: string | HTMLElement | null, ...binds: Array<DomBindSourceValue<TSource, TDestination> & DomBindValueTarget>) => PipeDomBinding;
/**
 * Binds `source` to one or more element(s). One or more bindings for the same source
 * can be provided.
 *
 * ```js
 * bind(source,
 *  // Binds .name field of source values to textContent of #some-element
 *  { query: `#some-element`, sourceField: `name` },
 *  { query: `section`, }
 * );
 * ```
 *
 * Can update
 * * CSS variables
 * * CSS styles
 * * textContent / innerHTML
 * * HTML DOM attributes and object fields
 *
 * Can use a particular field on source values, or use the whole value. These can
 * pass through `transformValue` or `transform` respectively.
 *
 * Returns a function to unbind from source and optionally remove HTML element
 * ```js
 * const unbind = bind( . . . );
 * unbind();     // Unbind
 * unbind(true); // Unbind and remove HTML element(s)
 * ```
 * @param source
 * @param bindsUnresolvedElements
 * @returns
 */
declare const bind: <TSource, TDestination>(source: Reactive<TSource>, ...bindsUnresolvedElements: Array<DomBindUnresolvedSource<TSource, TDestination>>) => PipeDomBinding;
/**
 * Calls `updater` whenever `source` produces a value. Useful when several fields from a value
 * are needed to update an element.
 * ```js
 * bindUpdate(source, `#someEl`, (v, el) => {
 *  el.setAttribute(`width`, v.width);
 *  el.setAttribute(`height`, v.height);
 * });
 * ```
 *
 * Returns a {@link PipeDomBinding} to manage binding
 * ```js
 * const b = bindUpdate(...);
 * b.remove();     // Disconnect binding
 * b.remove(true); // Disconnect binding and remove element
 * b.el;           // HTML element
 * ```
 * @param elOrQuery
 * @param source
 * @param updater
 * @returns
 */
declare const bindUpdate: <V>(source: Reactive<V>, elOrQuery: string | HTMLElement, updater: (v: V, el: HTMLElement) => void) => PipeDomBinding;
/**
 * Updates a HTML element based on diffs on an object.
 * ```js
 * // Wrap an object
 * const o = Rx.object({ name: `Jane`, ticks: 0 });
 * const b = bindDiffUpdate(`#test`, o, (diffs, el) => {
 *  // el = reference to #test
 * // diff = Array of Changes,
 * //  eg [ { path: `ticks`, value: 797, previous: 0 } ]
 *  for (const diff of diffs) {
 *    if (diff.path === `ticks`) el.textContent = `${diff.previous} -> ${diff.value}`
 *  }
 * })
 *
 * // Eg. update field
 * o.updateField(`ticks`, Math.floor(Math.random()*1000));
 * ```
 *
 * If `initial` is provided as an option, this will be called if `source` has an initial value. Without this, the DOM won't be updated until the first data
 * update happens.
 * ```js
 * bindDiffUpdate(el, source, updater, {
 *  initial: (v, el) => {
 *    el.innerHTML = v.name;
 *  }
 * })
 * ```
 * @param elOrQuery
 * @param source
 * @param updater
 * @param opts
 * @returns
 */
declare const bindDiffUpdate: <V>(source: ReactiveDiff<V>, elOrQuery: string | HTMLElement | null, updater: (diffs: Array<PathDataChange<any>>, el: HTMLElement) => void, opts?: Partial<BindUpdateOpts<V>>) => PipeDomBinding & {
    refresh: () => void;
};
/**
 * Creates a new HTML element and calls `bindUpdate` so values from `source` can be used
 * to update it.
 *
 *
 * ```js
 * // Creates a span, adding it to <body>
 * const b = createUpdate(dataSource, (value, el) => {
 *  el.width = value.width;
 *  el.height = value.height;
 * }, {
 *  tagName: `SPAN`,
 *  parentEl: document.body
 * })
 * ```
 * @param source
 * @param updater
 * @param options
 * @returns
 */
/**
 * Creates, updates & deletes elements based on pathed values from a reactive.
 *
 * This means that elements are only manipulated if its associated data changes,
 * and elements are not modified if there's no need to.
 * @param source
 * @param options
 */
declare const elements: <T>(source: ReactiveDiff<T> | (ReactiveDiff<T> & ReactiveInitial<T>), options: Partial<ElementsOptions>) => void;
declare function win(): {
    dispose: (reason?: string) => void;
    size: Reactive<{
        lazy: string;
        transform: () => {
            width: number;
            height: number;
        };
    }> & {
        last(): {
            lazy: string;
            transform: () => {
                width: number;
                height: number;
            };
        };
    };
    pointer: Reactive<{
        lazy: string;
        transform: (args: Event | undefined) => {
            x: number;
            y: number;
        };
    }> & {
        last(): {
            lazy: string;
            transform: (args: Event | undefined) => {
                x: number;
                y: number;
            };
        };
    };
};

declare const Dom_bind: typeof bind;
declare const Dom_bindDiffUpdate: typeof bindDiffUpdate;
declare const Dom_bindElement: typeof bindElement;
declare const Dom_bindHtml: typeof bindHtml;
declare const Dom_bindText: typeof bindText;
declare const Dom_bindUpdate: typeof bindUpdate;
declare const Dom_bindValueText: typeof bindValueText;
declare const Dom_elements: typeof elements;
declare const Dom_fromDomQuery: typeof fromDomQuery;
declare const Dom_win: typeof win;
declare namespace Dom {
  export { Dom_bind as bind, Dom_bindDiffUpdate as bindDiffUpdate, Dom_bindElement as bindElement, Dom_bindHtml as bindHtml, Dom_bindText as bindText, Dom_bindUpdate as bindUpdate, Dom_bindValueText as bindValueText, Dom_elements as elements, Dom_fromDomQuery as fromDomQuery, Dom_win as win };
}

declare const of: <V>(source: Array<V> | Iterable<V>, options?: Partial<ArrayOptions>) => (Reactive<V> & ReactiveFinite & {
    last(): V;
}) | undefined;
/**
 * Reads the contents of `array` into a Reactive, with optional time interval
 * between values. A copy of the array is used, so changes will not
 * affect the reactive.
 *
 * See also {@link arrayObject} which monitors changes to array values.
 *
 * Reads items from an array with a given interval, by default 5ms
 *
 * ```js
 * const data = [`apples`, `oranges`, `pears` ];
 * const rx = Rx.From.array(data);
 * rx.onValue(v => {
 *  // v will be each fruit in turn
 * })
 * ```
 *
 * Note that there is the possibility of missing values since there is delay between subscribing and when items start getting emitted.
 * If a new subscriber connects to the reactive, they won't get values already emitted.
 * @param sourceArray
 * @param options
 * @returns
 */
declare const array: <V>(sourceArray: Array<V>, options?: Partial<ArrayOptions>) => Reactive<V> & ReactiveFinite & ReactiveInitial<V>;

/**
 * Wraps an array object.
 *
 * It returns an reactive along with some array-ish functions to manipulating it.
 * @param initialValue
 * @param options
 * @returns
 */
declare function arrayObject<V>(initialValue?: ReadonlyArray<V>, options?: Partial<ArrayObjectOptions<V>>): ReactiveArray<V> & ReactiveInitial<ReadonlyArray<V>>;

declare function boolean(initialValue: boolean): ReactiveWritable<boolean> & ReactiveInitial<boolean>;
declare function boolean(): ReactiveWritable<boolean> & ReactiveNonInitial<boolean>;

type ReactiveColour = ReactiveWritable<Colourish> & {
    setHsl: (hsl: Hsl) => void;
};
declare function colour(initialValue: Colourish): ReactiveColour & ReactiveInitial<Colourish>;
declare function colour(): ReactiveColour & ReactiveNonInitial<Colourish>;

/**
 * Produces an incrementing value. By default starts at 0 and counts
 * forever, incrementing every second.
 *
 * ```js
 * const r = Rx.From.count();
 * r.onValue(c => {
 *  // 0, 1, 2, 3 ... every second
 * });
 * ```
 *
 * The `limit` is exclusive
 * ```js
 * const r = Rx.From.count({limit:5});
 * // Yields 0,1,2,3,4
 * ```
 *
 * If limit is less than start, it will count down instead.
 * ```js
 * const r = Rx.count({start:5, limit: 0});
 * // Yie:ds 5,4,3,2,1
 * ```
 *
 * ```js
 * // Count 10, 12, 14 ... every 500ms
 * const r = Rx.From.count({ start: 10, amount: 2, interval: 500 });
 * ```
 *
 * In addition to setting `limit` (which is exclusive), you can stop with an abort signal
 * ```js
 * const ac = new AbortController();
 * const r = Rx.From.count({signal:ac.signal});
 * ...
 * ac.abort(`stop`);
 * ```
 * @param options
 */
declare function count(options?: Partial<CountOptions>): ReactiveStream<number>;

declare function derived<TResult, const T extends Record<string, ReactiveOrSource<any>>>(fn: (combined: RxValueTypeObject<T>) => TResult | undefined, reactiveSources: T, options?: Partial<DerivedOptions<TResult, CombineLatestToObject<T>>>): ReactiveNonInitial<TResult>;

/**
 * Reactive getting/setting of values to a HTML INPUT element.
 *
 * Options:
 * - relative: if _true_, values are 0..1 (default: false)
 * - inverted: if _true_, values are 1..0 (default: false)
 *
 * If element is missing a 'type' attribute, this will be set to 'range'.
 * @param targetOrQuery
 * @param options
 * @returns
 */
declare function domNumberInputValue(targetOrQuery: HTMLInputElement | string, options?: Partial<DomNumberInputValueOptions>): ReactiveInitial<number> & ReactiveWritable<number>;
declare function domHslInputValue(targetOrQuery: HTMLInputElement | string, options?: Partial<DomValueOptions>): ReactiveInitial<Hsl> & Reactive<Hsl> & ReactiveWritable<Hsl>;
/**
 * A stream of values when the a HTMLInputElement changes. Eg a <input type="range">
 * ```js
 * const r = Rx.From.domInputValue(`#myEl`);
 * r.onValue(value => {
 *  // value will be string
 * });
 * ```
 *
 * Options:
 * * emitInitialValue: If _true_ emits the HTML value of element (default: false)
 * * attributeName: If set, this is the HTML attribute value is set to when writing to stream (default: 'value')
 * * fieldName: If set, this is the DOM object field set when writing to stream (default: 'value')
 * * when: 'changed'|'changing' when values are emitted. (default: 'changed')
 * * fallbackValue:  Fallback value to use if field/attribute cannot be read (default: '')
 * @param targetOrQuery
 * @param options
 * @returns
 */
declare function domInputValue(targetOrQuery: HTMLInputElement | string, options?: Partial<DomValueOptions>): {
    el: HTMLInputElement;
} & ReactiveInitial<string> & ReactiveWritable<string>;
/**
 * Listens for data changes from elements within a HTML form element.
 * Input elements must have a 'name' attribute.
 *
 * Simple usage:
 * ```js
 * const rx = Rx.From.domForm(`#my-form`);
 * rx.onValue(value => {
 *  // Object containing values from form
 * });
 *
 * rx.last(); // Read current values of form
 * ```
 *
 * UI can be updated
 * ```js
 * // Set using an object of key-value pairs
 * rx.set({
 *  size: 'large'
 * });
 *
 * // Or set a single name-value pair
 * rx.setNamedValue(`size`, `large`);
 * ```
 *
 * If an 'upstream' reactive is provided, this is used to set initial values of the UI, overriding
 * whatever may be in the HTML. Upstream changes modify UI elements, but UI changes do not modify the upstream
 * source.
 *
 * ```js
 * // Create a reactive object
 * const obj = Rx.From.object({
 *  when: `2024-10-03`,
 *  size: 12,
 *  checked: true
 * });
 *
 * // Use this as initial values for a HTML form
 * // (assuming appropriate INPUT/SELECT elements exist)
 * const rx = Rx.From.domForm(`form`, {
 *  upstreamSource: obj
 * });
 *
 * // Listen for changes in the UI
 * rx.onValue(value => {
 *
 * });
 * ```
 * @param formElOrQuery
 * @param options
 * @returns
 */
declare function domForm<T extends Record<string, any>>(formElOrQuery: HTMLFormElement | string, options?: Partial<DomFormOptions<T>>): {
    setNamedValue: (name: string, value: any) => void;
    el: HTMLFormElement;
} & ReactiveInitial<T> & ReactiveWritable<T>;

/**
 * Fired when `eventName` fires on `target`.
 *
 * Rather than whole event args being emitted on the stream,
 * it plucks a field from the event args, or if that's missing, from the target.
 *
 * ```js
 * // Emits the the value of a field named 'x'
 * // on the change event args
 * eventField(el, `pointermove`, `x`);
 * ```
 * @param targetOrQuery Event target, HTML element or HTML query (eg '#someId')
 * @param eventName Name of event, eg. 'pointermove'
 * @param fieldName Name of field, eg 'x'
 * @param initialValue Initial data
 * @param options Options for source
 */
declare function eventField<TFieldValue = string>(targetOrQuery: EventTarget | string | null, eventName: string, fieldName: string, initialValue: TFieldValue, options?: Partial<EventOptions & FieldOptions<any, TFieldValue>>): Reactive<TFieldValue>;
/**
 * Subscribes to an event, emitting data
 *
 * @example Print x,y position of mouse as it moves
 * ```js
 * const r = Rx.From.event(document, `pointermove`);
 * r.onValue(event => {
 *  const { x, y } = event;
 * });
 * ```
 *
 * If `options.lazy` is _true_ (default: _false_), event will only be subscribed to when the stream
 * itself has a subscriber.
 *
 * `options.debugFiring` and `options.debugLifecycle` can be turned on to troubleshoot behaviour
 * of the stream if necessary.
 * @param targetOrQuery Event emitter, HTML element or string. If a string, it will be queryed as a selector.
 * @param name Event name
 * @param options Options
 * @returns
 */
declare function event<TEventArgs extends Record<string, any>>(targetOrQuery: EventTarget | null | string, name: string, initialValue: TEventArgs | undefined, options?: Partial<EventOptions>): ReactiveInitial<TEventArgs> & Reactive<TEventArgs>;
type TriggerData = {
    sinceLast: number;
    total: number;
};
/**
 * Emits a value whenever event happens.
 * Data emitted is `{ sinceLast, total }`, where 'sinceLast'
 * is milliseconds since last event and 'total' is total number of
 * times event has been fired.
 * @param targetOrQuery
 * @param name
 * @param options
 * @returns
 */
declare function eventTrigger(targetOrQuery: EventTarget | null | string, name: string, options?: Partial<EventTriggerOptions>): Reactive<TriggerData>;

/**
 * Produces a reactive from the basis of a function. `callback` is executed, with its result emitted via the returned reactive.
 *
 * ```js
 * // Produce a random number every second
 * const r = Rx.From.func(Math.random, { interval: 1000 });
 * ```
 *
 * `callback` can be called repeatedly by providing the `interval` option to set the rate of repeat.
 * Looping can be limited with `options.maximumRepeats`, or passing a signal `options.signal`
 * and then activating it.
 * ```js
 * // Reactive that emits a random number every second, five times
 * const r1 = Rx.From.func(Math.random, { interval: 1000, maximumRepeats: 5 }
 * ```
 *
 * ```js
 * // Generate a random number every second until ac.abort() is called
 * const ac = new AbortController();
 * const r2 = Rx.From.func(Math.random, { interval: 1000, signal: ac.signal });
 * ```
 *
 * The third option is for `callback` to fire the provided abort function.
 * ```js
 * Rx.From.func((abort) => {
 *  if (Math.random() > 0.5) abort('Random exit');
 *  return 1;
 * });
 * ```
 *
 * By default has a laziness of 'very' meaning that `callback` is run only when there's a subscriber
 * By default stream closes if `callback` throws an error. Use `options.closeOnError:'ignore'` to change.
 * @param callback
 * @param options
 * @returns
 */
declare function func<V>(callback: FunctionFunction<V>, options?: Partial<FunctionOptions>): ReactivePingable<V>;

/**
 * Creates a Reactive from an AsyncGenerator or Generator
 * @param gen
 * @returns
 */
/**
 * Creates a readable reactive based on a (async)generator or iterator
 * ```js
 * // Generator a random value every 5 seconds
 * const valuesOverTime = Flow.interval(() => Math.random(), 5000);
 * // Wrap the generator
 * const r = Rx.From.iterator(time);
 * // Get notified when there is a new value
 * r.onValue(v => {
 *   console.log(v);
 * });
 * ```
 *
 * Awaiting values could potentially hang code. Thus there is a `readTimeout`, the maximum time to wait for a value from the generator. Default: 5 minutes.
 * If `signal` is given, this will also cancel waiting for the value.
 * @param source
 */
declare function iterator<V>(source: IterableIterator<V> | Array<V> | AsyncIterableIterator<V> | Generator<V> | AsyncGenerator<V>, options?: Partial<GeneratorOptions>): Reactive<V>;

/**
 * Returns a stream that merges the output of a list of homogenous streams.
 * Use {@link mergedWithOptions} to specify additional options.
 * @param sources
 * @returns
 */
declare function merged<T>(...sources: Reactive<T>[]): Reactive<T>;
/**
 * Returns a stream that merges the output of a list of homogenous streams.
 *
 * @param sources
 * @param options
 * @returns
 */
declare function mergedWithOptions<T>(sources: Reactive<T>[], options?: Partial<InitLazyStreamOptions>): Reactive<T>;

declare function number(initialValue: number): ReactiveWritable<number> & ReactiveInitial<number>;
declare function number(): ReactiveWritable<number> & ReactiveNonInitial<number>;

declare function object<V extends Record<string, any>>(initialValue: V, options?: Partial<ObjectOptions<V>>): ReactiveDiff<V> & ReactiveInitial<V>;
declare function object<V extends Record<string, any>>(initialValue: undefined, options?: Partial<ObjectOptions<V>>): ReactiveDiff<V> & ReactiveNonInitial<V>;

type ReactiveProxied<V> = V & {
    [symbol]: ReactiveDiff<V> & ReactiveInitial<V>;
};
/**
 * Creates a proxy of `target` object (or array), so that regular property setting will be intercepted and output
 * on a {@link Reactive} object as well.
 *
 * ```js
 * const { proxy, rx } = Rx.From.objectProxy({ colour: `red`, x: 10, y: 20 });
 *
 * rx.onValue(v => {
 *  // Get notified when proxy is changed
 * });
 *
 * // Get and set properties as usual
 * console.log(proxy.x);
 * proxy.x = 20; // Triggers Reactive
 * ```
 *
 * Keep in mind that changing `target` directly won't affect the proxied object or Reactive. Thus,
 * only update the proxied object after calling `fromProxy`.
 *
 * The benefit of `objectProxy` instead of {@link Rx.From.object} is because the proxied object can be passed to other code that doesn't need
 * to know anything about Reactive objects.
 *
 * You can assign the return values to more meaningful names using
 * JS syntax.
 * ```js
 * const { proxy:colour, rx:colourRx } = Rx.From.objectProxy({ colour: `red` });
 * ```
 *
 * If `target` is an array, it's not possible to change the shape of the array by adding or removing
 * elements, only by updating existing ones. This follows the same behaviour of objects. Alternatively, use {@link arrayProxy}.
 *
 * See also:
 * * {@link objectProxySymbol}: Instead of {proxy,rx} return result, puts the `rx` under a symbol on the proxy.
 * * {@link arrayProxy}: Proxy an array, allowing inserts and deletes.
 * @param target
 * @returns
 */
declare const objectProxy: <V extends object>(target: V) => {
    proxy: V;
    rx: ReactiveDiff<V> & ReactiveInitial<V>;
};
declare const arrayProxy: <V, T extends Array<V>>(target: T) => {
    proxy: T;
    rx: ReactiveArray<V> & ReactiveInitial<ReadonlyArray<V>>;
};
/**
 * Same as {@link proxy}, but the return value is the proxied object along with
 * the Reactive wrapped as symbol property.
 *
 * ```js
 * const person = Rx.fromProxySymbol({name: `marie` });
 * person.name = `blah`;
 * person[Rx.symbol].on(msg => {
 *  // Value changed...
 * });
 * ```
 *
 * This means of access can be useful as the return result
 * is a bit neater, being a single object instead of two.
 * @param target
 * @returns
 */
declare const objectProxySymbol: <V extends object>(target: V) => ReactiveProxied<V>;

/**
 * Creates a RxJs style observable
 * ```js
 * const o = observable(stream => {
 *  // Code to run for initialisation when we go from idle to at least one subscriber
 *  // Won't run again for additional subscribers, but WILL run again if we lose
 *  // all subscribers and then get one
 *
 *  // To send a value:
 *  stream.set(someValue);
 *
 *   // Optional: return function to call when all subscribers are removed
 *   return () => {
 *     // Code to run when all subscribers are removed
 *   }
 * });
 * ```
 *
 * For example:
 * ```js
 * const xy = observable<(stream => {
 *  // Send x,y coords from PointerEvent
 *  const send = (event) => {
 *    stream.set({ x: event.x, y: event.y });
 *  }
 *  window.addEventListener(`pointermove`, send);
 *  return () => {
 *    // Unsubscribe
 *    window.removeEventListener(`pointermove`, send);
 *  }
 * });
 *
 * xy.onValue(value => {
 *  console.log(value);
 * });
 * ```
 * @param init
 * @returns
 */
declare function observable<V>(init: (stream: Reactive<V> & ReactiveWritable<V>) => (() => void) | undefined): Reactive<V>;
/**
 * As {@link observable}, but returns a Reactive that allows writing
 * @param init
 * @returns
 */
declare function observableWritable<V>(init: (stream: Reactive<V> & ReactiveWritable<V>) => (() => void) | undefined): ReactiveWritable<V> & Reactive<V>;

declare function string(initialValue: string): ReactiveWritable<string> & ReactiveInitial<string>;
declare function string(): ReactiveWritable<string> & ReactiveNonInitial<string>;

declare const index$1_ArrayObjectOptions: typeof ArrayObjectOptions;
declare const index$1_ArrayOptions: typeof ArrayOptions;
declare const index$1_CountOptions: typeof CountOptions;
declare const index$1_DerivedFunction: typeof DerivedFunction;
declare const index$1_DerivedOptions: typeof DerivedOptions;
declare const index$1_DomFormOptions: typeof DomFormOptions;
declare const index$1_DomNumberInputValueOptions: typeof DomNumberInputValueOptions;
declare const index$1_DomValueOptions: typeof DomValueOptions;
declare const index$1_EventOptions: typeof EventOptions;
declare const index$1_EventPluckedFieldOptions: typeof EventPluckedFieldOptions;
declare const index$1_EventPluckedFieldOptions2: typeof EventPluckedFieldOptions2;
declare const index$1_EventTriggerOptions: typeof EventTriggerOptions;
declare const index$1_FunctionFunction: typeof FunctionFunction;
declare const index$1_FunctionOptions: typeof FunctionOptions;
declare const index$1_GeneratorOptions: typeof GeneratorOptions;
declare const index$1_ObjectOptions: typeof ObjectOptions;
declare const index$1_PingedFunctionFunction: typeof PingedFunctionFunction;
declare const index$1_PingedFunctionOptions: typeof PingedFunctionOptions;
type index$1_ReactiveColour = ReactiveColour;
type index$1_ReactiveProxied<V> = ReactiveProxied<V>;
declare const index$1_TimeoutPingOptions: typeof TimeoutPingOptions;
declare const index$1_TimeoutValueOptions: typeof TimeoutValueOptions;
declare const index$1_Trigger: typeof Trigger;
type index$1_TriggerData = TriggerData;
declare const index$1_TriggerFunction: typeof TriggerFunction;
declare const index$1_TriggerGenerator: typeof TriggerGenerator;
declare const index$1_TriggerValue: typeof TriggerValue;
declare const index$1_ValueToPingOptions: typeof ValueToPingOptions;
declare const index$1_array: typeof array;
declare const index$1_arrayObject: typeof arrayObject;
declare const index$1_arrayProxy: typeof arrayProxy;
declare const index$1_boolean: typeof boolean;
declare const index$1_colour: typeof colour;
declare const index$1_count: typeof count;
declare const index$1_derived: typeof derived;
declare const index$1_domForm: typeof domForm;
declare const index$1_domHslInputValue: typeof domHslInputValue;
declare const index$1_domInputValue: typeof domInputValue;
declare const index$1_domNumberInputValue: typeof domNumberInputValue;
declare const index$1_event: typeof event;
declare const index$1_eventField: typeof eventField;
declare const index$1_eventTrigger: typeof eventTrigger;
declare const index$1_func: typeof func;
declare const index$1_iterator: typeof iterator;
declare const index$1_merged: typeof merged;
declare const index$1_mergedWithOptions: typeof mergedWithOptions;
declare const index$1_number: typeof number;
declare const index$1_object: typeof object;
declare const index$1_objectProxy: typeof objectProxy;
declare const index$1_objectProxySymbol: typeof objectProxySymbol;
declare const index$1_observable: typeof observable;
declare const index$1_observableWritable: typeof observableWritable;
declare const index$1_of: typeof of;
declare const index$1_string: typeof string;
declare namespace index$1 {
  export { index$1_ArrayObjectOptions as ArrayObjectOptions, index$1_ArrayOptions as ArrayOptions, index$1_CountOptions as CountOptions, index$1_DerivedFunction as DerivedFunction, index$1_DerivedOptions as DerivedOptions, index$1_DomFormOptions as DomFormOptions, index$1_DomNumberInputValueOptions as DomNumberInputValueOptions, index$1_DomValueOptions as DomValueOptions, index$1_EventOptions as EventOptions, index$1_EventPluckedFieldOptions as EventPluckedFieldOptions, index$1_EventPluckedFieldOptions2 as EventPluckedFieldOptions2, index$1_EventTriggerOptions as EventTriggerOptions, index$1_FunctionFunction as FunctionFunction, index$1_FunctionOptions as FunctionOptions, index$1_GeneratorOptions as GeneratorOptions, index$1_ObjectOptions as ObjectOptions, index$1_PingedFunctionFunction as PingedFunctionFunction, index$1_PingedFunctionOptions as PingedFunctionOptions, type index$1_ReactiveColour as ReactiveColour, type index$1_ReactiveProxied as ReactiveProxied, index$1_TimeoutPingOptions as TimeoutPingOptions, index$1_TimeoutValueOptions as TimeoutValueOptions, index$1_Trigger as Trigger, type index$1_TriggerData as TriggerData, index$1_TriggerFunction as TriggerFunction, index$1_TriggerGenerator as TriggerGenerator, index$1_TriggerValue as TriggerValue, index$1_ValueToPingOptions as ValueToPingOptions, index$1_array as array, index$1_arrayObject as arrayObject, index$1_arrayProxy as arrayProxy, index$1_boolean as boolean, index$1_colour as colour, index$1_count as count, index$1_derived as derived, index$1_domForm as domForm, index$1_domHslInputValue as domHslInputValue, index$1_domInputValue as domInputValue, index$1_domNumberInputValue as domNumberInputValue, index$1_event as event, index$1_eventField as eventField, index$1_eventTrigger as eventTrigger, index$1_func as func, index$1_iterator as iterator, index$1_merged as merged, index$1_mergedWithOptions as mergedWithOptions, index$1_number as number, index$1_object as object, index$1_objectProxy as objectProxy, index$1_objectProxySymbol as objectProxySymbol, index$1_observable as observable, index$1_observableWritable as observableWritable, index$1_of as of, index$1_string as string };
}

/**
 * Initialise a stream based on an upstream source.
 * Calls initLazyStream under the hood.
 *
 * Options:
 * * onValue: called when upstream emits a value (default: does nothing with upstream value)
 * * lazy: laziness of stream (default: 'initial')
 * * disposeIfSourceDone: disposes stream if upstream disposes (default: true)
 * @ignore
 * @param upstreamSource
 * @param options
 * @returns
 */
declare function initUpstream<In, Out>(upstreamSource: ReactiveOrSource<In>, options: Partial<UpstreamOptions<In>>): ReactiveStream<Out>;
/**
 * Initialises a lazy stream with an initial value.
 * Uses {@link initLazyStream} and {@link cache} together.
 * @param options
 * @returns
 */
declare function initLazyStreamWithInitial<V>(options: InitLazyStreamInitedOptions<V>): ReactiveInitialStream<V>;
/**
 * Initialises a lazy stream
 * Consider also: {@link initLazyStreamWithInitial}
 *
 * Uses {@link lazyStream} internally.
 * @param options
 * @returns
 */
declare function initLazyStream<V>(options: InitLazyStreamOptions): ReactiveStream<V>;
/**
 * Initialises a new stream.
 *
 * Options:
 * * onFirstSubscribe: Called when there is a subscriber after there have been no subscribers.
 * * onNoSubscribers: Called when there are no more subscribers. 'onFirstSubscriber' will be called next time a subscriber is added.
 *
 * Alternatives:
 * * {@link initLazyStream} - a stream with callbacks for when there is some/none subscribers
 * @ignore
 * @param options
 * @returns
 */
declare function initStream<V>(options?: Partial<InitStreamOptions>): ReactiveStream<V>;

declare function run<TIn, TOut>(source: ReactiveOrSource<any>, ...ops: Array<ReactiveOp<any, any>>): Reactive<any>;
declare function writable<TIn, TOut>(source: ReactiveOrSource<TIn>, ...ops: Array<ReactiveOp<any, any>>): ReactiveWritable<TIn, TOut>;
/**
 * Initialises a reactive that pipes values to listeners directly.
 * @returns
 */
declare function manual<V>(options?: Partial<InitStreamOptions>): Reactive<V> & ReactiveWritable<V>;
declare const Sinks: {
    setHtmlText: (options: SetHtmlOptions) => (source: ReactiveOrSource<string>) => void;
};
declare const Ops: {
    /**
   * Annotates values with the result of a function.
   * The input value needs to be an object.
   *
   * For every value `input` emits, run it through `annotator`, which should
   * return the original value with additional fields.
   *
   * Conceptually the same as `transform`, just with typing to enforce result
   * values are V & TAnnotation
   * @param annotator
   * @returns
   */
    readonly annotate: <V, TAnnotation>(annotator: (input: V) => V & TAnnotation) => <In, TAnnotation_1>(source: ReactiveOrSource<In>) => Reactive<{
        value: In;
        annotation: TAnnotation_1;
    }>;
    /**
     * Annotates the input stream using {@link ReactiveOp} as the source of annotations.
     * The output values will have the shape of `{ value: TIn, annotation: TAnnotation }`.
     * Meaning that the original value is stored under `.value`, and the annotation under `.annotation`.
     *
     * ```js
     * // Emit values from an array
     * const r1 = Rx.run(
     *  Rx.From.array([ 1, 2, 3 ]),
     *  Rx.Ops.annotateWithOp(
     *    // Add the 'max' operator to emit the largest-seen value
     *    Rx.Ops.sum()
     *  )
     * );
     * const data = await Rx.toArray(r1);
     * // Data =  [ { value: 1, annotation: 1 }, { value: 2, annotation: 3 }, { value: 3, annotation: 6 } ]
     * ```
     * @param annotatorOp
     * @returns
     */
    readonly annotateWithOp: <TIn, TAnnotation>(annotatorOp: ReactiveOp<TIn, TAnnotation>) => <In, TAnnotation_1>(source: ReactiveOrSource<In>) => Reactive<{
        value: In;
        annotation: TAnnotation_1;
    }>;
    /**
     * Takes a stream of values and chunks them up (by quantity or time elapsed),
     * emitting them as an array.
     * @param options
     * @returns
     */
    readonly chunk: <V>(options: Partial<ChunkOptions>) => ReactiveOp<V, Array<V>>;
    readonly cloneFromFields: <V>() => ReactiveOp<V, V>;
    /**
   * Merges values from several sources into a single source that emits values as an array.
   * @param options
   * @returns
   */
    readonly combineLatestToArray: <const T extends ReadonlyArray<ReactiveOrSource<any>>>(options?: Partial<CombineLatestOptions>) => (sources: T) => Reactive<RxValueTypes<T>>;
    /**
     * Merges values from several sources into a single source that emits values as an object.
     * @param options
     * @returns
     */
    readonly combineLatestToObject: <const T extends Record<string, ReactiveOrSource<any>>>(options?: Partial<CombineLatestOptions>) => (reactiveSources: T) => CombineLatestToObject<T>;
    /**
   * Debounce values from the stream. It will wait until a certain time
   * has elapsed before emitting latest value.
   *
   * Effect is that no values are emitted if input emits faster than the provided
   * timeout.
   *
   * See also: throttle
   * @param options
   * @returns
   */
    readonly debounce: <V>(options: Partial<DebounceOptions>) => ReactiveOp<V, V>;
    /**
     * Drops values from the input stream that match `predicate`
     * @param predicate If it returns _true_ value is ignored
     * @returns
     */
    readonly drop: <V>(predicate: (value: V) => boolean) => <In>(source: ReactiveOrSource<In>) => Reactive<In>;
    /**
     * Every upstream value is considered the target for interpolation.
     * Output value interpolates by a given amount toward the target.
     * @returns
     */
    readonly elapsed: <V>() => ReactiveOp<V, number>;
    /**
     * Yields the value of a field from an input stream of values.
     * Eg if the source reactive emits `{ colour: string, size: number }`,
     * we might use `field` to pluck out the `colour` field, thus returning
     * a stream of string values.
     * @param fieldName
     * @param options
     * @returns
     */
    readonly field: <TSource extends object, TFieldType>(fieldName: keyof TSource, options: FieldOptions<TSource, TFieldType>) => (source: ReactiveOrSource<TSource>) => Reactive<TFieldType>;
    /**
     * Filters the input stream, only re-emitting values that pass the predicate
     * @param predicate If it returns _true_ value is allowed through
     * @returns
     */
    readonly filter: <V>(predicate: (value: V) => boolean) => <In>(source: ReactiveOrSource<In>) => Reactive<In>;
    /**
     * Every upstream value is considered the target for interpolation.
     * Output value interpolates by a given amount toward the target.
     * @param options
     * @returns
     */
    readonly interpolate: <TIn = number>(options?: Partial<OpInterpolateOptions>) => (source: ReactiveOrSource<TIn>) => ReactivePingable<number>;
    /**
   * Outputs the minimum numerical value of the stream.
   * A value is only emitted when minimum decreases.
   * @returns
   */
    readonly min: <TIn = number>(options?: OpMathOptions) => (source: ReactiveOrSource<TIn>) => Reactive<number>;
    /**
     * Outputs the maxium numerical value of the stream.
     * A value is only emitted when maximum increases.
     * @returns
     */
    readonly max: <TIn = number>(options?: OpMathOptions) => (source: ReactiveOrSource<TIn>) => Reactive<number>;
    readonly sum: <TIn = number>(options?: OpMathOptions) => (source: ReactiveOrSource<TIn>) => Reactive<number>;
    readonly average: <TIn = number>(options?: OpMathOptions) => (source: ReactiveOrSource<TIn>) => Reactive<number>;
    readonly tally: <TIn>(options?: TallyOptions) => (source: ReactiveOrSource<TIn>) => Reactive<number>;
    readonly rank: <TIn>(rank: RankFunction<TIn>, options?: RankOptions & OpMathOptions) => (source: ReactiveOrSource<TIn>) => Reactive<TIn>;
    readonly pipe: <TInput, TOutput>(...streams: Array<Reactive<any> & ReactiveWritable<any>>) => (source: ReactiveOrSource<TInput>) => Reactive<unknown>;
    readonly singleFromArray: <V>(options?: Partial<SingleFromArrayOptions<V>>) => (source: ReactiveOrSource<Array<V>>) => Reactive<V>;
    readonly split: <V>(options?: Partial<SplitOptions>) => (source: ReactiveOrSource<V>) => ReactiveStream<V>[];
    readonly splitLabelled: <V>(labels: Array<string>) => (source: ReactiveOrSource<V>) => Record<string, Reactive<V>>;
    readonly switcher: <TValue, TRec extends Record<string, FilterPredicate<TValue>>, TLabel extends keyof TRec>(cases: TRec, options?: Partial<SwitcherOptions>) => (source: ReactiveOrSource<TValue>) => Record<TLabel, Reactive<TValue>>;
    readonly syncToArray: <const T extends ReadonlyArray<ReactiveOrSource<any>>>(options?: Partial<SyncOptions>) => (reactiveSources: T) => Reactive<RxValueTypes<T>>;
    readonly syncToObject: <const T extends Record<string, ReactiveOrSource<any>>>(options?: Partial<SyncOptions>) => (reactiveSources: T) => Reactive<RxValueTypeObject<T>>;
    readonly tapProcess: <In>(processor: ((value: In) => any)) => ReactiveOp<In, In>;
    readonly tapStream: <In>(divergedStream: ReactiveWritable<In>) => ReactiveOp<In, In>;
    readonly tapOps: <In, Out>(...ops: Array<ReactiveOp<In, Out>>) => (source: ReactiveOrSource<In>) => Reactive<Out>;
    /**
   * Throttle values from the stream.
   * Only emits a value if some minimum time has elapsed.
   * @param options
   * @returns
   */
    readonly throttle: <V>(options: Partial<ThrottleOptions>) => (source: ReactiveOrSource<V>) => Reactive<V>;
    /**
     * Trigger a value if 'source' does not emit a value within an interval.
     * Trigger value can be a fixed value, result of function, or step through an iterator.
     * @param options
     * @returns
     */
    readonly timeoutValue: <V, TTriggerValue>(options: TimeoutValueOptions<TTriggerValue>) => (source: ReactiveOrSource<V>) => Reactive<V | TTriggerValue>;
    readonly timeoutPing: <V>(options: TimeoutPingOptions) => (source: ReactiveOrSource<V>) => Reactive<V>;
    readonly transform: <In, Out>(transformer: ((value: In) => Out), options?: Partial<TransformOpts>) => ReactiveOp<In, Out>;
    /**
    * Reactive where last (or a given initial) value is available to read
    * @param opts
    * @returns
    */
    readonly withValue: <V>(opts: Partial<WithValueOptions<V>>) => ReactiveOp<V, V>;
};
/**
 * Grabs the next value emitted from `source`.
 * By default waits up to a maximum of one second.
 * Handles subscribing and unsubscribing.
 *
 * ```js
 * const value = await Rx.takeNextValue(source);
 * ```
 *
 * Throws an error if the source closes without
 * a value or the timeout is reached.
 *
 * @param source
 * @param maximumWait
 * @returns
 */
declare function takeNextValue<V>(source: ReactiveOrSource<V>, maximumWait?: Interval): Promise<V>;
/**
 * Connects reactive A to B, optionally transforming the value as it does so.
 *
 * Returns a function to unsubcribe A->B
 * @param a
 * @param b
 * @param transform
 */
declare const to: <TA, TB>(a: Reactive<TA>, b: ReactiveWritable<TB>, transform?: (valueA: TA) => TB, closeBonA?: boolean) => Unsubscriber;

declare const index_BindUpdateOpts: typeof BindUpdateOpts;
type index_CacheStream<T> = CacheStream<T>;
type index_CacheStreamInitial<T> = CacheStreamInitial<T>;
declare const index_ChunkOptions: typeof ChunkOptions;
declare const index_CombineLatestOptions: typeof CombineLatestOptions;
type index_CombineLatestToObject<T extends Record<string, ReactiveOrSource<any>>> = CombineLatestToObject<T>;
declare const index_DebounceOptions: typeof DebounceOptions;
declare const index_Dom: typeof Dom;
declare const index_DomBindInputOptions: typeof DomBindInputOptions;
declare const index_DomBindResolvedSource: typeof DomBindResolvedSource;
declare const index_DomBindSourceValue: typeof DomBindSourceValue;
declare const index_DomBindTargetNode: typeof DomBindTargetNode;
declare const index_DomBindTargetNodeResolved: typeof DomBindTargetNodeResolved;
declare const index_DomBindUnresolvedSource: typeof DomBindUnresolvedSource;
declare const index_DomBindValueTarget: typeof DomBindValueTarget;
declare const index_DomCreateOptions: typeof DomCreateOptions;
declare const index_ElementBind: typeof ElementBind;
declare const index_ElementsOptions: typeof ElementsOptions;
declare const index_FieldOptions: typeof FieldOptions;
declare const index_FilterPredicate: typeof FilterPredicate;
declare const index_InitLazyStreamInitedOptions: typeof InitLazyStreamInitedOptions;
declare const index_InitLazyStreamOptions: typeof InitLazyStreamOptions;
declare const index_InitStreamOptions: typeof InitStreamOptions;
declare const index_Lazy: typeof Lazy;
declare const index_ObjectFieldHandler: typeof ObjectFieldHandler;
declare const index_OpAsAnnotation: typeof OpAsAnnotation;
type index_OpInterpolateOptions = OpInterpolateOptions;
declare const index_OpMathOptions: typeof OpMathOptions;
declare const index_Ops: typeof Ops;
declare const index_Optional: typeof Optional;
declare const index_Passed: typeof Passed;
declare const index_PassedSignal: typeof PassedSignal;
declare const index_PassedValue: typeof PassedValue;
declare const index_PipeDomBinding: typeof PipeDomBinding;
declare const index_PipeSet: typeof PipeSet;
declare const index_PrimitiveValueTypeObject: typeof PrimitiveValueTypeObject;
declare const index_Reactive: typeof Reactive;
declare const index_ReactiveArray: typeof ReactiveArray;
declare const index_ReactiveDiff: typeof ReactiveDiff;
declare const index_ReactiveFinite: typeof ReactiveFinite;
declare const index_ReactiveInitial: typeof ReactiveInitial;
declare const index_ReactiveInitialStream: typeof ReactiveInitialStream;
declare const index_ReactiveNonInitial: typeof ReactiveNonInitial;
declare const index_ReactiveOp: typeof ReactiveOp;
declare const index_ReactiveOpInit: typeof ReactiveOpInit;
declare const index_ReactiveOpLinks: typeof ReactiveOpLinks;
declare const index_ReactiveOrSource: typeof ReactiveOrSource;
declare const index_ReactivePingable: typeof ReactivePingable;
declare const index_ReactiveStream: typeof ReactiveStream;
declare const index_ReactiveWritable: typeof ReactiveWritable;
declare const index_ResolveOptions: typeof ResolveOptions;
type index_ResolveSourceOptions = ResolveSourceOptions;
type index_ResolveTriggerDone = ResolveTriggerDone;
type index_ResolveTriggerValue<V> = ResolveTriggerValue<V>;
declare const index_RxValueTypeObject: typeof RxValueTypeObject;
declare const index_RxValueTypeObjectOrUndefined: typeof RxValueTypeObjectOrUndefined;
declare const index_RxValueTypeRx: typeof RxValueTypeRx;
declare const index_RxValueTypes: typeof RxValueTypes;
declare const index_SetHtmlOptions: typeof SetHtmlOptions;
declare const index_SetHtmlOptionsElement: typeof SetHtmlOptionsElement;
declare const index_SetHtmlOptionsQuery: typeof SetHtmlOptionsQuery;
declare const index_SignalKinds: typeof SignalKinds;
declare const index_SingleFromArrayOptions: typeof SingleFromArrayOptions;
declare const index_Sinks: typeof Sinks;
declare const index_SplitOptions: typeof SplitOptions;
declare const index_SwitcherOptions: typeof SwitcherOptions;
declare const index_SyncOptions: typeof SyncOptions;
declare const index_TallyOptions: typeof TallyOptions;
declare const index_ThrottleOptions: typeof ThrottleOptions;
declare const index_ToArrayOptions: typeof ToArrayOptions;
declare const index_TransformOpts: typeof TransformOpts;
declare const index_Unsubscriber: typeof Unsubscriber;
declare const index_UpstreamInitialOptions: typeof UpstreamInitialOptions;
declare const index_UpstreamOptions: typeof UpstreamOptions;
declare const index_WithValueOptions: typeof WithValueOptions;
declare const index_Wrapped: typeof Wrapped;
declare const index_annotate: typeof annotate;
declare const index_annotateWithOp: typeof annotateWithOp;
declare const index_average: typeof average;
declare const index_cache: typeof cache;
declare const index_chunk: typeof chunk;
declare const index_cloneFromFields: typeof cloneFromFields;
declare const index_combineLatestToArray: typeof combineLatestToArray;
declare const index_combineLatestToObject: typeof combineLatestToObject;
declare const index_computeWithPrevious: typeof computeWithPrevious;
declare const index_debounce: typeof debounce;
declare const index_drop: typeof drop;
declare const index_elapsed: typeof elapsed;
declare const index_field: typeof field;
declare const index_filter: typeof filter;
declare const index_hasLast: typeof hasLast;
declare const index_initLazyStream: typeof initLazyStream;
declare const index_initLazyStreamWithInitial: typeof initLazyStreamWithInitial;
declare const index_initStream: typeof initStream;
declare const index_initUpstream: typeof initUpstream;
declare const index_interpolate: typeof interpolate;
declare const index_isPingable: typeof isPingable;
declare const index_isReactive: typeof isReactive;
declare const index_isTrigger: typeof isTrigger;
declare const index_isTriggerFunction: typeof isTriggerFunction;
declare const index_isTriggerGenerator: typeof isTriggerGenerator;
declare const index_isTriggerValue: typeof isTriggerValue;
declare const index_isWrapped: typeof isWrapped;
declare const index_isWritable: typeof isWritable;
declare const index_manual: typeof manual;
declare const index_max: typeof max;
declare const index_messageHasValue: typeof messageHasValue;
declare const index_messageIsDoneSignal: typeof messageIsDoneSignal;
declare const index_messageIsSignal: typeof messageIsSignal;
declare const index_min: typeof min;
declare const index_opify: typeof opify;
declare const index_pipe: typeof pipe;
declare const index_prepare: typeof prepare;
declare const index_rank: typeof rank;
declare const index_resolveSource: typeof resolveSource;
declare const index_resolveTriggerValue: typeof resolveTriggerValue;
declare const index_run: typeof run;
declare const index_setHtmlText: typeof setHtmlText;
declare const index_singleFromArray: typeof singleFromArray;
declare const index_split: typeof split;
declare const index_splitLabelled: typeof splitLabelled;
declare const index_sum: typeof sum;
declare const index_switcher: typeof switcher;
declare const index_symbol: typeof symbol;
declare const index_syncToArray: typeof syncToArray;
declare const index_syncToObject: typeof syncToObject;
declare const index_takeNextValue: typeof takeNextValue;
declare const index_tally: typeof tally;
declare const index_tapOps: typeof tapOps;
declare const index_tapProcess: typeof tapProcess;
declare const index_tapStream: typeof tapStream;
declare const index_throttle: typeof throttle;
declare const index_timeoutPing: typeof timeoutPing;
declare const index_timeoutValue: typeof timeoutValue;
declare const index_to: typeof to;
declare const index_toArray: typeof toArray;
declare const index_toArrayOrThrow: typeof toArrayOrThrow;
declare const index_toGenerator: typeof toGenerator;
declare const index_transform: typeof transform;
declare const index_valueToPing: typeof valueToPing;
declare const index_withValue: typeof withValue;
declare const index_wrap: typeof wrap;
declare const index_writable: typeof writable;
declare namespace index {
  export { index_BindUpdateOpts as BindUpdateOpts, type index_CacheStream as CacheStream, type index_CacheStreamInitial as CacheStreamInitial, index_ChunkOptions as ChunkOptions, index_CombineLatestOptions as CombineLatestOptions, type index_CombineLatestToObject as CombineLatestToObject, index_DebounceOptions as DebounceOptions, index_Dom as Dom, index_DomBindInputOptions as DomBindInputOptions, index_DomBindResolvedSource as DomBindResolvedSource, index_DomBindSourceValue as DomBindSourceValue, index_DomBindTargetNode as DomBindTargetNode, index_DomBindTargetNodeResolved as DomBindTargetNodeResolved, index_DomBindUnresolvedSource as DomBindUnresolvedSource, index_DomBindValueTarget as DomBindValueTarget, index_DomCreateOptions as DomCreateOptions, index_ElementBind as ElementBind, index_ElementsOptions as ElementsOptions, index_FieldOptions as FieldOptions, index_FilterPredicate as FilterPredicate, index$1 as From, index_InitLazyStreamInitedOptions as InitLazyStreamInitedOptions, index_InitLazyStreamOptions as InitLazyStreamOptions, index_InitStreamOptions as InitStreamOptions, index_Lazy as Lazy, index_ObjectFieldHandler as ObjectFieldHandler, index_OpAsAnnotation as OpAsAnnotation, type index_OpInterpolateOptions as OpInterpolateOptions, index_OpMathOptions as OpMathOptions, index_Ops as Ops, index_Optional as Optional, index_Passed as Passed, index_PassedSignal as PassedSignal, index_PassedValue as PassedValue, index_PipeDomBinding as PipeDomBinding, index_PipeSet as PipeSet, index_PrimitiveValueTypeObject as PrimitiveValueTypeObject, index_Reactive as Reactive, index_ReactiveArray as ReactiveArray, index_ReactiveDiff as ReactiveDiff, index_ReactiveFinite as ReactiveFinite, index_ReactiveInitial as ReactiveInitial, index_ReactiveInitialStream as ReactiveInitialStream, index_ReactiveNonInitial as ReactiveNonInitial, index_ReactiveOp as ReactiveOp, index_ReactiveOpInit as ReactiveOpInit, index_ReactiveOpLinks as ReactiveOpLinks, index_ReactiveOrSource as ReactiveOrSource, index_ReactivePingable as ReactivePingable, index_ReactiveStream as ReactiveStream, index_ReactiveWritable as ReactiveWritable, index_ResolveOptions as ResolveOptions, type index_ResolveSourceOptions as ResolveSourceOptions, type index_ResolveTriggerDone as ResolveTriggerDone, type index_ResolveTriggerValue as ResolveTriggerValue, index_RxValueTypeObject as RxValueTypeObject, index_RxValueTypeObjectOrUndefined as RxValueTypeObjectOrUndefined, index_RxValueTypeRx as RxValueTypeRx, index_RxValueTypes as RxValueTypes, index_SetHtmlOptions as SetHtmlOptions, index_SetHtmlOptionsElement as SetHtmlOptionsElement, index_SetHtmlOptionsQuery as SetHtmlOptionsQuery, index_SignalKinds as SignalKinds, index_SingleFromArrayOptions as SingleFromArrayOptions, index_Sinks as Sinks, index_SplitOptions as SplitOptions, index_SwitcherOptions as SwitcherOptions, index_SyncOptions as SyncOptions, index_TallyOptions as TallyOptions, index_ThrottleOptions as ThrottleOptions, index_ToArrayOptions as ToArrayOptions, index_TransformOpts as TransformOpts, index_Unsubscriber as Unsubscriber, index_UpstreamInitialOptions as UpstreamInitialOptions, index_UpstreamOptions as UpstreamOptions, index_WithValueOptions as WithValueOptions, index_Wrapped as Wrapped, index_annotate as annotate, index_annotateWithOp as annotateWithOp, index_average as average, index_cache as cache, index_chunk as chunk, index_cloneFromFields as cloneFromFields, index_combineLatestToArray as combineLatestToArray, index_combineLatestToObject as combineLatestToObject, index_computeWithPrevious as computeWithPrevious, index_debounce as debounce, index_drop as drop, index_elapsed as elapsed, index_field as field, index_filter as filter, index_hasLast as hasLast, index_initLazyStream as initLazyStream, index_initLazyStreamWithInitial as initLazyStreamWithInitial, index_initStream as initStream, index_initUpstream as initUpstream, index_interpolate as interpolate, index_isPingable as isPingable, index_isReactive as isReactive, index_isTrigger as isTrigger, index_isTriggerFunction as isTriggerFunction, index_isTriggerGenerator as isTriggerGenerator, index_isTriggerValue as isTriggerValue, index_isWrapped as isWrapped, index_isWritable as isWritable, index_manual as manual, index_max as max, index_messageHasValue as messageHasValue, index_messageIsDoneSignal as messageIsDoneSignal, index_messageIsSignal as messageIsSignal, index_min as min, index_opify as opify, index_pipe as pipe, index_prepare as prepare, index_rank as rank, index_resolveSource as resolveSource, index_resolveTriggerValue as resolveTriggerValue, index_run as run, index_setHtmlText as setHtmlText, index_singleFromArray as singleFromArray, index_split as split, index_splitLabelled as splitLabelled, index_sum as sum, index_switcher as switcher, index_symbol as symbol, index_syncToArray as syncToArray, index_syncToObject as syncToObject, index_takeNextValue as takeNextValue, index_tally as tally, index_tapOps as tapOps, index_tapProcess as tapProcess, index_tapStream as tapStream, index_throttle as throttle, index_timeoutPing as timeoutPing, index_timeoutValue as timeoutValue, index_to as to, index_toArray as toArray, index_toArrayOrThrow as toArrayOrThrow, index_toGenerator as toGenerator, index_transform as transform, index_valueToPing as valueToPing, index_withValue as withValue, index_wrap as wrap, index_writable as writable };
}

export { opify as $, syncToArray as A, syncToObject as B, type CombineLatestToObject as C, Dom as D, tapProcess as E, tapStream as F, tapOps as G, throttle as H, timeoutValue as I, timeoutPing as J, transform as K, valueToPing as L, withValue as M, prepare as N, Ops as O, toArray as P, toArrayOrThrow as Q, toGenerator as R, Sinks as S, messageIsSignal as T, messageIsDoneSignal as U, messageHasValue as V, isPingable as W, hasLast as X, isReactive as Y, isWritable as Z, isWrapped as _, to as a, isTriggerValue as a0, isTriggerFunction as a1, isTriggerGenerator as a2, isTrigger as a3, type ResolveTriggerValue as a4, type ResolveTriggerDone as a5, resolveTriggerValue as a6, wrap as a7, type ResolveSourceOptions as a8, resolveSource as a9, type CacheStream as aa, type CacheStreamInitial as ab, cache as ac, initUpstream as ad, initLazyStreamWithInitial as ae, initLazyStream as af, initStream as ag, index$1 as b, annotate as c, annotateWithOp as d, chunk as e, cloneFromFields as f, combineLatestToArray as g, combineLatestToObject as h, index as i, computeWithPrevious as j, debounce as k, elapsed as l, manual as m, field as n, filter as o, drop as p, type OpInterpolateOptions as q, run as r, interpolate as s, takeNextValue as t, pipe as u, singleFromArray as v, writable as w, split as x, splitLabelled as y, switcher as z };
