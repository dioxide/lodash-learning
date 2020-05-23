/**
 * Checks if `value` is `undefined`.
 * 检查`value`是`undefined`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`. 若是则返回true
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
function isUndefined(value) {
  return value === undefined  // 直接与undefined进行全等比较
}

export default isUndefined
