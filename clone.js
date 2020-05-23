import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_SYMBOLS_FLAG = 4

/**
 * Creates a shallow clone of `value`.
 * 创建一个`value`的浅拷贝
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. Object inheritance is preserved. An empty object is
 * returned for uncloneable values such as error objects, functions, DOM nodes,
 * and WeakMaps.
 * 注意： 此方法是大致基于structured clone algorithm（结构克隆算法），其支持克隆：arrays、array buffers、
 * booleans、data objects、maps、numbers、`object`对象、regexes、sets、strings、symbols和typed arrays。
 * `arguments`对象的私有的可枚举属性将被当作纯对象克隆。对象继承将被保留。
 * 对于不可克隆的值如error objects，functions、DOM nodes和WeakMaps将返回空对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone. 要克隆的值
 * @returns {*} Returns the cloned value. 克隆得到的值
 * @see cloneDeep
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const shallow = clone(objects)
 * console.log(shallow[0] === objects[0])
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG) // 指定为掩码并借调baseClone
}

export default clone
