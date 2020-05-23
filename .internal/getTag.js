const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 * 获取指定变量value的'数据类型的字符串表示'
 *
 * @private
 * @param {*} value The value to query.  要查询的字符串
 * @returns {string} Returns the `toStringTag`.  数据类型的字符串表示
 */
function getTag(value) {
  // "空值"的情况单独拿出来标识并区分为 undefined 和 null
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  // 其余情况都调用Object原型上的默认进行方法转换， 可避免原对象本身的toString方法的干扰
  return toString.call(value)
}

export default getTag
