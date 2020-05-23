import root from './.internal/root.js'

/** Used to match leading and trailing whitespace. 用来匹配首尾的空白字符 */
const reTrimStart = /^\s+/

/* Built-in method references for those with the same name as other `lodash` methods. 与其他`lodash`方法同名的内置方法引用 */
const nativeParseInt = root.parseInt

/**
 * Converts `string` to an integer of the specified radix. If `radix` is
 * `undefined` or `0`, a `radix` of `10` is used unless `string` is a
 * hexadecimal, in which case a `radix` of `16` is used.
 * 将`string`转换为一个指定的基数（进制）的整数。 若`radix`是undefined或0，radix将默认为10，除非`string`是
 * 一个16进制，此时radix使用16
 *
 * **Note:** This method aligns with the
 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
 * 注意： 此方法与`parseInt`一致
 *
 * @since 1.1.0
 * @category String
 * @param {string} string The string to convert.  要转换的字符串
 * @param {number} [radix=10] The radix to interpret `string` by. 用来解释`string`的基数
 * @returns {number} Returns the converted integer. 转换或的整数
 * @example
 *
 * parseInt('08')
 * // => 8
 */
function parseInt(string, radix) {
  if (radix == null) {
    radix = 0 // radix在此默认0
  } else if (radix) {
    radix = +radix  // 强制转换为数字
  }
  // 去掉string的首尾空白字符，并借调内建方法parseInt进行转换
  return nativeParseInt(`${string}`.replace(reTrimStart, ''), radix || 0)
}

export default parseInt
