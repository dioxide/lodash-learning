import baseWhile from './.internal/baseWhile.js'

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 * 创建一个`array`的数组切片，其排除从开始处被丢弃的元素，元素将一直被丢弃直到断言函数`predicate`返回false。
 * 断言函数被调用时被传递3个参数： (value, index, array).
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @param {Function} predicate The function invoked per iteration.  每次迭代被调用的断言函数
 * @returns {Array} Returns the slice of `array`. `array`的切片
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * dropWhile(users, ({ active }) => active)
 * // => objects for ['pebbles']
 */
function dropWhile(array, predicate) {
  return (array != null && array.length)
    ? baseWhile(array, predicate, true) // 借调baseWhile进行有断言，丢弃式迭代
    : []  // 对于空数组直接反弹回
}

export default dropWhile
