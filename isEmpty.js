import getTag from './.internal/getTag.js'
import isArguments from './isArguments.js'
import isArrayLike from './isArrayLike.js'
import isBuffer from './isBuffer.js'
import isPrototype from './.internal/isPrototype.js'
import isTypedArray from './isTypedArray.js'

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Checks if `value` is an empty object, collection, map, or set.
 * 检查`value`是否是空object、空collection、空map，或空set。
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 * 对于Object将在其 无私有可枚举字符串key的属性时 认为是空的。
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 * 类数组值，如：`arguments`对象，数组，缓冲，字符串或类jQuery集合在其存在值为0的`length`属性时将被认为是空的。
 * 类似的，maps和sets在其`size`属性为0时将被认为是空的。
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check. 要检查的变量
 * @returns {boolean} Returns `true` if `value` is empty, else `false`. 若`value`是空的则返回true，否则返回false
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true // 为null直接返回
  }
  if (isArrayLike(value) &&
      (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length  // 对于这些'类数组'，只考虑其'length'属性是否为0
  }
  const tag = getTag(value)
  if (tag == '[object Map]' || tag == '[object Set]') {
    return !value.size  // 对于map和set类型，只考虑其'size'属性是否为0
  }
  if (isPrototype(value)) {
    return !Object.keys(value).length // 若没有可迭代属性，就也认为是空的
  }
  for (const key in value) {  // 对应与object类型，迭代其私有可枚举字符串key属性
    if (hasOwnProperty.call(value, key)) {
      return false  // 只有有非私有的属性，就返回false
    }
  }
  return true // 否则就是非empty的情况
}

export default isEmpty
