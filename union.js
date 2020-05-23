import baseFlatten from './.internal/baseFlatten.js'
import baseUniq from './.internal/baseUniq.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 * 创建由多个数组的唯一值组成的数组，对多个数组使用[`SameValueZero`]做等值比较。
 * 即做多个数组并集运算，并去重
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.  要检查的数组
 * @returns {Array} Returns the new array of combined values. 组合后的新数组
 * @see difference, unionBy, unionWith, without, xor, xorBy
 * @example
 *
 * union([2, 3], [1, 2])
 * // => [2, 3, 1]
 */
function union(...arrays) { // 使用ES6的展开语法，收集多个数组到一个变量中
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true))  // 先借调baseFlatten进行1层的扁平化，在借调baseUniq去重
}

export default union
