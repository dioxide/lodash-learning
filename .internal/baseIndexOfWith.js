/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 * 类似于`baseIndexOf`方法，不同的是其接受一个比较器
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {*} value The value to search for.  要搜索的值
 * @param {number} fromIndex The index to search from.  指定搜索开始的位置索引
 * @param {Function} comparator The comparator invoked per element. 应用在每个元素上的比较器
 * @returns {number} Returns the index of the matched value, else `-1`. 匹配到的值的索引位置，-1代表未匹配到值
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  let index = fromIndex - 1 // 迭代开始的位置
  const { length } = array  // 获取数组长度

  while (++index < length) {  // 迭代数组项
    if (comparator(array[index], value)) {  // 由外部传入的比较其决定当前项是否匹配
      return index  // 若匹配则返回当前项的索引
    }
  }
  return -1
}

export default baseIndexOfWith
