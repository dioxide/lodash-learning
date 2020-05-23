import baseMerge from './.internal/baseMerge.js'
import createAssigner from './.internal/createAssigner.js'

/**
 * This method is like `assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 * 此方法类似于`assign`，不同之处在于它递归地合并`source`对象的私有的继承地可枚举的字符串key属性 到 目标对象中。
 * `Source`属性在被解析为`undefined`时，若果目标值已存在，则将跳过。
 * 数组和纯对象属性将被递归地合并。其他对象和值类型将被分配动作覆盖。
 * `Source`对象将被从左到有应用。后续的源将覆盖之前source分配的值。
 *
 *
 * **Note:** This method mutates `object`.
 * 注意：此方法将改变`object`
 *
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object. 目标对象
 * @param {...Object} [sources] The source objects. 源对象
 * @returns {Object} Returns `object`.  目标对象
 * @example
 *
 * const object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * }
 *
 * const other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * }
 *
 * merge(object, other)
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
const merge = createAssigner((object, source, srcIndex) => {
  baseMerge(object, source, srcIndex)
})  // 自定义一个assigner函数，其分配处理工作有baseMerge实现

export default merge
