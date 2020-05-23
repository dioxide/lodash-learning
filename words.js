import unicodeWords from './.internal/unicodeWords.js'

const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
)

/** Used to match words composed of alphanumeric characters. 用于匹配由字母数字字符组成的单词 */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

function asciiWords(string) {
  return string.match(reAsciiWord)
}

/**
 * Splits `string` into an array of its words.
 * 将`string`拆分为由构成它的单词组成的数组
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect. 要检查的字符串
 * @param {RegExp|string} [pattern] The pattern to match words. 用来匹配单词的模式
 * @returns {Array} Returns the words of `string`.  单词组成的数组
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern) {
  if (pattern === undefined) {  // 若模式未指定
    // 则默认： 存在unicode字符就使用unicode的预设正则表达式来匹配，否则使用ascii来匹配
    const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string)
    return result || [] // 若结果为假值，返回的就是空数组
  }
  return string.match(pattern) || []  // 若定义了匹配模式，则直接使用string的内建方法进行匹配，未匹配到结果则返回空数组
}

export default words
