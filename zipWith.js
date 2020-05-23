import unzipWith from './unzipWith.js'

/**
 * This method is like `zip` except that it accepts `iteratee` to specify
 * how grouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 * 此方法类似`zip`,但其接受一个 指定分组只应如何组合 的迭代器`iteratee`。
 * 迭代器被传递每个组的对应的每个元素：...group
 *
 * @since 3.8.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.  要处理的元素
 * @param {Function} iteratee The function to combine
 *  grouped values. 组合组值的函数
 * @returns {Array} Returns the new array of grouped elements.  新的由组元素组成的数组
 * @see unzip, unzipWith, zip, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)
 * // => [111, 222]
 */
function zipWith(...arrays) {
  const length = arrays.length
  let iteratee = length > 1 ? arrays[length - 1] : undefined  // 假设最后一个参数为迭代器
  iteratee = typeof iteratee === 'function' ? (arrays.pop(), iteratee) : undefined  // 确认假设的迭代器是否可用，并做相应处理
  return unzipWith(arrays, iteratee)  // 借调基本方法，并指定迭代器（可能为undefined）
}

export default zipWith
