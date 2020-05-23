import baseUnset from './baseUnset.js'
import isIndex from './isIndex.js'

/**
 * The base implementation of `pullAt` without support for individual
 * indexes or capturing the removed elements.
 * `pullAt`的基本实现，其不支持单独索引或捕获移除的元素
 *
 * @private
 * @param {Array} array The array to modify. 要修改的数组
 * @param {number[]} indexes The indexes of elements to remove. 要移除元素的索引
 * @returns {Array} Returns `array`.  修改后的数组
 */
function basePullAt(array, indexes) {
  let length = array ? indexes.length : 0 // 要移除元素索引数组长度
  const lastIndex = length - 1  // 末位索引值

  while (length--) {  // 倒序迭代要移除元素索引数组
    let previous  // 记录上一个值
    const index = indexes[length] // 取出一个要移除元素的索引
    if (length === lastIndex || index !== previous) { // 要移除的索引不是上一个移除的索引 或 当前不是最后一项时
      previous = index  // 上一个移除的索引
      if (isIndex(index)) {
        array.splice(index, 1)  // 若当前是有效的索引值，则移除array中的对应的项
      } else {
        baseUnset(array, index)   // 借调baseUnset删除该项（可能是个属性路径）
      }
    }
  }
  return array
}

export default basePullAt
