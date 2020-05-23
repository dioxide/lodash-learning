import words from './words.js'
import toString from './toString.js'

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * 转换`string`为短横线连接式[kebab case]
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert. 要转换的字符串
 * @returns {string} Returns the kebab cased string.  短横线连接式的字符串
 * @see camelCase, lowerCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 */
const kebabCase = (string) => (
  // 先将string转换为由单词组成的数组。再使用reduce折叠到result中
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result + (index ? '-' : '') + word.toLowerCase()  // 第一个单词不加短横线，其余单词前都加，并将单词转换为小写
  ), '')
)

export default kebabCase
