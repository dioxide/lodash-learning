/**
 * Checks if `predicate` returns truthy for **all** properties of `object`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, key, object).
 * 检查`object`的所有属性对于断言函数`predicate`是否都返回真值true。 迭代将在`predicate`返回假值时立即停止。
 * 迭代器接受3个参数： (value, key, object)
 *
 * **Note:** This method returns `true` for
 * [empty objects](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty objects.
 * 注意： 此方法对空的对象返回true，因为[everything is true]
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to iterate over.  要迭代的对象
 * @param {Function} predicate The function invoked per iteration. 每次迭代调用的函数
 * @returns {boolean} Returns `true` if all properties pass the predicate check,
 *  else `false`. 若所有属性都通过了断言检查则返回true，否则返回false
 * @example
 *
 * everyValue({ 'a': 0, 'b': 'yes', 'c': false }, Boolean)
 * // => false
 */
function everyValue(object, predicate) {
  object = Object(object) // 强制转换为object
  const props = Object.keys(object) // 获取所有可枚举私有key

  for (const key of props) {  // 迭代keys
    if (!predicate(object[key], key, object)) {
      return false  // 一旦某项未通过断言检查，则退出整个迭代，并返回false
    }
  }
  return true // 否则返回true
}

export default everyValue
