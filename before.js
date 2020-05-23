/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 * 创建一个调用`func`的函数，其绑定this和闭包函数的argumetns， 当它调用少于`n`次，后续再调用创建的函数将返回上一次`func`调用的结果
 *
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.   `func`被调用被多少次后就不再调用了
 * @param {Function} func The function to restrict. 被限制的函数
 * @returns {Function} Returns the new restricted function. 新的被限制了的函数
 * @example
 *
 * jQuery(element).on('click', before(5, addContactToList))
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  let result  // 闭包保存结果，n也作为局部变量被闭包
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')  // func不是函数，凑什么热闹
  }
  return function(...args) {  // ES6语法收集所有形参
    if (--n > 0) {  // 闭包函数每次被调用，n都递减
      result = func.apply(this, args) // n非0时就进行正常调用
    }
    if (n <= 1) {
      func = undefined  // 当调用被允许的最后一次时，释放func对原函数的引用,此时func已被上一if中的语句执行过了
    }
    return result // 返回执行结果，n<1时返回的是上次执行的结果
  }
}

export default before
