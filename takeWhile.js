import baseWhile from './.internal/baseWhile.js'

/**
 * Creates a slice of `array` with elements taken from the beginning. Elements
 * are taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 * 拿点元素直到... : 创建一个`array`的从开始位置的切片，元素将一直被获取直到断言函数'predicate'返回false。
 * 断言函数被传递3个参数：(value, index, array).
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query. 要查询的数组
 * @param {Function} predicate The function invoked per iteration.  每个迭代要调用的函数
 * @returns {Array} Returns the slice of `array`. `array`的切片
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * takeWhile(users, ({ active }) => active)
 * // => objects for ['barney', 'fred']
 */
function takeWhile(array, predicate) {
  return (array != null && array.length)
    ? baseWhile(array, predicate) // 借调基本while方法进行有断言迭代
    : []  // 对于空数组直接反弹
}

export default takeWhile
