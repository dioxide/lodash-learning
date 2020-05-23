/** Used to match `RegExp` flags from their coerced string values. 用来匹配字符串值的 `RegExp`标志的正则表达式 */
const reFlags = /\w*$/

/**
 * Creates a clone of `regexp`.
 * 创建一个`regexp`的克隆
 *
 * @private
 * @param {Object} regexp The regexp to clone.  要克隆的regexp
 * @returns {Object} Returns the cloned regexp. 克隆得到的regexp
 */
function cloneRegExp(regexp) {
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp))  // 使用regexp的构造器 重新构造 一个regexp对象
  result.lastIndex = regexp.lastIndex // 保持于原对象的属性、状态一致
  return result // 返回新的regexp对象
}

export default cloneRegExp
