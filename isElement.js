import isObjectLike from './isObjectLike.js'
import isPlainObject from './isPlainObject.js'

/**
 * Checks if `value` is likely a DOM element.
 * 检查`value`是否类似于DOM element
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`. 若是则返回true，否则返回false
 * @example
 *
 * isElement(document.body)
 * // => true
 *
 * isElement('<body>')
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value) // 同时满足3个条件
}

export default isElement
