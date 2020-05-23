/**
 * Gets the last element of `array`.
 * 获取`array`中的最后一个元素
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @returns {*} Returns the last element of `array`.  数组的最后一个元素
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
function last(array) {
  const length = array == null ? 0 : array.length // 数组的长度
  return length ? array[length - 1] : undefined // 若是空数组则返回undefined
}

export default last
