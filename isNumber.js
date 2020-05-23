import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * 检查`value`是否被归类为`Number`原始值或对象
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `Number.isFinite` method.
 * 注意： 要排除被归类为Number的`Infinity`, `-Infinity`, 和 `NaN`值，请使用`Number.isFinite`方法
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.  要检查的值
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.  若是则返回true
 * @see isInteger, toInteger, toNumber
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
function isNumber(value) {
  return typeof value === 'number' ||
    (isObjectLike(value) && getTag(value) == '[object Number]')   // 类对象且类型字符串为'[object Number]'
}

export default isNumber
