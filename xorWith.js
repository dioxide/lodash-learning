import baseXor from './.internal/baseXor.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `xor` except that it accepts `comparator` which is
 * invoked to compare elements of `arrays`. The order of result values is
 * determined by the order they occur in the arrays. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 * 类似`xor`但其接受一个 比较`arrays`的每个元素的比较器`comparator`
 * 结果值的顺序由它们出现在数组中的顺序决定。
 * 比较器被传递2个参数：（arrVal, othVal）
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.  要检查的数组
 * @param {Function} [comparator] The comparator invoked per element. 应用在每个元素上的比较其
 * @returns {Array} Returns the new array of filtered values. 新的过滤过的值组成的元素
 * @see difference, union, unionBy, unionWith, without, xor, xorBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * xorWith(objects, others, isEqual)
 * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
function xorWith(...arrays) {
  let comparator = last(arrays) // 假定最后一个参数为迭代器
  comparator = typeof comparator === 'function' ? comparator : undefined  // 确定假定的迭代器是否可用
  return baseXor(arrays.filter(isArrayLikeObject), undefined, comparator) // 先过滤，再异或(并指定比较器)
}

export default xorWith
