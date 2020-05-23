import createMathOperation from './.internal/createMathOperation.js'

/**
 * Divide two numbers.
 * 两个数相除
 *
 * @since 4.7.0
 * @category Math
 * @param {number} dividend The first number in a division. 除法的第一个数
 * @param {number} divisor The second number in a division. 除法的第二个数
 * @returns {number} Returns the quotient.  商
 * @example
 *
 * divide(6, 4)
 * // => 1.5
 */
const divide = createMathOperation((dividend, divisor) => dividend / divisor, 1) // 创建除法函数，并指定默认值为1

export default divide
