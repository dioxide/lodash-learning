import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../map.js'
import cacheHas from './cacheHas.js'

/**
 * The base implementation of methods like `intersection` that accepts an
 * array of arrays to inspect.
 * `intersection` 找交集的方法的基本实现，其接受要检查的嵌套数组
 *
 * @private
 * @param {Array} arrays The arrays to inspect. 要检查的数组A （二维数组？）
 * @param {Function} [iteratee] The iteratee invoked per element. 要应用在每个元素上的迭代器
 * @param {Function} [comparator] The comparator invoked per element. 应应用在每个元素上的比较器
 * @returns {Array} Returns the new array of shared values. 由共有的（交集部分）组成的新数组
 */
function baseIntersection(arrays, iteratee, comparator) {
  const includes = comparator ? arrayIncludesWith : arrayIncludes // 由 是否传入了比较器 来决定使用哪个incldue方法
  const length = arrays[0].length // 数组A的第一项的长度
  const othLength = arrays.length // 数组A的长度
  const caches = new Array(othLength) // 创建中间缓存对象，其初始长度等于数组A的长度
  const result = [] // 创建结果数组

  let array // 记录数组A的某一项
  let maxLength = Infinity
  let othIndex = othLength  // 迭代数组A的开始位置为其末位

  while (othIndex--) {  // 倒序迭代数组A
    array = arrays[othIndex]  // 数组A的当前迭代项
    if (othIndex && iteratee) { // 若传入了迭代器且当前不是数组A的第一项
      array = map(array, (value) => iteratee(value))  // 应用传入的迭代器做映射
    }
    maxLength = Math.min(array.length, maxLength) // 确定maxLength为迭代项数组的长度，这也是最终结果数组的最大长度？ 这样得到的是数组A所有项中数组长度最小的值（因为要找交集）
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))  // 以迭代索引为key存入中间缓存
      ? new SetCache(othIndex && array) // 若 没有定义比较器 且 （定义了迭代器或数组第一项或当前项的长度都大于120）则： 设置该位置为一个缓存对象，并设置缓存内容为当前项
      : undefined // 否则设置该缓存项为undefined
  }
  array = arrays[0] // * 重置为数组A的第一项，意为以该项为主项去比较其他项

  let index = -1  // 迭代游标开始位置
  const seen = caches[0]  // seen初始化为数组A第一项对应的缓存值

  outer:
  while (++index < length && result.length < maxLength) { // 正序迭代数组A的第一项A[0] 在 结果数组的长度未超过'最大可能长度'时
    let value = array[index]  // 当前迭代项
    const computed = iteratee ? iteratee(value) : value // 若定义了迭代器就在此应用

    value = (comparator || value !== 0) ? value : 0 // 若未定义了比较器 且 当前值为0 ，则认为value等于0
    if (!(seen
      ? cacheHas(seen, computed)  //条件1： 若中间缓存seen已经存在存在同样的key（computed）
      : includes(result, computed, comparator)  //条件2： 若 结果中已经包含了该key（computed）
    )) {
      // 若上述两个条件都不成立， 进入这里的处理
      othIndex = othLength  // 从数组A的末位开始
      while (--othIndex) {  // 倒序迭代
        const cache = caches[othIndex]  // 取出对应当前迭代位置的中间缓存对象中的值
        if (!(cache
          ? cacheHas(cache, computed)
          : includes(arrays[othIndex], computed, comparator))
        ) {
          continue outer  // 若 cache中没有对应computed位置的缓存 且 数组A的当前迭代项也不包含computed值， 那么跳到外层迭代outer的下一迭代
        }
      }
      if (seen) {
        seen.push(computed) // 若有遍历记录，就将computed插入进去
      }
      result.push(value)  // 将当前迭代项的值插入到结果中
    }
  }
  return result
}

export default baseIntersection
