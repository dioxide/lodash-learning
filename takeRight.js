import slice from './slice.js'

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 * 从右边拿元素。 创建一个`array`的从末位开始数N个元素的数组切片
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @param {number} [n=1] The number of elements to take.  要获取的元素个数，默认为1
 * @returns {Array} Returns the slice of `array`. `array`的切片
 * @example
 *
 * takeRight([1, 2, 3])
 * // => [3]
 *
 * takeRight([1, 2, 3], 2)
 * // => [2, 3]
 *
 * takeRight([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * takeRight([1, 2, 3], 0)
 * // => []
 */
function takeRight(array, n=1) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return [] // 对于空数组直接反弹
  }
  n = length - n  // 将从右数的偏移值 转换为从左数的便一直
  return slice(array, n < 0 ? 0 : n, length)  // 借调slice（它的老本行），并过滤负的n值
}

export default takeRight
