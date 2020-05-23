import baseIsEqualDeep from './baseIsEqualDeep.js'
import isObjectLike from '../isObjectLike.js'

/**
 * The base implementation of `isEqual` which supports partial comparisons
 * and tracks traversed objects.
 * `isEqual`的基本实现，其支持部分比较和跟踪遍历对象
 *
 * @private
 * @param {*} value The value to compare. 要比较的值A
 * @param {*} other The other value to compare. 要比较的值B
 * @param {boolean} bitmask The bitmask flags.  位掩码标志
 *  1 - Unordered comparison  无序比较
 *  2 - Partial comparison 部分比较
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.  跟踪遍历对象
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.  若相等则返回true，否则返回false
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true // 二者全等之情况
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other // 二者不能有null 或 二者都不是类对象 时： 若它们各自都等于自身，就认为相等
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack) // 其他情况借调baseIsEqualDeep进行深度比较
}

export default baseIsEqual
