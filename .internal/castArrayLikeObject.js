import isArrayLikeObject from '../isArrayLikeObject.js'

/**
 * Casts `value` to an empty array if it's not an array like object.
 * 将“值”转换为空数组,如果它不是类数组对象
 *
 *
 * @private
 * @param {*} value The value to inspect.  要转换的值
 * @returns {Array|Object} Returns the cast array-like object.  类数组对象
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : []  // 对非类数组对象返回 []
}

export default castArrayLikeObject
