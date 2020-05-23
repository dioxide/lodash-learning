import toInteger from './toInteger.js'

/** Used as references for various `Number` constants. 引用常量：最大安全整数 */
const MAX_SAFE_INTEGER = 9007199254740991

/**
 * Converts `value` to a safe integer. A safe integer can be compared and
 * represented correctly.
 * 将`value`转换为一个安全整数。 安全整数能够被比较和正确地表示。
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert. 要转换的值
 * @returns {number} Returns the converted integer. 转换后的整数
 * @example
 *
 * toSafeInteger(3.2)
 * // => 3
 *
 * toSafeInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toSafeInteger(Infinity)
 * // => 9007199254740991
 *
 * toSafeInteger('3.2')
 * // => 3
 */
function toSafeInteger(value) {
  if (!value) {
    return value === 0 ? value : 0  // 对于假值返回0
  }
  value = toInteger(value)  // 先转换为整数
  if (value < -MAX_SAFE_INTEGER) {
    return -MAX_SAFE_INTEGER  // 若小于负的最大安全整数，则返回负的最大安全整数
  }
  if (value > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER  // 若大于最大安全整数，则返回最大安全整数
  }
  return value  // 其他情况返回原值
}

export default toSafeInteger
