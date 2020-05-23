import baseFindIndex from './.internal/baseFindIndex.js'
import toInteger from './toInteger.js'

/**
 * This method is like `findIndex` except that it iterates over elements
 * of `collection` from right to left.
 * 此方法类似`findIndex`但其从右往左迭代`collection`的元素
 *
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的元素
 * @param {Function} predicate The function invoked per iteration.  每次迭代要调用的函数
 * @param {number} [fromIndex=array.length-1] The index to search from. 搜索开始的位置，默认为数组的末位
 * @returns {number} Returns the index of the found element, else `-1`. 若找到了元素，则返回该元素索引，否则返回-1
 * @see find, findIndex, findKey, findLast, findLastKey
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user == 'pebbles')
 * // => 2
 */
function findLastIndex(array, predicate, fromIndex) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1 // 对于空数组直接返回-1
  }
  let index = length - 1  // 数组末位索引
  if (fromIndex !== undefined) {  // 若定义了搜索开始位置
    index = toInteger(fromIndex)  // 转为有效的索引值
    index = fromIndex < 0
      ? Math.max(length + index, 0) // 开始位置为负值，代表从末位开始的偏移量，这里转为相应的正数偏移量
      : Math.min(index, length - 1) // 防止访问越界
  }
  return baseFindIndex(array, predicate, index, true) // 借调相应基础方法实现，指定搜索方向
}

export default findLastIndex
