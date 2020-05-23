import asciiToArray from './asciiToArray.js'
import hasUnicode from './hasUnicode.js'
import unicodeToArray from './unicodeToArray.js'

/**
 * Converts `string` to an array.
 * 转换字符串`string`为数组形式
 *
 * @private
 * @param {string} string The string to convert.  要转换的字符串
 * @returns {Array} Returns the converted array.  转换后的数组
 */
function stringToArray(string) {
  return hasUnicode(string) // 将ascii和unicode分开处理（逐字符）
    ? unicodeToArray(string)
    : asciiToArray(string)
}

export default stringToArray
