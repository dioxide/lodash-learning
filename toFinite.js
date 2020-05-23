import toNumber from './toNumber.js'

/** Used as references for various `Number` constants. 引用`Number`的一些常量值 */
const INFINITY = 1 / 0
const MAX_INTEGER = 1.7976931348623157e+308

/**
 * Converts `value` to a finite number.
 * 转换`value`到一个有限数，如将某些内置常量转换为数字值
 *
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert. 要转换的值
 * @returns {number} Returns the converted number.  换行后的值
 * @example
 *
 * toFinite(3.2)
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0  // 若value为假值时： value是0则直接返回它，否则返回0
  }
  value = toNumber(value) // 强制转换为Number
  if (value === INFINITY || value === -INFINITY) {  // 若值是正负无穷
    const sign = (value < 0 ? -1 : 1) // 得到相应的符号
    return sign * MAX_INTEGER // 通过用符号 乘以最大整数的方式得到该边界值
  }
  return value === value ? value : 0  // 其他情况处理： 若value不具有反射性（比如NaN）则返回0
}

export default toFinite
