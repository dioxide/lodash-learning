import baseSortedUniq from './.internal/baseSortedUniq.js'

/**
 * This method is like `uniqBy` except that it's designed and optimized
 * for sorted arrays.
 * 有序数组排重：此方法类似于`uniqBy`但其为有序数组而设计和优化。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器,即先经过该函数映射一遍再排重
 * @returns {Array} Returns the new duplicate free array. 新的数组副本
 * @example
 *
 * sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
 * // => [1.1, 2.3]
 */
function sortedUniqBy(array, iteratee) {
  return (array != null && array.length)
    ? baseSortedUniq(array, iteratee) // 借调基本方法实现
    : []  // 对于空数组直接反弹
}

export default sortedUniqBy
