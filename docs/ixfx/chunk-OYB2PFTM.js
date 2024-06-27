import {
  weight
} from "./chunk-IALMVFKW.js";
import {
  guardArray
} from "./chunk-GIOS32YZ.js";
import {
  isEqualDefault,
  isEqualValueDefault
} from "./chunk-SGQC7FGM.js";

// src/collections/arrays/Equality.ts
var isEqual = (arrayA, arrayB, eq = isEqualDefault) => {
  guardArray(arrayA, `arrayA`);
  guardArray(arrayB, `arrayB`);
  if (arrayA.length !== arrayB.length) return false;
  for (let indexA = 0; indexA < arrayA.length; indexA++) {
    if (!eq(arrayA[indexA], arrayB[indexA])) return false;
  }
  return true;
};
var isContentsTheSame = (array, equality) => {
  if (!Array.isArray(array)) throw new Error(`Param 'array' is not an array.`);
  if (array.length === 0) return true;
  const eq = equality ?? isEqualValueDefault;
  const a = array[0];
  const r = array.some((v) => !eq(a, v));
  if (r) return false;
  return true;
};

// src/collections/arrays/Zip.ts
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

// src/numbers/AverageWeighted.ts
var averageWeighted = (data, weightings) => {
  if (typeof weightings === `function`) weightings = weight(data, weightings);
  const ww = zip(data, weightings);
  const [totalV, totalW] = ww.reduce(
    (accumulator, v) => [accumulator[0] + v[0] * v[1], accumulator[1] + v[1]],
    [0, 0]
  );
  return totalV / totalW;
};

export {
  isEqual,
  isContentsTheSame,
  zip,
  averageWeighted
};
//# sourceMappingURL=chunk-OYB2PFTM.js.map