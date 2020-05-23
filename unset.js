import baseUnset from './.internal/baseUnset.js'

/**
 * Removes the property at `path` of `object`.
 * 移除`ojbect`的指定路径`path`处的属性
 *
 * **Note:** This method mutates `object`.
 * 注意： 此方法将修改`object`
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify. 要修改的对象
 * @param {Array|string} path The path of the property to unset. 要移除的属性的路径
 * @returns {boolean} Returns `true` if the property is deleted, else `false`. 若属性被删除则返回true，否则返回false
 * @see get, has, set
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 7 } }] }
 * unset(object, 'a[0].b.c')
 * // => true
 *
 * console.log(object)
 * // => { 'a': [{ 'b': {} }] }
 *
 * unset(object, ['a', '0', 'b', 'c'])
 * // => true
 *
 * console.log(object)
 * // => { 'a': [{ 'b': {} }] }
 */
function unset(object, path) {
  return object == null ? true : baseUnset(object, path)  // 对空值直接返回true，否则借调基本方法实现
}

export default unset
