import isObject from './isObject.js'
import isSymbol from './isSymbol.js'

/** Used as references for various `Number` constants. NaN值的常量引用 */
const NAN = 0 / 0

/** Used to match leading and trailing whitespace. 匹配首位的空白字符 */
const reTrim = /^\s+|\s+$/g

/** Used to detect bad signed hexadecimal string values. 用来探测错误的带符号十六进制字符串值 */
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

/** Used to detect binary string values. 用来匹配二进制字符串值 */
const reIsBinary = /^0b[01]+$/i

/** Used to detect octal string values. 用来匹配八进制字符串值 */
const reIsOctal = /^0o[0-7]+$/i

/** Built-in method references without a dependency on `root`. 引用内建方法而不依赖`root` */
const freeParseInt = parseInt

/**
 * Converts `value` to a number.
 * 将'value'转换为数组
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process. 要处理的值
 * @returns {number} Returns the number.  数字
 * @see isInteger, toInteger, isNumber
 * @example
 *
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value === 'number') {
    return value  // 若已经是number类型，则直接返回该值
  }
  if (isSymbol(value)) {
    return NAN  // 若是symbol类型，则返回NaN
  }
  if (isObject(value)) {
    // 对于object类型： 若其由valueOf是functoin，则获取其执行结果
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value
    // 再次检查其类型，若仍是对象，则强制转换为字符串，否则保持原值不变
    value = isObject(other) ? `${other}` : other
  }
  if (typeof value !== 'string') {
    return value === 0 ? value : +value // 对于非字符串： 若是非0，则强制转换一下？
  }
  value = value.replace(reTrim, '') // 去掉首尾空白
  const isBinary = reIsBinary.test(value) // 看是否为二进制字符串值
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)  // 若是二进制或八进制字符串值，则去掉其前2个标志前缀字符，再使用parseInt转换为相应地整数
    : (reIsBadHex.test(value) ? NAN : +value) // 其他情况： 若是无效十六进制字符串值则返回NaN，否则返回+value（又一次转换为数字）
}

export default toNumber
