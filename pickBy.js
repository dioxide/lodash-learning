import map from './map.js'
import basePickBy from './.internal/basePickBy.js'
import getAllKeysIn from './.internal/getAllKeysIn.js'

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 * 创建一个对象，其组成属性由运行在`object`的断言函数`predicate`决定（返回true即保留）。
 *
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.  源对象
 * @param {Function} predicate The function invoked per property. 应用在每个属性上的函数
 * @returns {Object} Returns the new object.  新的对象
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pickBy(object, isNumber)
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {} // 对于空值，返回空对象
  }
  const props = map(getAllKeysIn(object), (prop) => [prop]) // 获取object的所有key，并将每项包裹在一个数组中
  return basePickBy(object, props, (value, path) => predicate(value, path[0]))  // 借调基本方法，并指定断言函数
}

export default pickBy
