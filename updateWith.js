import baseUpdate from './.internal/baseUpdate.js'

/**
 * This method is like `update` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`. If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 * 类似于`update`但其接受一个`customizer`函数用来产生`path`的对象。
 * 如`customizer`返回`undefined`，则路径仍有本方法来实现。
 * `customizer`接受3个参数：(nsValue, key, nsObject)。
 *
 * **Note:** This method mutates `object`.
 * 注意： 此方法将修改`object`
 *
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify. 要修改的对象
 * @param {Array|string} path The path of the property to set.  要更新的值的路径
 * @param {Function} updater The function to produce the updated value. 用来产生新值的函数
 * @param {Function} [customizer] The function to customize assigned values. 用来自定义分配值的函数
 * @returns {Object} Returns `object`.  修改后的对象
 * @example
 *
 * const object = {}
 *
 * updateWith(object, '[0][1]', () => 'a', Object)
 * // => { '0': { '1': 'a' } }
 */
function updateWith(object, path, updater, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined  // 处理customizer的可能值
  return object == null ? object : baseUpdate(object, path, updater, customizer)  // 对于空值，直接返回原对象，否则借调基本方法,并指定updater, customizer来实现更新
}

export default updateWith
