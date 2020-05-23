import baseEach from './baseEach.js'
import baseSortBy from './baseSortBy.js'
import baseGet from './baseGet.js'
import compareMultiple from './compareMultiple.js'
import isArrayLike from '../isArrayLike.js'

const identity = (value) => value

/**
 * The base implementation of `orderBy` without param guards.
 * `orderBy`的基本实现，但不进行参数防御
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over. 要遍历的集合
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.  用来排序的迭代器
 * @param {string[]} orders The sort orders of `iteratees`. 排序方式
 * @returns {Array} Returns the new sorted array. 新的排序过的数组
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) { // 若传进来了1个或多个迭代器
    iteratees = iteratees.map((iteratee) => { // 对迭代器数组进行一次映射
      if (Array.isArray(iteratee)) {  // 若存在第二层的数组
        return (value) => baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee)  // 映射为一个根据value进行取值的函数 @todo: 这里的实际作用还不清楚
      }

      return iteratee
    })
  } else {
    iteratees = [identity]  // 否则使用默认迭代器（直接返回原来的值）
  }

  let criteriaIndex = -1  // @todo: ？ 干啥的
  let eachIndex = -1  // 从-1开始迭代结果数组

  const result = isArrayLike(collection) ? new Array(collection.length) : []  // 要返回的结果数组(整理好的可排序数组)

  baseEach(collection, (value) => {
    const criteria = iteratees.map((iteratee) => iteratee(value)) // 依次调用传入的每个迭代器iteratee的到criteria数组

    result[++eachIndex] = {
      criteria,
      index: ++criteriaIndex,
      value
    }
  })

  return baseSortBy(result, (object, other) => compareMultiple(object, other, orders))  // 借调baseSortBy进行最终的排序, 这里排序的逻辑都在借调的方法里
}

export default baseOrderBy
