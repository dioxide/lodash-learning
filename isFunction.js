
/**
 * Checks if `value` is classified as a `Function` object.
 * 检查`value`是否归类为`Function`对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a function, else `false`. 若是则返回true，否则返回false
 * @example
 *
 * isFunction(class Any{})
 * // => true
 *
 * isFunction(() => {})
 * // => true
 *
 * isFunction(async () => {})
 * // => true
 *
 * isFunction(function * Any() {})
 * // => true
 *
 * isFunction(Math.round)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
function isFunction(value) {
  return typeof value === 'function'  // 只需判断typeof值
}

export default isFunction
