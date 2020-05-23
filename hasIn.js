/**
 * Checks if `path` is a direct or inherited property of `object`.
 * 检查`path`所指是否为`object`的直接或继承属性
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.  要查询的对象
 * @param {string} key The key to check.  要查询的key
 * @returns {boolean} Returns `true` if `key` exists, else `false`. 若key存在则返回true，否则返回false
 * @see has, hasPath, hasPathIn
 * @example
 *
 * const object = create({ 'a': create({ 'b': 2 }) })
 *
 * hasIn(object, 'a')
 * // => true
 *
 * hasIn(object, 'b')
 * // => false
 */
function hasIn(object, key) {
  return object != null && key in Object(object)  // 做下object类型转换并使用原生方法判断key是否存在
}

export default hasIn
