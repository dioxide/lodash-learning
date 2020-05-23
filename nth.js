import isIndex from './.internal/isIndex.js'

/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth
 * element from the end is returned.
 * 获取`array`的第N位置的元素，若N为负值则从末位开始计算
 *
 * @since 4.11.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @param {number} [n=0] The index of the element to return. 指定的索引N，默认为0
 * @returns {*} Returns the nth element of `array`. 相应位置的元素
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 *
 * nth(array, 1)
 * // => 'b'
 *
 * nth(array, -2)
 * // => 'c'
 */
function nth(array, n) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return  // 空数组直接返回
  }
  n += n < 0 ? length : 0 // 过滤负值
  return isIndex(n, length) ? array[n] : undefined  // 若n是有效的数组索引才返回 相应值，否则返回undefined
}

export default nth
