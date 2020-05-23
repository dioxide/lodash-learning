/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 * 此方法类似`arrayIncludes`，不同的是它接受一个比较器
 *
 * @private
 * @param {Array} [array] The array to inspect. 要检查的数组
 * @param {*} target The value to search for. 要查询的值
 * @param {Function} comparator The comparator invoked per element. 应用在每个元素上的比较器
 * @returns {boolean} Returns `true` if `target` is found, else `false`.  若找到了则返回true，否则返回false
 */
function arrayIncludesWith(array, target, comparator) {
  if (array == null) {  // 若arr为null则直接视为未找到
    return false
  }

  for (const value of array) {  // 迭代array的项
    if (comparator(target, value)) {  // 若被外部传入的比较器断定未相等
      return true // 则直接返回，代表已找到
    }
  }
  return false // 否则未找到
}

export default arrayIncludesWith
