import upperFirst from './upperFirst.js'
import words from './words.js'

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 * 将`string`转换为首字母大写[start case]
 *
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert. 要转换的字符串
 * @returns {string} Returns the start cased string. 转换后的字符串
 * @see camelCase, lowerCase, kebabCase, snakeCase, upperCase, upperFirst
 * @example
 *
 * startCase('--foo-bar--')
 * // => 'Foo Bar'
 *
 * startCase('fooBar')
 * // => 'Foo Bar'
 *
 * startCase('__FOO_BAR__')
 * // => 'FOO BAR'
 */
const startCase = (string) => (
  // 先将字符串拆分为由单词组成的数组。 再使用reduce进行折叠，且第一个字符前加空格，且将每个单词的首字母改为大写
  words(`${string}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result + (index ? ' ' : '') + upperFirst(word)
  ), '')
)

export default startCase
