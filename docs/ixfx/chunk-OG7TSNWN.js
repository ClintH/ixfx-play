import {
  NumberMap,
  add,
  del,
  has,
  immutable,
  set
} from "./chunk-XFNQJV53.js";
import {
  MapOfSimpleBase,
  SimpleEventEmitter,
  defaultKeyer,
  firstEntry,
  firstEntryByValue,
  intervalToMs,
  lengthMax,
  ofSimpleMutable
} from "./chunk-72EKR3DZ.js";
import {
  addKeepingExisting,
  filter,
  find,
  hasAnyValue,
  sortByValueProperty,
  toArray
} from "./chunk-IXB3RQED.js";
import {
  without
} from "./chunk-RNGEX66F.js";
import {
  isEqualDefault,
  toStringDefault
} from "./chunk-6UZ3OSJO.js";
import {
  throwIntegerTest
} from "./chunk-UC4AQMTL.js";
import {
  __export
} from "./chunk-L5EJU35C.js";

// src/collections/Map/index.ts
var Map_exports = {};
__export(Map_exports, {
  MapOfMutableImpl: () => MapOfMutableImpl,
  MapOfSimple: () => MapOfSimple,
  NumberMap: () => NumberMap,
  expiringMap: () => create,
  firstEntry: () => firstEntry,
  firstEntryByValue: () => firstEntryByValue,
  immutable: () => immutable,
  lengthMax: () => lengthMax,
  mapOfSimpleMutable: () => ofSimpleMutable,
  mutable: () => mutable,
  ofArrayMutable: () => ofArrayMutable,
  ofCircularMutable: () => ofCircularMutable,
  ofSetMutable: () => ofSetMutable,
  ofSimple: () => ofSimple
});

