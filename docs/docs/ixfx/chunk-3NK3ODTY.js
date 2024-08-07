import { throwIntegerTest, throwNumberTest } from "./chunk-2OY2BTO2.js";
// src/numbers/Round.ts
function round(a, b) {
    throwIntegerTest(a, `positive`, `decimalPlaces`);
    let rounder;
    if (a === 0)
        rounder = Math.round;
    else {
        const p = Math.pow(10, a);
        rounder = (v) => Math.floor(v * p) / p;
    }
    return b === void 0 ? rounder : rounder(b);
}
var roundUpToMultiple = (v, multiple) => {
    throwNumberTest(v, `nonZero`, `v`);
    throwNumberTest(multiple, `nonZero`, `multiple`);
    return Math.ceil(v / multiple) * multiple;
};
export { round, roundUpToMultiple };
//# sourceMappingURL=chunk-3NK3ODTY.js.map
//# sourceMappingURL=chunk-3NK3ODTY.js.map