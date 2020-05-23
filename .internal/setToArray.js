/**
 * Converts `set` to an array of its values.
 * 转换`set`为一个由它的values组成的数组
 *
 * @private
 * @param {Object} set The set to convert.  要转换的set
 * @returns {Array} Returns the values. 值的数组
 */
function setToArray(set) {
  let index = -1
  const result = new Array(set.size)  // 创建一个与set尺寸一致的数组作为结果容器

  set.forEach((value) => {  // 迭代set
    result[++index] = value // 将set中每一项内的value部分插入到结果数组中
  })
  return result
}

export default setToArray
