import baseWhile from './.internal/baseWhile.js'

/**
 * Creates a slice of `array` with elements taken from the end. Elements are
 * taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 * 从右边拿点元素直到... : 创建一个`array`的从末位开始的切片，元素将一直被获取直到`predicate`返回false。
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
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeRightWhile(users, ({ active }) => active)
 * // => objects for ['fred', 'pebbles']
 */
function takeRightWhile(array, predicate) {
  return (array != null && array.length)
    ? baseWhile(array, predicate, false, true)  // 借调基本while方法进行有断言迭代,同时指定迭代方向
    : []  // 对于空数组直接反弹
}

export default takeRightWhile
