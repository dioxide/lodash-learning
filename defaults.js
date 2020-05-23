import eq from './eq.js'

/** Used for built-in method references. */
const objectProto = Object.prototype

/** Used to check objects for own properties. 用来检查是否为私有属性 */
const hasOwnProperty = objectProto.hasOwnProperty

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 * 设置分配`source`对象的 私有的继承的可枚举的字符串key的属性 到目标对象`object`相应位置中，其中条件是目标属性为'undefined'。
 * `Source`对象从左往右应用。 一旦目标属性被设置后，将忽略同一属性的其他值。
 * **Note:** This method mutates `object`.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The destination object. 目标对象
 * @param {...Object} [sources] The source objects. 源对象，可以有多个，但只支持第一层的映射设置
 * @returns {Object} Returns `object`.  处理后的目标对象
 * @see defaultsDeep
 * @example
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
 * // => { 'a': 1, 'b': 2 } b默认是2，a默认是3
 */
function defaults(object, ...sources) { // 将多个source参数收集到一起
  object = Object(object) // 强制转换为Object，对于已经是object的，无害
  sources.forEach((source) => { // 迭代所有的source
    if (source != null) { // source当然不能是null
      source = Object(source) // 强制转换当前source为object
      for (const key in source) { // 迭代当前source
        const value = object[key] // 取出要分配的目标属性值
        if (value === undefined ||
            (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
          // 若要分配的目标属性值是undefined（即过滤了之前已被分配的情况） 或 （要分配的目标属性值等于其原型对象的对应值 且 目标属性不是其私有属性），则：
          object[key] = source[key] // 设置目标属性 为 当前source的值（即所谓默认值）
        }
      }
    }
  })
  return object
}

export default defaults
