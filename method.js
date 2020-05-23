import invoke from './invoke.js'

/**
 * Creates a function that invokes the method at `path` of a given object.
 * Any additional arguments are provided to the invoked method.
 * 创建一个函数，该函数在给定对象`object`的路径`path`上调用该方法。任何其他参数都提供给调用的方法。
 *
 * @since 3.7.0
 * @category Util
 * @param {Array|string} path The path of the method to invoke. 要调用的方法的路径
 * @param {Array} [args] The arguments to invoke the method with. 要调用的方法的参数
 * @returns {Function} Returns the new invoker function.  新的函数
 * @example
 *
 * const objects = [
 *   { 'a': { 'b': () => 2 } },
 *   { 'a': { 'b': () => 1 } }
 * ]
 *
 * map(objects, method('a.b'))
 * // => [2, 1]
 *
 * map(objects, method(['a', 'b']))
 * // => [2, 1]
 */
function method(path, args) {
  return (object) => invoke(object, path, args) // 借调invoke来实现指定路径调用，但object可由调用时指定
}

export default method
