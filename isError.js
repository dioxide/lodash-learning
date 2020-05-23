import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'
import isPlainObject from './isPlainObject.js'

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 * 检查`value`是否是`Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, 或 `URIError` 对象
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`. 若`value`是error对象则返回true，否则返回false
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false  // 非类对象直接返回false
  }
  const tag = getTag(value) // 获取类型字符串
  return tag == '[object Error]' || tag == '[object DOMException]' ||
    (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value))  // 其他几种被认定为error object的情况
}

export default isError
