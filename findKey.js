/**
 * This method is like `find` except that it returns the key of the first
 * element `predicate` returns truthy for instead of the element itself.
 * 此方法类似`find`但其返回 第一个被`predicate`断定为true的元素的key值 而不是元素本身
 *
 * @since 1.1.0
 * @category Object
 * @param {Object} object The object to inspect.  要检查的对象
 * @param {Function} predicate The function invoked per iteration.  每次迭代要调用的函数
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`. 找到的元素的key，未找到返回undefined
 * @see find, findIndex, findLast, findLastIndex, findLastKey
 * @example
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findKey(users, ({ age }) => age < 40)
 * // => 'barney' (iteration order is not guaranteed)
 */
function findKey(object, predicate) {
  let result
  if (object == null) {
    return result // 对象空对象直接返回undefined
  }
  Object.keys(object).some((key) => { // 对objects的keys进行'存在'的量词逻辑迭代
    const value = object[key]
    if (predicate(value, key, object)) {  // 若当前项被断言函数确定为真才算找到，
      result = key  // 并向结果中写入当前的key，并退出迭代
      return true
    }
  })
  return result
}

export default findKey
