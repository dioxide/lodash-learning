import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../map.js'
import cacheHas from './cacheHas.js'

/** Used as the size to enable large array optimizations. 用来限制数组大小以维持性能 */
const LARGE_ARRAY_SIZE = 200

/**
 * The base implementation of methods like `difference` without support
 * for excluding multiple arrays.
 * 类型`difference`找差集方法的基本实现，但不支持排除多个数组
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组A
 * @param {Array} values The values to exclude. 要排除（减去）的数组B
 * @param {Function} [iteratee] The iteratee invoked per element. 应用在每个元素上的迭代器
 * @param {Function} [comparator] The comparator invoked per element. 应用在每个元素上的比较器
 * @returns {Array} Returns the new array of filtered values. 过滤后的新数组
 */
function baseDifference(array, values, iteratee, comparator) {
  let includes = arrayIncludes  // 引用数组include方法
  let isCommon = true // 是否要查找公有项 的标志
  const result = [] // 结果数组集
  const valuesLength = values.length  // 要排除的数组的长度

  if (!array.length) {  // 若数组A为空，则直接返回空数组
    return result
  }
  if (iteratee) {
    values = map(values, (value) => iteratee(value))  // 若由外部指定了迭代器，在此对要排除的数组做一遍映射
  }
  if (comparator) {
    includes = arrayIncludesWith  // 若由外部指定了比较器（由本函数代为应用），则要更换includes函数
    isCommon = false  // 查找公有项标志变为false
  }
  else if (values.length >= LARGE_ARRAY_SIZE) { // 若要排除的数组B长度过大（大于性能阈值），则启用缓存机制
    includes = cacheHas // includes函数改为缓存判断函数
    isCommon = false  // 查找公有项变为false
    values = new SetCache(values) // 要排除的数组B改为由缓存存储
  }
  outer:
  for (let value of array) {  // 迭代数组A
    const computed = iteratee == null ? value : iteratee(value) // 若定义了迭代器，就在此应用它

    value = (comparator || value !== 0) ? value : 0 // 若未定义比较器 且 value是0，则value确定为0 （因为未定义比较器时，是否为0完全可以确定）
    if (isCommon && computed === computed) {  // 若是查找公有项且computed不是NaN
      let valuesIndex = valuesLength  // 迭代开始位置为数组B的末位
      while (valuesIndex--) { // 倒序迭代
        if (values[valuesIndex] === computed) { // 若发现公有值，直接跳过下边的逻辑，到外层迭代outer的下一此迭代（即数组A的下一项）
          continue outer
        }
      }
      result.push(value)  // 否则，将当前迭代项的值插入结果数组（此值就是两数组AB之差的其中一项，因为公有项已被上述迭代全部排除掉了）
    }
    else if (!includes(values, computed, comparator)) { // 若不是查找公有项，则使用includes并由外部比较器判断values中是否包含computed
      result.push(value)  // 若不包含，则将当前迭代项的值插入结果数组
    }
  }
  return result // 返回结果数组
}

export default baseDifference
