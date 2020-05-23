import baseMean from './meanBy.js'

/**
 * Computes the mean of the values in `array`.
 * 计算`array`中值的平均值
 *
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.  要迭代的数组
 * @returns {number} Returns the mean.  平均值
 * @example
 *
 * mean([4, 2, 8, 6])
 * // => 5
 */
function mean(array) {
  return baseMean(array, (value) => value)  // 借调基本方法，并指定迭代器求平均值
}

export default mean
