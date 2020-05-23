import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * Checks if `value` is likely an `arguments` object.
 * 检查`value`是否为类似`arguments`的对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`. 若为类似`arguments`的对象则返回true，否则返回false
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && getTag(value) == '[object Arguments]' // 判断标准：首先是类对象 且 其类型的字符串表示为[object Arguments]
}

export default isArguments
