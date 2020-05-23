import isObject from '../isObject.js'

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 * 检查`value` 是否适用于严格的相等比较，如`===`
 *
 * @private
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` if suitable for strict  若适合严格比较则返回true,否则返回false
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value)  // 判断条件: 该值具有反射性(自己等于自己) 且不是Object类型
}

export default isStrictComparable
