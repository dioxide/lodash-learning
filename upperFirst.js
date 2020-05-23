import createCaseFirst from './.internal/createCaseFirst.js'

/**
 * Converts the first character of `string` to upper case.
 * 将字符串`string`的第一个字符转换为大写
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert. 要转换的字符串
 * @returns {string} Returns the converted string. 转换后的字符串
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = createCaseFirst('toUpperCase') // 借调包装函数生成大写方法

export default upperFirst
