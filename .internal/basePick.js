import basePickBy from './basePickBy.js'
import hasIn from '../hasIn.js'

/**
 * The base implementation of `pick` without support for individual
 * property identifiers.
 * `pick`的基本实现，但不支持孤立的属性识别符（即不存在的）
 *
 * @private
 * @param {Object} object The source object.  源对象
 * @param {string[]} paths The property paths to pick. 要拾取的属性路径
 * @returns {Object} Returns the new object.  新对象
 */
function basePick(object, paths) {
  return basePickBy(object, paths, (value, path) => hasIn(object, path))  // 指定路径存在时才拾取值
}

export default basePick
