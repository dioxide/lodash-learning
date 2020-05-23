/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991

/**
 * Checks if `value` is a valid array-like length.
 * 检查变量value是否是一个有效的"类数组类型的长度值"
 *
 * **Note:** This method is loosely based on  此方法松散地基于ecma规范的ToLength
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.  要检查的变量
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.  如果value是一个有效的长度就返回true，否则返回false
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
function isLength(value) {
  // value值需要是：大于-1且小于等于'最大安全整数'的整数
  return typeof value === 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}

export default isLength
