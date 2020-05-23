/**
 * A specialized version of `indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 * `indexOf`的一个特殊版本，其进行值的严格地相等比较，如：`===`
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {*} value The value to search for.  要匹配的值
 * @param {number} fromIndex The index to search from.  搜索开始的索引位置
 * @returns {number} Returns the index of the matched value, else `-1`. 匹配到的值所在的索引位置
 */
function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1 // 从搜索开始位置开始， 不支持负值
  const { length } = array

  while (++index < length) {  // 迭代数组项
    if (array[index] === value) { // 使用严格相等 === 进行判断
      return index  // 返回匹配到值时的迭代索引值
    }
  }
  return -1 // 否则返回-1表示为匹配到值
}

export default strictIndexOf
