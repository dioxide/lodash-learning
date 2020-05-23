import Stack from './Stack.js'
import assignMergeValue from './assignMergeValue.js'
import baseFor from './baseFor.js'
import baseMergeDeep from './baseMergeDeep.js'
import isObject from '../isObject.js'
import keysIn from '../keysIn.js'

/**
 * The base implementation of `merge` without support for multiple sources.
 * `merge`的基本实现，其不支持多个sources
 *
 * @private
 * @param {Object} object The destination object. 目标对象A
 * @param {Object} source The source object. 源对象B
 * @param {number} srcIndex The index of `source`.  源对象的索引
 * @param {Function} [customizer] The function to customize merged values.  自定义合并值的函数
 * @param {Object} [stack] Tracks traversed source values and their merged  跟踪遍历 值和它们的合并值 的栈
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return  // 若对象AB全等，直接返回true
  }
  baseFor(source, (srcValue, key) => {  // 迭代源对象 ，并指定获取key的函数为keysIn，这也就决定了迭代的范围
    if (isObject(srcValue)) { // 若当前迭代对象是 Object类型，则要递归进去以合并
      stack || (stack = new Stack)  // 定义一个记录栈
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack)  // 借调baseMergeDeep进行递归合并
    }
    else {
      let newValue = customizer
        ? customizer(object[key], srcValue, `${key}`, object, source, stack)
        : undefined // 若指定了自定义函数，则合并值由该函数决定，否则临时认为是undefined

      if (newValue === undefined) { // 不论出于何种原因，undefined值都将被替换为源对象中的值
        newValue = srcValue
      }
      assignMergeValue(object, key, newValue) // 借调适合的函数在对象A的key位置分配新值
    }
  }, keysIn)
}

export default baseMerge
