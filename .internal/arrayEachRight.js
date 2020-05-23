/**
 * A specialized version of `forEachRight` for arrays.
 * `forEachRight`的一个用于数组的特殊版本
 *
 * @private
 * @param {Array} [array] The array to iterate over.  要迭代的数组
 * @param {Function} iteratee The function invoked per iteration. 每次迭代调用的函数
 * @returns {Array} Returns `array`.  迭代后的数组
 */
function arrayEachRight(array, iteratee) {
  let length = array == null ? 0 : array.length

  while (length--) {  // 倒序迭代
    if (iteratee(array[length], length, array) === false) {
      break // 若当前项被外部指定的迭代函数断言为false，则结束整个迭代
    }
  }
  return array  // 返回原数组
}

export default arrayEachRight
