import isObject from './isObject.js'

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g

/** Used to detect if a method is native. 用来探测是否为本地方法 */
const reIsNative = RegExp(`^${
  Function.prototype.toString.call(Object.prototype.hasOwnProperty)
    .replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')
}$`)

/**
 * Checks if `value` is a pristine native function.
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a native function, 若是本地function则返回true，否则返回false
 *  else `false`.
 * @example
 *
 * isNative(Array.prototype.push)
 * // => true
 *
 * isNative(isDate)
 * // => false
 */
function isNative(value) {
  return isObject(value) && reIsNative.test(value)  // 首先是对象 且 通过了预设正则表达式的测试
}

export default isNative
