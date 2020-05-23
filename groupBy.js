import baseAssignValue from './.internal/baseAssignValue.js'
import reduce from './reduce.js'

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 * 创建一个对象，其keys由`iteratee`运行在`collection`的每个元素的结果组成。 组值的顺序由它们在`collection`中出现的顺序决定。
 * key对应的值是就是产生该key的所有元素组成的数组。
 * 迭代器具有1个参数：（value）
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The iteratee to transform keys. 用来转换keys的迭代器
 * @returns {Object} Returns the composed aggregate object. 组合的聚合对象
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 */
function groupBy(collection, iteratee) {
  return reduce(collection, (result, value, key) => { // 使用reduce进行折叠
    key = iteratee(value) // 外部迭代器的结果作为key
    if (hasOwnProperty.call(result, key)) {
      result[key].push(value) // 只有key是result的私有属性（即已经存在了该key），则将当前值压入对应key的数组中
    } else {
      baseAssignValue(result, key, [value]) // 否则，创建该key位对应的数组（第一次分配时）
    }
    return result
  }, {})
}

export default groupBy
