import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * 将一个数组 拆分到一个或多个`size`长度的组块儿（chunk）中，如果`array`不能被均匀的拆分，则最后一个块将容纳不足一个块的元素
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process. 要处理的数组A
 * @param {number} [size=1] The length of each chunk  每个组块的长度(默认为1)
 * @returns {Array} Returns the new array of chunks.  新的组块组成的数组
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0) // 获取有效的chunk长度
  const length = array == null ? 0 : array.length // 获取数组A的长度
  if (!length || size < 1) {
    return [] // 对于空数组 或 块长度小于1 的这种高效要求，直接返回空数组以合理回应
  }
  let index = 0 // 迭代游标，用来控制迭代次数，每次迭代递增size（即一个chunk的长度）
  let resIndex = 0  // 迭代游标2，用来控制在结果数组中的游标位置
  const result = new Array(Math.ceil(length / size))  // 初始化结果数组，其长度为 数组A长度除以chunk长度的商，即使说数组A可有填充满几个chunk

  while (index < length) {  // 迭代至length，但索引值递增不是1而是size，所以最终迭代次数等于result.length,也就等于chunk的个数
    result[resIndex++] = slice(array, index, (index += size)) // 获取数组A的切片，每次都是从当前迭代位置到指定步长（chunk）处
  }
  return result
}

export default chunk
