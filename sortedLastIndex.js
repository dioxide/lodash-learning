import baseSortedIndex from './.internal/baseSortedIndex.js'

/**
 * This method is like `sortedIndex` except that it returns the highest
 * index at which `value` should be inserted into `array` in order to
 * maintain its sort order.
 * 这个方法类似于`sortedIndex`，但其返回“value”应该插入`array`中的最大索引以保持其排序顺序。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect. 要检查的数组
 * @param {*} value The value to evaluate.  要评估的值
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`. `value`应该插入的索引位置
 * @example
 *
 * sortedLastIndex([4, 5, 5, 5, 6], 5)
 * // => 4
 */
function sortedLastIndex(array, value) {
  return baseSortedIndex(array, value, true)  // 借调基本方法实现,指定从右往左查询
}

export default sortedLastIndex
