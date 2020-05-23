import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 * 此方法类似`assignValue`，除了其不分配`undefined`值
 *
 * @private
 * @param {Object} object The object to modify. 要修改的对象
 * @param {string} key The key of the property to assign. 要分配的属性的key
 * @param {*} value The value to assign.  要分配的值
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value) // 只在 要分配的值不是undefined且与对象中的原值不等 或 要分配的值为是undefined且在原对象中没有该key 时，才借调以下方法进行值的分配
  }
}

export default assignMergeValue
