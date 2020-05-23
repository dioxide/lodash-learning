import baseSortedIndex from './.internal/baseSortedIndex.js'
import eq from './eq.js'

/**
 * This method is like `indexOf` except that it performs a binary
 * search on a sorted `array`.
 * 这个方法类似于`indexOf`，但其执行二分搜索在一个有序数组`array`上
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {*} value The value to search for.  要搜索的值
 * @returns {number} Returns the index of the matched value, else `-1`. 匹配到的值的索引，-1表示未找到
 * @example
 *
 * sortedIndexOf([4, 5, 5, 5, 6], 5)
 * // => 1
 */
function sortedIndexOf(array, value) {
  const length = array == null ? 0 : array.length
  if (length) {
    const index = baseSortedIndex(array, value) // 先获取该值应该插入的位置
    if (index < length && eq(array[index], value)) {
      return index  // 若该位置 等于 value， 则返回索引值
    }
  }
  return -1 // 对于空数组直接返回-1
}

export default sortedIndexOf
