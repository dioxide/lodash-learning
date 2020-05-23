/**
 * Iterates over elements of `array`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index, array).
 * 迭代`array`的元素，返回所有被断言函数`predicate`返回真值的元素.
 * 断言函数被传递3个参数：(value, index, array).
 *
 * **Note:** Unlike `remove`, this method returns a new array.
 * 注意： 不像`remove`,这个方法返回新数组
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.  要迭代的数组
 * @param {Function} predicate The function invoked per iteration.  每次迭代要调用的断言函数
 * @returns {Array} Returns the new filtered array. 新的过滤过的数组
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */
function filter(array, predicate) {
  let index = -1
  let resIndex = 0
  const length = array == null ? 0 : array.length
  const result = []

  while (++index < length) {  // 正序迭代array
    const value = array[index]  // 取出当前项
    if (predicate(value, index, array)) {
      result[resIndex++] = value  // 只有被断言通过，才会将当前项追加到结果数组中
    }
  }
  return result // 对于空数组相当于直接返回了[], 否则返回结果迭代处理过的result
}

export default filter
