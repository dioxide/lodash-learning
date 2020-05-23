import baseUpdate from './.internal/baseUpdate.js'

/**
 * This method is like `set` except that it accepts `updater` to produce the
 * value to set. Use `updateWith` to customize `path` creation. The `updater`
 * is invoked with one argument: (value).
 * 类似于`set`但其接受一个`updater`函数以产生要设置的值。
 * 使用`updateWith`可以定制`path`的生成。
 * `updater`被传递1个参数：（value）
 *
 * **Note:** This method mutates `object`.
 * 注意： 此方法将修改`object`
 *
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify. 要修改的对象
 * @param {Array|string} path The path of the property to set. 要更新的值的路径
 * @param {Function} updater The function to produce the updated value. 用来产生新值的函数
 * @returns {Object} Returns `object`.  修改后的对象
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * update(object, 'a[0].b.c', n => n * n)
 * console.log(object.a[0].b.c)
 * // => 9
 *
 * update(object, 'x[0].y.z', n => n ? n + 1 : 0)
 * console.log(object.x[0].y.z)
 * // => 0
 */
function update(object, path, updater) {
  return object == null ? object : baseUpdate(object, path, updater)  // 对于空值，直接返回原对象，否则借调基本方法来实现更新
}

export default update
