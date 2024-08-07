import { StackMutable, isEmpty, isFull, mutable, peek, pop, push, tree_exports } from "./chunk-FVSZ5SVQ.js";
import { Map_exports, circularArray } from "./chunk-G46LVJ4U.js";
import { QueueImmutable, queue_exports } from "./chunk-2IZZMN3E.js";
import { SetStringImmutable, SetStringMutable, set_exports } from "./chunk-7OSJNF5B.js";
import { QueueMutable } from "./chunk-ONNID4LF.js";
import { __export } from "./chunk-AFNFQUHK.js";
// src/collections/index.ts
var collections_exports = {};
__export(collections_exports, {
    Maps: () => Map_exports,
    QueueImmutable: () => QueueImmutable,
    QueueMutable: () => QueueMutable,
    Queues: () => queue_exports,
    SetStringImmutable: () => SetStringImmutable,
    SetStringMutable: () => SetStringMutable,
    Sets: () => set_exports,
    StackImmutable: () => StackImmutable,
    StackMutable: () => StackMutable,
    Stacks: () => stack_exports,
    Trees: () => tree_exports,
    circularArray: () => circularArray
});
// src/collections/stack/index.ts
var stack_exports = {};
__export(stack_exports, {
    immutable: () => immutable,
    mutable: () => mutable
});
// src/collections/stack/StackImmutable.ts
var StackImmutable = class _StackImmutable {
    opts;
    /* eslint-disable-next-line functional/prefer-readonly-type */
    data;
    constructor(opts = {}, data = []) {
        this.opts = opts;
        this.data = data;
    }
    push(...toAdd) {
        return new _StackImmutable(this.opts, push(this.opts, this.data, ...toAdd));
    }
    pop() {
        return new _StackImmutable(this.opts, pop(this.opts, this.data));
    }
    forEach(fn) {
        this.data.forEach(fn);
    }
    forEachFromTop(fn) {
        [...this.data].reverse().forEach(fn);
    }
    get isEmpty() {
        return isEmpty(this.opts, this.data);
    }
    get isFull() {
        return isFull(this.opts, this.data);
    }
    get peek() {
        return peek(this.opts, this.data);
    }
    get length() {
        return this.data.length;
    }
};
var immutable = (opts = {}, ...startingItems) => new StackImmutable({ ...opts }, [...startingItems]);
export { StackImmutable, stack_exports, collections_exports };
//# sourceMappingURL=chunk-RUAFJLQS.js.map
//# sourceMappingURL=chunk-RUAFJLQS.js.map