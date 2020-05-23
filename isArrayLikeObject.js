import isArrayLike from './isArrayLike.js'
import isObjectLike from './isObjectLike.js'

/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 * 此方法类似`isArrayLike`，但其还会检查`value`是否是object。 就是说：即是类对象又是类数组
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`. 若是类数组对象则返回true，否则返回false
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value)  // value必须同时为类数组和类对象
}

export default isArrayLikeObject
