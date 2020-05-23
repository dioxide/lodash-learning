import baseSum from './.internal/baseSum.js'

/**
 * Computes the sum of the values in `array`.
 * 计算`array`中值的总和
 *
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over. 要迭代的数组
 * @returns {number} Returns the sum. 总和
 * @example
 *
 * sum([4, 2, 8, 6])
 * // => 20
 */
function sum(array) {
  return (array != null && array.length)
    ? baseSum(array, (value) => value)  // 借调基本方法，并指定迭代器以求和
    : 0 // 对于空数组返回0
}

export default sum
