import map from './map.js'
import baseIntersection from './.internal/baseIntersection.js'
import castArrayLikeObject from './.internal/castArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `intersection` except that it accepts `iteratee`
 * which is invoked for each element of each `arrays` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 * 此方法类似于`intersection`，但其接受一个应用在每个元素上并产生比较标准的迭代器`iteratee`.
 * 结果值的顺序和引用由第一个数组决定.
 * 迭代器被调用时被传递1个参数：（value）
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.  要检查的数组
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {Array} Returns the new array of intersecting values. 新的交集值构成数组
 * @example
 *
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [2.1]
 */
function intersectionBy(...arrays) {
  let iteratee = last(arrays) // 假定最后一个参数是迭代器
  const mapped = map(arrays, castArrayLikeObject) // 对数组做一遍映射以使其结果规整

  if (iteratee === last(mapped)) {
    iteratee = undefined  // 若此时iteratee于映射后数组的最后一项为同一个，则认为没有指定迭代器
  } else {
    mapped.pop()  // 否则，就是指定了迭代器，要将其从数据中排除出去
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, iteratee)  // 借调基本方法求结果，并指定迭代器
    : []  // 对于空数组直接返回结果
}

export default intersectionBy
