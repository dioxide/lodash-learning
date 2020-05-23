/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 * `matchesProperty`的一个特殊版本，其适合于值的严格的相等比较
 *
 * @private
 * @param {string} key The key of the property to get.  要获取的属性的key
 * @param {*} srcValue The value to match.  要匹配的值
 * @returns {Function} Returns the new spec function. 新的规格函数
 */
function matchesStrictComparable(key, srcValue) {
  return (object) => {
    if (object == null) { // 对于空对象直接返回false
      return false
    }
    // 指定对象的属性与srcValue严格相等 且 srcValue不是undefined且在对象中存在该属性
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)))
  }
}

export default matchesStrictComparable
