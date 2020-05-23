import SetCache from './SetCache.js'
import some from '../some.js'
import cacheHas from './cacheHas.js'

/** Used to compose bitmasks for value comparisons. 用于组成未掩码来进行值比较 */
const COMPARE_PARTIAL_FLAG = 1
const COMPARE_UNORDERED_FLAG = 2

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 * `baseIsEqualDeep`的一个用于数组的特殊版本，其支持局部深度比较  @toda: 此方法没搞明白
 *
 * @private
 * @param {Array} array The array to compare. 要比较的数组
 * @param {Array} other The other array to compare. 要比较的另一个数组
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details. 位掩码标志
 * @param {Function} customizer The function to customize comparisons.  自定义的比较器函数
 * @param {Function} equalFunc The function to determine equivalents of values. 用来决定是否相等的函数
 * @param {Object} stack Tracks traversed `array` and `other` objects.  用来跟踪遍历对象（轨迹）的对象？
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.  若两数组相等则返回true，否则返回false
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG  // 是否为局部/偏向
  const arrLength = array.length  // A数组的长度
  const othLength = other.length  // B数组的长度

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {  // 若两数组的长度不相等 且 不是在局部/偏向模式下B数组长度大于A数组长度的情况 下，则认为AB不等
    return false
  }
  // Assume cyclic values are equal.  假设循环值是相等的.
  const stacked = stack.get(array)
  if (stacked && stack.get(other)) {
    return stacked == other
  }
  let index = -1  // 从-1位置开始遍历
  let result = true // 默认结果为相等
  const seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined  // 已遍历的集合？

  stack.set(array, other) // 这是干啥？
  stack.set(other, array) // 这是干啥？

  // Ignore non-index properties. 忽略非索引属性
  while (++index < arrLength) { // 遍历A数组
    let compared  // 是否已比较过
    const arrValue = array[index] // A数组i位置的值
    const othValue = other[index] // B数组i位置的值

    if (customizer) { // 可选的应用自定义比较器函数
      compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)  // 局部模式：对同一个函数的传参顺序相反，得到相反的结果
        : customizer(arrValue, othValue, index, array, other, stack)  // 非局部模式：对同一个函数的传参顺序相反，得到相反的结果
    }
    if (compared !== undefined) { // 若存在比较结果（即自定义比较器给出了结果）
      if (compared) { // 若确定已比较过true，则直接跳转到下一次迭代（A数组的下一项）
        continue
      }
      result = false  // 否则比较结果为false，即A与B不相等，直接退出迭代
      break
    }
    // Recursively compare arrays (susceptible to call stack limits). 递归地进行数组比较（易受调用堆栈限制的影响）
    if (seen) { // 若已经遍历过？
      if (!some(other, (othValue, othIndex) => {  // 这里目的是要判断 other中不存在满足其内断言的情况
        // 若已遍历缓存中不存在B数组的某个索引 并且 （AB两数组在此位置的值相等 或被外部传入的equalFunc判断为相等）
        if (!cacheHas(seen, othIndex) &&
          (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex)  // 则将B数组的这个索引值压入已遍历集合。  走到这里并return意味着外层的!some... 将返回false
        }
      })) {
        result = false  // 同上，即不满足上述内部一系列断言时，认为AB不等，并退出整个迭代
        break
      }
    } else if (!(
      arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack) //  否则（即非seen情况下）：若AB两数组当前值相当 或 被外部传入的equalFunc判断为相等 - 都不成立时
    )) {
      result = false  // 则，认为AB不等，并退出整个迭代
      break
    }
  }
  stack['delete'](array)  // 清除遍历轨迹对象
  stack['delete'](other)
  return result
}

export default equalArrays
