import baseEach from './.internal/baseEach.js'
import invoke from './invoke.js'
import isArrayLike from './isArrayLike.js'

/**
 * Invokes the method at `path` of each element in `collection`, returning
 * an array of the results of each invoked method. Any additional arguments
 * are provided to each invoked method. If `path` is a function, it's invoked
 * for, and `this` bound to, each element in `collection`.
 * 对`collection`的每个元素的应用指定方法（外部传入）或该元素指定路径`path`处的方法（即其自身的方法），返回一个由每个调用方法结果组成的数组。
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的对象
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration. 要调用的方法的路径或每次迭代的函数
 * @param {Array} [args] The arguments to invoke each method with.  调用每个方法时的参数
 * @returns {Array} Returns the array of results. 由执行结果组成的数组
 * @example
 *
 * invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * invokeMap([123, 456], String.prototype.split, [''])
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
function invokeMap(collection, path, args) {
  let index = -1
  const isFunc = typeof path === 'function' // path处的参数是否为function
  const result = isArrayLike(collection) ? new Array(collection.length) : []  // 根据collection的类型创建合适的结果容器，避免具有length属性的非数组对象

  baseEach(collection, (value) => {
    result[++index] = isFunc ? path.apply(value, args) : invoke(value, path, args)  //  若path所指是function，则apply之，否则视之为路径进行查找调用， 再将执行结果压入结果
  })
  return result
}

export default invokeMap
