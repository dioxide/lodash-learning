import castSlice from './.internal/castSlice.js'
import charsEndIndex from './.internal/charsEndIndex.js'
import charsStartIndex from './.internal/charsStartIndex.js'
import stringToArray from './.internal/stringToArray.js'

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 * 移除`string`中开头或结尾的空白字符或指定字符
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim. 要修减的字符串
 * @param {string} [chars=whitespace] The characters to trim. 要修减的字符
 * @returns {string} Returns the trimmed string.  修剪后的字符串
 * @see trimEnd, trimStart
 * @example
 *
 * trim('  abc  ')
 * // => 'abc'
 *
 * trim('-_-abc-_-', '_-')
 * // => 'abc'
 */
function trim(string, chars) {
  if (string && chars === undefined) {
    return string.trim()  // 若string有值，但未指定chars，则调用内建的trim方法
  }
  if (!string || !chars) {
    return (string || '') // 若二者都为假值，则直接返回原值（若原值为假则返回的是空字符串）
  }
  const strSymbols = stringToArray(string)  // 将string转换为字符数组
  const chrSymbols = stringToArray(chars) // 将chars转换为字符数组
  const start = charsStartIndex(strSymbols, chrSymbols) // 得到chars字符位于string字符串的第一处索引
  const end = charsEndIndex(strSymbols, chrSymbols) + 1 // 得到chars字符位于string字符串的最后一处索引

  return castSlice(strSymbols, start, end).join('') // 借调castSlice制作'有效字符'范围的切片。并联结为字符串
}

export default trim
