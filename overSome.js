import some from './some.js'

/**
 * Creates a function that checks if **any** of the `predicates` return
 * truthy when invoked with the arguments it receives.
 * 创建一个函数，该函数检查 使用其接收的所有参数调用时 是否有任何断言函数`predicates`返回真值。
 *
 * @since 4.0.0
 * @category Util
 * @param {Function[]} [predicates=[identity]]
 *  The predicates to check.  要检查的断言函数
 * @returns {Function} Returns the new function. 新的函数
 * @example
 *
 * const func = overSome([Boolean, isFinite])
 *
 * func('1')
 * // => true
 *
 * func(null)
 * // => true
 *
 * func(NaN)
 * // => false
 */
function overSome(iteratees) {
  return function(...args) {  // 收集所有参数到一个变量中
    return some(iteratees, (iteratee) => iteratee.apply(this, args))  // 借调基本方法some，并传入迭代器组来实现，只有有一个返回true，结果就为true
  }
}

export default overSome
