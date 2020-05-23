import copyArray from './.internal/copyArray.js'
import getTag from './.internal/getTag.js'
import isArrayLike from './isArrayLike.js'
import isString from './isString.js'
import iteratorToArray from './.internal/iteratorToArray.js'
import mapToArray from './.internal/mapToArray.js'
import setToArray from './.internal/setToArray.js'
import stringToArray from './.internal/stringToArray.js'
import values from './values.js'

/** `Object#toString` result references. */
const mapTag = '[object Map]'
const setTag = '[object Set]'

/** Built-in value references. 引用内建的Symbol迭代器 */
const symIterator = Symbol.iterator

/**
 * Converts `value` to an array.
 * 将`value`转换为一个数组
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to convert. 要转换的值
 * @returns {Array} Returns the converted array. 转换后的数组
 * @example
 *
 * toArray({ 'a': 1, 'b': 2 })
 * // => [1, 2] 对于object，将丢弃keys
 *
 * toArray('abc')
 * // => ['a', 'b', 'c']
 *
 * toArray(1)
 * // => []
 *
 * toArray(null)
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [] // 对于假值直接返回空数组
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value)  // 对于类数组：若是字符串则拆为由字符组成的数组，否则返回一个数组的副本
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]())  // 对于symbols迭代器，则执行迭代器，并返回结果数组
  }
  const tag = getTag(value)
  const func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values) // 对于map和set分别使用mapToArray和setToArray，都则使用values

  return func(value)  // 执行选择好的转换方法
}

export default toArray
