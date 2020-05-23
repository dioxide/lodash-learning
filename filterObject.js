/**
 * Iterates over properties of `object`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, key, object).
 * 迭代`object`的属性key，返回所有被`predicate`断言为真值的元素的值.
 * 断言函数被传递3个参数：(value, key, object).
 *
 * If you want an object in return, consider `pickBy`.
 * 若干只是想获取元素对象，考虑使用`pickBy`
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} predicate The function invoked per iteration.  每次迭代调用的函数
 * @returns {Array} Returns the new filtered array. 新的过滤过的数组
 * @see pickBy, pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const object = { 'a': 5, 'b': 8, 'c': 10 }
 *
 * filterObject(object, (n) => !(n % 5))
 * // => [5, 10]
 */
function filterObject(object, predicate) {
  object = Object(object) // 先强制转换，使其可迭代
  const result = []

  Object.keys(object).forEach((key) => {  // 遍历其keys
    const value = object[key] // 当前key对应的value
    if (predicate(value, key, object)) {
      result.push(value)  // 只有被断言为真，才向结果数组中压入该值
    }
  })
  return result
}

export default filterObject
