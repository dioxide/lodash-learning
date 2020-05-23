import unzip from './unzip.js'

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 * 创建一个由组元素组成的数组，组元素的第一个元素是所有给定数组的第一个元素，第二个元素是所有给定数组的第二个元素，第N个元素是所有给定数组的第N个元素。
 * 就像是'拉锁'的关闭动作，对应位置重新组合为新数组
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.  要处理的数组
 * @returns {Array} Returns the new array of grouped elements.  新的由组元素组成的数组
 * @see unzip, unzipWith, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 */
function zip(...arrays) { // 使用ES6聚合多个参数
  return unzip(arrays)  // 借调基本实现方法unzip(干其老本行)
}

export default zip
