import baseGet from './baseGet.js'
import baseSet from './baseSet.js'

/**
 * The base implementation of `update`.
 * `update`的基本实现
 *
 * @private
 * @param {Object} object The object to modify. 要修改的对象
 * @param {Array|string} path The path of the property to update. 要更新的属性的路径
 * @param {Function} updater The function to produce the updated value. 处理更新值的函数
 * @param {Function} [customizer] The function to customize path creation.  自定义路径生成的函数
 * @returns {Object} Returns `object`.
 */
function baseUpdate(object, path, updater, customizer) {
  return baseSet(object, path, updater(baseGet(object, path)), customizer)  // 组合式 优于 继承式的体现
}

export default baseUpdate
