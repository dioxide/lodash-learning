import eq from '../eq.js'
import equalArrays from './equalArrays.js'
import mapToArray from './mapToArray.js'
import setToArray from './setToArray.js'

/** Used to compose bitmasks for value comparisons. 用来组合位掩码进行值比较 */
const COMPARE_PARTIAL_FLAG = 1
const COMPARE_UNORDERED_FLAG = 2

/** `Object#toString` result references. 数据类型的字符串表示 */
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const mapTag = '[object Map]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const setTag = '[object Set]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'

const arrayBufferTag = '[object ArrayBuffer]'
const dataViewTag = '[object DataView]'

/** Used to convert symbols to primitives and strings. 用于转换symbols到原始量和字符串 */
const symbolValueOf = Symbol.prototype.valueOf

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 * `baseIsEqualDeep`的一个特殊版本，其用于比较两个具有相同`toStringTag`值的对象
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 * 此方法仅支持比较：`Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.  要比较的对象A
 * @param {Object} other The other object to compare. 要比较的对象B
 * @param {string} tag The `toStringTag` of the objects to compare. 要比较的类型,即`toStringTag`
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details. 位掩码标志
 * @param {Function} customizer The function to customize comparisons.  自定义比较器函数
 * @param {Function} equalFunc The function to determine equivalents of values. 自定义等值断言函数
 * @param {Object} stack Tracks traversed `object` and `other` objects. 根据遍历记录的stack
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`. 若AB相当则返回true，否则返回false
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {  // 根据类型`toStringTag`不同,走不同的处理流程，此方法仅做分流器作用
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false  // 对于dataview类型， 若它们的字节长度或字节偏移不同，则认为它们不等
      }
      object = object.buffer  // 将缓冲区内容写入？
      other = other.buffer

    case arrayBufferTag:
      return !((object.byteLength != other.byteLength) ||
        !equalFunc(new Uint8Array(object), new Uint8Array(other))); // 对于arrayBuffer类型,若它们字节长度不同 或 转换为Unit8Array也不等，就认为它们不等


    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      // 通过+符号进行强制转换，对于布尔转为1和0；日期类型转为毫秒值；无效日期转为NaN，
      return eq(+object, +other)

    case errorTag:
      return object.name == other.name && object.message == other.message // 对于错误类型，只要它们name和messaeg属性相等就认为它们相等

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      // 对于正则表达式对象，将其中一个强制转换为字符串，若它们仍相等，就认为它们相等
      return object == `${other}`

    case mapTag:
      let convert = mapToArray  // @todo: 这是干啥

    case setTag:
      const isPartial = bitmask & COMPARE_PARTIAL_FLAG
      convert || (convert = setToArray)

      if (object.size != other.size && !isPartial) {
        return false  // 若AB大小不同且不是部分比较模式， 则认为它们不等
      }
      // Assume cyclic values are equal.  假设循环值相等
      const stacked = stack.get(object)
      if (stacked) {
        return stacked == other
      }
      bitmask |= COMPARE_UNORDERED_FLAG // 处理位掩码， 进行`或等`

      // Recursively compare objects (susceptible to call stack limits).  递归比较对象（可能收调用栈限制影响）
      stack.set(object, other)
      const result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack)
      stack['delete'](object) // 清理临时栈缓存
      return result

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other)  // 对于symbol类型，使用原生方法比较
      }
  }
  return false
}

export default equalByTag
