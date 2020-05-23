import baseXor from './.internal/baseXor.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 * 创建一个由 给定数组的异或[symmetric difference]操作产生的唯一值 组成的数组。 即保留不同的，丢弃相同的元素
 * 结果值的顺序由它们在出现在数组中的顺序决定
 *
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.  要检查的数组
 * @returns {Array} Returns the new array of filtered values. 新的过滤了的值组成的数组
 * @see difference, union, unionBy, unionWith, without, xorBy, xorWith
 * @example
 *
 * xor([2, 1], [2, 3])
 * // => [1, 3]
 */
function xor(...arrays) {
  return baseXor(arrays.filter(isArrayLikeObject))  // 先过滤再异或
}

export default xor
