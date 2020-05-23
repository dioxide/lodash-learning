/**
 * A specialized version of `reduceRight` for arrays.
 * 'reductRight'的一个用于数组的特殊版本
 *
 * @private
 * @param {Array} [array] The array to iterate over.  要迭代的数组
 * @param {Function} iteratee The function invoked per iteration.  每次迭代调用的函数
 * @param {*} [accumulator] The initial value.  初始折叠值
 * @param {boolean} [initAccum] Specify using the last element of `array` as  指定是否使用`array`的最后一个元素作为折叠初始值
 *  the initial value.
 * @returns {*} Returns the accumulated value.  最终的折叠纸
 */
function arrayReduceRight(array, iteratee, accumulator, initAccum) {
  let length = array == null ? 0 : array.length
  if (initAccum && length) {
    accumulator = array[--length] // 若 指定了初始值且数组非空，则设置初始的折叠值
  }
  while (length--) {  // 倒序迭代
    accumulator = iteratee(accumulator, array[length], length, array) // 折叠值由指定的外部迭代器确定（包括是否累积操作）
  }
  return accumulator
}

export default arrayReduceRight
