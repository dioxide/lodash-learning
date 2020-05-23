import get from '../get.js'

/**
 * The base implementation of `at` without support for individual paths.
 * `at`方法的基本实现，但不支持单独路径
 *
 * @private
 * @param {Object} object The object to iterate over. 要遍历的对象
 * @param {string[]} paths The property paths to pick.  要拾取的路径
 * @returns {Array} Returns the picked elements.  拾取的元素
 */
function baseAt(object, paths) {
  let index = -1
  const length = paths.length
  const result = new Array(length)  // 结果数组的长度于路径数组的长度一致
  const skip = object == null // 似乎无用？

  while (++index < length) {  // 迭代路径数组paths的项
    result[index] = skip ? undefined : get(object, paths[index])  // 借调get方法获取指定路径的值
  }
  return result
}

export default baseAt
