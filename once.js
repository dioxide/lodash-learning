import before from './before.js'

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 * 获取一个函数，其被限制为只能调用`func`一次. 重复的调用该函数将返回第一次调用的返回值。
 * `func`被调用时具有`this`绑定和参数传递
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const initialize = once(createApplication)
 * initialize()
 * initialize()
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func)  // 相当于创建一个只有第一次才真实执行，其余均返回上次调用结果的函数
}

export default once
