import baseSet from './.internal/baseSet.js'

/**
 * This method is like `set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`. If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 * 类似于`set`但其接受一个用来产生`path`对象的自定义函数`customizer`。 若`customizer`返回`undefined`,则路径创建
 * 仍由当前方法来实现。
 * `customizer`接受3个参数： (nsValue, key, nsObject).
 *
 *
 * **Note:** This method mutates `object`.
 * 注意：此方法将更改`object`
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify. 要修改的对象
 * @param {Array|string} path The path of the property to set.  要设置属性的路径
 * @param {*} value The value to set. 要设置的值
 * @param {Function} [customizer] The function to customize assigned values.  自定义分配值的函数
 * @returns {Object} Returns `object`.  设置后的对象
 * @example
 *
 * const object = {}
 *
 * setWith(object, '[0][1]', 'a', Object)
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined  // 处理customizer的可能值
  return object == null ? object : baseSet(object, path, value, customizer) // 对于空值直接返回原对象，否则借调基本方法并指定自定义路径函数来设置值
}

export default setWith
