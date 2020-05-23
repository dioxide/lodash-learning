import getTag from './.internal/getTag.js'

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 * 检查参数value是归类为'Symbol'原始类型还是对象Object类型
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.  要检查的变量
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.  如果是symbol则返回true，否则返回false
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
  const type = typeof value
  return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

export default isSymbol
