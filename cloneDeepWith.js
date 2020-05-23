import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1
const CLONE_SYMBOLS_FLAG = 4

/**
 * This method is like `cloneWith` except that it recursively clones `value`.
 * The customizer is invoked with up to four arguments
 * (value [, index|key, object, stack]).
 * 此方法类似`cloneWith`但其递归地克隆`value`.
 * `customizer`被传递1个参数：(value [, index|key, object, stack]).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone. 要递归克隆的值
 * @param {Function} [customizer] The function to customize cloning.  自定义克隆过程的函数
 * @returns {*} Returns the deep cloned value.  深度克隆得到的值
 * @see cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (isElement(value)) {
 *     return value.cloneNode(true)
 *   }
 * }
 *
 * const el = cloneDeepWith(document.body, customizer)
 *
 * console.log(el === document.body)
 * // => false
 * console.log(el.nodeName)
 * // => 'BODY'
 * console.log(el.childNodes.length)
 * // => 20 // 子节点也被克隆出来
 */
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined  // 非函数不得凑热闹
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer) // 借调baseClone 并指定位掩码和自定义函数
}

export default cloneDeepWith
