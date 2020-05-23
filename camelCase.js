import upperFirst from './upperFirst.js'
import words from './words.js'
import toString from './toString.js'

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 * 将`string`转换为驼峰风格[camel case]
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert. 要转换的字符串
 * @returns {string} Returns the camel cased string. 驼峰风格的字符串
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = (string) => (
  // 先将字符串拆分为由单词组成的数组。 再使用reduce进行折叠，
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    word = word.toLowerCase() // word先转换为小写
    return result + (index ? upperFirst(word) : word) // 若不是第一个单词则使其首字母大写，其他单词不变
  }, '')
)

export default camelCase