// src/collections/Map/ExpiringMap.ts
var create = (options = {}) => new ExpiringMap(options);
var ExpiringMap = class extends SimpleEventEmitter {
  constructor(opts = {}) {
    super();
    this.disposed = false;
    this.capacity = opts.capacity ?? -1;
    throwIntegerTest(this.capacity, `nonZero`, `capacity`);
    this.store = /* @__PURE__ */ new Map();
    if (opts.evictPolicy && this.capacity <= 0) {
      throw new Error(`evictPolicy is set, but no capacity limit is set`);
    }
    this.evictPolicy = opts.evictPolicy ?? `none`;
    this.autoDeleteElapsedMs = opts.autoDeleteElapsedMs ?? -1;
    this.autoDeletePolicy = opts.autoDeletePolicy ?? `none`;
    if (this.autoDeleteElapsedMs > 0) {
      this.autoDeleteTimer = setInterval(
        () => {
          this.#maintain();
        },
        Math.max(1e3, this.autoDeleteElapsedMs * 2)
      );
    }
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    if (this.autoDeleteTimer) {
      clearInterval(this.autoDeleteTimer);
      this.autoDeleteTimer = void 0;
    }
  }
  /**
   * Returns the number of keys being stored.
   */
  get keyLength() {
    return this.store.size;
  }
  *entries() {
    for (const entry of this.store.entries()) {
      yield [entry[0], entry[1].value];
    }
  }
  *values() {
    for (const v of this.store.values()) {
      yield v.value;
    }
  }
  *keys() {
    yield* this.store.keys();
  }
  /**
   * Returns the elapsed time since `key`
   * was set. Returns _undefined_ if `key`
   * does not exist
   */
  elapsedSet(key) {
    const v = this.store.get(key);
    if (!v) return v;
    return Date.now() - v.lastSet;
  }
  /**
   * Returns the elapsed time since `key`
   * was accessed. Returns _undefined_ if `key`
   * does not exist
   */
  elapsedGet(key) {
    const v = this.store.get(key);
    if (!v) return v;
    return Date.now() - v.lastGet;
  }
  /**
   * Returns true if `key` is stored.
   * Does not affect the key's last access time.
   * @param key
   * @returns
   */
  has(key) {
    return this.store.has(key);
  }
  /**
   * Gets an item from the map by key, returning
   * undefined if not present
   * @param key Key
   * @returns Value, or undefined
   */
  get(key) {
    const v = this.store.get(key);
    if (v) {
      if (this.autoDeletePolicy === `either` || this.autoDeletePolicy === `get`) {
        this.store.set(key, {
          ...v,
          lastGet: performance.now()
        });
      }
      return v.value;
    }
  }
  /**
   * Deletes the value under `key`, if present.
   *
   * Returns _true_ if something was removed.
   * @param key
   * @returns
   */
  delete(key) {
    const value = this.store.get(key);
    if (!value) return false;
    const d = this.store.delete(key);
    this.fireEvent(`removed`, {
      key,
      value: value.value
    });
    return d;
  }
  /**
   * Clears the contents of the map.
   * Note: does not fire `removed` event
   */
  clear() {
    this.store.clear();
  }
  /**
   * Updates the lastSet/lastGet time for a value
   * under `k`.
   *
   * Returns false if key was not found
   * @param key
   * @returns
   */
  touch(key) {
    const v = this.store.get(key);
    if (!v) return false;
    this.store.set(key, {
      ...v,
      lastSet: Date.now(),
      lastGet: Date.now()
    });
    return true;
  }
  findEvicteeKey() {
    if (this.evictPolicy === `none`) return;
    let sortBy = ``;
    if (this.evictPolicy === `oldestGet`) sortBy = `lastGet`;
    else if (this.evictPolicy === `oldestSet`) sortBy = `lastSet`;
    else throw new Error(`Unknown eviction policy ${this.evictPolicy}`);
    const sorted = sortByValueProperty(this.store, sortBy);
    return sorted[0][0];
  }
  #maintain() {
    if (this.autoDeletePolicy === `none`) return;
    this.deleteWithElapsed(this.autoDeleteElapsedMs, this.autoDeletePolicy);
  }
  /**
   * Deletes all values where elapsed time has past
   * for get/set or either.
   * ```js
   * // Delete all keys (and associated values) not accessed for a minute
   * em.deleteWithElapsed({mins:1}, `get`);
   * // Delete things that were set 1s ago
   * em.deleteWithElapsed(1000, `set`);
   * ```
   * 
   * @param interval Interval
   * @param property Basis for deletion 'get','set' or 'either'
   * @returns Items removed
   */
  deleteWithElapsed(interval, property) {
    const entries = [...this.store.entries()];
    const prune = [];
    const intervalMs = intervalToMs(interval, 1e3);
    const now = performance.now();
    for (const entry of entries) {
      const elapsedGet = now - entry[1].lastGet;
      const elapsedSet = now - entry[1].lastSet;
      const elapsed = property === `get` ? elapsedGet : property === `set` ? elapsedSet : Math.max(elapsedGet, elapsedSet);
      if (elapsed >= intervalMs) {
        prune.push([entry[0], entry[1].value]);
      }
    }
    for (const entry of prune) {
      this.store.delete(entry[0]);
      const eventArguments = {
        key: entry[0],
        value: entry[1]
      };
      this.fireEvent(`expired`, eventArguments);
      this.fireEvent(`removed`, eventArguments);
    }
    return prune;
  }
  /**
   * Sets the `key` to be `value`.
   *
   * If the key already exists, it is updated.
   *
   * If the map is full, according to its capacity,
   * another value is selected for removal.
   * @param key
   * @param value
   * @returns
   */
  set(key, value) {
    const existing = this.store.get(key);
    if (existing) {
      this.store.set(key, {
        ...existing,
        lastSet: performance.now()
      });
      return;
    }
    if (this.keyLength === this.capacity && this.capacity > 0) {
      const key2 = this.findEvicteeKey();
      if (!key2) {
        throw new Error(`ExpiringMap full (capacity: ${this.capacity})`);
      }
      const existing2 = this.store.get(key2);
      this.store.delete(key2);
      if (existing2) {
        const eventArguments = { key: key2, value: existing2.value };
        this.fireEvent(`expired`, eventArguments);
        this.fireEvent(`removed`, eventArguments);
      }
    }
    this.store.set(key, {
      lastGet: 0,
      lastSet: performance.now(),
      value
    });
    this.fireEvent(`newKey`, { key, value });
  }
};

