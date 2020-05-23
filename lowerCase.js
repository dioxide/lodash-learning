import words from './words.js'
import toString from './toString.js'

const reQuotes = /['\u2019]/g

/**
 * Converts `string`, as space separated words, to lower case.
 * 将`string`中以空格分隔的单词转换为小写。
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert. 要转换的字符串
 * @returns {string} Returns the lower cased string. 小写的字符串
 * @see camelCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * lowerCase('--Foo-Bar--')
 * // => 'foo bar'
 *
 * lowerCase('fooBar')
 * // => 'foo bar'
 *
 * lowerCase('__FOO_BAR__')
 * // => 'foo bar'
 */
const lowerCase = (string) => (
  // 先将字符串替换掉引号并拆分为由单词组成的数组。 再使用reduce进行折叠，
  words(toString(string).replace(reQuotes, '')).reduce((result, word, index) => (
    result + (index ? ' ' : '') + word.toLowerCase()  // 每个单词都转换为小写，并在非第一个单词前加上空格
  ), '')
)

export default lowerCase
