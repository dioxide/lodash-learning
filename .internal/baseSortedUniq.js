import eq from '../eq.js'

/**
 * The base implementation of `sortedUniq` and `sortedUniqBy`.
 * `sortedUniq` and `sortedUniqBy`的基本实现
 *
 * @private
 * @param {Array} array The array to inspect. 要检测的数组
 * @param {Function} [iteratee] The iteratee invoked per element. 每个元素要调用的迭代器iteratee
 * @returns {Array} Returns the new duplicate free array. 新的无重复数组
 */
function baseSortedUniq(array, iteratee) {
  let seen
  let index = -1
  let resIndex = 0

  const { length } = array  // 获取待处理数组的长度
  const result = [] //返回结果数组

  while (++index < length) {  // 一直遍历到待处理数组的末尾位置
    const value = array[index], computed = iteratee ? iteratee(value) : value // 用来比较的计算值由外部提供的iteratee的结果来决定或直接取value
    if (!index || !eq(computed, seen)) {  // 若seen与迭代中的计算值不相等 或 迭代位于0位置
      seen = computed // 将计算值赋给'已出现'标志seen
      result[resIndex++] = value === 0 ? 0 : value  // 向结果数组中压入value
    }
  }
  return result
}

export default baseSortedUniq
