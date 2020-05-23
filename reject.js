import filter from './filter.js'
import filterObject from './filterObject.js'
import negate from './negate.js'

/**
 * The opposite of `filter` this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 * 集合反选： `filter`的反函数，其返回`collection`中未被断言函数`predicate`返回真值的所有元素。
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的元素
 * @param {Function} predicate The function invoked per iteration.  每次迭代要调用的函数
 * @returns {Array} Returns the new filtered array. 过滤了的数组
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, filter
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * reject(users, ({ active }) => active)
 * // => objects for ['fred']
 */
function reject(collection, predicate) {
  const func = Array.isArray(collection) ? filter : filterObject  // 根据collection的类型，选用合适过滤器函数
  return func(collection, negate(predicate))  // 借调filter函数，关键在于断言函数被negate函数包装了一下
}

export default reject
