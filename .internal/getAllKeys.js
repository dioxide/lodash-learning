import getSymbols from './getSymbols.js'
import keys from '../keys.js'

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 * 创建一个由`object`的私有可枚举属性的名字和符号组成的数组
 *
 * @private
 * @param {Object} object The object to query.  要查询的对象
 * @returns {Array} Returns the array of property names and symbols.  属性名和symbol组成的数组
 */
function getAllKeys(object) {
  const result = keys(object) // 借调keys获取所有key
  if (!Array.isArray(object)) {
    result.push(...getSymbols(object))  // 若object不是数组，就将其symbols压入结果数组
  }
  return result
}

export default getAllKeys
