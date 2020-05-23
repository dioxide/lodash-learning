import baseUniq from './.internal/baseUniq.js'

/**
 * This method is like `uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 * 此方法类似于`uniq`，但其接受一个 应用在`arrays`的每个元素上以生成生成唯一性标准的 迭代器`iteratee`.
 * 结果值来自于第一个出现该值的数组.
 * 迭代器被传递1个参数：(value)
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {Array} Returns the new duplicate free array. 新的去重的数组
 * @see uniq, uniqWith
 * @example
 *
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
function uniqBy(array, iteratee) {
  return (array != null && array.length)
    ? baseUniq(array, iteratee) // 借调baseUniq（其老本行），同时指定迭代器
    : []  // 对于空数组直接反弹
}

export default uniqBy
