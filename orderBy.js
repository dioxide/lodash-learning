import baseOrderBy from './.internal/baseOrderBy.js'

/**
 * This method is like `sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 * You may also specify a compare function for an order.
 * 此方法类似于`sortBy`但其允许指定一个用来决定排序的迭代器。
 * 如果`orders`未指定，所有的值将按升序排列。此外，指定'asc'或'desc'来排序方向。
 * 你也可以指定一个比较函数来进行排序
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[identity]]
 *  The iteratees to sort by. 用来排序的迭代器
 * @param {(string|function)[]} [orders] The sort orders of `iteratees`. 排序的方向或自定义比较器
 * @returns {Array} Returns the new sorted array.   新的已排序数组
 * @see reverse
 * @example
 *
 * const users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ]
 *
 * // Sort by `user` in ascending order and by `age` in descending order. 可指定多个排序字段
 * orderBy(users, ['user', 'age'], ['asc', 'desc'])
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * // Sort by `user` then by `age` using custom compare functions for each
 * orderBy(users, ['user', 'age'], [
 *   (a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }),
 *   (a, b) => a - b,
 * ])
 *
 */
function orderBy(collection, iteratees, orders) {
  if (collection == null) {
    return [] // 对于空集合，直接返回空数组
  }
  if (!Array.isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees]  // 处理迭代器的格式
  }
  if (!Array.isArray(orders)) {
    orders = orders == null ? [] : [orders] // 处理排序器的格式
  }
  return baseOrderBy(collection, iteratees, orders)  // 借调基本方法实现
}

export default orderBy
