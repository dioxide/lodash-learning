import baseForOwn from './baseForOwn.js'
import isArrayLike from '../isArrayLike.js'

/**
 * The base implementation of `forEach`.
 * `forEach`的基本实现
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Array|Object} Returns `collection`.  迭代后的集合
 */
function baseEach(collection, iteratee) {
  if (collection == null) { // 若集合为空，则直接返回该集合
    return collection
  }
  if (!isArrayLike(collection)) { // 若集合不为类数组，则借调`baseForOwn`实现
    return baseForOwn(collection, iteratee)
  }
  const length = collection.length  // 集合的长度
  const iterable = Object(collection) // 强制转换集合为可迭代对象
  let index = -1  // 从-1位置开始迭代

  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) { // 使用外部传入的迭代器以决定是否继续迭代
      break
    }
  }
  return collection // 返回该集合
}

export default baseEach
