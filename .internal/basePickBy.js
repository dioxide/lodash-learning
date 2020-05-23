import baseGet from './baseGet.js'
import baseSet from './baseSet.js'
import castPath from './castPath.js'

/**
 * The base implementation of `pickBy`.
 * `pickBy`的基本实现
 *
 * @private
 * @param {Object} object The source object.  原对象
 * @param {string[]} paths The property paths to pick.  要拾取的属性路径
 * @param {Function} predicate The function invoked per property. 每个属性上要调用的断言方法
 * @returns {Object} Returns the new object.  新对象
 */
function basePickBy(object, paths, predicate) {
  let index = -1
  const length = paths.length // 路径数组长度
  const result = {} // 结果数组

  while (++index < length) {  // 迭代整个路径数组 如 [a,b,c,0]
    const path = paths[index] // 当前层级路径
    const value = baseGet(object, path) // 当前层级路径的值
    if (predicate(value, path)) { // 若当前值被外部传入的断言函数断定为真
      baseSet(result, castPath(path, object), value)  // 则也在结果数组中依据当前路径设置一样的值, 多层级结构靠多次迭代形成
    }
  }
  return result // 返回拼合的数组
}

export default basePickBy
