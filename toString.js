import isSymbol from './isSymbol.js'

/** Used as references for various `Number` constants. 引用常量 infinity */
const INFINITY = 1 / 0

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 * 将`value`转换为字符串。 空字符串将被返回null和undefined。  `-0`的符号将被保留
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert. 要转换的值
 * @returns {string} Returns the converted string.  转换后的字符串
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
function toString(value) {
  if (value == null) {
    return '' // 对null返回空字符串
  }
  // Exit early for strings to avoid a performance hit in some environments.
  // 对字符串尽早退出转换以避免某些环境下的性能问题
  if (typeof value === 'string') {
    return value  // 字符串返回原值
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    // 若是数组类型则 递归地转换值（可能受调用栈限制影响）， 对其中null值保留
    return `${value.map((other) => other == null ? other : toString(other))}`
  }
  if (isSymbol(value)) {
    return value.toString() // 若是symbol则调用其toString方法转换
  }
  const result = `${value}` // 其他情况使用模版字符串方法来转换
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result  // 额外对'-0'做处理
}

export default toString
