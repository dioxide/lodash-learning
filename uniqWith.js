import baseUniq from './.internal/baseUniq.js'

/**
 * This method is like `uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The order of result values is
 * determined by the order they occur in the array. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 * 此方法类似于`uniq`，但其接受一个 比较`arrays`的每个元素的比较器`array`.
 * 结果值的顺序有它们出现在数组中的顺序决定.
 * 比较器被传递2个参数：(arrVal, othVal)
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {Function} [comparator] The comparator invoked per element. 应用在每个元素上的比较器
 * @returns {Array} Returns the new duplicate free array. 新的去重的数组
 * @see uniq, uniqBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * uniqWith(objects, isEqual)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  comparator = typeof comparator === 'function' ? comparator : undefined  // 确定比较器是否可用
  return (array != null && array.length)
    ? baseUniq(array, undefined, comparator)  // 借调baseUniq（其老本行），同时指定比较器
    : []  // 对于空数组直接反弹
}

export default uniqWith
