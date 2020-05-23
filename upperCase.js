import words from './words.js'
import toString from './toString.js'

/**
 * Converts `string`, as space separated words, to upper case.
 * 将`string`（以空格分隔的单词）转换为大写。
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert. 要转换的字符串
 * @returns {string} Returns the upper cased string.  大写的字符串
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperFirst
 * @example
 *
 * upperCase('--foo-bar')
 * // => 'FOO BAR'
 *
 * upperCase('fooBar')
 * // => 'FOO BAR'
 *
 * upperCase('__foo_bar__')
 * // => 'FOO BAR'
 */
const upperCase = (string) => (
  // 先将string转换为由单词组成的数组。再使用reduce折叠到result中
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result + (index ? ' ' : '') + word.toUpperCase()  // 非第一个字符前加空格，同时每个单词都转换为大写
  ), '')
)

export default upperCase
