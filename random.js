import toFinite from './toFinite.js'

/** Built-in method references without a dependency on `root`. 引用内建的parseFloat而不依赖`root` */
const freeParseFloat = parseFloat

/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 * 产生一个在`lower` 到 `upper`边界范围内的数字。  若只提供了1个参数，将返回0到给定参数直接的随机数
 * 若`lower` 或 `upper`是浮点数，也将返回一个浮点数而不是整数
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 * 注意： JavaScript遵循的 IEEE-754标准 可能产生一个非期望的结果
 *
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound. 下边界
 * @param {number} [upper=1] The upper bound. 上边界
 * @param {boolean} [floating] Specify returning a floating-point number. 指定是否返回浮点数
 * @returns {number} Returns the random number. 随机数
 * @see uniqueId
 * @example
 *
 * random(0, 5)
 * // => an integer between 0 and 5
 *
 * random(5)
 * // => also an integer between 0 and 5
 *
 * random(5, true)
 * // => a floating-point number between 0 and 5
 *
 * random(1.2, 5.2)
 * // => a floating-point number between 1.2 and 5.2
 */
function random(lower, upper, floating) {
  if (floating === undefined) { // 未指定是否返回浮点数的情况
    if (typeof upper === 'boolean') { // 若上边界参数是boolean类型
      floating = upper  // 调整假定的参数顺序
      upper = undefined
    }
    else if (typeof lower === 'boolean') {  // 若下边界参数是boolean类型
      floating = lower  // 调整假定的参数顺序
      lower = undefined
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0 // 若上下边界都未指定，则分别视为0和1
    upper = 1
  }
  else {  // 否则，
    lower = toFinite(lower) // 下边界转换为有限数
    if (upper === undefined) {  // 若上边界未指定，则：上边界视为下边界，下边界视为0
      upper = lower
      lower = 0
    } else {
      upper = toFinite(upper) // 否则，也将上边界转为有限数
    }
  }
  if (lower > upper) {  // 若下边界大于上边界，则交换它们的值
    const temp = lower
    lower = upper
    upper = temp
  }
  if (floating || lower % 1 || upper % 1) { // 若确定要返回浮点值
    const rand = Math.random()
    const randLength = `${rand}`.length - 1 // 随机数的数字个数 - 1， 也就是小数部分的位数
    // `1e-${randLength}`产生环境支持最小的小数， 然后再加上（upper-lower）即取值区间， 然后对和进行取随机，即将0～1的随机种子映射再该区间取值到A
    // 然后A再加上下边界lower，最后于upper进行取最小值， 即得到了数轴上的绝对坐标值（从0开始而不是从lower开始）
    return Math.min(lower + (rand * (upper - lower + freeParseFloat(`1e-${randLength}`))), upper) // 产生指定范围的浮点随机值
  }
  return lower + Math.floor(Math.random() * (upper - lower + 1))  // 产生指定范围（上下边界的差值+1）的整数随机值
}

export default random
