import {
  SimpleEventEmitter,
  intervalToMs
} from "./chunk-72EKR3DZ.js";
import {
  randomElement,
  shuffle,
  unique
} from "./chunk-YKJ5OEMO.js";
import {
  defaultComparer
} from "./chunk-RNGEX66F.js";
import {
  resolveLogOption
} from "./chunk-N6YIY4CM.js";
import {
  __export
} from "./chunk-L5EJU35C.js";

// src/flow/StateMachine.ts
var StateMachine_exports = {};
__export(StateMachine_exports, {
  WithEvents: () => StateMachineWithEvents,
  cloneState: () => cloneState,
  driver: () => init2,
  fromList: () => fromList,
  fromListBidirectional: () => fromListBidirectional,
  init: () => init,
  isDone: () => isDone,
  isValidTransition: () => isValidTransition,
  next: () => next,
  normaliseTargets: () => normaliseTargets,
  possible: () => possible,
  possibleTargets: () => possibleTargets,
  reset: () => reset,
  to: () => to,
  validateMachine: () => validateMachine,
  validateTransition: () => validateTransition
});

// src/flow/Execute.ts
var run = async (expressions, opts = {}, args) => {
  const results = [];
  const compareFn = opts.rank ?? defaultComparer;
  let expressionsArray = Array.isArray(expressions) ? expressions : [expressions];
  if (opts.shuffle) expressionsArray = shuffle(expressionsArray);
  for (let i = 0; i < expressionsArray.length; i++) {
    const exp = expressionsArray[i];
    let r;
    if (typeof exp === "function") {
      r = await exp(args);
    } else {
      r = exp;
    }
    if (r !== void 0) {
      results.push(r);
      results.sort(compareFn);
    }
    if (typeof opts.stop !== "undefined") {
      if (opts.stop(r, results)) {
        break;
      }
    }
  }
  if (opts.filter) {
    return results.filter(opts.filter);
  }
  return results;
};
var runSingle = async (expressions, opts = {}, args) => {
  const results = await run(expressions, opts, args);
  if (!results) return;
  if (results.length === 0) return;
  const at = opts.at ?? -1;
  return results.at(at);
};

// src/flow/StateMachineDriver.ts
async function init2(machine, handlersOrOpts) {
  const opts = Array.isArray(handlersOrOpts) ? {
    handlers: handlersOrOpts
  } : handlersOrOpts;
  const debug = resolveLogOption(opts.debug, {
    category: `StateMachineDriver`
  });
  const byState = /* @__PURE__ */ new Map();
  for (const h of opts.handlers) {
    const ifBlock = Array.isArray(h.if) ? h.if : [h.if];
    for (const state of ifBlock) {
      if (typeof state !== `string`) {
        throw new TypeError(
          `Expected single or array of strings for the 'if' field. Got: '${typeof state}'.`
        );
      }
      if (byState.has(state)) {
        throw new Error(
          `Multiple handlers defined for state '${state}'. There should be at most one.`
        );
      }
      byState.set(state, h);
    }
  }
  const runOpts = {
    // Rank results by score
    rank: (a, b) => {
      return defaultComparer(a.score ?? 0, b.score ?? 0);
    },
    shuffle: opts.shuffleHandlers ?? false
  };
  let sm = init(machine);
  for (const [ifState] of byState) {
    if (typeof sm.machine[ifState] === `undefined` && ifState !== `__fallback`) {
      throw new Error(
        `StateMachineDriver handler references a state ('${ifState}') which is not defined on the machine. Therefore this handler will never run.'`
      );
    }
  }
  const run2 = async () => {
    debug(`Run. State: ${sm.value}`);
    const state = sm.value;
    let handler = byState.get(state);
    if (handler === void 0) {
      debug(`  No handler for state '${state}', trying __fallback`);
      handler = byState.get(`__fallback`);
    }
    if (handler === void 0) {
      debug(`  No __fallback handler`);
      return;
    }
    const runOptionsForHandler = handler.resultChoice === `first` ? {
      ...runOpts,
      stop: (latest) => {
        if (!latest) return false;
        if (`reset` in latest) return true;
        if (`next` in latest && latest.next !== void 0) return true;
        return false;
      }
    } : runOpts;
    const results = await run(
      handler.then,
      runOptionsForHandler,
      sm
    );
    debug(
      `  In state '${sm.value}' results: ${results.length}. Choice: ${handler.resultChoice}`
    );
    let r;
    switch (handler.resultChoice ?? `highest`) {
      case `highest`: {
        r = results.at(-1);
        break;
      }
      case `first`: {
        r = results[0];
        break;
      }
      case `lowest`: {
        r = results.at(0);
        break;
      }
      case `random`: {
        r = randomElement(results);
        break;
      }
      default: {
        throw new Error(
          `Unknown 'resultChoice' option: ${handler.resultChoice}. Expected highest, first, lowest or random`
        );
      }
    }
    debug(`  Chosen result: ${JSON.stringify(r)}`);
    if (r?.reset) {
      sm = reset(sm);
    } else if (r && r.next) {
      if (typeof r.next === `boolean`) {
        sm = next(sm);
      } else {
        debug(JSON.stringify(results));
        sm = to(sm, r.next);
      }
    }
    return sm;
  };
  return {
    reset: () => {
      sm = reset(sm);
    },
    getValue: () => sm.value,
    run: run2,
    to: (state) => {
      sm = to(sm, state);
      return sm;
    }
  };
}

