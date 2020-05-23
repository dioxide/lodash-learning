import baseGet from './.internal/baseGet.js'

/**
 * The opposite of `property`s method creates a function that returns
 * the value at a given path of `object`.
 * 与`property`相对的方法，其创建一个 返回给定对象`object`的指定路径`path`的值 的函数
 *
 * @since 3.0.0
 * @category Util
 * @param {Object} object The object to query.  要查询的对象
 * @returns {Function} Returns the new accessor function. 新的访问器函数
 * @example
 *
 * const array = [0, 1, 2]
 * const object = { 'a': array, 'b': array, 'c': array }
 *
 * map(['a[2]', 'c[0]'], propertyOf(object))
 * // => [2, 0]
 *
 * map([['a', '2'], ['c', '0']], propertyOf(object))
 * // => [2, 0]
 */
function propertyOf(object) {
  return (path) => object == null ? undefined : baseGet(object, path) // 该函数对于object若为空值则返回undefined，否则借调baseGet获取指定路径的值
}

export default propertyOf
