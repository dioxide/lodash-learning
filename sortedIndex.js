import baseSortedIndex from './.internal/baseSortedIndex.js'

/**
 * Uses a binary search to determine the lowest index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 * 使用二分搜索来确定“value”应该插入`array`中的最小索引以保持其排序顺序。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The sorted array to inspect.  要检查的数组
 * @param {*} value The value to evaluate.  要评估的值
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`. `value`应该插入的索引位置
 * @example
 *
 * sortedIndex([30, 50], 40)
 * // => 1
 */
function sortedIndex(array, value) {
  return baseSortedIndex(array, value)  // 借调基本方法实现
}

export default sortedIndex
