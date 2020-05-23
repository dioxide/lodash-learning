/**
 * Checks if `string` ends with the given target string.
 * 检查`string`是否一个给定的target字符串结束
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect. 要检查的字符串
 * @param {string} [target] The string to search for. 要搜索的字符串
 * @param {number} [position=string.length] The position to search up to. 搜索开始的位置
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`. 若是则返回true，否则返回false
 * @see includes, startsWith
 * @example
 *
 * endsWith('abc', 'c')
 * // => true
 *
 * endsWith('abc', 'b')
 * // => false
 *
 * endsWith('abc', 'b', 2)
 * // => true
 */
function endsWith(string, target, position) {
  const { length } = string // 获取字符串长度
  position = position === undefined ? length : +position  // 长度默认为0
  if (position < 0 || position != position) {
    position = 0  // 小于0或NaN则视为0
  }
  else if (position > length) {
    position = length // 大于字符串长度，视为等于字符串长度
  }
  const end = position  // 结束位置初始为指定开始搜索的位置
  position -= target.length // 开始位置项做移动 搜索字符串的长度 的偏移（用于后面截取）
  return position >= 0 && string.slice(position, end) == target // 通过比较 搜索字符串 与 目标的字符从尾部截取'搜索字符串长度'的切片 是否相等，即可得知是否以其结尾。
  // 即假定以target结尾为真，那么从string末位截取target长度的字符串出来看看是否与target相等。
}

export default endsWith
