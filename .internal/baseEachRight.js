import baseForOwnRight from './baseForOwnRight.js'
import isArrayLike from '../isArrayLike.js'

/**
 * The base implementation of `forEachRight`.
 * `forEachRight`的基本实现
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Array|Object} Returns `collection`.  迭代后的集合
 */
function baseEachRight(collection, iteratee) {
  if (collection == null) { // 若集合为空则直接返回该集合
    return collection
  }
  if (!isArrayLike(collection)) { // 若集合不是类数组
    return baseForOwnRight(collection, iteratee)  // 则借调baseForOwnRight实现
  }
  const iterable = Object(collection) // 使用Object将集合强制转换为可迭代对象
  let length = collection.length  // 集合的长度

  while (length--) {  // 迭代集合
    if (iteratee(iterable[length], length, iterable) === false) { // 若外部传入的迭代器函数返回false则终止整个迭代
      break
    }
  }
  return collection // 返回这个集合
}

export default baseEachRight
