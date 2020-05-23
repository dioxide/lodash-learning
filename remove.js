import basePullAt from './.internal/basePullAt.js'

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 * 移除`array`中所有被断言函数`predicate`返回true的元素，并返回被移除的元素。
 * 断言函数被传递3个参数：(value, index, array).
 *
 * **Note:** Unlike `filter`, this method mutates `array`. Use `pull`
 * to pull elements from an array by value.
 * 注意： 不像`filter`，这个方法回修改`array`,使用`pull`从数组中抽掉值
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.  要修改的数组
 * @param {Function} predicate The function invoked per iteration. 每次迭代调用的断言函数
 * @returns {Array} Returns the new array of removed elements.  由移除的元素组成的数组
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, reject, filter
 * @example
 *
 * const array = [1, 2, 3, 4]
 * const evens = remove(array, n => n % 2 == 0)
 *
 * console.log(array)
 * // => [1, 3]
 *
 * console.log(evens)
 * // => [2, 4]
 */
function remove(array, predicate) {
  const result = []
  if (!(array != null && array.length)) {
    return result // 对于空数组直接反弹回去
  }
  let index = -1
  const indexes = []  // 要被移除的索引值集
  const { length } = array

  while (++index < length) {  // 正序迭代
    const value = array[index]  // 数组当前项
    if (predicate(value, index, array)) {
      result.push(value)  // 若被断言真，将值加入结果数组
      indexes.push(index) // 同时将当前索引加入要被移除的索引集中
    }
  }
  basePullAt(array, indexes)  // 统一抽掉要移除的元素
  return result
}

export default remove
