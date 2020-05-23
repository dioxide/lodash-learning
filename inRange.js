import baseInRange from './.internal/baseInRange.js'

/**
 * Checks if `number` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 * 检查`number` 是否在`start`和结束`end`之间，但不包括`end`.  若`end`未指定，则start将被视为end，而start将被视为0
 * 如果start大于end，参数将被交互以支持负范围
 *
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check. 要检查的数组
 * @param {number} [start=0] The start of the range.  区间的开始，默认为0
 * @param {number} end The end of the range.  区间的结束
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`. 若在范围内返回true，否则返回false
 * @see range, rangeRight
 * @example
 *
 * inRange(3, 2, 4)
 * // => true
 *
 * inRange(4, 8)
 * // => true
 *
 * inRange(4, 2)
 * // => false
 *
 * inRange(2, 2)
 * // => false
 *
 * inRange(1.2, 2)
 * // => true
 *
 * inRange(.2, 4)
 * // => false
 *
 * inRange(-3, -2, -6)
 * // => true
 */
function inRange(number, start, end) {
  if (end === undefined) {  // 若结束位置未指定，
    end = start // 开始位置将被视为结束位置
    start = 0 // 实际的开始位置视为0
  }
  return baseInRange(+number, +start, +end) // 借调基础方法，并对参数进行强制数组转换
}

export default inRange
