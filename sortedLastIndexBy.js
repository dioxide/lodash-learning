import baseSortedIndexBy from './.internal/baseSortedIndexBy.js'

/**
 * This method is like `sortedLastIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 * 这个方法类似于`sortedLastIndex`除了它接受一个应用在`value`和`array`的每个元素上以计算它们的排序指数的迭代器`iteratee`外。
 * 迭代器被传递1个参数: (value)
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.  要检查的有序数组
 * @param {*} value The value to evaluate.  要评估的值
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`. `value`应该被插入的索引位置
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 5 }]
 *
 * sortedLastIndexBy(objects, { 'n': 4 }, ({ n }) => n)
 * // => 1
 */
function sortedLastIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, iteratee, true)  // 直接借调基本方法，同时指定迭代器,并指定从右往左迭代
}

export default sortedLastIndexBy
