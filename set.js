import baseSet from './.internal/baseSet.js'

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `setWith` to customize
 * `path` creation.
 * 设置`object`的指定路径`path`的值。 若路径的一部分不存在，则将创建它。
 * 为缺少的索引属性创建数组，而为所有其他缺少的属性创建对象。
 * 使用`setWith`可自定义`path`的创建动作
 *
 * **Note:** This method mutates `object`.
 * 注意：此方法将更改`object`
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify. 要修改的对象
 * @param {Array|string} path The path of the property to set. 要设置属性的路径
 * @param {*} value The value to set. 要设置的值
 * @returns {Object} Returns `object`. 设置后的对象
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value) // 对于空值直接返回原对象，否则借调基本方法设置值
}

export default set
