import baseSum from './.internal/baseSum.js'

/**
 * This method is like `sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 * 此方法类似`sum`但其接受一个 应用在`array`的每个元素上以生成用来求和的值的`iteratee`函数。
 * 迭代器函数接受1个参数： （value）
 *
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over. 要迭代的数组
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {number} Returns the sum. 总和
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 *
 * sumBy(objects, ({ n }) => n)
 * // => 20
 */
function sumBy(array, iteratee) {
  return (array != null && array.length)
    ? baseSum(array, iteratee)  // 借调基本方法并指定迭代器求和
    : 0 // 对于空数组返回0
}

export default sumBy
