import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'
import nodeTypes from './.internal/nodeTypes.js'

/* Node.js helper references. */
const nodeIsMap = nodeTypes && nodeTypes.isMap

/**
 * Checks if `value` is classified as a `Map` object.
 * 检查`value`是否归类为`Map`对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a map, else `false`. 若是则返回true，否则返回false
 * @example
 *
 * isMap(new Map)
 * // => true
 *
 * isMap(new WeakMap)
 * // => false
 */
const isMap = nodeIsMap
  ? (value) => nodeIsMap(value) // node.js 环境
  : (value) => isObjectLike(value) && getTag(value) == '[object Map]'

export default isMap
