import createMathOperation from './.internal/createMathOperation.js'

/**
 * Adds two numbers.
 * 将两个数字相加
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition. 第一个加数
 * @param {number} addend The second number in an addition. 第二个加数
 * @returns {number} Returns the total. 总和
 * @example
 *
 * add(6, 4)
 * // => 10
 */
const add = createMathOperation((augend, addend) => augend + addend, 0) // 创建加法函数，并指定默认值

export default add
