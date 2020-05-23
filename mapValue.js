/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 * key映射为新值：创建一个对象，其与`object`具有一样的keys，而值通过运行在`object`的每个私有的可枚举的字符串key的属性的`iteratee`生成。
 * 迭代器接受3个参数：(value, key, object).
 *
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要运行的函数
 * @returns {Object} Returns the new mapped object. 新的映射得到的对象
 * @see mapKeys
 * @example
 *
 * const users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * }
 *
 * mapValue(users, ({ age }) => age)
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed) 迭代顺序不保证
 */
function mapValue(object, iteratee) {
  object = Object(object) // 强制转换为Object
  const result = {} // 结果默认为空对象

  Object.keys(object).forEach((key) => {  // 迭代object的keys
    result[key] = iteratee(object[key], key, object)  // 在结果对象中创建同样的key，其属性值由iteratee的结果决定
  })
  return result
}

export default mapValue
