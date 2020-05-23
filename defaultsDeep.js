import customDefaultsMerge from './.internal/customDefaultsMerge.js'
import mergeWith from './mergeWith.js'

/**
 * This method is like `defaults` except that it recursively assigns
 * default properties.
 * 此方法类似`defaults`但其递归地分配默认变量
 *
 * **Note:** This method mutates `object`.
 *
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object. 目标对象
 * @param {...Object} [sources] The source objects. 源对象，可以有多个，但只支持第一层的映射设置
 * @returns {Object} Returns `object`.  处理后的目标对象
 * @see defaults
 * @example
 *
 * defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
function defaultsDeep(...args) {
  args.push(undefined, customDefaultsMerge) // 追加倒数第2个参数为undefined，最后一个参数为自定义合并函数
  return mergeWith.apply(undefined, args) // 借调mergeWith进行合并
}

export default defaultsDeep
