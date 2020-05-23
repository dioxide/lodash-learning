import baseIndexOf from './baseIndexOf.js'

/**
 * Used by `trim` and `trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 * 被`trim`和`trimStart`调用以获取 strSymbols字符串中第一个 未出现在chrSymbols中 的字符的索引位置
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect. 要检查的字符串
 * @param {Array} chrSymbols The character symbols to find. 要查找的字符符号（池）
 * @returns {number} Returns the index of the first unmatched string symbol.  第一个未匹配到的字符符号的索引值
 */
function charsStartIndex(strSymbols, chrSymbols) {
  let index = -1  // 从字符串数组的首位开始迭代
  const length = strSymbols.length  // 迭代到字符串数组的末位

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {} // 正序迭代，碰到第一个未出现在chrSymbols中的字符时，停止迭代，此时的index就是要找的索引值
  return index
}

export default charsStartIndex
