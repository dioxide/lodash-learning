import map from './map.js'

/**
 * Creates a function that invokes `iteratees` with the arguments it receives
 * and returns their results.
 * 创建一个函数，其使用其接受到的所有参数调用`iteratees`，并返回它们的结果。
 *
 * @since 4.0.0
 * @category Util
 * @param {Function[]} [iteratees=[identity]]
 *  The iteratees to invoke.  要调用的迭代者函数
 * @returns {Function} Returns the new function. 新的函数
 * @example
 *
 * const func = over([Math.max, Math.min])
 *
 * func(1, 2, 3, 4)
 * // => [4, 1]
 */
function over(iteratees) {
  return function(...args) {  // 收集所有参数到一个变量中
    return map(iteratees, (iteratee) => iteratee.apply(this, args)) // 借调map对iteratees数组左一遍映射，在映射每项是调用当前的iteratee
  }
}

export default over
