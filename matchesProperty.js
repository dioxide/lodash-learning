import baseClone from './.internal/baseClone.js'
import baseMatchesProperty from './.internal/baseMatchesProperty.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1

/**
 * Creates a function that performs a partial deep comparison between the
 * value at `path` of a given object to `srcValue`, returning `true` if the
 * object value is equivalent, else `false`.
 * 创建一个函数，该函数在给定对象`object`的`path`与srcValue的值之间进行部分深度比较，
 * 如果对象值相等，则返回true，否则返回false。
 *
 *
 * **Note:** Partial comparisons will match empty array and empty object
 * `srcValue` values against any array or object value, respectively. See
 * `isEqual` for a list of supported value comparisons.
 * 注意：部分比较会将空数组和空对象`srcValue`值分别与任何数组或对象值进行匹配。有关支持的
 * 值比较的列表，请参见_.isEqual。
 *
 * @since 3.2.0
 * @category Util
 * @param {Array|string} path The path of the property to get. 要获取的属性的路径
 * @param {*} srcValue The value to match.  要匹配的值
 * @returns {Function} Returns the new spec function. 新的规格函数
 * @example
 *
 * const objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ]
 *
 * find(objects, matchesProperty('a', 4))
 * // => { 'a': 4, 'b': 5, 'c': 6 }
 */
function matchesProperty(path, srcValue) {
  return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG))  // 先借调baseClone进行深度克隆再借调baseMatchesProperty进行匹配
}

export default matchesProperty
