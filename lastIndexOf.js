import baseFindIndex from './.internal/baseFindIndex.js'
import baseIsNaN from './.internal/baseIsNaN.js'
import strictLastIndexOf from './.internal/strictLastIndexOf.js'
import toInteger from './toInteger.js'

/**
 * This method is like `indexOf` except that it iterates over elements of
 * `array` from right to left.
 * 此方法类似于`indexOf`，但其从右往左迭代`array`的元素
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的元素
 * @param {*} value The value to search for.  要搜索的值
 * @param {number} [fromIndex=array.length-1] The index to search from. 搜索开始的位置，默认为数组末位
 * @returns {number} Returns the index of the matched value, else `-1`. 匹配到的值的索引，-1为未找到
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 *
 * // Search from the `fromIndex`.
 * lastIndexOf([1, 2, 1, 2], 2, 2)
 * // => 1
 */
function lastIndexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1 // 对于空数组，直接返回-1
  }
  let index = length
  if (fromIndex !== undefined) {  // 若指定了搜索开始索引
    index = toInteger(fromIndex)  // 转换为有效索引值
    index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1) // 获取有效索引： 负值转换为相应等正值， 正值则不能超过数组长度
  }
  return value === value
    ? strictLastIndexOf(array, value, index)  // 使用严格相等来查找
    : baseFindIndex(array, baseIsNaN, index, true)  // 对于NaN值的特殊查找
}

export default lastIndexOf
