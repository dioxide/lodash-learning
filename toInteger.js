import toFinite from './toFinite.js'

/**
 * Converts `value` to an integer.
 * 将`value`转换为一个整数值
 *
 * **Note:** This method is loosely based on 此方法是有损转换，详见规范
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert. 要转换的值
 * @returns {number} Returns the converted integer. 转换得到的整数值
 * @see isInteger, isNumber, toNumber
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
function toInteger(value) {
  const result = toFinite(value)  // 先转换为有限值
  const remainder = result % 1  // 对于1的余数部分（即消暑部分）

  return remainder ? result - remainder : result  // 对于有小数的减去其小数部分，否则直接返回
}

export default toInteger
