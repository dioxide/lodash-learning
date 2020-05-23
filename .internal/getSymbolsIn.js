import getSymbols from './getSymbols.js'

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 * 创建由`object`的私有的和继承的可枚举symbols组成的数组
 *
 * @private
 * @param {Object} object The object to query.  要查询的对象
 * @returns {Array} Returns the array of symbols. symbols组成的数组
 */
function getSymbolsIn(object) {
  const result = []
  while (object) {  // 递归object的原型链
    result.push(...getSymbols(object))  // 获取当前对象的所有symbols并压入结果数组
    object = Object.getPrototypeOf(Object(object))  // 获取当前对象的原型对象
  }
  return result // 返回由symbols组成的结果数组
}

export default getSymbolsIn
