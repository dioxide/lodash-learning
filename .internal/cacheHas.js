/**
 * Checks if a `cache` value for `key` exists.
 * 检查如果`cache`中是否存在某个`key`
 *
 * @private
 * @param {Object} cache The cache to query. 要检查的缓存对象
 * @param {string} key The key of the entry to check. 要检查的缓存项的key
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.  若存在`key`则返回true，否则返回false
 */
function cacheHas(cache, key) {
  return cache.has(key) // 直接借调外部传入的缓存对象和要查询的key
}

export default cacheHas
