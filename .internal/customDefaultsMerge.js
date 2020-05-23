import baseMerge from './baseMerge.js'
import isObject from '../isObject.js'

/**
 * Used by `defaultsDeep` to customize its `merge` use to merge source
 * objects into destination objects that are passed thru.
 * 供`defaultsDeep`使用以自定义其`merge`用于合并源将对象转换为通过的目标对象。
 *
 * @private
 * @param {*} objValue The destination value. 目标值
 * @param {*} srcValue The source value.  源值
 * @param {string} key The key of the property to merge.  要合并的属性的key
 * @param {Object} object The parent object of `objValue`.  目标值的宿主对象
 * @param {Object} source The parent object of `srcValue`.  源值的宿主对象
 * @param {Object} [stack] Tracks traversed source values and their merged  跟踪遍历 源值和相应的合并值 的栈
 *  counterparts.
 * @returns {*} Returns the value to assign.  要分配的值
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) { // 源值和目标值必须都是Object
    // Recursively merge objects and arrays (susceptible to call stack limits). 递归合并对象和数组（可能受调用栈限制）
    stack.set(srcValue, objValue) // 设置遍历记录
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack)  //借调baseMerge进行合并
    stack['delete'](srcValue) // 清理临时遍历记录
  }
  return objValue // 返回处理后的源值
}

export default customDefaultsMerge
