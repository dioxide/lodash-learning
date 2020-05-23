import baseClone from './.internal/baseClone.js'
import baseConforms from './.internal/baseConforms.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1

/**
 * Creates a function that invokes the predicate properties of `source` with
 * the corresponding property values of a given object, returning `true` if
 * all predicates return truthy, else `false`.
 * 对象是否符合断言： 创建一个函数其调用`source`中的对应目标对象的相应属性的断言，如果所有断言均通过则返回true，否则返回false。
 * 即：可将多个属性过滤函数以期望应用的属性key名和函数体 写在一起
 *
 * **Note:** The created function is equivalent to `conformsTo` with
 * `source` partially applied.
 * 注意： 这个创建的函数相当于`source`被部分应用的`conformsTo`
 *
 * @since 4.0.0
 * @category Util
 * @param {Object} source The object of property predicates to conform to. 属性断言要符合的对象
 * @returns {Function} Returns the new spec function. 新的规格函数
 * @example
 *
 * const objects = [
 *   { 'a': 2, 'b': 1 },
 *   { 'a': 1, 'b': 2 }
 * ]
 *
 * filter(objects, conforms({ 'b': function(n) { return n > 1 } }))
 * // => [{ 'a': 1, 'b': 2 }]
 */
function conforms(source) {
  return baseConforms(baseClone(source, CLONE_DEEP_FLAG)) // 先借调baseClone进行深度克隆，在借调baseConforms实现
}

export default conforms
