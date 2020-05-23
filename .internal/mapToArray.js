/**
 * Converts `map` to its key-value pairs.
 * 转换`map`到KV键值对儿形式的数组（一纬到二维）
 *
 * @private
 * @param {Object} map The map to convert.  要转换的map
 * @returns {Array} Returns the key-value pairs.  KV对儿
 */
function mapToArray(map) {
  let index = -1
  const result = new Array(map.size)  // 作为结果的与map长度相同的数组

  map.forEach((value, key) => { // 迭代map
    result[++index] = [key, value]  // 结果数组的每一项中对应源map的一项（转为长度为2的数组的形式）
  })
  return result
}

export default mapToArray
