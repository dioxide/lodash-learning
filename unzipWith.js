import map from './map.js'
import unzip from './unzip.js'

/**
 * This method is like `unzip` except that it accepts `iteratee` to specify
 * how regrouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 * 类似于`unzip`,但其接受一个 指定重新组合的值应如何组合的 迭代器`iteratee`.
 * 迭代器被传递的参数：每个组的对应元素
 *
 *
 * @since 3.8.0
 * @category Array
 * @param {Array} array The array of grouped elements to process. 要处理的由组元素组成的数组
 * @param {Function} iteratee The function to combine
 *  regrouped values. 组合组值的函数
 * @returns {Array} Returns the new array of regrouped elements.  新的重组的数组
 * @example
 *
 * const zipped = zip([1, 2], [10, 20], [100, 200])
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * unzipWith(zipped, add)
 * // => [3, 30, 300]
 */
function unzipWith(array, iteratee) {
  if (!(array != null && array.length)) {
    return [] // 对应空数组直接反弹
  }
  const result = unzip(array) // 借调unzip先做'开拉索'操作
  return map(result, (group) => iteratee.apply(undefined, group)) // 再对结果使用iteratee做一遍映射
}

export default unzipWith
