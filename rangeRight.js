import createRange from './.internal/createRange.js'

/**
 * This method is like `range` except that it populates values in
 * descending order.
 * 类似与`range`,但其以降序来填充生成的值
 *
 * @since 4.0.0
 * @category Util
 * @param {number} [start=0] The start of the range. 区间的开始
 * @param {number} end The end of the range. 区间的结束
 * @param {number} [step=1] The value to increment or decrement by. 要增加或减少的值
 * @returns {Array} Returns the range of numbers. 区间的数字
 * @see inRange, range
 * @example
 *
 * rangeRight(4)
 * // => [3, 2, 1, 0]
 *
 * rangeRight(-4)
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 5)
 * // => [4, 3, 2, 1]
 *
 * rangeRight(0, 20, 5)
 * // => [15, 10, 5, 0]
 *
 * rangeRight(0, -4, -1)
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 4, 0)
 * // => [1, 1, 1]
 *
 * rangeRight(0)
 * // => []
 */
const rangeRight = createRange(true)  // 创建区间函数（指定其生成方向）

export default rangeRight
