import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 * 检查`value`是否为纯对象，即由`object`构造器创建的或其[[Prototype]]为`null`
 *
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`. 若是纯对象则返回true，否则返回false
 * @example
 *
 * function Foo() {
 *   this.a = 1
 * }
 *
 * isPlainObject(new Foo)
 * // => false
 *
 * isPlainObject([1, 2, 3])
 * // => false
 *
 * isPlainObject({ 'x': 0, 'y': 0 })
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) != '[object Object]') { // 必要条件： 若value不是类数组 或 类型标签不是[object Object]
    return false
  }
  if (Object.getPrototypeOf(value) === null) {  // 若其原型为null，就认定为纯对象
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) { // 递归其原型链到根Object
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto // 若value的原型 全等于 根对象 就认为为纯对象
}

export default isPlainObject
