/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 * `assignValue` 和 `assignMergeValue`的基本实现，但不进行值的检查
 *
 * @private
 * @param {Object} object The object to modify. 要修改的对象
 * @param {string} key The key of the property to assign. 要分配的key
 * @param {*} value The value to assign.  要分配的值
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__') { // 若要分配'__proto__'的值，需要单独处理
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    })
  } else {
    object[key] = value // 其他情况直接分配指定值
  }
}

export default baseAssignValue
