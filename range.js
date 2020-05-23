import createRange from './.internal/createRange.js'

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start`, and `start` is then set to `0`.
 * 创建一个数字（正值和/或负值）组成的数组。其从`start`开始逐渐增长直到`end`（但不包括）.
 * 若指定了负的`start`的而没有`end`或'step'，则使用-1的step。
 * 若`end`未指定，其将设为`start`,而`start`被设为0
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 * JavaScript遵循IEEE-754标准进行解析浮点值可能会产生意外的结果。
 *
 * @since 0.1.0
 * @category Util
 * @param {number} [start=0] The start of the range. 区间的开始
 * @param {number} end The end of the range.  区间的结束
 * @param {number} [step=1] The value to increment or decrement by. 增加或减少的值
 * @returns {Array} Returns the range of numbers. 数字组成的区间
 * @see inRange, rangeRight
 * @example
 *
 * range(4)
 * // => [0, 1, 2, 3]
 *
 * range(-4)
 * // => [0, -1, -2, -3]
 *
 * range(1, 5)
 * // => [1, 2, 3, 4]
 *
 * range(0, 20, 5)
 * // => [0, 5, 10, 15]
 *
 * range(0, -4, -1)
 * // => [0, -1, -2, -3]
 *
 * range(1, 4, 0)
 * // => [1, 1, 1]
 *
 * range(0)
 * // => []
 */
const range = createRange() // 直接借调基本方法实现

export default range
