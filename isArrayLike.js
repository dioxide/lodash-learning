import isLength from './isLength.js'

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 * 检查`value`是否是类数组. 类数组被认为是：其不是function类型且有大于等于0且小于最大安全整数的'length'属性
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`. 若是类数组则返回true，否则返回false
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */
function isArrayLike(value) {
  return value != null && typeof value !== 'function' && isLength(value.length) // 该值非空 且 不为function类型 且 具有合法的length属性
}

export default isArrayLike
