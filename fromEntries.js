/**
 * The inverse of `entries`is method returns an object composed
 * from key-value `pairs`.
 * `entries` 的反向方法：其返回一个由 [key, value]键值对 `pairs` 组成的新对象。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs. key-value对儿对象
 * @returns {Object} Returns the new object.  新的对象
 * @example
 *
 * fromEntries([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
function fromEntries(pairs) {
  const result = {}
  if (pairs == null) {
    return result // 若键值对为空值，则直接返回默认的结果：空对象
  }
  for (const pair of pairs) { // 迭代[key, value]键值对参数
    result[pair[0]] = pair[1] // 以每个pair的第一项为key，第二项为valie，写入新对象（结果object）
  }
  return result
}

export default fromEntries
