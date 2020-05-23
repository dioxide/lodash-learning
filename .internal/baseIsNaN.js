/**
 * The base implementation of `isNaN` without support for number objects.
 * `isNaN`的基本实现，但不支持number对象
 *
 * @private
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`. 若`value`是`NaN`则返回true，否则返回false
 */
function baseIsNaN(value) {
  return value !== value  // 充分条件判断： 只有该值不具有 反射性（自己等于自己），就一定是NaN
}

export default baseIsNaN
