import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * Checks if `value` is classified as a `WeakMap` object.
 * 检查`value`是否归类为`WeakMap`对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.  若是则返回true
 * @example
 *
 * isWeakMap(new WeakMap)
 * // => true
 *
 * isWeakMap(new Map)
 * // => false
 */
function isWeakMap(value) {
  return isObjectLike(value) && getTag(value) == '[object WeakMap]' // 似乎不存在非类对象 且 后半部分为真的情况啊？
}

export default isWeakMap
