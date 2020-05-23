import getSymbolsIn from './getSymbolsIn.js'

/**
 * Creates an array of own and inherited enumerable property names and symbols of `object`.
 * 创建一个由 `object`的私有的继承的可枚举属性名和符号组成的数组
 *
 * @private
 * @param {Object} object The object to query. 要查询的对象
 * @returns {Array} Returns the array of property names and symbols.  属性名和符号组成的数组
 */
function getAllKeysIn(object) {
  const result = [] // 结果数组
  for (const key in object) {
    result.push(key)  // 迭代object，并将属性key压入到结果数组中
  }
  if (!Array.isArray(object)) {
    result.push(...getSymbolsIn(object))  // 若object不是数组，则将其symbols也压入结果数组
  }
  return result
}

export default getAllKeysIn
