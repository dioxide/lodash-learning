/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 * 比较两个值是否相等. 执行一个ecma规范中的'SameValueZero'
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare. 要比较的值
 * @param {*} other The other value to compare. 要比较的另一个值
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`. 若相当则返回true，否则返回false
 * @example
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * eq(object, object)
 * // => true
 *
 * eq(object, other)
 * // => false
 *
 * eq('a', 'a')
 * // => true
 *
 * eq('a', Object('a'))
 * // => false
 *
 * eq(NaN, NaN)
 * // => true
 */
function eq(value, other) {
  // 若 这两个值之间全等 或 这两个值分别都不全等于自己 则 认为它们相等
  return value === other || (value !== value && other !== other)
}

export default eq
