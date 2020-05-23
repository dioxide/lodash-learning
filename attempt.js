import isError from './isError.js'

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 * 尝试调用`func`，返回结果或捕获的错误对象。在调用`func`时会传递任何提供的参数。
 *
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt. 尝试调用的函数
 * @param {...*} [args] The arguments to invoke `func` with.  要传递的参数
 * @returns {*} Returns the `func` result or error object.  `func`返回的结果或错误对象
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * const elements = attempt(selector =>
 *   document.querySelectorAll(selector), '>_>')
 *
 * if (isError(elements)) {
 *   elements = []
 * }
 */
function attempt(func, ...args) {
  try { // 使用try catch实现
    return func(...args)  // 用指定参数调用func
  } catch (e) {
    return isError(e) ? e : new Error(e) // 返回错误对象
  }
}

export default attempt
