/**
 * Creates a function that invokes `func` with arguments reversed.
 * 创建一个以相反的arguments顺序来调用`func`的函数
 *
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to flip arguments for. 要逆序其arguments的函数
 * @returns {Function} Returns the new flipped function.  新的被逆序参数的函数
 * @see reverse
 * @example
 *
 * const flipped = flip((...args) => args)
 *
 * flipped('a', 'b', 'c', 'd')
 * // => ['d', 'c', 'b', 'a']
 */
function flip(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')  // 非函数，不要凑热闹
  }
  return function(...args) {
    return func.apply(this, args.reverse()) // 使用.apply调用func，并提前将args反序
  }
}

export default flip
