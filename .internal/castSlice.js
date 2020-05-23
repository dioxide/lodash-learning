import slice from '../slice.js'

/**
 * Casts `array` to a slice if it's needed.
 * 如有必要将`array`转换为切片，否则返回原数组
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {number} start The start position.  开始位置
 * @param {number} [end=array.length] The end position. 结束位置（默认为数组长度）
 * @returns {Array} Returns the cast slice. 切片（铸片）
 */
function castSlice(array, start, end) {
  const { length } = array  // 获取数组的长度
  end = end === undefined ? length : end  // 结束位置默认为数组长度
  return (!start && end >= length) ? array : slice(array, start, end) // 若开始位置为假值且结束为止大于等于数组长度 则 直接返回数组， 否则 返回数组的切片
}

export default castSlice
