/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 * 检查变量value是否是Obejct类型
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.  要检查的变量
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.  如果为Object类型返回true，否则返回false
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
function isObject(value) {
  const type = typeof value
  // null不算object类型
  return value != null && (type === 'object' || type === 'function')
}

export default isObject
