import createMathOperation from './.internal/createMathOperation.js'

/**
 * Subtract two numbers.
 * 两个数相减
 *
 * @since 4.0.0
 * @category Math
 * @param {number} minuend The first number in a subtraction. 被减数
 * @param {number} subtrahend The second number in a subtraction. 减数
 * @returns {number} Returns the difference.  差
 * @example
 *
 * subtract(6, 4)
 * // => 2
 */
const subtract = createMathOperation((minuend, subtrahend) => minuend - subtrahend, 0) // 创建减法函数，并指定默认值为0

export default subtract
