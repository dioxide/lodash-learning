import words from './words.js'
import toString from './toString.js'

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *  将`string`转换为下划线风格[snake case]
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert. 要转换的字符串
 * @returns {string} Returns the snake cased string.  下划线风格的字符串
 * @see camelCase, lowerCase, kebabCase, startCase, upperCase, upperFirst
 * @example
 *
 * snakeCase('Foo Bar')
 * // => 'foo_bar'
 *
 * snakeCase('fooBar')
 * // => 'foo_bar'
 *
 * snakeCase('--FOO-BAR--')
 * // => 'foo_bar'
 *
 * snakeCase('foo2bar')
 * // => 'foo_2_bar'
 */
const snakeCase = (string) => (
  // 先将字符串替换掉引号并拆分为由空格分割的单词组成的数组。 再使用reduce进行折叠，
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result + (index ? '_' : '') + word.toLowerCase()  // 每个单词都转换为小写 非首个单词的单词前加下划线。
  ), '')
)

export default snakeCase
