import baseFlatten from './.internal/baseFlatten.js'

/**
 * Recursively flatten `array` up to `depth` times.
 * 递归地扁平化`array`最高到`depth`层
 *
 * @since 4.4.0
 * @category Array
 * @param {Array} array The array to flatten. 要扁平化的数组
 * @param {number} [depth=1] The maximum recursion depth.  最大递归深度
 * @returns {Array} Returns the new flattened array.  新的扁平化的数组
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep
 * @example
 *
 * const array = [1, [2, [3, [4]], 5]]
 *
 * flattenDepth(array, 1)
 * // => [1, 2, [3, [4]], 5]
 *
 * flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */
function flattenDepth(array, depth) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return [] // 对空数组，反弹回去
  }
  depth = depth === undefined ? 1 : +depth  // 递归深度默认为1
  return baseFlatten(array, depth)  // 借调基本方法，指定递归深度
}

export default flattenDepth
