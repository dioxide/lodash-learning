import baseDifference from './.internal/baseDifference.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 * 创建一个由array的不包含所有给定值的元素组成的数组，使用SameValueZero做相等比较
 * 属于数组的减法操作
 *
 * **Note:** Unlike `pull`, this method returns a new array.
 * 注意： 不像`pull`,这个方法返回一个新数组
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {...*} [values] The values to exclude.  要排除的值
 * @returns {Array} Returns the new array of filtered values.  新的过滤过的值组成的数组
 * @see difference, union, unionBy, unionWith, xor, xorBy, xorWith
 * @example
 *
 * without([2, 1, 2, 3], 1, 2)
 * // => [3]
 */
function without(array, ...values) {  // 使用ES6将任意个数的参数收集在一起
  return isArrayLikeObject(array) ? baseDifference(array, values) : []  // 必须是类对象数组才可进行操作，否则返回空数组
}

export default without
