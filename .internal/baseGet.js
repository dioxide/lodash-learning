import castPath from './castPath.js'
import toKey from './toKey.js'

/**
 * The base implementation of `get` without support for default values.
 * `get`的基本实现，但不支持默认值
 *
 * @private
 * @param {Object} object The object to query. 要查询的对象
 * @param {Array|string} path The path of the property to get.  要获取属性的路径
 * @returns {*} Returns the resolved value. 解析得到的值
 */
function baseGet(object, path) {
  path = castPath(path, object) // 将路径展开为'合适的'路径数组

  let index = 0
  const length = path.length  // 路径的长度，默认为0

  while (object != null && index < length) {  // 若`object`不为空就开始按照路径数组的项进行'逐层'迭代
    object = object[toKey(path[index++])] // 每次取路径数组中的一项，并进入这一层并将这一层的整个结构赋给object（从这里看出，路径数组中的符号都是支持用object[XXX]来存取的形式）
  }
  return (index && index == length) ? object : undefined  // 若遍历完成则返回'最后被遍历的对象结构'，否则返回undefined
}

export default baseGet
