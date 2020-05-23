import repeat from '../repeat.js'
import baseToString from './baseToString.js'
import castSlice from './castSlice.js'
import hasUnicode from './hasUnicode.js'
import stringSize from './stringSize.js'
import stringToArray from './stringToArray.js'

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 * 创建一个为根据`length`为`string`字符串补白（padding）的函数。 若字符个数超过补白长度`length`，补白字符`char`将被截断
 *
 * @private
 * @param {number} length The padding length. // 补白的长度
 * @param {string} [chars=' '] The string used as padding.  用来补白的字符，默认为空格字符
 * @returns {string} Returns the padding for `string`.  补白后的字符串
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : baseToString(chars) // 用来补白的字符默认为空格

  const charsLength = chars.length  // 用来补白的字符的长度
  if (charsLength < 2) {  //  若用来补白的字符长度小于2
    return charsLength ? repeat(chars, length) : chars  // 若用来补白的字符长度为真值则直接重复一遍，否则，返回原字符
  }
  const result = repeat(chars, Math.ceil(length / stringSize(chars))) // 重复用来补白的字符 （N） 次
  return hasUnicode(chars)  // 返回经过unicode判断处理后的拼接字符串
    ? castSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length)
}

export default createPadding
