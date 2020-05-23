import getTag from './.internal/getTag.js'
import nodeTypes from './.internal/nodeTypes.js'
import isObjectLike from './isObjectLike.js'

/** Used to match `toStringTag` values of typed arrays. 用来匹配类型数组type arrays的`toStringTag`的值的正则表达式 */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/

/* Node.js helper references. Node.js 助手方法的引用 */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray

/**
 * Checks if `value` is classified as a typed array.
 * 检查`value`是否属于 类型数组
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check. 要检查的变量
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.  若是类型数组返回true，否则返回false
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = nodeIsTypedArray
  ? (value) => nodeIsTypedArray(value)  // 使用Node.js的助手方法来判断
  : (value) => isObjectLike(value) && reTypedTag.test(getTag(value))  // 是类对象 且类型字符串被预设正则匹配 则认为是类型数组

export default isTypedArray
