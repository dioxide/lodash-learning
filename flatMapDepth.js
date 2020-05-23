import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/**
 * This method is like `flatMap` except that it recursively flattens the
 * mapped results up to `depth` times.
 * 此方法类似`flatMap`，但其递归地扁平化映射的结果，最高递归层级为`depth`
 *
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @param {number} [depth=1] The maximum recursion depth.  最大递归层级
 * @returns {Array} Returns the new flattened array.  新的扁平化了的数组
 * @see flatMap, flatMapDeep, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDepth([1, 2], duplicate, 2)
 * // => [[1, 1], [2, 2]]
 */
function flatMapDepth(collection, iteratee, depth) {
  depth = depth === undefined ? 1 : +depth  // 得到有效的递归层级
  return baseFlatten(map(collection, iteratee), depth)  // 借调baseFlatten实现
}

export default flatMapDepth
