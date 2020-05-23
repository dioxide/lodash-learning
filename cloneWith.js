import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_SYMBOLS_FLAG = 4  // 进行符号克隆

/**
 * This method is like `clone` except that it accepts `customizer` which
 * is invoked to produce the cloned value. If `customizer` returns `undefined`,
 * cloning is handled by the method instead. The `customizer` is invoked with
 * one argument (value).
 * 此方法类似`clone`但其接受一个产生克隆值的`customizer`函数。
 * 若`customizer`返回undefined，克隆由原方法处理。
 * `customizer`被传递1个参数： （value）
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to clone. 要克隆的值
 * @param {Function} [customizer] The function to customize cloning.  自定义克隆过程的函数
 * @returns {*} Returns the cloned value. 克隆得到的值
 * @see cloneDeepWith
 * @example
 *
 * function customizer(value) {
 *   if (isElement(value)) {
 *     return value.cloneNode(false)
 *   }
 * }
 *
 * const el = cloneWith(document.body, customizer)
 *
 * console.log(el === document.body)
 * // => false
 * console.log(el.nodeName)
 * // => 'BODY'
 * console.log(el.childNodes.length)
 * // => 0  // 子节点未被克隆出来
 */
function cloneWith(value, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined  // 非函数不得凑热闹
  return baseClone(value, CLONE_SYMBOLS_FLAG, customizer) // 借调baseClone 并指定位掩码和自定义函数
}

export default cloneWith
