import baseSortedUniq from './.internal/baseSortedUniq.js'

/**
 * This method is like `uniq` except that it only works
 * for sorted arrays.
 * If the input array is known to be sorted `sortedUniq` is
 * faster than `uniq`.
 * 有序数组排重：此方法类似于`uniq`但其仅工作在有序数组上。
 * 如果输入数组已经被排除，该方法将快于`uniq`
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @returns {Array} Returns the new duplicate free array. 新的数组副本
 * @example
 *
 * sortedUniq([1, 1, 2])
 * // => [1, 2]
 */
function sortedUniq(array) {
  return (array != null && array.length)
    ? baseSortedUniq(array) // 借调基本方法实现
    : []  // 对于空数组直接反弹
}

export default sortedUniq
