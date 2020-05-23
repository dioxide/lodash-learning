import basePick from './.internal/basePick.js'

/**
 * Creates an object composed of the picked `object` properties.
 * 创建一个由捡拾的`object`属性组成的对象
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The source object.  源对象
 * @param {...(string|string[])} [paths] The property paths to pick.  要捡拾的属性路径数组
 * @returns {Object} Returns the new object. 新的对象
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pick(object, ['a', 'c'])
 * // => { 'a': 1, 'c': 3 }
 */
function pick(object, ...paths) {
  return object == null ? {} : basePick(object, paths) // 对于空值，直接返回空对象，否则借调基本方法实现
}

export default pick
