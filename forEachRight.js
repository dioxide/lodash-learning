import arrayEachRight from './.internal/arrayEachRight.js'
import baseEachRight from './.internal/baseEachRight.js'

/**
 * This method is like `forEach` except that it iterates over elements of
 * `collection` from right to left.
 * 类似`forEach`但其从右往左迭代`collection`的元素
 *
 * @since 2.0.0
 * @alias eachRight
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The function invoked per iteration. 每次迭代调用的函数
 * @returns {Array|Object} Returns `collection`.  原集合
 * @see forEach, forIn, forInRight, forOwn, forOwnRight
 * @example
 *
 * forEachRight([1, 2], value => console.log(value))
 * // => Logs `2` then `1`.
 */
function forEachRight(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEachRight : baseEachRight // 根据是否为数组类型 选用合适的迭代函数
  return func(collection, iteratee) // 借用已有函数进行迭代，同时指定迭代器
}

export default forEachRight
