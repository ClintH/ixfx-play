import {
  guardArray
} from "./chunk-GIOS32YZ.js";

// src/collections/arrays/SortByNumericProperty.ts
var sortByNumericProperty = (data, propertyName) => [...data].sort((a, b) => {
  guardArray(data, `data`);
  const av = a[propertyName];
  const bv = b[propertyName];
  if (av < bv) return -1;
  if (av > bv) return 1;
  return 0;
});

export {
  sortByNumericProperty
};
//# sourceMappingURL=chunk-WPLOEJAA.js.map