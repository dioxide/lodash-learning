/**
 * The opposite of `mapValue` this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 * 值映射为新key： 与`mapValue`相对的方法，其创建一个新对象，该对象的具有与`object`一样的值，而keys则有应用在`object`的
 * 每个私有的可枚举的字符串key属性的`iteratee`函数的结果生成。
 * 迭代器接受3个参数：(value, key, object)
 *
 *
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Object} Returns the new mapped object. 新的映射得到的对象
 * @see mapValue
 * @example
 *
 * mapKey({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value
 * })
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKey(object, iteratee) {
  object = Object(object) // 强制转换为Object
  const result = {} // 结果默认为空对象

  Object.keys(object).forEach((key) => {  // 迭代object的keys
    const value = object[key] // 当前的属性值
    result[iteratee(value, key, object)] = value  // 在结果对象写入新的由iteratee的结果生成的key，并写入当前属性值
  })
  return result
}

export default mapKey
