/**
 * Adds the key-value `pair` to `map`.
 * 为`map`中增加key-value对`part`
 *
 * @private
 * @param {Object} map The map to modify. 要修改的map
 * @param {Array} pair The key-value pair to add. 要增加的key-value对
 * @returns {Object} Returns `map`. 增加后的map
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.  IE11中`map.set`不会返回map本身
  map.set(pair[0], pair[1]) // 调用原生方法设置 key-value
  return map
}

export default addMapEntry
