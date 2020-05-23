/** Built-in value references. 引用内建原型方法，用来检测属性是否可枚举 */
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable

/* Built-in method references for those with the same name as other `lodash` methods. 与lodash方法同名的内建方法的引用 */
const nativeGetSymbols = Object.getOwnPropertySymbols

/**
 * Creates an array of the own enumerable symbols of `object`.
 * 创建一个由`object`的私有的可枚举symbols组成的数组
 *
 * @private
 * @param {Object} object The object to query.  要查询的对象
 * @returns {Array} Returns the array of symbols. symbols数组
 */
function getSymbols(object) {
  if (object == null) { // 若object是空的直接返回空数组
    return []
  }
  object = Object(object) // 转换为可迭代对象
  return nativeGetSymbols(object).filter((symbol) => propertyIsEnumerable.call(object, symbol)) // 借调内建方法获取symbol，但过滤条件是该symbol可枚举
}

export default getSymbols
