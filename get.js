import baseGet from './.internal/baseGet.js'

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 * 从对象`object`获取指定路径`path`的值. 若解析的结果是`undefined`，则返回`defaultValue`
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.  要查询的对象
 * @param {Array|string} path The path of the property to get.  获取属性的路径
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.  获取到`undefined`时的默认值
 * @returns {*} Returns the resolved value.
 * @see has, hasIn, set, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
function get(object, path, defaultValue) {
  const result = object == null ? undefined : baseGet(object, path) // 若object为空值，则视为获取结果为undefined，否则，借调baseGet来实现值的获取
  return result === undefined ? defaultValue : result // 若获取到的值仍是undefined，则返回默认值
}

export default get
