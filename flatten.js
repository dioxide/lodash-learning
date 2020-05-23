import baseFlatten from './.internal/baseFlatten.js'

/**
 * Flattens `array` a single level deep.
 * 扁平化数组`array` 单层深度，二层以上不予处理
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten. 要扁平化的数组
 * @returns {Array} Returns the new flattened array.  扁平化了的新数组
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep, flattenDepth
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, 1) : []  // 对非空数组借调baseFlatten返回结果，否则返回空数组
}

export default flatten
