import createPadding from './.internal/createPadding.js'
import stringSize from './.internal/stringSize.js'

/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 * 尾补白： 若`string`小于`length`,就在其右边（即尾部）补白。补白字符将在它们长度超过`length`时截断
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad. 要补白的字符串
 * @param {number} [length=0] The padding length. 要补白的长度（即期望的补白后长度）
 * @param {string} [chars=' '] The string used as padding.  用来补白的字符串
 * @returns {string} Returns the padded string. 补白后的字符串
 * @example
 *
 * padEnd('abc', 6)
 * // => 'abc   '
 *
 * padEnd('abc', 6, '_-')
 * // => 'abc_-_'
 *
 * padEnd('abc', 2)
 * // => 'abc'
 */
function padEnd(string, length, chars) {
  const strLength = length ? stringSize(string) : 0 // 字符串长度，依赖指定的补白长度，默认为0
  return (length && strLength < length)
    ? (string + createPadding(length - strLength, chars)) // 在右侧使用chars补白到length - strLength
    : (string || '')   // 若未指定 或 字符串长度小于要补白的长度，就返回原字符串（若其也为空则返回的是空字符串）
}

export default padEnd
