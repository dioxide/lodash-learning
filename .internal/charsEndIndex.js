import baseIndexOf from './baseIndexOf.js'

/**
 * Used by `trim` and `trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 * 被`trim`和`trimEnd`调用 以获取 strSymbols的字符串中最后一个 未在chrSymbols中出现 的字符的索引位置，  所谓'最后一个'是指倒叙查找
 * 如 ：[a,b,c，d, e] 和 [c,d]
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect. 要检查的字符串符号
 * @param {Array} chrSymbols The character symbols to find. 要查找的字符符号（池）
 * @returns {number} Returns the index of the last unmatched string symbol. 最后一个未匹配到的字符符号的索引值
 */
function charsEndIndex(strSymbols, chrSymbols) {
  let index = strSymbols.length // 从字符串数组的末位开始迭代

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}  // 倒序迭代strSymbols，碰到第一未出现在chrSymbols中的字符是，就相当于last one，取出这时的索引位置值即可
  return index
}

export default charsEndIndex
