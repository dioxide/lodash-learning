import toInteger from './toInteger.js'

/** Used as references for the maximum length and index of an array. 引用常量：数组的最大索引值 */
const MAX_ARRAY_LENGTH = 4294967295

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 * 将`value`转换为类数组对象可用的合适的长度值length
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 * 注意： 此方法基于规范的['ToLength']
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert. 要转换的值
 * @returns {number} Returns the converted integer. 转换后的整数
 * @example
 *
 * toLength(3.2)
 * // => 3
 *
 * toLength(Number.MIN_VALUE)
 * // => 0
 *
 * toLength(Infinity)
 * // => 4294967295
 *
 * toLength('3.2')
 * // => 3
 */
function toLength(value) {
  if (!value) {
    return 0  // 对于假值返回0
  }
  value = toInteger(value)  // 先转换为整数
  if (value < 0) {
    return 0  // 若是负数，则返回0
  }
  if (value > MAX_ARRAY_LENGTH) {
    return MAX_ARRAY_LENGTH // 大于允许的最大数组长度值，则返回这个常量值
  }
  return value  // 否则，才返回期望的值
}

export default toLength
