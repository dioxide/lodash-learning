import baseIsEqual from './.internal/baseIsEqual.js'

/**
 * This method is like `isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 * 此方法类似`isEqual`但其接受一个`customizer`函数来比较值。 若customizer返回`undefined`,比较将被本方法接管。
 * 比较器接受6个参数(objValue, othValue [, index|key, object, other, stack]).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare. 要比较的值
 * @param {*} other The other value to compare. 要比较的另一个值
 * @param {Function} [customizer] The function to customize comparisons.  自定义比较器
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.  若二者相当则返回true，否则返回false
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value)
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true
 *   }
 * }
 *
 * const array = ['hello', 'goodbye']
 * const other = ['hi', 'goodbye']
 *
 * isEqualWith(array, other, customizer)
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined  // 处理customizer值的可能情况
  const result = customizer ? customizer(value, other) : undefined  // 尝试使用自定义比较得出结果
  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result // 若结果未知，将借调baseIsEqual并带着customizer得出结果
}

export default isEqualWith
