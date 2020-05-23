import baseUniq from './.internal/baseUniq.js'

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 * 创建一个去重版本的数组，使用`SameValueZero`来进行相当比较，且只有第一此出现的元素被保留。
 * 结果值的顺序有值在数组中出现的顺序决定
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @returns {Array} Returns the new duplicate free array. 新的去重的数组
 * @see uniqBy, uniqWith
 * @example
 *
 * uniq([2, 1, 2])
 * // => [2, 1]
 */
function uniq(array) {
  return (array != null && array.length)
    ? baseUniq(array) // 借调baseUniq（其老本行）
    : []  // 对于空数组直接反弹
}

export default uniq
