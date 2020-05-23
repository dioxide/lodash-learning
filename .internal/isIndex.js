/** Used as references for various `Number` constants. 引用最大整数常量 */
const MAX_SAFE_INTEGER = 9007199254740991

/** Used to detect unsigned integer values. 用来检测无符号整数值的正则表达式 */
const reIsUint = /^(?:0|[1-9]\d*)$/

/**
 * Checks if `value` is a valid array-like index.
 * 检查`value`是否是一个类数组的索引值
 *
 * @private
 * @param {*} value The value to check. 要检查的值
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index. 有效索引值的上界，默认为最大整数
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`. 若是有效的索引则返回true，否则返回false
 */
function isIndex(value, length) {
  const type = typeof value
  length = length == null ? MAX_SAFE_INTEGER : length // length默认为最大整数

  // 作为类数组的索引值必须满足一系列条件：
  // 为truely真值 且 （类型为number 或 （类型不是symbol且是无符号整数）） 且 （值大于-1 且 除1余0 且 小于指定索引长度）
  return !!length &&
    (type === 'number' ||
      (type !== 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length)
}

export default isIndex
