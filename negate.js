/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 * 创建一个函数，其调用谓词函数`func`，并对其执行结果取反。 断言函数被调用将被this绑定和参数绑定
 *
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate. 要取反的断言函数
 * @returns {Function} Returns the new negated function.  新的函数
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0
 * }
 *
 * filter([1, 2, 3, 4, 5, 6], negate(isEven))
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function')  // 对于非函数抛出异常
  }
  return function(...args) {  // 使用ES6语法收集多个参数
    return !predicate.apply(this, args) // 运行断言函数，并对结果取反
  }
}

export default negate
