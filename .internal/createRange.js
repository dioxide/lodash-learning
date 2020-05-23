import baseRange from './baseRange.js'
import toFinite from '../toFinite.js'

/**
 * Creates a `range` or `rangeRight` function.
 * 创建一个`range`或`rangeRight`函数，用于生成一个指定的区间
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left. 指定是否从右向左迭代
 * @returns {Function} Returns the new range function.  新的范围函数
 */
function createRange(fromRight) {
  return (start, end, step) => {
    // Ensure the sign of `-0` is preserved. 确保保留了`-0`的符号
    start = toFinite(start) // 转换为有限数
    if (end === undefined) {
      end = start // 若end为指定，则默认其与start一致，并将start重新改为0
      start = 0
    } else {
      end = toFinite(end) // 否则 将end转换为有限数
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step) // 若未指定step，默认为1或-1（两个方向），否则将step值转为有限数
    return baseRange(start, end, step, fromRight) // 借调baseRange创建结果数组
  }
}

export default createRange
