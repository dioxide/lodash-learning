/**
 * Checks if `value` is less than or equal to `other`.
 * 检查`value`是否小于等于`other`
 *
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare. 要比较的值
 * @param {*} other The other value to compare. 要比较的另一个值
 * @returns {boolean} Returns `true` if `value` is less than or equal to
 *  `other`, else `false`.  若`value`小于等于`other`则返回true，否则返回false
 * @see gt, gte, lt
 * @example
 *
 * lte(1, 3)
 * // => true
 *
 * lte(3, 3)
 * // => true
 *
 * lte(3, 1)
 * // => false
 */
function lte(value, other) {
  if (!(typeof value === 'string' && typeof other === 'string')) {  // 若二者不同时为字符串
    value = +value  // 将字符串形式的数字值转换数字
    other = +other  // 将字符串形式的数字值转换数字
  }
  return value <= other // 返回比较结果
}

export default lte
