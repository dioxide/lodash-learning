/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 * 将`number`钳制在“lower”和“upper”范围内。
 *
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp. 要钳制的数组
 * @param {number} lower The lower bound. 上边界
 * @param {number} upper The upper bound. 下边界
 * @returns {number} Returns the clamped number. 被钳制的数字
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */
function clamp(number, lower, upper) {
  number = +number  // 都先转换为数字
  lower = +lower
  upper = +upper
  lower = lower === lower ? lower : 0 // 若lower不自等，则认为其为0
  upper = upper === upper ? upper : 0 // 若upper不自等，则认为其为0
  if (number === number) {  // nummber必须自等，否则其可能为NaN
    number = number <= upper ? number : upper // 小于下边界，就变成它
    number = number >= lower ? number : lower // 小于上边界，就变成它
  }
  return number
}

export default clamp
