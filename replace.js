/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 * 替换`string`中匹配`pattern`的字符为`replacement`
 *
 * **Note:** This method is based on
 * [`String#replace`](https://mdn.io/String/replace).
 * 注意：此方法基于[`String#replace`]
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to modify.  要修改的字符串
 * @param {RegExp|string} pattern The pattern to replace. 要替换的模式
 * @param {Function|string} replacement The match replacement.  要替换的内容
 * @returns {string} Returns the modified string. 修改后的字符串
 * @see truncate, trim
 * @example
 *
 * replace('Hi Fred', 'Fred', 'Barney')
 * // => 'Hi Barney'
 */
function replace(...args) {
  const string = `${args[0]}` // 去除要修改的字符串
  // 参数长度小于3，不满足替换条件，直接返回原字符串，否则使用内建方法replace将第2个参数替换为第3个参数
  return args.length < 3 ? string : string.replace(args[1], args[2])
}

export default replace
