import nth from './nth.js'

/**
 * Creates a function that gets the argument at index `n`. If `n` is negative,
 * the nth argument from the end is returned.
 * 创建一个函数，其获取被调用时argument的索引位置为`n`的值，若`n`为负值，则从右往做计算偏移量
 *
 * @since 4.0.0
 * @category Util
 * @param {number} [n=0] The index of the argument to return.
 * @returns {Function} Returns the new pass-thru function.
 * @example
 *
 * const func = nthArg(1)
 * func('a', 'b', 'c', 'd')
 * // => 'b'
 *
 * const func = nthArg(-2)
 * func('a', 'b', 'c', 'd')
 * // => 'c'
 */
function nthArg(n) {
  return (...args) => nth(args, n)  // 返回闭包函数，其将接受参数args当作数组，获取其n位置的值
}

export default nthArg
