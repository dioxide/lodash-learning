import createRound from './.internal/createRound.js'

/**
 * Computes `number` rounded up to `precision`. (Round up: the smallest integer greater than or equal to a given number.)
 * 向'天花板/上'舍入：计算`number`舍入到指定精度`precision`。 （向上舍入：大于或等于给定数字的最小整数。）
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round up. 要舍入的数字
 * @param {number} [precision=0] The precision to round up to. 舍入的精度值
 * @returns {number} Returns the rounded up number. 舍入后的数组
 * @example
 *
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */
const ceil = createRound('ceil')  // 调用基本方法生成舍入函数

export default ceil
