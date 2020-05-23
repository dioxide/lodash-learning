import isArguments from '../isArguments.js'

/** Built-in value reference. 引用内建常量 */
const spreadableSymbol = Symbol.isConcatSpreadable

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 * 检查`value`是否是可扁平化地`arguments`对象或数组
 *
 * @private
 * @param {*} value The value to check. 要检查的对象
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`. 若是则返回true，否则返回false
 */
function isFlattenable(value) {
  // 判断标准 ： 类型为Array 或 是类似Arguments对象 或 （为真值且其spreadableSymbol属性为真）
  return Array.isArray(value) || isArguments(value) ||
    !!(value && value[spreadableSymbol])
}

export default isFlattenable
