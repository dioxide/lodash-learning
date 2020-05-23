import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'
import nodeTypes from './.internal/nodeTypes.js'

/* Node.js helper references. */
const nodeIsArrayBuffer = nodeTypes && nodeTypes.isArrayBuffer

/**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 * 检查`value`是否为归类为`ArrayBuffer`对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`. 若归类`ArrayBuffer`对象则返回true，否则返回false
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(2))
 * // => true
 *
 * isArrayBuffer(new Array(2))
 * // => false
 */
const isArrayBuffer = nodeIsArrayBuffer // 根据宿主环境选用合适的判断方法
  ? (value) => nodeIsArrayBuffer(value) // Node环境下
  : (value) => isObjectLike(value) && getTag(value) == '[object ArrayBuffer]' // 其他环境下

export default isArrayBuffer
