import map from './map.js'
import copyArray from './.internal/copyArray.js'
import isSymbol from './isSymbol.js'
import stringToPath from './.internal/stringToPath.js'
import toKey from './.internal/toKey.js'

/**
 * Converts `value` to a property path array.
 * 转换`value`为属性路径数组
 *
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert. 要转换的值
 * @returns {Array} Returns the new property path array.  新的属性路径数组
 * @example
 *
 * toPath('a.b.c')
 * // => ['a', 'b', 'c']
 *
 * toPath('a[0].b.c')
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (Array.isArray(value)) {
    return map(value, toKey)  // 若value已经是数组，则使用map映射一遍，将值转为有效的key
  }
  // 若是symbol类型，则包裹一层数组并返回； 其他情况均借调stringToPath转为对象的数组并通过copyArray拷贝处一个新的来
  return isSymbol(value) ? [value] : copyArray(stringToPath(value))
}

export default toPath
