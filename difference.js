import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 * 创建一个由`array`的某些项但而不在另一个给定的数组中出现的 所组成的数组（即前者集合减去后者集合的差集），
 * 等值判断依照规范的[samevaluezero]. 结果值的顺序和值的引用由第一个数组决定
 * 此操作相当于数组间的减法
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 * 注意： 不像`pullAll`, 这个方法返回一个新的数组
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {...Array} [values] The values to exclude.  要排除的数组
 * @returns {Array} Returns the new array of filtered values. 新的过滤过的数组
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array, ...values) { // 第一个参数之后的所有传参都被认为是并收集到values中
  return isArrayLikeObject(array) // 即是类对象又是类数组
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))  // 借调baseFlatten将values扁平化，且递归其中的类对象数组结构，在借调baseDifference进行深度求差集
    : []  // 对于非类数组类型，直接返回空数组
}

export default difference
