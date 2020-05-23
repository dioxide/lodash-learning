/**
 * The opposite of `before`. This method creates a function that invokes
 * `func` once it's called `n` or more times.
 * 与`before`相对的方法，其创建一个在被调用了n次或n次以上才会真正调用`func`函数
 *
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.  在`func`被调用前忽略的调用次数
 * @param {Function} func The function to restrict. 被限制的函数
 * @returns {Function} Returns the new restricted function. 新的被限制了的函数
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')   // func不是函数，凑什么热闹
  }
  n = n || 0  // n默认为0， 且闭包
  return function(...args) {  // ES6语法收集所有形参
    if (--n < 1) {  // 每次被调用都递减
      return func.apply(this, args) // 只有n<1时，才真正调用func
    } // 否则 静默返回undefined
  }
}

export default after
