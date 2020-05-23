/**
 * Adds `value` to `set`.
 * 向`set`中增加值`value`
 *
 * @private
 * @param {Object} set The set to modify. 要修改的set
 * @param {*} value The value to add. 要增加的值
 * @returns {Object} Returns `set`. 添加值后的set
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.  IE11中`set.add`不会返回set本身
  set.add(value)  // 调用原生方法添加值
  return set
}

export default addSetEntry
