/**
 * Converts an ASCII `string` to an array.
 * 将一个ASCII字符串转换为数组形式
 *
 * @private
 * @param {string} string The string to convert.  要转换的字符串
 * @returns {Array} Returns the converted array.  转换后的数组
 */
function asciiToArray(string) {
  return string.split('') // 直接使用string的原生方法转换
}

export default asciiToArray
