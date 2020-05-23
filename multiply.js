import createMathOperation from './.internal/createMathOperation.js'

/**
 * Multiply two numbers.
 * 两个数相乘
 *
 * @since 4.7.0
 * @category Math
 * @param {number} multiplier The first number in a multiplication. 乘法的第一个数
 * @param {number} multiplicand The second number in a multiplication. 乘法的第二个数
 * @returns {number} Returns the product. 乘积
 * @example
 *
 * multiply(6, 4)
 * // => 24
 */
const multiply = createMathOperation((multiplier, multiplicand) => multiplier * multiplicand, 1)  // 创建乘法操作函数，并指定默认值为1

export default multiply
