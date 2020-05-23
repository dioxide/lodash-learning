/**
 * The base implementation of `property` without support for deep paths.
 * `property`的基本实现，但其不支持深度路径
 *
 * @private
 * @param {string} key The key of the property to get.  要获取的属性的key
 * @returns {Function} Returns the new accessor function. 该属性的访问器函数
 */
function baseProperty(key) {
  return (object) => object == null ? undefined : object[key] // 对于空对象则返回undefined，否则直接返回对应key的值
}

export default baseProperty
