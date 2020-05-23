import eq from '../eq.js'

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 * 获取`key`在KV键值对形式所组成的`array`中的对应索引
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {*} key The key to search for.  要搜索的key
 * @returns {number} Returns the index of the matched value, else `-1`. 返回匹配到的值的索引
 */
function assocIndexOf(array, key) {
  let { length } = array  // 数组长度
  while (length--) {  // 迭代数组项
    if (eq(array[length][0], key)) {  // 若当前迭代的数组项的的 内层数组的0位 与 要查找的key相等， 则认为已找到
      return length // 返回当前的迭代索引位置
    }
  }
  return -1
}

export default assocIndexOf
