import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/**
 * This method is like `flatMap` except that it recursively flattens the
 * mapped results.
 * 此方法类似`flatMap`，但其递归地扁平化映射的结果
 *
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Array} Returns the new flattened array.  新的扁平化了的数组
 * @see flatMap, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDeep([1, 2], duplicate)
 * // => [1, 1, 2, 2]
 */
function flatMapDeep(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), INFINITY) // 借调baseFlatten进行无限层级的扁平化
}

export default flatMapDeep
