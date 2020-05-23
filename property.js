import baseProperty from './.internal/baseProperty.js'
import basePropertyDeep from './.internal/basePropertyDeep.js'
import isKey from './.internal/isKey.js'
import toKey from './.internal/toKey.js'

/**
 * Creates a function that returns the value at `path` of a given object.
 * 创建一个函数，其返回给定对象`object`的指定路径`path`处的值
 *
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get. 获取属性的路径
 * @returns {Function} Returns the new accessor function. 新的访问器函数
 * @example
 *
 * const objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ]
 *
 * map(objects, property('a.b'))
 * // => [2, 1]
 *
 * map(sortBy(objects, property(['a', 'b'])), 'a.b')
 * // => [1, 2]
 */
function property(path) {
  // 若path是单纯的key，则借调baseProperty，否则basePropertyDeep进行深度路径path的值获取
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
}

export default property
