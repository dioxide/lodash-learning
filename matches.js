import baseClone from './.internal/baseClone.js'
import baseMatches from './.internal/baseMatches.js'

/** Used to compose bitmasks for cloning. 用来组合位掩码以配置克隆行为 */
const CLONE_DEEP_FLAG = 1

/**
 * Creates a function that performs a partial deep comparison between a given
 * object and `source`, returning `true` if the given object has equivalent
 * property values, else `false`.
 * 创建一个函数，其在`object`和`source`间执行一个部分深度比较，若给定对象具有相等的属性值，则返回true，否则返回false
 *
 * **Note:** The created function is equivalent to `isMatch` with `source`
 * partially applied.
 * 注意： 创建的函数相当于`source`被部分应用的`isMatch`
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `isEqual`
 * for a list of supported value comparisons.
 * 局部比较会将空数组和空对象`source`分别与任何数组或对象值进行匹配。有关支持的值比较的列表，请参见_.isEqual。
 *
 * @since 3.0.0
 * @category Util
 * @param {Object} source The object of property values to match. 要匹配的属性值对象
 * @returns {Function} Returns the new spec function. 新的规格函数
 * @example
 *
 * const objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ]
 *
 * filter(objects, matches({ 'a': 4, 'c': 6 }))
 * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
 */
function matches(source) {
  return baseMatches(baseClone(source, CLONE_DEEP_FLAG))  // 先借调baseClone进行深度克隆再借调baseMatches进行匹配
}

export default matches
