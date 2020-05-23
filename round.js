import createRound from './.internal/createRound.js'

/**
 * Computes `number` rounded to `precision`.
 * 将`number`四舍五入到指定精度`precision`
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round. 要舍入的数字
 * @param {number} [precision=0] The precision to round to. 要舍入的精度
 * @returns {number} Returns the rounded number.  舍入和的数字
 * @example
 *
 * round(4.006)
 * // => 4
 *
 * round(4.006, 2)
 * // => 4.01
 *
 * round(4060, -2)
 * // => 4100
 */
const round = createRound('round')  // 创建舍入函数

export default round
