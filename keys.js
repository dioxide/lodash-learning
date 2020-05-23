import arrayLikeKeys from './.internal/arrayLikeKeys.js'
import isArrayLike from './isArrayLike.js'

/**
 * Creates an array of the own enumerable property names of `object`.
 * 创意一个由`object`拥有的可枚举的属性名称组成的数组
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 * 非对象值被强制转为对象，见ECMA规范
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.  要查询的对象
 * @returns {Array} Returns the array of property names.  返回的属性名数组
 * @see values, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 */
function keys(object) {
  // 若是类数组ArrayLike则借调专有方法，否则使用内置的Object.keys()
  return isArrayLike(object)
    ? arrayLikeKeys(object)
    : Object.keys(Object(object))
}

export default keys
