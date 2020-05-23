import isSymbol from '../isSymbol.js'

/** Used as references for various `Number` constants. NaN的常量引用 */
const NAN = 0 / 0

/**
 * The base implementation of `toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 * 'toNumber'的基本实现，但其不保证正确转换二进制、十六进制、八进制字符串
 *
 * @private
 * @param {*} value The value to process. 要处理的值
 * @returns {number} Returns the number.  处理后的数字
 */
function baseToNumber(value) {
  // 若类型已经为'number'则直接返回
  if (typeof value === 'number') {
    return value
  }
  // 若类型为'Symbol'则返回NAN
  if (isSymbol(value)) {
    return NAN
  }
  // 通过前置的+操作，自动类型转换为数字类型
  return +value
}

export default baseToNumber