// src/flow/Stopwatch.ts
var Stopwatch_exports = {};
__export(Stopwatch_exports, {
  infinity: () => infinity,
  interval: () => interval,
  once: () => once,
  since: () => since
});

// src/numbers/Clamp.ts
var clamp = (value, min = 0, max = 1) => {
  if (Number.isNaN(value)) throw new Error(`Param 'value' is NaN`);
  if (Number.isNaN(min)) throw new Error(`Param 'min' is NaN`);
  if (Number.isNaN(max)) throw new Error(`Param 'max' is NaN`);
  if (value < min) return min;
  if (value > max) return max;
  return value;
};
var clamper = (min = 0, max = 1) => {
  if (Number.isNaN(min)) throw new Error(`Param 'min' is NaN`);
  if (Number.isNaN(max)) throw new Error(`Param 'max' is NaN`);
  return (v) => {
    if (v > max) return max;
    if (v < min) return min;
    return v;
  };
};
var clampIndex = (v, arrayOrLength) => {
  if (!Number.isInteger(v)) {
    throw new TypeError(`v parameter must be an integer (${v})`);
  }
  const length = Array.isArray(arrayOrLength) ? arrayOrLength.length : arrayOrLength;
  if (!Number.isInteger(length)) {
    throw new TypeError(
      `length parameter must be an integer (${length}, ${typeof length})`
    );
  }
  v = Math.round(v);
  if (v < 0) return 0;
  if (v >= length) return length - 1;
  return v;
};

