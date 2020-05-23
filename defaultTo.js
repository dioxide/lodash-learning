/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 * 检查`value`以确定是否应返回默认值。 若`value`是NaN，null，undefined则返回`defaultValue`
 *
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check. 要检查的值
 * @param {*} defaultValue The default value. 默认值
 * @returns {*} Returns the resolved value. 解析到的值
 * @example
 *
 * defaultTo(1, 10)
 * // => 1
 *
 * defaultTo(undefined, 10)
 * // => 10
 */
function defaultTo(value, defaultValue) {
  return (value == null || value !== value) ? defaultValue : value  // value为null,undefined或NaN时，返回默认值，否则返回原值
}

export default defaultTo
