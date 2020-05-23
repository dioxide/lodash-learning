/**
 * Checks if `string` starts with the given target string.
 * 检查`string`是否以目标字符串`target`开头
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect. 要检查的字符串
 * @param {string} [target] The string to search for. 要搜索的字符串
 * @param {number} [position=0] The position to search from. 搜索开始的位置
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`. 若是则返回true，否则返回false
 * @see endsWith, includes
 * @example
 *
 * startsWith('abc', 'a')
 * // => true
 *
 * startsWith('abc', 'b')
 * // => false
 *
 * startsWith('abc', 'b', 1)
 * // => true
 */
function startsWith(string, target, position) {
  const { length } = string // 获取字符串长度
  position = position == null ? 0 : position  // 长度默认为0
  if (position < 0) {
    position = 0  // 小于0则视为0
  }
  else if (position > length) {
    position = length // 大于字符串长度，视为等于字符串长度
  }
  target = `${target}`  // 要搜索的字符强制转换下
  // 巧妙的实现： 通过在目标字符串上截取 要搜索的字符串的长度，通过比较切片是否与要搜索的字符串相等即可得知是否以其开头
  // 即： 假定目标字符串是以target开头是真的，那么切出来看，果然是/不是
  return string.slice(position, position + target.length) == target
}

export default startsWith
