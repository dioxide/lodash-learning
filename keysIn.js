/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 * 创建一个由`object`的私有的和继承的可枚举的属性 的名称构成的数组
 *
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.  要查询的对象
 * @returns {Array} Returns the array of property names.  属性名构成的数组
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  const result = []
  for (const key in object) {
    result.push(key)  // 简单直接：直接for in迭代对象，将相应的key压入结果数组
  }
  return result
}

export default keysIn

