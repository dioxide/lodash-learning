import reduce from './reduce.js'

/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsey for. The predicate is
 * invoked with one argument: (value).
 * 集合二分法： 创建一个由两组元素组成的数组， 第一组为被`predicate`断言为真的元素，第二组为被`predicate`断言为假的元素。
 * 断言函数接受1个参数： （value）
 *
 * @since 3.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} predicate The function invoked per iteration.  每个迭代要调用的函数
 * @returns {Array} Returns the array of grouped elements.  已分组的数组
 * @see groupBy, keyBy
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ]
 *
 * partition(users, ({ active }) => active)
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */
function partition(collection, predicate) {
  return reduce(collection, (result, value, key) => ( // 使用reduce折叠结果
    result[predicate(value) ? 0 : 1].push(value), result  // 每次迭代都由断言结果决定 是将当前值添加到结果的第一部分还是第二部分，逗号后的result相当return result
  ), [[], []])  // 默认为双空数组组成的数组
}

export default partition
