import map from './map.js'
import baseIntersection from './.internal/baseIntersection.js'
import castArrayLikeObject from './.internal/castArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `intersection` except that it accepts `comparator`
 * which is invoked to compare elements of `arrays`. The order and references
 * of result values are determined by the first array. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 * 此方法类似于`intersection`，但其接受一个用来比较`arrays`中元素的比较器`comparator`.
 * 结果值的顺序和引用由第一个数组决定.
 * 迭代器被调用时被传递2个参数：（arrVal, othVal）
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect. 要检查的数组
 * @param {Function} [comparator] The comparator invoked per element. 应用在每个元素上的比较器
 * @returns {Array} Returns the new array of intersecting values. 新的交集值构成数组
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * intersectionWith(objects, others, isEqual)
 * // => [{ 'x': 1, 'y': 2 }]
 */
function intersectionWith(...arrays) {
  let comparator = last(arrays) // 假定最后一个参数是比较器
  const mapped = map(arrays, castArrayLikeObject) // 对数组做一遍映射以使其结果规整

  comparator = typeof comparator === 'function' ? comparator : undefined
  if (comparator) {
    mapped.pop()  // 指定了比较器，要将其从数据中排除出去
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, undefined, comparator) // 借调基本方法求结果，并指定比较器，而不使用迭代器
    : []  // 对于空数组直接返回结果
}

export default intersectionWith
