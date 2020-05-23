/** Used for built-in method references. 引用内建方法 */
const objectProto = Object.prototype

/**
 * Checks if `value` is likely a prototype object.
 * 检查`value`是否是类prototype对象   @todo: 未完全清楚
 *
 * @private
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`. 若是prototype则返回true，否则返回false
 */
function isPrototype(value) {
  const Ctor = value && value.constructor // 获取value的构造器， 否则若value为假值时，最后结果一定为false
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto // 获取Ctor的prototype或兜底的Object的prototype

  return value === proto  // 即判断value 是否全等于 它的构造器或原始的prototype
}

export default isPrototype
