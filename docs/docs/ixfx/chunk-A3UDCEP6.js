import { guardIndex } from "./chunk-K442B2P3.js";
// src/data/arrays/InsertAt.ts
var insertAt = (data, index, ...values) => {
    if (!Array.isArray(data)) {
        throw new TypeError(`Param 'data' is not an arry`);
    }
    return [...data.slice(0, index), ...values, ...data.slice(index + 1)];
};
// src/data/arrays/Remove.ts
var remove = (data, index) => {
    if (!Array.isArray(data)) {
        throw new TypeError(`'data' parameter should be an array`);
    }
    guardIndex(data, index, `index`);
    return [...data.slice(0, index), ...data.slice(index + 1)];
};
export { insertAt, remove };
//# sourceMappingURL=chunk-A3UDCEP6.js.map
//# sourceMappingURL=chunk-A3UDCEP6.js.map