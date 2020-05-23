/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 * 将`value`转换为纯对象，扁平化其继承的可枚举字符串属性名 为 其私有的属性
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert. 要转换的值
 * @returns {Object} Returns the converted plain object.  转换后的纯对象
 * @example
 *
 * function Foo() {
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * assign({ 'a': 1 }, new Foo)
 * // => { 'a': 1, 'b': 2 }
 *
 * assign({ 'a': 1 }, toPlainObject(new Foo))
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  value = Object(value) // 先强制转换为可迭代对象
  const result = {}
  for (const key in value) {  // 使用for in迭代待转换对象
    result[key] = value[key]  // 简单粗暴： 所有key全部拷贝出来
  }
  return result
}

export default toPlainObject
