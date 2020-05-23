/**
 * Creates an array of values by running each property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments: (value, key, object).
 * 创建一个 由应用在`object`的每个属性值上的`iteratee`函数的结果 组成的数组。
 * 迭代器接受3个参数： (value, key, object)
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要运行的函数
 * @returns {Array} Returns the new mapped array. 新的映射得到的数组
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map({ 'a': 4, 'b': 8 }, square)
 * // => [16, 64] (iteration order is not guaranteed)
 */
function mapObject(object, iteratee) {
  const props = Object.keys(object) // 要迭代的object的keys，索引变为数字，值为原来的key，这样方便后面映射为数组
  const result = new Array(props.length)  // 具有同等长度的结果数组

  props.forEach((key, index) => { // 迭代object的keys
    result[index] = iteratee(object[key], key, object)  // 向结果数组中写入当前项，key为index（为数字），值由iteratee的结果决定
  })
  return result
}

export default mapObject
