import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 * 创建一个扁平化的数组，其值由应用`iteratee`在`collection`的每个元素上和扁平结果映射而成。
 * 迭代器在被调用时被传递3个参数： (value, index|key, collection).
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The function invoked per iteration. 每次迭调用的函数
 * @returns {Array} Returns the new flattened array.  新的扁平化的数组
 * @see flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [n, n]
 * }
 *
 * flatMap([1, 2], duplicate)
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1)  // 先由map带着iteratee映射一遍，再借调baseFlatten做1层扁平化
}

export default flatMap
