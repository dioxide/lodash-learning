/**
 * Converts `set` to its value-value pairs.
 * 转换`set`为其value-value对
 *
 * @private
 * @param {Object} set The set to convert.  要转换的set
 * @returns {Array} Returns the value-value pairs.  value-value对
 */
function setToPairs(set) {
  let index = -1
  const result = new Array(set.size)  // 结果数组以set尺寸一致

  set.forEach((value) => {
    result[++index] = [value, value]  // 正序写入每一项值value
  })
  return result
}

export default setToPairs
