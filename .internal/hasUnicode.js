/** Used to compose unicode character classes. 用来组合unicode字符类 */
const rsAstralRange = '\\ud800-\\udfff'
const rsComboMarksRange = '\\u0300-\\u036f'
const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
const rsComboSymbolsRange = '\\u20d0-\\u20ff'
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff'
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff'
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange
const rsVarRange = '\\ufe0e\\ufe0f'

/** Used to compose unicode capture groups. 用来组合unicode捕获组 */
const rsZWJ = '\\u200d'

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). 检测0宽度连接字符或编码点 */
const reHasUnicode = RegExp(`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`)

/**
 * Checks if `string` contains Unicode symbols.
 * 检查`string`是否包含Unicode符号
 *
 * @private
 * @param {string} string The string to inspect. 要检查的字符串
 * @returns {boolean} Returns `true` if a symbol is found, else `false`. 若包含则返回true，否则返回false
 */
function hasUnicode(string) {
  return reHasUnicode.test(string)  // 使用正则表达式来检测Unicode符号
}

export default hasUnicode
