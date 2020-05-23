import castSlice from './.internal/castSlice.js'
import charsEndIndex from './.internal/charsEndIndex.js'
import stringToArray from './.internal/stringToArray.js'

const methodName = ''.trimRight ? 'trimRight': 'trimEnd'  // 引用内建的trimEnd方法

/**
 * Removes trailing whitespace or specified characters from `string`.
 * 移除`string`结尾的空白字符或指定字符
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim. 要修减的字符串
 * @param {string} [chars=whitespace] The characters to trim. 要修减的字符
 * @returns {string} Returns the trimmed string. 修剪后的字符串
 * @see trim, trimStart
 * @example
 *
 * trimEnd('  abc  ')
 * // => '  abc'
 *
 * trimEnd('-_-abc-_-', '_-')
 * // => '-_-abc'
 */
function trimEnd(string, chars) {
  if (string && chars === undefined) {
    return string[methodName]() // 若string有值，但未指定chars，则调用内建的trim方法
  }
  if (!string || !chars) {
    return (string || '') // 若二者都为假值，则直接返回原值（若原值为假则返回的是空字符串）
  }
  const strSymbols = stringToArray(string)  // 将string转换为字符数组
  const end = charsEndIndex(strSymbols, stringToArray(chars)) + 1 // 得到chars字符位于string字符串的最后一处索引
  return castSlice(strSymbols, 0, end).join('') // 借调castSlice制作'有效字符'范围的切片。并联结为字符串
}

export default trimEnd
