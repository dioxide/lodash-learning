import baseFindIndex from './baseFindIndex.js'
import baseIsNaN from './baseIsNaN.js'
import strictIndexOf from './strictIndexOf.js'

/**
 * The base implementation of `indexOf` without `fromIndex` bounds checks.
 * `indexOf`的基本实现但不进行`fromIndex`的边界检查
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {*} value The value to search for.  要搜索的值
 * @param {number} fromIndex The index to search from.  搜索开始的之中
 * @returns {number} Returns the index of the matched value, else `-1`. 匹配到的值的索引位置，-1表示为匹配到
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)  // 若 value不是NaN，则借调strictIndexOf来实现
    : baseFindIndex(array, baseIsNaN, fromIndex)  // 否则 意为要搜索NaN值，需要特别处理： 使用baseIsNaN作为断言函数并借调baseFindIndex来实现
}

export default baseIndexOf
