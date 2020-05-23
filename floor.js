import createRound from './.internal/createRound.js'

/**
 * Computes `number` rounded down to `precision`.
 * 向地板/下舍入：将`number`向下舍入到指定精度`precision`
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round down. 要向下舍入的数字
 * @param {number} [precision=0] The precision to round down to.  要向下舍入的精度
 * @returns {number} Returns the rounded down number. 向下舍入后的数字
 * @example
 *
 * floor(4.006)
 * // => 4
 *
 * floor(0.046, 2)
 * // => 0.04
 *
 * floor(4060, -2)
 * // => 4000
 */
const floor = createRound('floor')  // 创建舍入方法

export default floor
