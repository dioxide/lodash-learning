/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g
const reHasRegExpChar = RegExp(reRegExpChar.source)

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 * 转义`string`中的RegExp特殊字符 "^", "$", "\", ".", "*", "+","?", "(", ")", "[", "]", "{", "}", and "|"
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape. 要转义的字符串
 * @returns {string} Returns the escaped string.  已转义的字符串
 * @see escape, escapeRegExp, unescape
 * @example
 *
 * escapeRegExp('[lodash](https://lodash.com/)')
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')  // 若字符含有regexp字符，替换它们为'再次转义'即转义的转义
    : (string || '')  // 否则返回原值（若原值为假则返回空字符串）
}

export default escapeRegExp
