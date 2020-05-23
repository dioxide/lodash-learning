import getTag from './.internal/getTag.js'
import isArrayLike from './isArrayLike.js'
import isString from './isString.js'
import stringSize from './.internal/stringSize.js'

/** `Object#toString` result references. */
const mapTag = '[object Map]'
const setTag = '[object Set]'

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 * 获取`collection`的大小，对于类数组返回其length值，对于对象返回其 私有的可枚举字符串key属性。
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect. 要检查的集合
 * @returns {number} Returns the collection size. 集合的大小
 * @example
 *
 * size([1, 2, 3])
 * // => 3
 *
 * size({ 'a': 1, 'b': 2 })
 * // => 2
 *
 * size('pebbles')
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0  // 对于空集合，当然返回0
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length  // 对于类数组，若是字符串，就返回字符串长度，否则返回其length值
  }
  const tag = getTag(collection)
  if (tag == mapTag || tag == setTag) {
    return collection.size  // map和set，返回其size数组
  }
  return Object.keys(collection).length // 其他情况（视为object类型），均返回keys的个数
}

export default size
