import baseToNumber from './baseToNumber.js'
import baseToString from './baseToString.js'

/**
 * Creates a function that performs a mathematical operation on two values.
 * 创建一个可以处理两个值之间的数学操作的函数 （HOC）
 *
 * @private
 * @param {Function} operator The function to perform the operation.  要处理的操作符函数
 * @param {number} [defaultValue] The value used for `undefined` arguments. 用于`未定义`参数的值
 * @returns {Function} Returns the new mathematical operation function. 新的数学操作符函数
 */
function createMathOperation(operator, defaultValue) {
  // 返回闭包的函数，
  return (value, other) => {
    if (value === undefined && other === undefined) { // 两个值都为undefined时返回默认值
      return defaultValue
    }
    if (value !== undefined && other === undefined) { // 只有其中一个值为undefined时，返回另一个值
      return value
    }
    if (other !== undefined && value === undefined) { // 只有其中一个值为undefined时，返回另一个值
      return other
    }
    if (typeof value === 'string' || typeof other === 'string') { // 若其中有一个值为字符串，则将两者都转换为字符串
      value = baseToString(value)
      other = baseToString(other)
    }
    else {  // 否则都转换为数字
      value = baseToNumber(value)
      other = baseToNumber(other)
    }
    return operator(value, other) // 执行完数据类型后再执行操作符函数
  }
}

export default createMathOperation
