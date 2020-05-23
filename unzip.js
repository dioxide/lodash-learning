import filter from './filter.js'
import map from './map.js'
import baseProperty from './.internal/baseProperty.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * This method is like `zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 * 这个方法类似`zip`，是其反操作，其接受一个由组元素组成的数组并创建一个由其每个组元素重组的多个数组
 * 就像是'拉锁'的打开动作，咬合在一起的组重回到其对应位置
 *
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process. 要处理的组元素组成的数组
 * @returns {Array} Returns the new array of regrouped elements.  新重组的元素数组
 * @see unzipWith, zip, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * const zipped = zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * unzip(zipped)
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unzip(array) {
  if (!(array != null && array.length)) {
    return [] // 对于空数组直接反弹
  }
  let length = 0
  array = filter(array, (group) => {  // 对组合数组过滤一遍，只保留类数组对象
    if (isArrayLikeObject(group)) {
      length = Math.max(group.length, length) // 找出结果数组应该具有的长度，即所有组中的最大值
      return true
    }
  })
  let index = -1
  const result = new Array(length)  // 结果数组容器
  while (++index < length) {
    result[index] = map(array, baseProperty(index)) // 新数组的当前项 为 对应位置项所映射的新数组
  }
  return result
}

export default unzip
