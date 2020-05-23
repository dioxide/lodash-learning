import baseIsEqual from './.internal/baseIsEqual.js'

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 * 执行两个值的深度比较，以决定它们是否相当
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 * 注意：此方法支持比较arrays, array buffers, booleans,date objects，error objects，map，
 * numbers，`Object` objects， regexes，sets，string，symbols和typed arrays。
 * `Object` objects通过比较它们的私有的、非继承的、可枚举属性
 * Functions和DOM node通过严格相等===来比较
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare. 要比较的值
 * @param {*} other The other value to compare. 要比较的另一个值
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.  相当返回true，否则返回false
 * @example
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * isEqual(object, other)
 * // => true  进行的深度的值的比较
 *
 * object === other
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other)  // 借调基本方法实现
}

export default isEqual
