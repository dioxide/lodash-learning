/**
 * A specialized version of `lastIndexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 * `lastIndexOf`的一个特殊版本，其对`value`执行严格等值比较. 如: `===`
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {*} value The value to search for.  要搜索的值
 * @param {number} fromIndex The index to search from.  搜索开始的索引位置
 * @returns {number} Returns the index of the matched value, else `-1`. 匹配到的值的索引位置，-1表示未匹配到
 */
function strictLastIndexOf(array, value, fromIndex) {
  let index = fromIndex + 1 // 从指定的搜索开始位置的下一位（因为是向左查找）开始迭代
  while (index--) { // 倒序迭代（因为要找到最后一个出现的位置）
    if (array[index] === value) {
      return index  // 迭代当前项 与 要找的值 全等时，返回当前索引
    }
  }
  return index  // 走到这里就是-1了
}

export default strictLastIndexOf
