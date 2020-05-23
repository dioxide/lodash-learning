import castPath from './.internal/castPath.js'
import isArguments from './isArguments.js'
import isIndex from './.internal/isIndex.js'
import isLength from './isLength.js'
import toKey from './.internal/toKey.js'

/**
 * Checks if `path` is a direct property of `object`.
 * 检查`path`是否为`object`的一个直接属性（私有属性）
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to query.  要查询的对象
 * @param {Array|string} path The path to check.  要查询的属性路径
 * @returns {boolean} Returns `true` if `path` exists, else `false`. 若`path`存在则返回true，否则返回false
 * @see has, hasIn hasPath
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 * const other = create({ 'a': create({ 'b': 2 }) })
 *
 * hasPathIn(object, 'a.b')
 * // => true
 *
 * hasPathIn(object, ['a', 'b'])
 * // => true
 */
function hasPathIn(object, path) {
  path = castPath(path, object) // 将path字符串转为数组形式

  let index = -1
  let { length } = path // path的长度（深度）
  let result = false // 默认结果为false
  let key

  while (++index < length) {  // 正序迭代path数组
    key = toKey(path[index])  // 获取当前项（即当次层次）合法的key
    if (!(result = object != null && key in Object(object))) {
      break // 若key不是该层对象的属性(包括继承的等所有的) 或 当前object为空值  都要break
    }
    object = object[key]  // 递推的进入有当前path项指示的下一层，继续迭代
  }
  if (result || ++index != length) {
    return result // 若结果存在或迭代位置不是path的最后一项，就返回result
  }
  length = object == null ? 0 : object.length // 否则，应该进入最后一层了， 先获取其length，空值视为0
  return !!length && isLength(length) && isIndex(key, length) &&
    (Array.isArray(object) || isArguments(object))  // 这一些判断条件即假设object为数组或argumetns类型，进行key的判断，而返回假设是否成立的结果
}

export default hasPathIn
