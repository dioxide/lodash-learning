import createPadding from './.internal/createPadding.js'
import stringSize from './.internal/stringSize.js'

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 * 补白：若`string`小于`length`,就在其左边和右边（即首尾）补白。补白字符将在不能均匀分布为`length`时截断
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to pad. 要补白的字符串
 * @param {number} [length=0] The padding length. 要补白的长度（即期望的补白后长度）
 * @param {string} [chars=' '] The string used as padding. 用来补白的字符串
 * @returns {string} Returns the padded string. 补白后的字符串
 * @example
 *
 * pad('abc', 8)
 * // => '  abc   '
 *
 * pad('abc', 8, '_-')
 * // => '_-abc_-_'
 *
 * pad('abc', 2)
 * // => 'abc'
 */
function pad(string, length, chars) {
  const strLength = length ? stringSize(string) : 0 // 字符串长度，依赖指定的补白长度，默认为0
  if (!length || strLength >= length) {
    return (string || '') // 若未指定 或 字符串长度大于要补白的长度， 就返回原字符串（若其也为空则返回的是空字符串）
  }
  const mid = (length - strLength) / 2  // 中值（即没侧要补白的长度） = （期望长度 - 字符串长度）/ 2
  return (
    createPadding(Math.floor(mid), chars) + // 在左侧使用chars补白到Math.floor(mid)
    string +  // 将原字符串起来
    createPadding(Math.ceil(mid), chars)  // 在右侧使用chars补白到Math.ceil(mid)
  )
}

export default pad
