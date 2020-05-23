import isKey from './isKey.js'
import stringToPath from './stringToPath.js'

/**
 * Casts `value` to a path array if it's not one.
 * 展开为路径数组，即：若`value`不是路径数组path array就将它拆解为路径数组
 *
 *
 * @private
 * @param {*} value The value to inspect. 要检查的值
 * @param {Object} [object] The object to query keys on.  要查询的对象
 * @returns {Array} Returns the cast property path array. 路径数组
 */
function castPath(value, object) {
  if (Array.isArray(value)) { // 如果value已经是array了，则直接返回它
    return value
  }
  return isKey(value, object) ? [value] : stringToPath(value) // 检测value是否仅仅是object的一个属性名（key），若是则包装再数组中返回，否则借调stringToPath将它转换为路径数组
}

export default castPath
