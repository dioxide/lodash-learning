/**
 * Composes a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 * 函数流：创建一个函数，该函数返回 使用创建的函数的this绑定调用给定函数 的结果，在该函数中，每次连续调用
 * 都会得到前一个函数的返回值（前一项的return是后一项的arguments）。
 *
 * @since 3.0.0
 * @category Util
 * @param {Function[]} [funcs] The functions to invoke. 要调用的函数
 * @returns {Function} Returns the new composite function.  新的组合的函数
 * @see flowRight
 * @example
 *
 * import add from 'lodash/add'
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flow(add, square)
 * addSquare(1, 2)
 * // => 9
 */
function flow(...funcs) { // 接受多个函数，将其收集在一起（数组）
  const length = funcs.length // 函数的个数
  let index = length
  while (index--) { // 倒序迭代
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function')  // 任何一个参数项不是函数，都将抛出异常
    }
  }
  return function(...args) {  // 调用初始的参数
    let index = 0
    let result = length ? funcs[index].apply(this, args) : args[0]  // 初始结果： 若存在func，则先调用第一个得出结果，否则使用参数的第一项
    while (++index < length) {  // 正序迭代funcs
      result = funcs[index].call(this, result)  // 挨个invoke它们，并绑定this，和传递上一次的result为其arguments。 当然，还要将执行结果重新赋予result以供下次使用
    }
    return result // 返回最终执行结果
  }
}

export default flow
