import baseAssignValue from './.internal/baseAssignValue.js'
import reduce from './reduce.js'

/** Used to check objects for own properties. 用于检查是否为私有属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 * 条件计数： 创建一个对象，其keys为应用在`collection`的每个元素的`iteratee`函数运行的结果，对应的值是每个键被`iteratee`返回的次数
 * 迭代器被传递1个参数:(value)
 *
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The iteratee to transform keys. 用来转换keys的迭代器
 * @returns {Object} Returns the composed aggregate object. 组合的聚合对象
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * countBy(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 */
function countBy(collection, iteratee) {
  return reduce(collection, (result, value, key) => { // 使用reduce折叠成结果
    key = iteratee(value) // 获取迭代器结果
    if (hasOwnProperty.call(result, key)) {
      ++result[key] // 只有key为私有属性才累积计数
    } else {
      baseAssignValue(result, key, 1) // 否则只计为1
    }
    return result // 返回折叠值
  }, {})
}

export default countBy
