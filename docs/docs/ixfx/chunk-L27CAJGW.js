import { isContentsTheSame } from "./chunk-KY2YJSDP.js";
// src/data/arrays/Zip.ts
var zip = (...arrays) => {
    if (arrays.some((a) => !Array.isArray(a))) {
        throw new Error(`All parameters must be an array`);
    }
    const lengths = arrays.map((a) => a.length);
    if (!isContentsTheSame(lengths)) {
        throw new Error(`Arrays must be of same length`);
    }
    const returnValue = [];
    const length = lengths[0];
    for (let index = 0; index < length; index++) {
        returnValue.push(arrays.map((a) => a[index]));
    }
    return returnValue;
};
export { zip };
//# sourceMappingURL=chunk-L27CAJGW.js.map
//# sourceMappingURL=chunk-L27CAJGW.js.map