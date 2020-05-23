import baseIndexOf from './.internal/baseIndexOf.js'
import toInteger from './toInteger.js'

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 * 获取`value`在`array`中第一次出现时的索引值. 使用 [`SameValueZero`]进行等值比较. 若`fromIndex`是负值，则将被视为相对于数组末位的偏移量，注意：搜索方向是不变的，仍是从左往右。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {*} value The value to search for.  要搜索的值
 * @param {number} [fromIndex=0] The index to search from.  搜索开始的位置索引，默认为0
 * @returns {number} Returns the index of the matched value, else `-1`. 匹配到值时的索引，-1表示未找到
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * // Search from the `fromIndex`.
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1 // 对于空数组，直接返回-1
  }
  let index = fromIndex == null ? 0 : toInteger(fromIndex)  // 处理搜索开始位置为有效值
  if (index < 0) {
    index = Math.max(length + index, 0) // 处理搜索位置为负值时的转换
  }
  return baseIndexOf(array, value, index) // 借调基本实现方法，获取索引值
}

export default indexOf