// src/flow/Timer.ts
function hasElapsed(elapsed) {
  const t = relative(intervalToMs(elapsed, 0), { timer: elapsedMillisecondsAbsolute(), clampValue: true });
  return () => t.isDone;
}
function ofTotal(duration, opts = {}) {
  const totalMs = intervalToMs(duration);
  if (!totalMs) throw new Error(`Param 'duration' not valid`);
  const timerOpts = {
    ...opts,
    timer: elapsedMillisecondsAbsolute()
  };
  let t;
  return () => {
    if (!t) {
      t = relative(totalMs, timerOpts);
    }
    return t.elapsed;
  };
}
function ofTotalTicks(totalTicks, opts = {}) {
  const timerOpts = {
    ...opts,
    timer: elapsedTicksAbsolute()
  };
  let t;
  return () => {
    if (!t) {
      t = relative(totalTicks, timerOpts);
    }
    return t.elapsed;
  };
}
var timerAlwaysDone = () => ({
  elapsed: 1,
  isDone: true,
  reset() {
  },
  mod(amt) {
  }
});
var timerNeverDone = () => ({
  elapsed: 0,
  isDone: false,
  reset() {
  },
  mod() {
  }
});
var relative = (total, options = {}) => {
  if (!Number.isFinite(total)) {
    return timerAlwaysDone();
  } else if (Number.isNaN(total)) {
    return timerNeverDone();
  }
  const clampValue = options.clampValue ?? false;
  const wrapValue = options.wrapValue ?? false;
  if (clampValue && wrapValue) throw new Error(`clampValue and wrapValue cannot both be enabled`);
  let modulationAmount = 1;
  const timer = options.timer ?? elapsedMillisecondsAbsolute();
  let lastValue = 0;
  const computeElapsed = (value) => {
    lastValue = value;
    let v = value / (total * modulationAmount);
    if (clampValue) v = clamp(v);
    else if (wrapValue && v >= 1) v = v % 1;
    return v;
  };
  return {
    mod(amt) {
      modulationAmount = amt;
    },
    get isDone() {
      return computeElapsed(lastValue) >= 1;
    },
    get elapsed() {
      return computeElapsed(timer.elapsed);
    },
    reset: () => {
      timer.reset();
    }
  };
};
var frequencyTimer = (frequency, options = {}) => {
  const timer = options.timer ?? elapsedMillisecondsAbsolute();
  const cyclesPerSecond = frequency / 1e3;
  let modulationAmount = 1;
  const computeElapsed = () => {
    const v = timer.elapsed * (cyclesPerSecond * modulationAmount);
    const f = v - Math.floor(v);
    if (f < 0) {
      throw new Error(
        `Unexpected cycle fraction less than 0. Elapsed: ${v} f: ${f}`
      );
    }
    if (f > 1) {
      throw new Error(
        `Unexpected cycle fraction more than 1. Elapsed: ${v} f: ${f}`
      );
    }
    return f;
  };
  return {
    mod: (amt) => {
      modulationAmount = amt;
    },
    reset: () => {
      timer.reset();
    },
    get isDone() {
      return computeElapsed() >= 1;
    },
    get elapsed() {
      return computeElapsed();
    }
  };
};
var elapsedMillisecondsAbsolute = () => {
  let start = performance.now();
  return {
    /**
     * Reset timer
     */
    reset: () => {
      start = performance.now();
    },
    /**
     * Returns elapsed time since start
     */
    get elapsed() {
      return performance.now() - start;
    }
  };
};
var elapsedTicksAbsolute = () => {
  let start = 0;
  return {
    /**
     * Reset ticks to 0. The next call to `elapsed` will return 1.
     */
    reset: () => {
      start = 0;
    },
    /**
     * Get current ticks without incrementing.
     */
    get peek() {
      return start;
    },
    /**
     * Returns the number of elapsed ticks as well as
     * incrementing the tick count. 
     * 
     * Minimum is 1
     * 
     * Use {@link peek} to get the current ticks without incrementing.
     */
    get elapsed() {
      return ++start;
    }
  };
};
var timerWithFunction = (fn, timer) => {
  if (typeof fn !== `function`) throw new Error(`Param 'fn' should be a function. Got: ${typeof fn}`);
  let startCount = 1;
  return {
    get elapsed() {
      return timer.elapsed;
    },
    get isDone() {
      return timer.isDone;
    },
    get runState() {
      if (timer.isDone) return `idle`;
      return `scheduled`;
    },
    /**
     * Returns 1 if it has been created, returns +1 for each additional time the timer has been reset.
     */
    get startCount() {
      return startCount;
    },
    get startCountTotal() {
      return startCount;
    },
    compute: () => {
      const elapsed = timer.elapsed;
      return fn(elapsed);
    },
    reset: () => {
      timer.reset();
      startCount++;
    }
  };
};

