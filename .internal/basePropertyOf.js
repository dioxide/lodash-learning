/**
 * The base implementation of `propertyOf` without support for deep paths.
 * `propertyOf`的基本实现，其不支持深度路径
 *
 * @private
 * @param {Object} object The object to query.  要查询的对象
 * @returns {Function} Returns the new accessor function. 新的访问器函数
 */
function basePropertyOf(object) {
  return (key) => object == null ? undefined : object[key]  // 对空对象返回undefined,其余返回key位置的值
}

export default basePropertyOf
