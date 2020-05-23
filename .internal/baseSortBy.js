/**
 * The base implementation of `sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 * `sortBy`的基本实现,其使用比较器`comparer`来决定排序并将条件对象替换为它们的对应值
 *
 * @private
 * @param {Array} array The array to sort.  要排序的数组
 * @param {Function} comparer The function to define sort order.  决定排序的函数
 * @returns {Array} Returns `array`.  处理过的数组`array`
 */
function baseSortBy(array, comparer) {
  let { length } = array  // 获取数组长度

  array.sort(comparer)  // 先使用array原生的sort方法排序
  while (length--) {  // 迭代数组
    array[length] = array[length].value // @todo: 重新再对array赋值一遍？意义何在？
  }
  return array
}

export default baseSortBy
