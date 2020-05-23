import baseMerge from './.internal/baseMerge.js'
import createAssigner from './.internal/createAssigner.js'

/**
 * This method is like `merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 * 类似于`merge`，但其接受一个 用来产生源属性和目标属性的合并值的 自定义合并函数`customizer`。 （将不变的逻辑和易变的逻辑分离开来的实践，也是函数式风格的实践）
 * 若`customizer`返回`undefined`,合并将有本方法代替。
 * `customizer`自定义合并器接受6个参数：(objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object. 目标对象
 * @param {...Object} sources The source objects. 源对象
 * @param {Function} customizer The function to customize assigned values. 自定义分配值的函数
 * @returns {Object} Returns `object`.  目标对象
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (Array.isArray(objValue)) {
 *     return objValue.concat(srcValue)
 *   }
 * }
 *
 * const object = { 'a': [1], 'b': [2] }
 * const other = { 'a': [3], 'b': [4] }
 *
 * mergeWith(object, other, customizer)
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
const mergeWith = createAssigner((object, source, srcIndex, customizer) => {
  baseMerge(object, source, srcIndex, customizer)
})  // 自定义一个assigner函数，其分配处理工作有baseMerge实现（并指定自定义合并器customizer）

export default mergeWith
