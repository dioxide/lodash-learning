import slice from './slice.js'

/**
 * Gets all but the last element of `array`.
 * 获取除array的最后一个元素以外的所有元素
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @returns {Array} Returns the slice of `array`. 数组的切片
 * @example
 *
 * initial([1, 2, 3])
 * // => [1, 2]
 */
function initial(array) {
  const length = array == null ? 0 : array.length
  return length ? slice(array, 0, -1) : []  // 对于空数组反弹回空数组，否则创建除数组最后一项的切片
}

export default initial
