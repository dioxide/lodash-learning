import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 * 创建一个`array`的数组切片，其开始位置到`n`位置的元素将被丢弃。 也是丢弃开头的N个元素
 * N默认为1
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @param {number} [n=1] The number of elements to drop.  要被丢弃的元素数
 * @returns {Array} Returns the slice of `array`. `array`的切片
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function drop(array, n=1) {
  const length = array == null ? 0 : array.length
  return length
    ? slice(array, n < 0 ? 0 : toInteger(n), length)  // 创建出去丢弃部分之外的数组切片
    : []  // 对于空数组也反弹回空数组
}

export default drop
