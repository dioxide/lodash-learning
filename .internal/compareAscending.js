import isSymbol from '../isSymbol.js'

/**
 * Compares values to sort them in ascending order.
 * 比较值以升序进行排序， 即：value<other,返回-1；value>other返回1，相等返回0
 *
 * @private
 * @param {*} value The value to compare. 要比较的值
 * @param {*} other The other value to compare. 另一个要比较的值
 * @returns {number} Returns the sort order indicator for `value`.  对于value的排序指示器
 */
function compareAscending(value, other) {
  if (value !== other) {
    // 标示value是否为特殊值： undefined、null、symbol、反射值
    const valIsDefined = value !== undefined
    const valIsNull = value === null
    const valIsReflexive = value === value
    const valIsSymbol = isSymbol(value)
    // 标示other是否为特殊值： undefined、null、symbol、反射值
    const othIsDefined = other !== undefined
    const othIsNull = other === null
    const othIsReflexive = other === other
    const othIsSymbol = isSymbol(other)

    // 如果value为字符串则使用localeCompare进行本地化比较，否则val被赋值为-other
    const val = typeof value === 'string'
      ? value.localeCompare(other)
      : -other  // @todo： 为什么要-other？

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && val > 0) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && val < 0) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1
    }
  }
  return 0  // 两值相等返回0
}

export default compareAscending
