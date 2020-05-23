import baseValues from './.internal/baseValues.js'
import keys from './keys.js'

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 * 创建一个由`object`的私有的可枚举的字符串key的属性值 组成的数组
 *
 * **Note:** Non-object values are coerced to objects.
 * 注意： 非对象值将被强制转换为object
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query. 要查询的对象
 * @returns {Array} Returns the array of property values. 属性值构成的数组
 * @see keys, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * values(new Foo)
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * values('hi')
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object)) // 对null返回[], 否则借调baseValues迭代其相应属性
}

export default values
