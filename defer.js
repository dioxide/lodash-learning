/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 * 推迟调用`func`直到当前调用栈空闲时。所有额外的参数都将在`func`被调用时传递给它
 * 实现上，此方法就是延时为1ms的delay()
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.  要推迟调用的函数
 * @param {...*} [args] The arguments to invoke `func` with.  调用`func`时要传递的参数
 * @returns {number} Returns the timer id.  定时器id
 * @example
 *
 * defer(text => console.log(text), 'deferred')
 * // => Logs 'deferred' after one millisecond.
 */
function defer(func, ...args) { // 收集所有参数到args中
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')  // 不是函数，不能凑热闹
  }
  return setTimeout(func, 1, ...args) // 借调setTimeout并定时1ms实现，这样调用将被插入宿主环境的Event Loop中，实际效果就是非阻塞的调用，也就是尽可能早的调用
}

export default defer
