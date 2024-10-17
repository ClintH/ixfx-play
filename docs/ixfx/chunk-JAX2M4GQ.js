// src/util/Results.ts
function throwResult(result) {
  if (result.success) return true;
  if (typeof result.error === `string`) throw new Error(result.error);
  throw result.error;
}
function resultToError(result) {
  if (typeof result.error === `string`) return new Error(result.error);
  else return result.error;
}

export {
  throwResult,
  resultToError
};
//# sourceMappingURL=chunk-JAX2M4GQ.js.map