import baseIndexOf from './baseIndexOf.js'

/**
 * A specialized version of `includes` for arrays without support for
 * specifying an index to search from.
 * `includes`的一个特殊版本，但不支持指定搜索开始位置
 *
 * @private
 * @param {Array} [array] The array to inspect. 要检查的数组
 * @param {*} target The value to search for. 要搜索的值
 * @returns {boolean} Returns `true` if `target` is found, else `false`.  若找到了则返回true，否则返回false
 */
function arrayIncludes(array, value) {
  const length = array == null ? 0 : array.length // 处理数组长度
  return !!length && baseIndexOf(array, value, 0) > -1  // 只有非空数组才借调baseIndexOf()进行查找
}

export default arrayIncludes
