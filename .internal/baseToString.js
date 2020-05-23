import isSymbol from '../isSymbol.js'

/** Used as references for various `Number` constants. 将Infinity作为常量引用 */
const INFINITY = 1 / 0

/** Used to convert symbols to primitives and strings. 用来将symbols转换为简单量和字符串 */
const symbolToString = Symbol.prototype.toString

/**
 * The base implementation of `toString` which doesn't convert nullish
 * values to empty strings.
 * `toString`的基本实现，但其不会将空值转换为空的字符串
 *
 * @private
 * @param {*} value The value to process. 要处理的值
 * @returns {string} Returns the string.  处理过的字符串
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments. 对于字符串要尽早返回退出以免在某些环境下造成性能问题
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    // 若是Array类型，则递归地转换value（易受调用堆栈的限制影响），使用map映射实现，并'平铺'为一个字符串
    return `${value.map(baseToString)}`
  }
  // 若是Symbol类型，则在环境支持的情况下使用Symbols的原型方法来转换，否则返回空字符串
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : ''
  }
  const result = `${value}` // 一种转换为字符串的便利写法
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result  // 判断出'-0'的情况和一般的字符串
}

export default baseToString
