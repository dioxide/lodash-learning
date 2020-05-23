import isArguments from '../isArguments.js'
import isBuffer from '../isBuffer.js'
import isIndex from './isIndex.js'
import isTypedArray from '../isTypedArray.js'

/** Used to check objects for own properties. 用来检查是否为私有属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 * 创建一个由类数组`value`的可枚举属性名组成的数组
 *
 * @private
 * @param {*} value The value to query. 要查询的值
 * @param {boolean} inherited Specify returning inherited property names. 指定是否要返回继承属性名
 * @returns {Array} Returns the array of property names.  属性名组成的数组
 */
function arrayLikeKeys(value, inherited) {
  const isArr = Array.isArray(value)
  const isArg = !isArr && isArguments(value)
  const isBuff = !isArr && !isArg && isBuffer(value)
  const isType = !isArr && !isArg && !isBuff && isTypedArray(value)
  const skipIndexes = isArr || isArg || isBuff || isType  // 根据value类型决定是否 忽略索引，即迭代非数组项部分
  const length = value.length
  const result = new Array(skipIndexes ? length : 0)  // 根据 skipIndexes决定结果数组的初始长度
  let index = skipIndexes ? -1 : length // 若忽略索引， 则从数组项末位开始迭代，否则从0位
  while (++index < length) { // 正序迭代value， 处理数字属性名的部分
    result[index] = `${index}`  // 依次填充 属性名
  }
  for (const key in value) {  // 迭代value以处理其余部分
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
        // Safari 9 has enumerable `arguments.length` in strict mode.
          (key === 'length' ||
           // Skip index properties.
           isIndex(key, length))
        ))) {
      result.push(key)  // （若要返回继承属性 或 当前迭代key为私有属性）且 （要忽略索引时： 当前key为`length`或当前key是索引值）为假， 则向结果数组压入当前key
    }
  }
  return result
}

export default arrayLikeKeys
