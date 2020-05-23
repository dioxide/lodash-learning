import castPath from './.internal/castPath.js'
import last from './last.js'
import parent from './.internal/parent.js'
import toKey from './.internal/toKey.js'

/**
 * Invokes the method at `path` of `object`.
 * 调用`object`中指定路径`path`处的方法
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.  要查询的对象
 * @param {Array|string} path The path of the method to invoke. 要调用的方法的路径
 * @param {Array} [args] The arguments to invoke the method with. 要调用的方法的参数
 * @returns {*} Returns the result of the invoked method. 调用方法的执行结果
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }
 *
 * invoke(object, 'a[0].b.c.slice', [1, 3])
 * // => [2, 3]
 */
function invoke(object, path, args) {
  path = castPath(path, object) // 展开路径path
  object = parent(object, path) // 获取path所指的所属上层对象
  const func = object == null ? object : object[toKey(last(path))]  // 尝试获取该处的值，路径最后项视为方法名
  return func == null ? undefined : func.apply(object, args)  // 若获取到了方法，则返回其apply调用的结果，否则返回undefined
}

export default invoke
