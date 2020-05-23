import baseFindKey from './.internal/baseFindKey.js'
import baseForOwnRight from './.internal/baseForOwnRight.js'

/**
 * This method is like `findKey` except that it iterates over elements of
 * a collection in the opposite order.
 * 此方法类似`findKey`但其从右向左迭代集合的元素
 *
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to inspect.  要检查的对象
 * @param {Function} predicate The function invoked per iteration.  每次迭代要调用的函数
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`. 找到的元素的key，未找到返回undefined
 * @see find, findIndex, findKey, findLast, findLastIndex
 * @example
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findLastKey(users, ({ age }) => age < 40)
 * // => returns 'pebbles' assuming `findKey` returns 'barney'
 */
function findLastKey(object, predicate) {
  return baseFindKey(object, predicate, baseForOwnRight)  // 借调baseFindKey，并指定断言函数和固定从右开始的迭代函数
}

export default findLastKey
