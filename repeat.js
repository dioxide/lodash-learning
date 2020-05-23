/**
 * Repeats the given string `n` times.
 * 重复给定的字符串`n`次
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to repeat. 要重复的字符串，默认为空字符串
 * @param {number} [n=1] The number of times to repeat the string.  要重复的次数
 * @returns {string} Returns the repeated string. 重复过的字符串
 * @example
 *
 * repeat('*', 3)
 * // => '***'
 *
 * repeat('abc', 2)
 * // => 'abcabc'
 *
 * repeat('abc', 0)
 * // => ''
 */
function repeat(string, n) {
  let result = ''
  // 防御式编程： 若string为假值 或 重复次数小于1 或 大于最大安全整数 都直接返回空字符串
  if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
    return result
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // 利用平方算法求幂次以更快的重复
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    // 若n对2取余为真值（即余1）
    if (n % 2) {
      result += string  // 则对结果进行一次累加
    }
    n = Math.floor(n / 2) //每次迭代n都变为原来的一半（向下取整）
    if (n) {  // 若n仍为真值
      string += string  // 则对string本身做一次累加
    }
  } while (n) // 只有n为真值就一直迭代

  return result
}

export default repeat
