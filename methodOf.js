import invoke from './invoke.js'

/**
 * The opposite of `method` this method creates a function that invokes
 * the method at a given path of `object`. Any additional arguments are
 * provided to the invoked method.
 * 与`method`相对的方法，此方法创建一个函数，该函数在给定的对象`object`的路径`path`处调用该方法。
 * 任何其他参数都提供给调用的方法。
 *
 * @since 3.7.0
 * @category Util
 * @param {Object} object The object to query. 要查询的对象
 * @param {Array} [args] The arguments to invoke the method with. 调用方法时的参数
 * @returns {Function} Returns the new invoker function.  新的函数
 * @example
 *
 * const array = times(3, i => () => i)
 * const object = { 'a': array, 'b': array, 'c': array }
 *
 * map(['a[2]', 'c[0]'], methodOf(object))
 * // => [2, 0]
 *
 * map([['a', '2'], ['c', '0']], methodOf(object))
 * // => [2, 0]f
 */
function methodOf(object, args) {
  return (path) => invoke(object, path, args) // 借调invoke来实现指定路径调用，但path可由调用时指定
}

export default methodOf
