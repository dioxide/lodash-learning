/**
 * Creates an array of function property names from own enumerable properties
 * of `object`.
 * 创建一个由`object`的私有的可枚举的且value为function()的属性名key 组成的数组
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = () => 'a'
 *   this.b = () => 'b'
 * }
 *
 * Foo.prototype.c = () => 'c'
 *
 * functions(new Foo)
 * // => ['a', 'b']
 */
function functions(object) {
  if (object == null) {
    return [] // 对于空值直接返回空数组
  }
  // 获取object的私有可枚举keys， 在过滤除其中typeof值为function的项
  return Object.keys(object).filter((key) => typeof object[key] === 'function')
}

export default functions
