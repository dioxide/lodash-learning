/**
 * Checks if `value` is `null` or `undefined`.
 * 检查`value`是否是`null`或`undefined`
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`. 若是虚无值则返回true，否则返回false
 * @example
 *
 * isNil(null)
 * // => true
 *
 * isNil(void 0)
 * // => true
 *
 * isNil(NaN)
 * // => false
 */
function isNil(value) {
  return value == null  // 即与null进行带自动类型转换的等值比较
}

export default isNil
