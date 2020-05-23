import assignValue from './assignValue.js'
import castPath from './castPath.js'
import isIndex from './isIndex.js'
import isObject from '../isObject.js'
import toKey from './toKey.js'

/**
 * The base implementation of `set`.
 * `set`的基本实现
 *
 * @private
 * @param {Object} object The object to modify. 要修改的对象
 * @param {Array|string} path The path of the property to set. 要设置的属性的路径
 * @param {*} value The value to set. 要设置的值
 * @param {Function} [customizer] The function to customize path creation.  自定义创建路径的函数
 * @returns {Object} Returns `object`.  修改后的对象
 */
function baseSet(object, path, value, customizer){
  if (!isObject(object)) {  // 若压根儿不是对象就直接返回
    return object
  }
  path = castPath(path, object) // 将路径展开为路径数组

  const length = path.length  // 路径数组的长度
  const lastIndex = length - 1  // 路径数组的末位索引值

  let index = -1  // 从-1开始迭代
  let nested = object // 当前的迭代对象

  while (nested != null && ++index < length) {  // 若迭代对象非空 且 未迭代到数组路径path的末位就一直迭代
    const key = toKey(path[index])  // 依次获取path路径数组的项作为key
    let newValue = value  // 要设置的新值

    if (index != lastIndex) { // 若当前迭代不是位于path的末位（说明当前层级还有下一层的复合结构）
      const objValue = nested[key]  // 取出当前层级的key的原值
      newValue = customizer ? customizer(objValue, key, nested) : undefined // 调用外部传入的自定义路径函数
      if (newValue === undefined) { // 若要设置的新值为undefined
        newValue = isObject(objValue) // 若当前层级的值是个object，则新值就使用这个原对象，否则： 若下一层是类数组值就设置为空数组否则设置空对象
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {})
      }
    }
    assignValue(nested, key, newValue)  // 再当前层级的对应位置赋予新值
    nested = nested[key]  // 更换迭代对象（进入下一层）
  }
  return object
}

export default baseSet
