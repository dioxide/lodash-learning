import baseFlatten from './.internal/baseFlatten.js'

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/**
 * Recursively flattens `array`.
 * 递归地扁平化`array`
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten. 要扁平化的数组
 * @returns {Array} Returns the new flattened array.  扁平化了的数组
 * @see flatMap, flatMapDeep, flatMapDepth, flatten, flattenDepth
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, INFINITY) : [] // 对非空数组借调baseFlatten返回结果(无限迭代层级)，否则返回空数组
}

export default flattenDeep
