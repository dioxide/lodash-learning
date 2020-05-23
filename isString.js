import getTag from './.internal/getTag.js'

/**
 * Checks if `value` is classified as a `String` primitive or object.
 * 检查`value`是否归类为`String`原始值或对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a string, else `false`. 若是则返回true
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(1)
 * // => false
 */
function isString(value) {
  const type = typeof value
  return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]') // 对字符串类型的严格判断
}

export default isString
