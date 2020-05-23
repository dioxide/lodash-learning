/**
 * The base implementation of `findIndex` and `findLastIndex`.
 * `findIndex` 和 `findLastIndex` 的基本实现
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {Function} predicate The function invoked per iteration. 每次迭代要调用的断言函数
 * @param {number} fromIndex The index to search from.  搜索开始的索引位置
 * @param {boolean} [fromRight] Specify iterating from right to left. 指定是否要从右往左迭代
 * @returns {number} Returns the index of the matched value, else `-1`. 匹配到的值所在的索引位置
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array  // 获取待迭代数组的长度
  let index = fromIndex + (fromRight ? 1 : -1)  // 由 迭代开始位置 和 迭代方向 共同决定迭代开始的索引位置

  while ((fromRight ? index-- : ++index < length)) {  // 迭代数组项： 若是从右往左迭代则游标索引递减否则递加
    if (predicate(array[index], index, array)) {  // 若被外部传入的断言函数断定为true
      return index  // 就返回当前迭代的索引值
    }
  }
  return -1 // 否则返回-1表示未匹配到该值
}

export default baseFindIndex
