/**
 * Gets all but the first element of `array`.
 * 获取`array`的除第一个之外的所有元素
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @returns {Array} Returns the slice of `array`. `array`的切片
 * @example
 *
 * tail([1, 2, 3])
 * // => [2, 3]
 */
function tail(array) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return [] // 空数组直接反弹
  }
  const [, ...result] = array // 使用ES6的结构语法实现，逗号代表获取第一个元素（相当于占位符）
  return result // 返回剩余部分
}

export default tail
