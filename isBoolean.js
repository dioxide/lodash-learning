import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * Checks if `value` is classified as a boolean primitive or object.
 * 检查`value`是否被归类为布尔原始值或对象（如： Boolean(true)）
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`. 若为布尔值则返回true，否则返回false
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')  // value是原始值的true或false 或者类型字符串为'[object Boolean]'且为类对象
}

export default isBoolean
