import isSymbol from './isSymbol.js'

/**
 * This method is like `min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 * 此方法类似于`min`但其接受一个应用在`array`的每个元素上以生成rank的`iteratee`函数。
 * 迭代器接受1个参数：（value）
 *
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over. 要迭代的数组
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {*} Returns the minimum value.  最小值
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * minBy(objects, ({ n }) => n)
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  let result
  if (array == null) {
    return result // 对null值返回undefined
  }
  let computed
  for (const value of array) {  // 迭代数组
    const current = iteratee(value) // 应用迭代器
    // 只有在 迭代后的当前值不是null 且 （记录值是undefined时current自等且不是symbol 或 迭代后的当前值小于记录值）
    if (current != null && (computed === undefined
      ? (current === current && !isSymbol(current))
      : (current < computed)
    )) {
      computed = current  // 将当前计算值记录在computed中
      result = value  // 将当前值赋予当前结果
    }
  }
  return result // 最终的结果
}

export default minBy
