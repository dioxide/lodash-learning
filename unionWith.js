import baseFlatten from './.internal/baseFlatten.js'
import baseUniq from './.internal/baseUniq.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `union` except that it accepts `comparator` which
 * is invoked to compare elements of `arrays`. Result values are chosen from
 * the first array in which the value occurs. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 * 此方法类似于`union`，但其接受一个 比较`arrays`每个元素的比较器`comparator`.
 * 结果值来自于第一个出现该值的数组中.
 * 比较器接受2个参数: (arrVal, othVal).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.  要检查的数组
 * @param {Function} [comparator] The comparator invoked per element. 应用在每个元素上的比较器
 * @returns {Array} Returns the new array of combined values. 组合后的新数组
 * @see difference, union, unionBy, without, xor, xorBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * unionWith(objects, others, isEqual)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
function unionWith(...arrays) {
  let comparator = last(arrays) // 假定最后一个参数为比较器
  comparator = typeof comparator === 'function' ? comparator : undefined  // 确认比较是否存在可用
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator) // 先借调baseFlatten做1级的扁平化（即将多个数组混到一个数组中），在借调baseUniq带着指定比较器去重
}

export default unionWith
