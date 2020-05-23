import baseIsEqual from './baseIsEqual.js'
import get from '../get.js'
import hasIn from '../hasIn.js'
import isKey from './isKey.js'
import isStrictComparable from './isStrictComparable.js'
import matchesStrictComparable from './matchesStrictComparable.js'
import toKey from './toKey.js'

/** Used to compose bitmasks for value comparisons. 用来组合位掩码进行值比较 */
const COMPARE_PARTIAL_FLAG = 1
const COMPARE_UNORDERED_FLAG = 2

/**
 * The base implementation of `matchesProperty` which doesn't clone `srcValue`.
 * `matchesProperty`的基本实现，其不克隆`srcValue`
 *
 * @private
 * @param {string} path The path of the property to get.  要获取的属性的路径
 * @param {*} srcValue The value to match.  要匹配的值
 * @returns {Function} Returns the new spec function. 新的规格函数
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue) // 若path是属性名不是路径 且 srcValue是严格可比较的值， 则对其进行严格匹配作为最终结果
  }
  return (object) => {
    const objValue = get(object, path)  // 获取指定路径的值
    return (objValue === undefined && objValue === srcValue)  // 若获取到的值是undefined且于目标值全等
      ? hasIn(object, path) // 再次确定该key是否存在
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG)  // 否则，借调baseIsEqual进行相等判断
  }
}

export default baseMatchesProperty
