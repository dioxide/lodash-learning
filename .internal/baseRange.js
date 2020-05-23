/**
 * The base implementation of `range` and `rangeRight` which doesn't
 * coerce arguments.
 * `range`和`rangeRight`的基本实现，其不强制参数
 *
 * @private
 * @param {number} start The start of the range. 区间的开始
 * @param {number} end The end of the range.  区间的接受
 * @param {number} step The value to increment or decrement by. 区间的步长
 * @param {boolean} [fromRight] Specify iterating from right to left. 指定是否从右向左迭代
 * @returns {Array} Returns the range of numbers. 生成的区间数字构成的数组
 */
function baseRange(start, end, step, fromRight) {
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)  // 得出区间数据的长度，最小为0
  const result = new Array(length)  // 结果数组

  while (length--) {  // 倒序迭代结果数组
    result[fromRight ? length : ++index] = start  // 有fromRight迭代使用2个游标中的哪个
    start += step // 每项的值的处理
  }
  return result
}

export default baseRange
