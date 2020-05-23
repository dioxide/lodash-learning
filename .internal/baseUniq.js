import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import cacheHas from './cacheHas.js'
import createSet from './createSet.js'
import setToArray from './setToArray.js'

/** Used as the size to enable large array optimizations. 用来限制大数组长度以维持性能 */
const LARGE_ARRAY_SIZE = 200

/**
 * The base implementation of `uniqBy`.
 * `uniqBy`的基本实现
 *
 * @private
 * @param {Array} array The array to inspect. 要检查的数组A
 * @param {Function} [iteratee] The iteratee invoked per element. 应用在每个元素上的迭代器
 * @param {Function} [comparator] The comparator invoked per element. 应用在每个元素上的比较器
 * @returns {Array} Returns the new duplicate free array. 新的无重复数组
 */
function baseUniq(array, iteratee, comparator) {
  let index = -1  // 迭代游标起始位置
  let includes = arrayIncludes  // 引用includes方法
  let isCommon = true // 是否是要查找公有项的标志

  const { length } = array  // 数组A的长度
  const result = [] // 结果数组
  let seen = result // 已迭代记录

  if (comparator) { // 若指定了比较器，则：
    isCommon = false  // 不再寻找公有项
    includes = arrayIncludesWith  // 更改includes为合适的函数
  }
  else if (length >= LARGE_ARRAY_SIZE) {  // 否则若数组A尺寸大于性能阈值，要启用缓存机制
    const set = iteratee ? null : createSet(array)
    if (set) {
      return setToArray(set)  // 若未提供迭代器，直接返回set的array形式
    }
    isCommon = false  // 不再寻找公有项
    includes = cacheHas // 用缓存对象及其相应来判断
    seen = new SetCache // 使用缓存对象记录迭代历史
  }
  else {
    seen = iteratee ? [] : result // 迭代历史记录 在指定了迭代器是为另一个空数组，否则与结果数组为同一个
  }
  outer:
  while (++index < length) {  // 正序迭代数组A
    let value = array[index]  // 数组A的当前迭代项
    const computed = iteratee ? iteratee(value) : value // 若指定了迭代器函数，就在此应用

    value = (comparator || value !== 0) ? value : 0 // 若 未定义比较器 且 value为0，则确定value为0
    if (isCommon && computed === computed) {  // 若是要查找公有项 且 computed不是NaN
      let seenIndex = seen.length
      while (seenIndex--) { // 倒序迭代 迭代历史记录
        if (seen[seenIndex] === computed) { // 若 迭代历史记录已存在该值，就直接跳过后续处理，直接进行外层迭代的下一次迭代（即数组A的下一项）
          continue outer
        }
      }
      if (iteratee) { // 若定义了迭代器， 则需要在迭代历史记录中添加当前项的值
        seen.push(computed)
      }
      result.push(value)  // 将当前项的值追加到结果数组中
    }
    else if (!includes(seen, computed, comparator)) { // 若不是要查找公有项，则使用includes查找并由指定的比较器决定seen中是否已经存在了当前项的值
      if (seen !== result) {  // 若 迭代历史记录 与 结果数组 不是同一个
        seen.push(computed) // 则需要在迭代历史记录中追加当前项
      }
      result.push(value)  // 将当前项的值追加到结果数组中
    }
  }
  return result // 返回结果数组
}

export default baseUniq
