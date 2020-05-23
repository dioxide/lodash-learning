import isSymbol from '../isSymbol.js'

/** Used to match property names within property paths. 用来匹配属性路径中属性名的正则表达式 */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

/**
 * Checks if `value` is a property name and not a property path.
 * 检查`value`是否是`Object`的一个单纯的属性名且不是深层的属性路径
 *
 * @private
 * @param {*} value The value to check. 要检查的值
 * @param {Object} [object] The object to query keys on.  要查询键的对象
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`. 若`value`是属性名则返回true，否则返回false
 */
function isKey(value, object) {
  if (Array.isArray(value)) { // 若value是数组则直接返回false
    return false
  }
  const type = typeof value // 若value是除string外的基本类型则返回true
  if (type === 'number' || type === 'boolean' || value == null || isSymbol(value)) {
    return true
  }
  // 使用预定义的正则判断和其他规则： 是单纯的属性名 或 是深层的属性路径 或 不是null且object中存在value值
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
}

export default isKey
