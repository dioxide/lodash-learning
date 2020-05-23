import map from './map.js'
import baseIntersection from './.internal/baseIntersection.js'
import castArrayLikeObject from './.internal/castArrayLikeObject.js'

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 * 创建一个唯一值数组其值被包含在所有给出的数组中。 使用 [`SameValueZero`]做等值比较。 即数组的交集运算
 * 结果值的顺序和引用由第一个数组决定
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.  要检查的数组
 * @returns {Array} Returns the new array of intersecting values. 新的交集值构成的数组
 * @example
 *
 * intersection([2, 1], [2, 3])
 * // => [2]
 */
function intersection(...arrays) {
  const mapped = map(arrays, castArrayLikeObject) // 先映射一遍，同时数据格式
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)  // 若 映射结果非空 且 它们的第一项全等（？） 则调用基础方法求交集
    : []  // 否则，认定无交集
}

export default intersection
