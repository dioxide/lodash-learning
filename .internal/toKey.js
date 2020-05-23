import isSymbol from '../isSymbol.js'

/** Used as references for various `Number` constants. 引用Infinity常量 */
const INFINITY = 1 / 0

/**
 * Converts `value` to a string key if it's not a string or symbol.
 * 如果`value`不是string或symbol 就将它转换为string或key
 *
 * @private
 * @param {*} value The value to inspect. 要检查的值
 * @returns {string|symbol} Returns the key.  字符串key
 */
function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) { // 若value已经是string或symbol则直接返回它
    return value
  }
  const result = `${value}` // 是模版字符串方法自动转换为string
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result  // 处理 '-0'的情况
}

export default toKey
