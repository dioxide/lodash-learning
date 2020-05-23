import castPath from './castPath.js'
import last from '../last.js'
import parent from './parent.js'
import toKey from './toKey.js'

/**
 * The base implementation of `unset`.
 * `unset`的基本实现
 *
 * @private
 * @param {Object} object The object to modify. 要修改的对象
 * @param {Array|string} path The property path to unset. 要重置的属性的路径
 * @returns {boolean} Returns `true` if the property is deleted, else `false`. 若属性被成功重置（删除）则返回true，否则，返回false
 */
function baseUnset(object, path) {
  path = castPath(path, object) // 展开为路径数组
  object = parent(object, path) // 获取指定路径属性的上一层对象
  return object == null || delete object[toKey(last(path))] // 若object压根儿就是null的就直接返回true表示已重置 或 直接delete掉指定的那个属性（不会失败）
}

export default baseUnset
