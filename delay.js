/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 * 在`wait`毫秒后再延迟调用`func`，所有额外的参数都将在`func`被调用时传递给它
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.  要延迟调用的函数
 * @param {number} wait The number of milliseconds to delay invocation. 要延迟调用的时间（毫秒）
 * @param {...*} [args] The arguments to invoke `func` with.  调用`func`时要传递的参数
 * @returns {number} Returns the timer id.  定时器id
 * @example
 *
 * delay(text => console.log(text), 1000, 'later')
 * // => Logs 'later' after one second.
 */
function delay(func, wait, ...args) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')  // 不是函数，不能凑热闹
  }
  return setTimeout(func, +wait || 0, ...args)  // 借调setTimeout并定时`wait`实现，这样调用将被插入宿主环境的Event Loop中，实际效果就是非阻塞的调用，也就是尽可能在指定时间后调用
}

export default delay
