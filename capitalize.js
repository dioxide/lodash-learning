import upperFirst from './upperFirst.js'
import toString from './toString.js'

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 * 将`string`转换为首字符大写，其余字母小写
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize. 要转换的字符串
 * @returns {string} Returns the capitalized string.  首字母大写的字符串
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
const capitalize = (string) => upperFirst(toString(string).toLowerCase()) // 先强制转为字符串并全部转换为小写，再将首字母转换为大写


export default capitalize
