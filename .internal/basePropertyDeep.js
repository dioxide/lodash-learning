import baseGet from './baseGet.js'

/**
 * A specialized version of `baseProperty` which supports deep paths.
 * `baseProperty`的特殊版本，其支持深层路径
 *
 * @private
 * @param {Array|string} path The path of the property to get.  要获取属性的路径
 * @returns {Function} Returns the new accessor function. 新的存取函数
 */
function basePropertyDeep(path) {
  return (object) => baseGet(object, path)  // 借调baseGet以实现路径属性的获取功能，  这样包装出来的函数存取路径是固定的，但可以传入不同的查询目标对象
}

export default basePropertyDeep
