import baseSortedIndexBy from './baseSortedIndexBy.js'
import isSymbol from '../isSymbol.js'

/** Used as references for the maximum length and index of an array. */
const MAX_ARRAY_LENGTH = 4294967295
const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1  // 数组索引最大值的一半

/**
 * The base implementation of `sortedIndex` and `sortedLastIndex` which
 * performs a binary search of `array` to determine the index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 * `sortedIndex` 和 `sortedLastIndex` 的基本实现，其在已排序的数组上执行一个二分查找，以决定某个值value应该被插入的索引位置
 *
 * @private
 * @param {Array} array The sorted array to inspect.  要被检查的已排序数组
 * @param {*} value The value to evaluate.  要评估的值
 * @param {boolean} [retHighest] Specify returning the highest qualified index. 是否返回最高索引
 * @returns {number} Returns the index at which `value` should be inserted  应该被插入到数组的索引位置
 *  into `array`.
 */
function baseSortedIndex(array, value, retHighest) {
  let low = 0 // 最低默认为0
  let high = array == null ? low : array.length  // 最高默认为array的末位
  // 若待插入值value是数字 且 value具有反射性 且 数组长度没有超过'最大数组索引'的一半
  if (typeof value === 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {  // 若最小值小于最大值时一直迭代
      const mid = (low + high) >>> 1  // 中值等于大小值于最大值之和再除以2，通过移位实现
      const computed = array[mid] // 取出中间的值
      if (computed !== null && !isSymbol(computed) &&
          (retHighest ? (computed <= value) : (computed < value))) {
        low = mid + 1 // 移动最低值到中值之后的1个位置
      } else {
        high = mid  // 移动最高值到中值的位置
      }
    }
    return high // 返回最高值
  }
  return baseSortedIndexBy(array, value, (value) => value, retHighest)  // 其他情况借调baseSortedIndexBy来实现
}

export default baseSortedIndex
