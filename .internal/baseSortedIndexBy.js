import isSymbol from '../isSymbol.js'

/** Used as references for the maximum length and index of an array. 引用常量'最大数组长度'和'最大数组索引值' */
const MAX_ARRAY_LENGTH = 4294967295
const MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1

/**
 * The base implementation of `sortedIndexBy` and `sortedLastIndexBy`
 * which invokes `iteratee` for `value` and each element of `array` to compute
 * their sort ranking. The iteratee is invoked with one argument (value).
 * `sortedIndexBy` 和 `sortedLastIndexBy` 的基本实现，用来得到要插入一个已排序数组的正确位置
 * 它调用值的`iteratee`和数组的每个元素来计算它们的排序值。 迭代器被调用时使用参数value
 *
 * @private
 * @param {Array} array The sorted array to inspect. 要检查的排序了的数组
 * @param {*} value The value to evaluate.  要检查的值
 * @param {Function} iteratee The iteratee invoked per element. 调用每个元素的迭代器
 * @param {boolean} [retHighest] Specify returning the highest qualified index. 是否返回最高规格索引
 * @returns {number} Returns the index at which `value` should be inserted  应该插入值'value'的数组的索引
 *  into `array`.
 */
function baseSortedIndexBy(array, value, iteratee, retHighest) {
  let low = 0 // 最低默认为0
  let high = array == null ? 0 : array.length // 最高默认为array的末位
  if (high == 0) {  // 空数组则直接返回0
    return 0
  }

  value = iteratee(value) // 使用迭代器的返回结果

  // value的特殊值情况的标示
  const valIsNaN = value !== value
  const valIsNull = value === null
  const valIsSymbol = isSymbol(value)
  const valIsUndefined = value === undefined

  while (low < high) {
    let setLow  // 标识 是否需要移动'最低值'的索引位置
    const mid = Math.floor((low + high) / 2)  // 找到'低'到'高'之间的中间位置（二分）
    const computed = iteratee(array[mid]) // 计算中间位置的值
    const othIsDefined = computed !== undefined // 中间位置的值特殊值标示
    const othIsNull = computed === null
    const othIsReflexive = computed === computed
    const othIsSymbol = isSymbol(computed)

    if (valIsNaN) {
      setLow = retHighest || othIsReflexive
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined)
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull)
    } else if (valIsSymbol) {
      setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol)
    } else if (othIsNull || othIsSymbol) {
      setLow = false
    } else {
      setLow = retHighest ? (computed <= value) : (computed < value)
    }
    if (setLow) {
      low = mid + 1 // 若需要移动最低值位置，就移动到当次迭代中中间值的下一个位置（使用中间值是Math.floor取到的）
    } else {
      high = mid  // 否则将最高值移动到中间值的位置
    }
  }
  return Math.min(high, MAX_ARRAY_INDEX)  // 返回这个不断变化的'范围'的最高值位置即为应该插入的位置，但不能超过数组的最大索引值限制
}

export default baseSortedIndexBy
