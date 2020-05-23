/**
 * The base implementation of `inRange` which doesn't coerce arguments.
 * `inRange`的基本实现，但不强制参数（start和end传反也没关系）
 *
 * @private
 * @param {number} number The number to check.  要检查的数字
 * @param {number} start The start of the range.  区间的开始
 * @param {number} end The end of the range.  区间的结束
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`. 若数字在区间内则返回true，否则返回false
 */
function baseInRange(number, start, end) {
  return number >= Math.min(start, end) && number < Math.max(start, end)  // 即该数字大于等于start和end中的最小的 且 小于start和end中的那个最大的， 亦即： 大于等于最小的，小于最大的，那么一定在区间内
}

export default baseInRange
