/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 * 创建一个被移除了所有假值（`false`, `null`,`0`, `""`, `undefined`, and `NaN`）的数组
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact. 要压实的数组
 * @returns {Array} Returns the new array of filtered values. 新的过滤过的数组
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
  let resIndex = 0  // 结果索引值
  const result = [] // 结果数组

  if (array == null) {
    return result // 对于空数组，反弹回空数组
  }

  for (const value of array) {  // 迭代array
    if (value) {
      result[resIndex++] = value  // 只有value为真值时，才往result中追加
    }
  }
  return result
}

export default compact
