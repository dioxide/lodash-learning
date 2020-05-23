import Stack from './Stack.js'
import arrayEach from './arrayEach.js'
import assignValue from './assignValue.js'
import cloneBuffer from './cloneBuffer.js'
import copyArray from './copyArray.js'
import copyObject from './copyObject.js'
import cloneArrayBuffer from './cloneArrayBuffer.js'
import cloneDataView from './cloneDataView.js'
import cloneRegExp from './cloneRegExp.js'
import cloneSymbol from './cloneSymbol.js'
import cloneTypedArray from './cloneTypedArray.js'
import copySymbols from './copySymbols.js'
import copySymbolsIn from './copySymbolsIn.js'
import getAllKeys from './getAllKeys.js'
import getAllKeysIn from './getAllKeysIn.js'
import getTag from './getTag.js'
import initCloneObject from './initCloneObject.js'
import isBuffer from '../isBuffer.js'
import isObject from '../isObject.js'
import isTypedArray from '../isTypedArray.js'
import keys from '../keys.js'
import keysIn from '../keysIn.js'

/** Used to compose bitmasks for cloning. 用来组合为克隆用的位掩码 */
const CLONE_DEEP_FLAG = 1
const CLONE_FLAT_FLAG = 2
const CLONE_SYMBOLS_FLAG = 4

/** `Object#toString` result references. `Object#toString`的结果集引用 */
const argsTag = '[object Arguments]'
const arrayTag = '[object Array]'
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const mapTag = '[object Map]'
const numberTag = '[object Number]'
const objectTag = '[object Object]'
const regexpTag = '[object RegExp]'
const setTag = '[object Set]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const weakMapTag = '[object WeakMap]'

const arrayBufferTag = '[object ArrayBuffer]'
const dataViewTag = '[object DataView]'
const float32Tag = '[object Float32Array]'
const float64Tag = '[object Float64Array]'
const int8Tag = '[object Int8Array]'
const int16Tag = '[object Int16Array]'
const int32Tag = '[object Int32Array]'
const uint8Tag = '[object Uint8Array]'
const uint8ClampedTag = '[object Uint8ClampedArray]'
const uint16Tag = '[object Uint16Array]'
const uint32Tag = '[object Uint32Array]'

/** Used to identify `toStringTag` values supported by `clone`. 用来识别`clone`支持的`toStringTag`的值 */
const cloneableTags = {}
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true
cloneableTags[errorTag] = cloneableTags[weakMapTag] = false

/** Used to check objects for own properties. 用来检查对象的私有属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Initializes an object clone based on its `toStringTag`.
 * 初始化一个对象克隆容器基于它的`toStringTag`值的不同
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 * 注意：这个函数只支持克隆 标签为上述8种 的值
 *
 * @private
 * @param {Object} object The object to clone.  要克隆的对象A
 * @param {string} tag The `toStringTag` of the object to clone.  要克隆的对象的`toStringTag`值
 * @param {boolean} [isDeep] Specify a deep clone.  指定是否进行深度克隆
 * @returns {Object} Returns the initialized clone. 初始化了的克隆容器
 */
function initCloneByTag(object, tag, isDeep) {
  const Ctor = object.constructor // 获取对象A的构造器
  switch (tag) {  // 根据 tag（即对象的数据类型的字符串表示）的不同，分之到不同的专用的clone函数去处理， 此函数只作为一个Hub之用
    case arrayBufferTag:
      return cloneArrayBuffer(object)

    case boolTag:
    case dateTag:
      return new Ctor(+object)  // 对于日期类型，使用+操作将其先将其转换为数字类型，再使用日期的构造器来构造出一个新的来

    case dataViewTag:
      return cloneDataView(object, isDeep)  // 对于dateview类型，默认使用深度克隆

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:  // 还能这么写？ 代表同时匹配多种情况
      return cloneTypedArray(object, isDeep)  // 对于typedArray类型， 默认使用深度克隆

    case mapTag:
      return new Ctor // 对于map类型，返回其构造器本身

    case numberTag:
    case stringTag:
      return new Ctor(object)

    case regexpTag:
      return cloneRegExp(object)  // 对于regexp类型，使用专有方法克隆

    case setTag:
      return new Ctor // 对于set类型，返回其构造器本身

    case symbolTag:
      return cloneSymbol(object)
  }
}

/**
 * Initializes an array clone.
 * 初始化一个数组的拷贝容器
 *
 * @private
 * @param {Array} array The array to clone. 要拷贝的数组
 * @returns {Array} Returns the initialized clone.  初始化了的克隆容器
 */
function initCloneArray(array) {
  const { length } = array
  const result = new array.constructor(length)  // 构造一个写的与源数组等长度的数组作为结果

  // Add properties assigned by `RegExp#exec`.  添加由`RegExp#exec`分配的属性
  if (length && typeof array[0] === 'string' && hasOwnProperty.call(array, 'index')) {  // 确认array是`RegExp#exec`返回的类型
    result.index = array.index
    result.input = array.input
  }
  return result
}

