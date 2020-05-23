import isFlattenable from './isFlattenable.js'

/**
 * The base implementation of `flatten` with support for restricting flattening.
 * `flatten`的基本实现，其支持扁平化限制
 *
 * @private
 * @param {Array} array The array to flatten. 要扁平化的数组A
 * @param {number} depth The maximum recursion depth. 最大递归层级
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration. 每次迭代要调用的断言函数以决定是否要进入，默认为isFlattenable
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks. 限制通过断言函数检查的值
 * @param {Array} [result=[]] The initial result value. 初始的结果值，默认为空数组
 * @returns {Array} Returns the new flattened array.  新的扁平化的数组
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  predicate || (predicate = isFlattenable)  // 若未指定断言函数，则默认为isFlattenable
  result || (result = []) // 若未指定初始数组，则默认为空数组[]

  if (array == null) {  // 若数组A为空，则直接返回结果数组
    return result
  }

  for (const value of array) {  // 迭代数组A
    if (depth > 0 && predicate(value)) {  // 若递归深度大于0且断言通过
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits). 递归可能收到调用栈限制的影响
        baseFlatten(value, depth - 1, predicate, isStrict, result)  // 递归调用baseFlatten，每递归一次depth减去1
      } else {
        result.push(...value) // 至此，就递归到了指定层，直接向结果数组压入 当前层数组的所有数组项即可
      }
    } else if (!isStrict) { // 否则若不是严格模式
      result[result.length] = value // 向结果数组追加入当前值
    }
  }
  return result
}

export default baseFlatten
