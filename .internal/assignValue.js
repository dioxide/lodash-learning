import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/** Used to check objects for own properties. 用来检查对象的私有属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent.
 * 若`object`的`key`的值与`value`不相等就分配赋予该值
 *
 * @private
 * @param {Object} object The object to modify. 要修改的对象
 * @param {string} key The key of the property to assign. 要分配的key
 * @param {*} value The value to assign.  要分配的value
 */
function assignValue(object, key, value) {
  const objValue = object[key]  // 原对象的值value

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) { // 若object中key属性与指定value相等，但不是object私有的属性
    if (value !== 0 || (1 / value) === (1 / objValue)) {  // 且 指定值不是0 或 拿1除以它们二者的结果相等（不是NaN）
      baseAssignValue(object, key, value) // 借调baseAssignValue来实现分配该值
    }
  } else if (value === undefined && !(key in object)) { // 若指定值为undefined 且 object中不存在该key
    baseAssignValue(object, key, value) // 同样分配该值
  }
}

export default assignValue
