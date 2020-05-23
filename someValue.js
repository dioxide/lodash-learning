/**
 * Checks if `predicate` returns truthy for **any** element of `object`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, key, object).
 * 检查断言函数`predicate`是否对于`object`的任何元素都返回真值。
 * 迭代将在断言函数`predicate`返回真值时终止。
 * 断言函数接受3个参数： (value, key, object).
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} predicate The function invoked per iteration. 每次迭代的断言函数
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`. 若任何元素都通过的检查则返回true，否则返回false
 * @example
 *
 * someValues({ 'a': 0, 'b': 'yes', 'c': false }, Boolean)
 * // => true
 */
function someValues(object, predicate) {
  object = Object(object) // 强制转换为对象
  const props = Object.keys(object) // 获取可枚举私有的keys

  for (const key of props) {  // 迭代keys
    if (predicate(object[key], key, object)) {
      return true // 一旦被断言函数返回真值，则此处也返回true，整个迭代终止
    }
  }
  return false  // 否则返回false
}

export default someValues
