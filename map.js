/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 * 创建一个由 `array` 的每一项被迭代器`iteratee`处理返回的值构成的新数组（就是映射）
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.  要迭代的数组
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Array} Returns the new mapped array. 新的映射处的数组
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map([4, 8], square)
 * // => [16, 64]
 */
function map(array, iteratee) {
  let index = -1  // 迭代开始位置
  const length = array == null ? 0 : array.length // 处理数组长度
  const result = new Array(length)  // 创建一个相同长度的数组作为结果

  while (++index < length) {  // 正序迭代数组项
    result[index] = iteratee(array[index], index, array)  // 将外部传入的迭代器的直接结果放入结果数组的相同位置
  }
  return result // 返回结果数组
}

export default map
