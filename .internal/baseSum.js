/**
 * The base implementation of `sum` and `sumBy`.
 * `sum` 和 `sumBy`的基本实现
 *
 * @private
 * @param {Array} array The array to iterate over.   要迭代的数组
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {number} Returns the sum. 累加值
 */
function baseSum(array, iteratee) {
  let result

  for (const value of array) {  // 迭代array
    const current = iteratee(value) // 获得 外部迭代器应用后的值
    if (current !== undefined) {  // 只有新值不是undefined，才会被累加到结果中
      result = result === undefined ? current : (result + current)  // 首次赋值应为当前值，其后均为累加操作
    }
  }
  return result // 返回累加结果
}

export default baseSum
