import baseToString from './.internal/baseToString.js'
import castSlice from './.internal/castSlice.js'
import hasUnicode from './.internal/hasUnicode.js'
import isObject from './isObject.js'
import isRegExp from './isRegExp.js'
import stringSize from './.internal/stringSize.js'
import stringToArray from './.internal/stringToArray.js'
import toString from './toString.js'

/** Used as default options for `truncate`. 默认的`截取`选项值 */
const DEFAULT_TRUNC_LENGTH = 30
const DEFAULT_TRUNC_OMISSION = '...'

/** Used to match `RegExp` flags from their coerced string values. 用于匹配来自其强制字符串值的RegReg标志  */
const reFlags = /\w*$/

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 * 截断`string`若其超过了给定的字符串长度。 截断字符串的最后一个字符替换为省略号字符（其默认为"..."）
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate. 要截断的字符串
 * @param {Object} [options={}] The options object. 选项
 * @param {number} [options.length=30] The maximum string length. 最大字符串长度（这里的长度值都是已被处理过的和表现一直的个数，屏蔽了编码的差异）
 * @param {string} [options.omission='...'] The string to indicate text is omitted. 表示文本被省略的字符串
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to. 用来截断的分隔符模式
 * @returns {string} Returns the truncated string. 被截断的字符串
 * @see replace
 * @example
 *
 * truncate('hi-diddly-ho there, neighborino')
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * })
 * // => 'hi-diddly-ho there,...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * })
 * // => 'hi-diddly-ho there...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * })
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  let separator // 记录分隔符模式
  let length = DEFAULT_TRUNC_LENGTH // 默认截断长度
  let omission = DEFAULT_TRUNC_OMISSION // 默认省略符

  if (isObject(options)) {  // 出来options指定的选项值
    separator = 'separator' in options ? options.separator : separator  // 分隔符模式
    length = 'length' in options ? options.length : length  // 截断长度
    omission = 'omission' in options ? baseToString(options.omission) : omission  // 默认省略符
  }

  string = toString(string) // 强制转换为字符串

  let strSymbols  // 字符数组
  let strLength = string.length // 字符串长度
  if (hasUnicode(string)) { // 若stirng含有unicode，则需要重新获取：字符数组和其长度
    strSymbols = stringToArray(string)
    strLength = strSymbols.length
  }
  if (length >= strLength) {
    return string // 若要截断的长度大于string的长度，则无需截断，原值返回
  }
  let end = length - stringSize(omission) // 除取省略号要结束的位置 = 期望最大长度 - 省略号长度
  if (end < 1) {
    return omission // 相当于截取后就没有内容了， 所以直接返回个省略号算了
  }
  let result = strSymbols // 初始结果为：期望长度的切片， 若存在字符数组strSymbols，则使用castSlice，否则使用内建的slice
    ? castSlice(strSymbols, 0, end).join('')
    : string.slice(0, end)

  if (separator === undefined) {
    return result + omission  // 若未指定分割模式，则可在此加上省略号
  }
  if (strSymbols) {
    end += (result.length - end)  // 若存在字符数组strSymbols，期望结束位置end需要移动为： end + 此时result长度与end的差值
  }
  if (isRegExp(separator)) {  // 若指定了分割模式，且是正则表达式
    if (string.slice(end).search(separator)) {  // 若*当前*string匹配到了separator
      let match // 记录是否匹配到
      let newEnd  // 新的结束位置
      const substring = result  // 默认匹配子串为result

      if (!separator.global) {  // 若正则未非全局模式则转换为全局模式
        separator = RegExp(separator.source, `${reFlags.exec(separator) || ''}g`)
      }
      separator.lastIndex = 0 // 最后一次匹配到的位置
      while ((match = separator.exec(substring))) {
        newEnd = match.index  // 使用separator一直尝试匹配当前子串substring，并更新match和newEnd状态
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd) // 更新结果数组result为： 新的结束位置的切片（若新位置不可能用，则仍使用之前的end位置）
    }
  } else if (string.indexOf(baseToString(separator), end) != end) { // 若指定了分割模式，且不是位于*当前*string的最后一个字符的索引位置（即需要进行截取）
    const index = result.lastIndexOf(separator) // 找到最后一次出现分割符的索引位置
    if (index > -1) {
      result = result.slice(0, index) // 若找到了索引值，则再次截取（认为index之后的字符也是要省略的字符，不管了）
    }
  }
  return result + omission  // 最后加上 表示截断的省略号
}

export default truncate
