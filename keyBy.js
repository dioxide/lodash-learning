import baseAssignValue from './.internal/baseAssignValue.js'
import reduce from './reduce.js'

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 * 创建一个对象，其keys由 运行在`collection`的每个元素上的`iteratee`函数执行结果决定。
 * 每个key对应的值是负责生成key的最后一个元素。
 * 迭代器被传递1个参数：（value）
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The iteratee to transform keys. 用来转换keys的迭代器
 * @returns {Object} Returns the composed aggregate object. 组合的聚合对象
 * @see groupBy, partition
 * @example
 *
 * const array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ]
 *
 * keyBy(array, ({ code }) => String.fromCharCode(code))
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 */
function keyBy(collection, iteratee) {
  return reduce(collection, (result, value, key) => ( // 使用reduce折叠结果
    baseAssignValue(result, iteratee(value), value), result // 借调基本方法在 由迭代器决定的位置 分配当前值
  ), {})
}

export default keyBy
