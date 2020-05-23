/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991

/** Used as references for the maximum length and index of an array. 用于常量：数组的最大长度/索引 */
const MAX_ARRAY_LENGTH = 4294967295

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument: (index).
 * 调用iteratee函数`n`次，返回有每次调用返回的结果组成的数组。 迭代器接受1个参数：（index）。
 *
 * @since 0.1.0
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`. 要调用`iteratee`的次数
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Array} Returns the array of results. 结果构成的数组
 * @example
 *
 * times(3, String)
 * // => ['0', '1', '2']
 *
 *  times(4, () => 0)
 * // => [0, 0, 0, 0]
 */
function times(n, iteratee) {
  if (n < 1 || n > MAX_SAFE_INTEGER) {
    return [] // n为非合理值，直接返回空数组
  }
  let index = -1
  const length = Math.min(n, MAX_ARRAY_LENGTH)  // 结果数组的长度
  const result = new Array(length)  // 创建结果数组
  while (++index < length) {  // 正序迭代结果数组
    result[index] = iteratee(index) // 结果数组的每项均由 iteratee的结果产生
  }
  index = MAX_ARRAY_LENGTH  // 迭代游标索引置为索引最大值
  n -= MAX_ARRAY_LENGTH // n 置为 n-索引最大值
  while (++index < n) { // @todo: 此处用意何在？再迭代什么？
    iteratee(index)
  }
  return result // 返回结果数组
}

export default times
