import Stack from './Stack.js'
import equalArrays from './equalArrays.js'
import equalByTag from './equalByTag.js'
import equalObjects from './equalObjects.js'
import getTag from './getTag.js'
import isBuffer from '../isBuffer.js'
import isTypedArray from '../isTypedArray.js'

/** Used to compose bitmasks for value comparisons. 用于组合位掩码做值比较  */
const COMPARE_PARTIAL_FLAG = 1

/** `Object#toString` result references. 引用数据类型字符串表示 */
const argsTag = '[object Arguments]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'

/** Used to check objects for own properties. 用来检查属性是否为私有 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 * `baseIsEqual`的特殊版本，其用于数组和对象，其执行深度比较和根据遍历对象并进行循环引用比较
 *
 * @private
 * @param {Object} object The object to compare.  要比较的对象A
 * @param {Object} other The other object to compare. 要比较的对象B
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details. 位掩码
 * @param {Function} customizer The function to customize comparisons.  自定义比较器
 * @param {Function} equalFunc The function to determine equivalents of values. 用于值的等值判断的函数
 * @param {Object} [stack] Tracks traversed `object` and `other` objects. 跟踪遍历记录
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`. 若相当返回true，否则返回false
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  let objIsArr = Array.isArray(object)  // 是否为数组类型
  const othIsArr = Array.isArray(other)
  let objTag = objIsArr ? arrayTag : getTag(object) // 对象A的类型tag
  let othTag = othIsArr ? arrayTag : getTag(other)  // 对象B的类型tag

  objTag = objTag == argsTag ? objectTag : objTag // 若对象A为arguments类型视为为object类型
  othTag = othTag == argsTag ? objectTag : othTag // 若对象B为arguments类型视为为object类型

  let objIsObj = objTag == objectTag
  const othIsObj = othTag == objectTag
  const isSameTag = objTag == othTag  // 对象AB视为类型相同

  if (isSameTag && isBuffer(object)) { // 二者类型一直，其一为buffer
    if (!isBuffer(other)) {
      return false  // buffer类型的特殊处理
    }
    objIsArr = true // 认定obj是数组
    objIsObj = false  // 但不是对象
  }
  if (isSameTag && !objIsObj) { // 非对象类型的比较
    stack || (stack = new Stack)  // 若为指定stack则新建一个stack
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) // 为typedArray时的比较
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack)  // 其他非object时的比较
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {  // 若非部分比较？
    const objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__')
    const othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__')

    if (objIsWrapped || othIsWrapped) { // 若 二者任一具有`__wrapped__`属性， 则需要'解包装'操作
      const objUnwrapped = objIsWrapped ? object.value() : object
      const othUnwrapped = othIsWrapped ? other.value() : other

      stack || (stack = new Stack)  // 若此时stack不存在则新建一个stack
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)  // 使用指定的等值断言函数进行判断
    }
  }
  if (!isSameTag) {
    return false  // 类型不同，认定为不同
  }
  stack || (stack = new Stack)  // 若此时stack不存在则新建一个stack
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack) // 兜底其他情况：使用equalObjects判断
}

export default baseIsEqualDeep
