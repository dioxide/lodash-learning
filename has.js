/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Checks if `key` is a direct property of `object`.
 * 检查'key'是否为'object'的直接属性（私有属性）
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query. 要查询的对象
 * @param {string} key The key to check.  要检查的key
 * @returns {boolean} Returns `true` if `key` exists, else `false`.  若是则返回true，否则返回false
 * @see hasIn, hasPath, hasPathIn
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 * const other = create({ 'a': create({ 'b': 2 }) })
 *
 * has(object, 'a')
 * // => true
 *
 * has(other, 'a')
 * // => false
 */
function has(object, key) {
  return object != null && hasOwnProperty.call(object, key) // object非空值情况下，key是object的私有属性
}

export default has
