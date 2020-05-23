/**
 * Gets a random element from `array`.
 * 随机获取`array`的元素
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to sample.  要取样的数组
 * @returns {*} Returns the random element. 取到的随机元素
 * @example
 *
 * sample([1, 2, 3, 4])
 * // => 2
 */
function sample(array) {
  const length = array == null ? 0 : array.length
  return length ? array[Math.floor(Math.random() * length)] : undefined // 对于空数组返回undefined，否则 对数组索引范围取随机值（对归一化的随机种子映射在索引长度上），取出并返回。
}

export default sample
