import assignMergeValue from './assignMergeValue.js'
import cloneBuffer from './cloneBuffer.js'
import cloneTypedArray from './cloneTypedArray.js'
import copyArray from './copyArray.js'
import initCloneObject from './initCloneObject.js'
import isArguments from '../isArguments.js'
import isArrayLikeObject from '../isArrayLikeObject.js'
import isBuffer from '../isBuffer.js'
import isObject from '../isObject.js'
import isPlainObject from '../isPlainObject.js'
import isTypedArray from '../isTypedArray.js'
import toPlainObject from '../toPlainObject.js'

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 * `baseMerge`的一个特殊版本，其作用于数组和对象，并进行深度合并和跟踪遍历对象并启用循环引用合并
 * @todo: 要画流程图梳理
 *
 * @private
 * @param {Object} object The destination object. 目标对象A
 * @param {Object} source The source object.  源对象B
 * @param {string} key The key of the value to merge. 要合并的值的key
 * @param {number} srcIndex The index of `source`.  源对象的key
 * @param {Function} mergeFunc The function to merge values.  用来合并值的函数
 * @param {Function} [customizer] The function to customize assigned values. 自定义要分配的值
 * @param {Object} [stack] Tracks traversed source values and their merged  跟踪遍历 源值和它们的合并值
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  const objValue = object[key]  // 指定位置的对象A的值
  const srcValue = source[key]  // 指定位置的对象B的值
  const stacked = stack.get(srcValue) // 尝试获取栈中的记录

  if (stacked) {
    assignMergeValue(object, key, stacked)  // 若 在栈记录中找到了，则直接借调assignMergeValue分配合并值
    return
  }
  let newValue = customizer // 若 指定了自定义函数，则新值由该函数决定，否则临时默认为undefined
    ? customizer(objValue, srcValue, `${key}`, object, source, stack) // key强制转换为字符串
    : undefined

  let isCommon = newValue === undefined // 未得到合并值的标志

  if (isCommon) {
    const isArr = Array.isArray(srcValue) // 对象B当前值的 类型标志
    const isBuff = !isArr && isBuffer(srcValue)
    const isTyped = !isArr && !isBuff && isTypedArray(srcValue)

    newValue = srcValue
    if (isArr || isBuff || isTyped) { // 对于array、buffer、typedArray类型，分别使用对应的方法获取新值
      if (Array.isArray(objValue)) {
        newValue = objValue
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue)
      }
      else if (isBuff) {
        isCommon = false
        newValue = cloneBuffer(srcValue, true)
      }
      else if (isTyped) {
        isCommon = false
        newValue = cloneTypedArray(srcValue, true)
      }
      else {
        newValue = []
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {  // 否则，若对象B的当前值为纯对象或arguments类型，则借调相应的方法来赋值字对象A：
      newValue = objValue
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue)
      }
      else if (typeof objValue === 'function' || !isObject(objValue)) {
        newValue = initCloneObject(srcValue)  // 类型不是function 或 不是object时的克隆
      }
    }
    else {
      isCommon = false
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits). 递归合并对象和数组（易于调用堆栈限制）
    stack.set(srcValue, newValue) // 设置 递归遍历记录栈
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack)  // 由外部指定的合并函数来进行合并操作
    stack['delete'](srcValue) // 清除 递归遍历记录栈
  }
  assignMergeValue(object, key, newValue) // 得到要合并的值后，统一借调assignMergeValue合并进对象A
}

export default baseMergeDeep
