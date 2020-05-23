import baseSum from './.internal/baseSum.js'

/** Used as references for various `Number` constants. 引用NaN常量 */
const NAN = 0 / 0

/**
 * This method is like `mean` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be averaged.
 * The iteratee is invoked with one argument: (value).
 * 此方法类似`mean`但其接受一个 应用在`array`的每个元素上以生成要被平均的值的`iteratee`函数
 * 迭代器函数被传递1个参数：（value）
 *
 * @since 4.7.0
 * @category Math
 * @param {Array} array The array to iterate over.  要迭代的数组
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {number} Returns the mean. 平均数
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 *
 * meanBy(objects, ({ n }) => n)
 * // => 5
 */
function meanBy(array, iteratee) {
  const length = array == null ? 0 : array.length
  return length ? (baseSum(array, iteratee) / length) : NAN // 对空数组返回NaN，否则借调基本方法并指定迭代器求和，再除以数组长度得出平均值
}

export default meanBy
