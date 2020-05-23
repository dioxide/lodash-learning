import slice from './slice.js'

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 * 拿几个元素：创建一个`array`的从开始位置N个元素的切片
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @param {number} [n=1] The number of elements to take.  要获取的元素个数，默认为1
 * @returns {Array} Returns the slice of `array`. `array`的切片
 * @example
 *
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0)
 * // => []
 */
function take(array, n=1) {
  if (!(array != null && array.length)) {
    return [] // 对于空数组直接反弹
  }
  return slice(array, 0, n < 0 ? 0 : n) // 借调slice（它的老本行），并过滤负的n值
}

export default take
