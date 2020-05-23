import baseIsMatch from './.internal/baseIsMatch.js'
import getMatchData from './.internal/getMatchData.js'

/**
 * This method is like `isMatch` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with five
 * arguments: (objValue, srcValue, index|key, object, source).
 * 此方法类似`isMatch`但其接受一个用来比较值的比较器`customizer`。 若`customizer`返回undefined，比较操作将被本方法代替。
 * 比较器接受5个参数：  (objValue, srcValue, index|key, object, source).
 *
 *
 * @since 4.0.0
 * @category Lang
 * @param {Object} object The object to inspect.  要检查的值
 * @param {Object} source The object of property values to match. 要匹配的属性值组成的对象
 * @param {Function} [customizer] The function to customize comparisons.  自定义比较器
 * @returns {boolean} Returns `true` if `object` is a match, else `false`. 若匹配则返回true，否则返回false
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value)
 * }
 *
 * function customizer(objValue, srcValue) {
 *   if (isGreeting(objValue) && isGreeting(srcValue)) {
 *     return true
 *   }
 * }
 *
 * const object = { 'greeting': 'hello' }
 * const source = { 'greeting': 'hi' }
 *
 * isMatchWith(object, source, customizer)
 * // => true
 */
function isMatchWith(object, source, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined  // 处理customizer的可能情况
  return baseIsMatch(object, source, getMatchData(source), customizer)  // 借调baseIsMatch并带着customizer来进行匹配
}

export default isMatchWith
