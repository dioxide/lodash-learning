import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 * 创建一个`array`的数组切片，其从`n`位置到数组末位之间的位置将被丢弃. `n`默认为1
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @param {number} [n=1] The number of elements to drop.  要被丢弃的元素数
 * @returns {Array} Returns the slice of `array`. `array`的切片
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function dropRight(array, n=1) {
  const length = array == null ? 0 : array.length
  n = length - toInteger(n) // 结果数组切片的长度： 数组总长度 - 要丢弃的元素数
  return length ? slice(array, 0, n < 0 ? 0 : n) : [] // 对于空数组直接反弹回，否则切出除丢弃部分之外的部分并返回
}

export default dropRight