/**
 * The base implementation of `clone` and `cloneDeep` which tracks
 * traversed objects.
 * `clone`和`cloneDeep`的基本实现，其记录遍历的对象.
 * 注： 此函数几乎实现了JS中所有设计克隆的操作情形
 * @todo: 需要画的大的流程树来整理
 *
 * @private
 * @param {*} value The value to clone. 要克隆的值A
 * @param {number} bitmask The bitmask flags. 位掩码标志
 *  1 - Deep clone  1为深度克隆
 *  2 - Flatten inherited properties  2为展平继承的属性
 *  4 - Clone symbols 克隆符号
 * @param {Function} [customizer] The function to customize cloning. 自定义克隆过程的函数
 * @param {string} [key] The key of `value`.  要克隆的值`value`所在的key
 * @param {Object} [object] The parent object of `value`. 要克隆的值`value`所在的对象（宿主对象）B
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts. 跟踪遍历对象和它们的副本
 * @returns {*} Returns the cloned value. 克隆得到的值
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  let result  // 结果数组
  const isDeep = bitmask & CLONE_DEEP_FLAG  // 是否深度克隆
  const isFlat = bitmask & CLONE_FLAT_FLAG  // 是否展平属性
  const isFull = bitmask & CLONE_SYMBOLS_FLAG // 是否完整克隆（包括symbols）

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value) // 若 指定了自定义复制函数，则将执行结果赋予结果数组
  }
  if (result !== undefined) {
    return result // 若 此时结果不是undefined，则直接返回该结果数组
  }
  if (!isObject(value)) {
    return value  // 若 要克隆的值A不为object，则直接返回该值作为结果
  }
  const isArr = Array.isArray(value)  // 值A是否为数组
  const tag = getTag(value) // 值A的类型的字符表示
  if (isArr) {
    result = initCloneArray(value)  // 若 值A为数组类型， 则初始化一个拷贝容器到result
    if (!isDeep) {
      return copyArray(value, result) // 若不要求深度拷贝，则直接在这里进行数组的拷贝并返回结果
    }
  } else {
    const isFunc = typeof value === 'function'  // 值A是否为function

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep) // 若 值A为buffer， 则借调cloneBuffer进行克隆并直接返回结果
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {  // 若 值A 为object 或 arguments 或 （是function但不是对象），则：
      result = (isFlat || isFunc) ? {} : initCloneObject(value) // 若 要求展平或值A为function 则 使用空对象的克隆容器， 否则，借调initCloneObject来创建容器
      if (!isDeep) {  // 若不是深度克隆，则可在此直接进行克隆
        return isFlat // 根据是否要求展平使用不同的函数进行克隆
          ? copySymbolsIn(value, copyObject(value, keysIn(value), result))
          : copySymbols(value, Object.assign(result, value))
      }
    } else {
      if (isFunc || !cloneableTags[tag]) {  // 若A为function 或 不是可克隆地
        return object ? value : {}  // 若 定义了宿主对象怎返回原值，否则返回空对象
      }
      result = initCloneByTag(value, tag, isDeep) // 其他情况统一使用initCloneByTag创建克隆容器
    }
  }
  // Check for circular references and return its corresponding clone.  检查循环引用并返回其对应的克隆。
  stack || (stack = new Stack)  // 若 未指定stack则新建一个用来记录
  const stacked = stack.get(value)  // 尝试从stack记录中取值
  if (stacked) {
    return stacked  // 若 取到了值就直接返回，
  }
  stack.set(value, result)  // 否则 进行以下处理， 将值A为key 此时的结果为value入栈

  if (tag == mapTag) {  // 若值A是map类型
    value.forEach((subValue, key) => {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack))  // 迭代调用baseClone进行下一层结构的克隆，并将结果压入result
    })
    return result
  }

  if (tag == setTag) {  // 若值A是set类型
    value.forEach((subValue) => {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack))  // 迭代调用baseClone进行下一层结构的克隆，并将结果追加到result
    })
    return result
  }

  if (isTypedArray(value)) {
    return result // 若值A是typedArray，则直接返回此时的result
  }

  // 根据 isFull和isFlat标志 选择合适的keysFunc
  const keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys)

  const props = isArr ? undefined : keysFunc(value) // 获取要克隆的属性
  arrayEach(props || value, (subValue, key) => {  // 取不到props时，再迭代值A
    if (props) {
      key = subValue
      subValue = value[key]
    }
    // Recursively populate clone (susceptible to call stack limits). 递归填充克隆（易受调用堆栈限制的影响）
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack))
  })
  return result
}

export default baseClone
