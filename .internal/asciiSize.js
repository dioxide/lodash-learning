/**
 * Gets the size of an ASCII `string`.
 * 获取ASCII字符`string`的大小
 *
 * @private
 * @param {string} string The string inspect. 要检查的字符串
 * @returns {number} Returns the string size. 字符串大小
 */
function asciiSize({ length }) {
  return length // 直接返回字符串对象的length属性
}

export default asciiSize
