
/**
 * Creates a function that invokes `func` with its arguments transformed.
 * 创建一个 在调用`func`前转换其arguments的函数
 *
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to wrap. 要包装的函数
 * @param {Function[]} [transforms=[identity]]
 *  The argument transforms.  参数转换器,第n个参数对应第n个转换器
 * @returns {Function} Returns the new function.  新的函数
 * @example
 *
 * function doubled(n) {
 *   return n * 2
 * }
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const func = overArgs((x, y) => [x, y], [square, doubled])
 *
 * func(9, 3)
 * // => [81, 6]
 *
 * func(10, 5)
 * // => [100, 10]
 */
function overArgs(func, transforms) {
  const funcsLength = transforms.length // 转换器个数
  return function(...args) {
    let index = -1
    const length = Math.min(args.length, funcsLength) // 获取转换后数组应具有的长度（即两个数组的交集）
    while (++index < length) {  // 正序迭代结果
      args[index] = transforms[index].call(this, args[index]) // 应用对应位置转换器函数。 即第n个转换器被传递原函数的第n个实际参数，进而得出新的参数
    }
    return func.apply(this, args)
  }
}

export default overArgs