// src/flow/Stopwatch.ts
var since = () => {
  const start = performance.now();
  return () => {
    return performance.now() - start;
  };
};
var interval = () => {
  let start = performance.now();
  return () => {
    const now = performance.now();
    const x = now - start;
    start = now;
    return x;
  };
};
var once = () => {
  const start = Date.now();
  let stoppedAt = 0;
  return () => {
    if (stoppedAt === 0) {
      stoppedAt = Date.now() - start;
    }
    return stoppedAt;
  };
};
var infinity = () => {
  return () => {
    return Number.POSITIVE_INFINITY;
  };
};

// src/flow/StateMachineWithEvents.ts
var StateMachineWithEvents = class extends SimpleEventEmitter {
  #sm;
  #smInitial;
  #debug;
  #isDoneNeedsFiring = false;
  #isDone = false;
  #changedAt = infinity();
  /**
   * Create a state machine with initial state, description and options
   * @param m Machine description
   * @param opts Options for machine (defaults to `{debug:false}`)
   */
  constructor(m, opts = {}) {
    super();
    this.#debug = opts.debug ?? false;
    this.#sm = init(m, opts.initial);
    this.#smInitial = cloneState(this.#sm);
  }
  #setIsDone(v) {
    if (this.#isDone === v) return;
    this.#isDone = v;
    if (v) {
      this.#isDoneNeedsFiring = true;
      setTimeout(() => {
        if (!this.#isDoneNeedsFiring) return;
        this.#isDoneNeedsFiring = false;
        this.fireEvent(`stop`, { state: this.#sm.value });
      }, 2);
    } else {
      this.#isDoneNeedsFiring = false;
    }
  }
  /**
   * Return a list of possible states from current state.
   *
   * If list is empty, no states are possible. Otherwise lists
   * possible states, including 'null' for terminal
   */
  get statesPossible() {
    return possible(this.#sm);
  }
  /**
   * Return a list of all defined states
   */
  get statesDefined() {
    return Object.keys(this.#sm.machine);
  }
  /**
   * Moves to the next state if possible. If multiple states are possible, it will use the first.
   * If machine is finalised, no error is thrown and null is returned.
   *
   * @returns {(string|null)} Returns new state, or null if machine is finalised
   */
  next() {
    const p = possible(this.#sm);
    if (p.length === 0) return null;
    this.state = p[0];
    return p[0];
  }
  /**
   * Returns _true_ if state machine is in its final state
   *
   * @returns
   */
  get isDone() {
    return isDone(this.#sm);
  }
  /**
   * Resets machine to initial state
   */
  reset() {
    this.#setIsDone(false);
    this.#sm = cloneState(this.#smInitial);
    this.#changedAt = since();
  }
  /**
   * Throws if it's not valid to transition to `newState`
   * @param newState
   * @returns
   */
  validateTransition(newState) {
    validateTransition(this.#sm, newState);
  }
  /**
   * Returns _true_ if `newState` is valid transition from current state.
   * Use {@link validateTransition} if you want an explanation for the _false_ results.
   * @param newState
   * @returns
   */
  isValid(newState) {
    return isValidTransition(this.#sm, newState);
  }
  /**
   * Gets or sets state. Throws an error if an invalid transition is attempted.
   * Use `isValid()` to check validity without changing.
   *
   * If `newState` is the same as current state, the request is ignored silently.
   */
  set state(newState) {
    const priorState = this.#sm.value;
    if (newState === this.#sm.value) return;
    this.#sm = to(this.#sm, newState);
    if (this.#debug) {
      console.log(`StateMachine: ${priorState} -> ${newState}`);
    }
    this.#changedAt = since();
    setTimeout(() => {
      this.fireEvent(`change`, { newState, priorState });
    }, 1);
    if (isDone(this.#sm)) this.#setIsDone(true);
  }
  get state() {
    return this.#sm.value;
  }
  /**
   * Returns timestamp when state was last changed.
   * See also `elapsed`
   */
  get changedAt() {
    return this.#changedAt();
  }
  /**
   * Returns milliseconds elapsed since last state change.
   * See also `changedAt`
   */
  get elapsed() {
    return this.#changedAt();
  }
};

// src/flow/StateMachine.ts
var cloneState = (toClone) => {
  return Object.freeze({
    value: toClone.value,
    visited: [...toClone.visited],
    machine: toClone.machine
  });
};
var init = (stateMachine, initialState) => {
  const [machine, machineValidationError] = validateMachine(stateMachine);
  if (!machine) throw new Error(machineValidationError);
  const state = (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    initialState ?? Object.keys(machine.states)[0]
  );
  if (machine.states[state] === void 0) {
    throw new TypeError(`Initial state not found`);
  }
  const transitions = validateAndNormaliseTransitions(machine.states);
  if (transitions === void 0) {
    throw new Error(`Could not normalise transitions`);
  }
  return Object.freeze({
    value: state,
    visited: [],
    machine: Object.fromEntries(transitions)
  });
};
var reset = (sm) => {
  return init(sm.machine);
};
var validateMachine = (smOrTransitions) => {
  if (smOrTransitions === void 0) {
    return [void 0, `Parameter undefined`];
  }
  if (smOrTransitions === null) {
    return [void 0, `Parameter null`];
  }
  if (`states` in smOrTransitions) {
    return [smOrTransitions, ``];
  }
  if (typeof smOrTransitions === `object`) {
    return [
      {
        // @ts-expect-error
        states: smOrTransitions
      },
      ``
    ];
  }
  return [
    void 0,
    `Unexpected type: ${typeof smOrTransitions}. Expected object`
  ];
};
var isDone = (sm) => {
  return possible(sm).length === 0;
};
var possibleTargets = (sm) => {
  validateMachineState(sm);
  const fromS = sm.machine[sm.value];
  if (fromS.length === 1 && fromS[0].state === null) return [];
  return fromS;
};
var possible = (sm) => {
  const targets = possibleTargets(sm);
  return targets.map((v) => v.state);
};
var normaliseTargets = (targets) => {
  const normaliseSingleTarget = (target) => {
    if (target === null) return { state: null };
    if (typeof target === `string`) {
      return {
        state: target
      };
    } else if (typeof target === `object` && `state` in target) {
      const targetState = target.state;
      if (typeof targetState !== `string`) {
        throw new TypeError(
          `Target 'state' field is not a string. Got: ${typeof targetState}`
        );
      }
      if (`preconditions` in target) {
        return {
          state: targetState,
          preconditions: target.preconditions
        };
      }
      return { state: targetState };
    } else {
      throw new Error(
        `Unexpected type: ${typeof target}. Expected string or object with 'state' field.`
      );
    }
  };
  if (Array.isArray(targets)) {
    let containsNull = false;
    const mapResults = targets.map((t) => {
      const r = normaliseSingleTarget(t);
      if (!r) throw new Error(`Invalid target`);
      containsNull = containsNull || r.state === null;
      return r;
    });
    if (containsNull && mapResults.length > 1) {
      throw new Error(`Cannot have null as an possible state`);
    }
    return mapResults;
  } else {
    const target = normaliseSingleTarget(targets);
    if (!target) return;
    return [target];
  }
};
var validateAndNormaliseTransitions = (d) => {
  const returnMap = /* @__PURE__ */ new Map();
  for (const [topLevelState, topLevelTargets] of Object.entries(d)) {
    if (typeof topLevelState === `undefined`) {
      throw new TypeError(`Top-level undefined state`);
    }
    if (typeof topLevelTargets === `undefined`) {
      throw new TypeError(`Undefined target state for ${topLevelState}`);
    }
    if (returnMap.has(topLevelState)) {
      throw new Error(`State defined twice: ${topLevelState}`);
    }
    if (topLevelState.includes(` `)) {
      throw new Error(`State names cannot contain spaces`);
    }
    returnMap.set(topLevelState, []);
  }
  for (const [topLevelState, topLevelTargets] of Object.entries(d)) {
    const targets = normaliseTargets(topLevelTargets);
    if (targets === void 0) throw new Error(`Could not normalise target`);
    if (targets !== null) {
      const seenStates = /* @__PURE__ */ new Set();
      for (const target of targets) {
        if (seenStates.has(target.state)) {
          throw new Error(
            `Target state '${target.state}' already exists for '${topLevelState}'`
          );
        }
        seenStates.add(target.state);
        if (target.state === null) continue;
        if (!returnMap.has(target.state)) {
          throw new Error(
            `Target state '${target.state}' is not defined as a top-level state. Defined under: '${topLevelState}'`
          );
        }
      }
      returnMap.set(topLevelState, targets);
    }
  }
  return returnMap;
};
var validateMachineState = (state) => {
  if (state === void 0) {
    throw new TypeError(`Parameter 'state' is undefined`);
  }
  if (typeof state.value !== `string`) {
    throw new TypeError(`Existing state is not a string`);
  }
};
var to = (sm, toState) => {
  validateMachineState(sm);
  validateTransition(sm, toState);
  return Object.freeze({
    value: toState,
    machine: sm.machine,
    visited: unique([sm.visited, [sm.value]])
  });
};
var next = (sm) => {
  const first = possibleTargets(sm).at(0);
  if (!first || first.state === null) {
    throw new Error(
      `Not possible to move to a next state from '${sm.value}`
    );
  }
  return to(sm, first.state);
};
var isValidTransition = (sm, toState) => {
  try {
    validateTransition(sm, toState);
    return true;
  } catch {
    return false;
  }
};
var validateTransition = (sm, toState) => {
  if (toState === null) throw new Error(`Cannot transition to null state`);
  if (toState === void 0) {
    throw new Error(`Cannot transition to undefined state`);
  }
  if (typeof toState !== `string`) {
    throw new TypeError(
      `Parameter 'toState' should be a string. Got: ${typeof toState}`
    );
  }
  const p = possible(sm);
  if (p.length === 0) throw new Error(`Machine is in terminal state`);
  if (!p.includes(toState)) {
    throw new Error(
      `Target state '${toState}' not available at current state '${sm.value}'. Possible states: ${p.join(`, `)}`
    );
  }
};
var fromList = (...states) => {
  const t = {};
  if (!Array.isArray(states)) throw new Error(`Expected array of strings`);
  if (states.length <= 2) throw new Error(`Expects at least two states`);
  for (let index = 0; index < states.length; index++) {
    const s = states[index];
    if (typeof s !== `string`) {
      throw new TypeError(
        `Expected array of strings. Got type '${typeof s}' at index ${index}`
      );
    }
    t[s] = index === states.length - 1 ? null : states[index + 1];
  }
  return t;
};
var fromListBidirectional = (...states) => {
  const t = {};
  if (!Array.isArray(states)) throw new Error(`Expected array of strings`);
  if (states.length < 2) throw new Error(`Expects at least two states`);
  for (const [index, s] of states.entries()) {
    if (typeof s !== `string`) {
      throw new TypeError(
        `Expected array of strings. Got type '${typeof s}' at index ${index}`
      );
    }
    t[s] = [];
  }
  for (let index = 0; index < states.length; index++) {
    const v = t[states[index]];
    if (index === states.length - 1) {
      if (states.length > 1) {
        v.push(states[index - 1]);
      } else {
        t[states[index]] = null;
      }
    } else {
      v.push(states[index + 1]);
      if (index > 0) v.push(states[index - 1]);
    }
  }
  return t;
};

export {
  clamp,
  clamper,
  clampIndex,
  hasElapsed,
  ofTotal,
  ofTotalTicks,
  timerAlwaysDone,
  timerNeverDone,
  relative,
  frequencyTimer,
  elapsedMillisecondsAbsolute,
  elapsedTicksAbsolute,
  timerWithFunction,
  since,
  interval,
  once,
  infinity,
  Stopwatch_exports,
  run,
  runSingle,
  init2 as init,
  StateMachineWithEvents,
  cloneState,
  init as init2,
  reset,
  validateMachine,
  isDone,
  possibleTargets,
  possible,
  normaliseTargets,
  to,
  next,
  isValidTransition,
  validateTransition,
  fromList,
  fromListBidirectional,
  StateMachine_exports
};
//# sourceMappingURL=chunk-4OK6CU6W.js.map