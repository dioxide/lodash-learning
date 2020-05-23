/**
 * A specialized version of `reduce` for arrays.
 * `reduce`的一个用于arrays的特殊版本
 *
 * @private
 * @param {Array} [array] The array to iterate over.  要迭代的array
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @param {*} [accumulator] The initial value.  折叠的初始值
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.  是否使用`array`的第一个元素作为折叠的初始值
 * @returns {*} Returns the accumulated value.  最终的折叠值
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  let index = -1
  const length = array == null ? 0 : array.length

  if (initAccum && length) {
    accumulator = array[++index]  // 若指定了折叠初始值且数组非空， 则设置初始值
  }
  while (++index < length) {  // 正序迭代， 空数组在此会被排除
    accumulator = iteratee(accumulator, array[index], index, array) // 折叠值 完全由迭代器决定（包括是否进行累积）
  }
  return accumulator
}

export default arrayReduce
