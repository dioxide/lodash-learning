import asciiSize from './asciiSize.js'
import hasUnicode from './hasUnicode.js'
import unicodeSize from './unicodeSize.js'

/**
 * Gets the number of symbols in `string`.
 * 获取`string`的符号数量
 *
 * @private
 * @param {string} string The string to inspect.  要检查的字符串
 * @returns {number} Returns the string size. 字符大小
 */
function stringSize(string) {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize(string) // 将ascii字符和unicode字符分开处理（逐字符）
}

export default stringSize
