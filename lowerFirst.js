import createCaseFirst from './.internal/createCaseFirst.js'

/**
 * Converts the first character of `string` to lower case.
 * 将`string`的第一个字符转换为小写
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert. 要转换的字符串
 * @returns {string} Returns the converted string. 转换过的字符串
 * @example
 *
 * lowerFirst('Fred')
 * // => 'fred'
 *
 * lowerFirst('FRED')
 * // => 'fRED'
 */
const lowerFirst = createCaseFirst('toLowerCase') // 创建包装过的首字母小写函数

export default lowerFirst
