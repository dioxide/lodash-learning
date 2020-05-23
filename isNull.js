/**
 * Checks if `value` is `null`.
 * 检查`value`是否是`null`
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.  若是则返回true，否则返回false
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
function isNull(value) {
  return value === null // 直接与null进行全等比较
}

export default isNull
