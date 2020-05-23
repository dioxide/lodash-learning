import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * Checks if `value` is classified as a `WeakSet` object.
 * 检查`value`是否归类为`WeakSet`对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.  若是则返回true
 * @example
 *
 * isWeakSet(new WeakSet)
 * // => true
 *
 * isWeakSet(new Set)
 * // => false
 */
function isWeakSet(value) {
  return isObjectLike(value) && getTag(value) == '[object WeakSet]'
}

export default isWeakSet
