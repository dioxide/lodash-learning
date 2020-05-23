/**
 * A specialized version of `forEach` for arrays.
 * 数组的`forEach`的一个特殊版本
 *
 * @private
 * @param {Array} [array] The array to iterate over.  要迭代的数组
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Array} Returns `array`.  迭代后的数组
 */
function arrayEach(array, iteratee) {
  let index = -1
  const length = array.length

  while (++index < length) {  // 正序遍历数组
    if (iteratee(array[index], index, array) === false) { // 若被外部函数断言为false，则退出整个迭代
      break
    }
  }
  return array
}

export default arrayEach