// src/collections/Map/MapMutable.ts
var mutable = (...data) => {
  let m = add(/* @__PURE__ */ new Map(), ...data);
  return {
    add: (...data2) => {
      m = add(m, ...data2);
    },
    delete: (key) => {
      m = del(m, key);
    },
    clear: () => {
      m = add(/* @__PURE__ */ new Map());
    },
    set: (key, value) => {
      m = set(m, key, value);
    },
    get: (key) => m.get(key),
    entries: () => m.entries(),
    values: () => m.values(),
    isEmpty: () => m.size === 0,
    has: (key) => has(m, key)
  };
};

// src/collections/Map/MapOfMultiImpl.ts
var MapOfMutableImpl = class extends SimpleEventEmitter {
  /* eslint-disable-next-line functional/prefer-readonly-type */
  #map = /* @__PURE__ */ new Map();
  constructor(type, opts = {}) {
    super();
    this.type = type;
    this.groupBy = opts.groupBy ?? toStringDefault;
  }
  /**
   * Returns the type name. For in-built implementations, it will be one of: array, set or circular
   */
  get typeName() {
    return this.type.name;
  }
  /**
   * Returns the number of keys
   */
  get lengthKeys() {
    return this.#map.size;
  }
  /**
   * Returns the length of the longest child list
   */
  get lengthMax() {
    let m = 0;
    for (const v of this.#map.values()) {
      m = Math.max(m, this.type.count(v));
    }
    return m;
  }
  debugString() {
    const keys = [...this.#map.keys()];
    let r = `Keys: ${keys.join(`, `)}\r
`;
    for (const k of keys) {
      const v = this.#map.get(k);
      if (v === void 0) {
        r += ` - ${k} (undefined)\r
`;
      } else {
        const asArray = this.type.toArray(v);
        if (asArray !== void 0) {
          r += ` - ${k} (${this.type.count(v)}) = ${JSON.stringify(
            asArray
          )}\r
`;
        }
      }
    }
    ;
    return r;
  }
  get isEmpty() {
    return this.#map.size === 0;
  }
  clear() {
    this.#map.clear();
    super.fireEvent(`clear`, true);
  }
  //eslint-disable-next-line functional/prefer-immutable-types
  addKeyedValues(key, ...values) {
    const set2 = this.#map.get(key);
    if (set2 === void 0) {
      this.#map.set(key, this.type.add(void 0, values));
      super.fireEvent(`addedKey`, { key });
      super.fireEvent(`addedValues`, { values });
    } else {
      this.#map.set(key, this.type.add(set2, values));
      super.fireEvent(`addedValues`, { values });
    }
  }
  //eslint-disable-next-line functional/prefer-immutable-types
  set(key, values) {
    this.addKeyedValues(key, ...values);
    return this;
  }
  addValue(...values) {
    for (const v of values) this.addKeyedValues(this.groupBy(v), v);
  }
  hasKeyValue(key, value, eq) {
    const m = this.#map.get(key);
    if (m === void 0) return false;
    return this.type.has(m, value, eq);
  }
  //eslint-disable-next-line functional/prefer-tacit
  has(key) {
    return this.#map.has(key);
  }
  deleteKeyValue(key, value) {
    const a = this.#map.get(key);
    if (a === void 0) return false;
    return this.deleteKeyValueFromMap(a, key, value);
  }
  deleteKeyValueFromMap(map, key, value) {
    const preCount = this.type.count(map);
    const filtered = this.type.without(map, value);
    const postCount = filtered.length;
    this.#map.set(key, this.type.add(void 0, filtered));
    return preCount > postCount;
  }
  deleteByValue(value) {
    let something = false;
    [...this.#map.keys()].filter((key) => {
      const a = this.#map.get(key);
      if (!a) throw new Error(`Bug: map could not be accessed`);
      if (this.deleteKeyValueFromMap(a, key, value)) {
        something = true;
        if (this.count(key) === 0) this.delete(key);
      }
    });
    return something;
  }
  delete(key) {
    const a = this.#map.get(key);
    if (a === void 0) return false;
    this.#map.delete(key);
    this.fireEvent(`deleteKey`, { key });
    return true;
  }
  firstKeyByValue(value, eq = isEqualDefault) {
    const keys = [...this.#map.keys()];
    const found = keys.find((key) => {
      const a = this.#map.get(key);
      if (a === void 0) throw new Error(`Bug: map could not be accessed`);
      const r = this.type.has(a, value, eq);
      return r;
    });
    return found;
  }
  count(key) {
    const entry = this.#map.get(key);
    if (entry === void 0) return 0;
    return this.type.count(entry);
  }
  /**
   * Iterates over values stored under `key`
   * An empty array is returned if there are no values
   */
  *get(key) {
    const m = this.#map.get(key);
    if (m === void 0) return;
    yield* this.type.iterable(m);
  }
  /**
   * Iterate over the values stored under `key`.
   * If key does not exist, iteration is essentially a no-op
   * @param key
   * @returns
   */
  *valuesFor(key) {
    const m = this.#map.get(key);
    if (m === void 0) return;
    yield* this.type.iterable(m);
  }
  //eslint-disable-next-line functional/prefer-tacit
  getSource(key) {
    return this.#map.get(key);
  }
  /* eslint-disable-next-line functional/prefer-readonly-type */
  *keys() {
    yield* this.#map.keys();
  }
  *entriesFlat() {
    for (const entry of this.#map.entries()) {
      for (const v of this.type.iterable(entry[1])) {
        yield [entry[0], v];
      }
    }
  }
  *valuesFlat() {
    for (const entry of this.#map.entries()) {
      yield* this.type.iterable(entry[1]);
    }
  }
  *entries() {
    for (const [k, v] of this.#map.entries()) {
      const temporary = [...this.type.iterable(v)];
      yield [k, temporary];
    }
  }
  /* eslint-disable-next-line functional/prefer-readonly-type */
  *keysAndCounts() {
    for (const key of this.keys()) {
      yield [key, this.count(key)];
    }
  }
  merge(other) {
    for (const key of other.keys()) {
      const data = other.get(key);
      this.addKeyedValues(key, ...data);
    }
  }
  get size() {
    return this.#map.size;
  }
  get [Symbol.toStringTag]() {
    return this.#map[Symbol.toStringTag];
  }
};

// src/collections/Map/MapOfSetMutable.ts
var ofSetMutable = (options) => {
  const hash = options?.hash ?? toStringDefault;
  const comparer = (a, b) => hash(a) === hash(b);
  const t = {
    get name() {
      return `set`;
    },
    iterable: (source) => source.values(),
    add: (dest, values) => addKeepingExisting(dest, hash, ...values),
    count: (source) => source.size,
    find: (source, predicate) => find(source, predicate),
    filter: (source, predicate) => filter(source, predicate),
    toArray: (source) => toArray(source),
    has: (source, value) => hasAnyValue(source, value, comparer),
    without: (source, value) => without(toArray(source), value, comparer)
  };
  const m = new MapOfMutableImpl(t, options);
  return m;
};

// src/collections/CircularArray.ts
var CircularArray = class _CircularArray extends Array {
  // ✔ Class is unit tested!
  /* eslint-disable-next-line functional/prefer-readonly-type */
  #capacity;
  /* eslint-disable-next-line functional/prefer-readonly-type */
  #pointer;
  constructor(capacity = 0) {
    super();
    throwIntegerTest(capacity, `positive`, `capacity`);
    this.#capacity = capacity;
    this.#pointer = 0;
  }
  /**
   * Add to array
   * @param value Thing to add
   * @returns 
   */
  add(value) {
    const ca = _CircularArray.from(this);
    ca[this.#pointer] = value;
    ca.#capacity = this.#capacity;
    if (this.#capacity > 0) {
      ca.#pointer = this.#pointer + 1 === this.#capacity ? 0 : this.#pointer + 1;
    } else {
      ca.#pointer = this.#pointer + 1;
    }
    return ca;
  }
  get pointer() {
    return this.#pointer;
  }
  get isFull() {
    if (this.#capacity === 0) return false;
    return this.length === this.#capacity;
  }
};
var circularArray = (capacity) => new CircularArray(capacity);

// src/collections/Map/MapOfCircularMutable.ts
var ofCircularMutable = (options) => {
  const comparer = isEqualDefault;
  const t = {
    get name() {
      return `circular`;
    },
    add: (destination, values) => {
      if (destination === void 0) destination = circularArray(options.capacity);
      for (const v of values) {
        destination = destination.add(v);
      }
      return destination;
    },
    count: (source) => source.length,
    find: (source, predicate) => source.find(predicate),
    filter: (source, predicate) => source.filter(predicate),
    toArray: (source) => source,
    iterable: (source) => source.values(),
    has: (source, value) => source.find((v) => comparer(v, value)) !== void 0,
    without: (source, value) => source.filter((v) => !comparer(v, value))
  };
  return new MapOfMutableImpl(t, options);
};

// src/collections/Map/MapOfArrayMutable.ts
var ofArrayMutable = (options = {}) => {
  const convertToString = options.convertToString;
  const toStringFunction = typeof convertToString === `undefined` ? isEqualDefault : (a, b) => convertToString(a) === convertToString(b);
  const comparer = options.comparer ?? toStringFunction;
  const t = {
    get name() {
      return `array`;
    },
    add: (destination, values) => {
      if (destination === void 0) return [...values];
      return [...destination, ...values];
    },
    iterable: (source) => source.values(),
    count: (source) => source.length,
    find: (source, predicate) => source.find((f) => predicate(f)),
    filter: (source, predicate) => source.filter((f) => predicate(f)),
    toArray: (source) => source,
    has: (source, value) => source.some((v) => comparer(v, value)),
    without: (source, value) => source.filter((v) => !comparer(v, value))
    //[Symbol.iterator]: (source) => source[Symbol.iterator]()
  };
  const m = new MapOfMutableImpl(t, options);
  return m;
};

// src/collections/Map/MapOfSimple.ts
var MapOfSimple = class _MapOfSimple extends MapOfSimpleBase {
  addKeyedValues(key, ...values) {
    return this.addBatch([[key, values]]);
  }
  addValue(...values) {
    const asEntries = values.map((v) => [this.groupBy(v), v]);
    return this.addBatch(asEntries);
  }
  //eslint-disable-next-line functional/prefer-immutable-types
  addBatch(entries) {
    const temporary = new Map(
      [...this.map.entries()].map((e) => [e[0], [...e[1]]])
    );
    for (const [key, list] of entries) {
      const existingList = temporary.get(key);
      if (typeof existingList === `undefined`) {
        temporary.set(key, list);
      } else {
        existingList.push(...list);
      }
    }
    return new _MapOfSimple(this.groupBy, this.valueEq, [...temporary.entries()]);
  }
  clear() {
    return new _MapOfSimple(this.groupBy, this.valueEq);
  }
  deleteKeyValue(_key, _value) {
    throw new Error(`Method not implemented.`);
  }
  deleteByValue(value, eq) {
    const entries = [...this.map.entries()];
    const eqFunction = eq ?? this.valueEq;
    const x = entries.map((entry) => {
      const key = entry[0];
      const values = entry[1].filter((vv) => !eqFunction(vv, value));
      return [key, values];
    });
    return new _MapOfSimple(this.groupBy, this.valueEq, x);
  }
  delete(key) {
    const entries = [...this.map.entries()].filter((e) => e[0] !== key);
    return new _MapOfSimple(this.groupBy, this.valueEq, entries);
  }
};
var ofSimple = (groupBy = defaultKeyer, valueEq = isEqualDefault) => new MapOfSimple(groupBy, valueEq);

export {
  circularArray,
  create,
  ExpiringMap,
  mutable,
  MapOfMutableImpl,
  ofSetMutable,
  ofCircularMutable,
  ofArrayMutable,
  MapOfSimple,
  ofSimple,
  Map_exports
};
//# sourceMappingURL=chunk-OG7TSNWN.js.map