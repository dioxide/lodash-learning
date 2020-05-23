const toString = Object.prototype.toString

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 * 创建一个由 `object`的反转的keys和values 组合而成的对象.
 * 若`object`包含重复的值，后续的值将覆盖先前分配给属性的值。
 *
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert. 要反转的对象
 * @returns {Object} Returns the new inverted object. 反转过的对象
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 1 }
 *
 * invert(object)
 * // => { '1': 'c', '2': 'b' }
 */
function invert(object) {
  const result = {} // 结果默认为空对象
  Object.keys(object).forEach((key) => { // 迭代object
    let value = object[key] // 当前属性值
    if (value != null && typeof value.toString !== 'function') {
      value = toString.call(value)  // 若当前属性值非空值 且 其toString属性并不是一个function，则就可将该属性值转换为字符串了
    }
    result[value] = key // 在结果对象中添加 原来的属性值为key， 原来的key为属性值的 一项
  })
  return result
}

export default invert
