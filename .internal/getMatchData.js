import isStrictComparable from './isStrictComparable.js'
import keys from '../keys.js'

/**
 * Gets the property names, values, and compare flags of `object`.
 * 获取`object`的属性名、值、比较标志
 *
 * @private
 * @param {Object} object The object to query.  要查询的对象
 * @returns {Array} Returns the match data of `object`. `object`的匹配数据
 */
function getMatchData(object) {
  const result = keys(object) // 获取对象所有的key名称组成的数组B
  let length = result.length

  while (length--) {  // 倒序迭代数组B
    const key = result[length]
    const value = object[key]
    result[length] = [key, value, isStrictComparable(value)]  // 组成结果数组项
  }
  return result
}

export default getMatchData
