import isArrayLike from '../isArrayLike.js'
import isIndex from './isIndex.js'
import isObject from '../isObject.js'
import eq from '../eq.js'

/**
 * Checks if the given arguments are from an iteratee call.
 * 检查传递传递的参数是否来自于一个迭代调用
 *
 * @private
 * @param {*} value The potential iteratee value argument.  潜在的迭代器value参数
 * @param {*} index The potential iteratee index or key argument. 潜在的迭代器index参数
 * @param {*} object The potential iteratee object argument.  潜在的迭代器object参数
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,  若arguments来自于一个迭代调用则返回true，否则返回false
 *  else `false`.
 */

function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false  // 若object不是对象，则认定结果为false
  }
  const type = typeof index
  if (type === 'number'
    ? (isArrayLike(object) && isIndex(index, object.length))
    : (type === 'string' && index in object)
  ) { // 若index的类型为number且object是类对象且index为有效索引值  或 index的类型为string且index存在与object中时
    return eq(object[index], value)   // 指定位置的值与传入值相等则认为 结果为true，否则为false
  }
  return false  // 其他情况均认定为false
}

export default isIterateeCall
