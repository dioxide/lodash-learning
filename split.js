import castSlice from './.internal/castSlice.js'
import hasUnicode from './.internal/hasUnicode.js'
import isRegExp from './isRegExp.js'
import stringToArray from './.internal/stringToArray.js'

/** Used as references for the maximum length and index of an array. 引用常量：数组的最大长度/索引值 */
const MAX_ARRAY_LENGTH = 4294967295

/**
 * Splits `string` by `separator`.
 * 使用`separator`来拆分字符串`string`
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 * 注意： 此方法基于[`String#split`](https://mdn.io/String/split).
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to split. 要拆分的字符串
 * @param {RegExp|string} separator The separator pattern to split by. 用来拆分的拆分模式
 * @param {number} [limit] The length to truncate results to.  截断结果的长度（取结果的前几项）
 * @returns {Array} Returns the string segments. 字符片段
 * @example
 *
 * split('a-b-c', '-', 2)
 * // => ['a', 'b']
 */
function split(string, separator, limit) {
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0  // 处理limit为合理值
  if (!limit) {
    return [] // 若limit仍为假值（如0），则返回空数组
  }
  // string为真值 且（分割模式是字符串 或 分割模式不是正则表达式且非空）
  if (string && (
    typeof separator === 'string' ||
        (separator != null && !isRegExp(separator))
  )) {
    // 且 分割模式为假值 且 string还有unicode字符时，则：
    if (!separator && hasUnicode(string)) {
      return castSlice(stringToArray(string), 0, limit) // 则借调castSlice切取 由字符组成的数组 的指定长度切片
    }
  }
  return string.split(separator, limit) // 其他情况使用内建方法来实现
}

export default split
