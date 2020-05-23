import baseIsMatch from './.internal/baseIsMatch.js'
import getMatchData from './.internal/getMatchData.js'

/**
 * Performs a partial deep comparison between `object` and `source` to
 * determine if `object` contains equivalent property values.
 * 执行一个在`object`和`source`直接的部分深度比较，以决定`object`是否包含相等的属性值
 *
 * **Note:** This method is equivalent to `matches` when `source` is
 * partially applied.
 * 注意： 此方法相当于`source`被部分应用的的`matches`
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `isEqual`
 * for a list of supported value comparisons.
 * 部分比较将匹配空数组和空对象 'source'分别针对任何数组或对象值的值。  对应的，查看 'isEqual'的有关支持的值比较的列表。
 *
 * @since 3.0.0
 * @category Lang
 * @param {Object} object The object to inspect.  要检查的对象
 * @param {Object} source The object of property values to match. 要匹配的属性值对象
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.  若匹配则返回true，否则返回false
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 *
 * isMatch(object, { 'b': 2 })
 * // => true
 *
 * isMatch(object, { 'b': 1 })
 * // => false
 */
function isMatch(object, source) {
  return object === source || baseIsMatch(object, source, getMatchData(source)) // 对象全等当然匹配 ，其他情况借调baseIsMatch进行按属性匹配
}

export default isMatch
