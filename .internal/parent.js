import baseGet from './baseGet.js'
import slice from '../slice.js'

/**
 * Gets the parent value at `path` of `object`.
 * 获取`object`的指定路径`path`的上一层值（相当于无视路径路径的最后一项）
 *
 * @private
 * @param {Object} object The object to query.  // 要查询的对象
 * @param {Array} path The path to get the parent value of. // 要查询的路径
 * @returns {*} Returns the parent value. 上一层的值
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, slice(path, 0, -1)) // 若路径数组长度小于2则视为无效的路径数组直接返回原对象，否则，借调baseGet来获取值（同时无视路径数组的最后一项）
}

export default parent
