import memoize from '../memoize.js'

/** Used as the maximum memoize cache size. */
const MAX_MEMOIZE_SIZE = 500

/**
 * A specialized version of `memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 * 一个特殊版本的'memoize'，其将在达到'最大记忆个数'时清除缓存
 *
 * @private
 * @param {Function} func The function to have its output memoized. 要缓存化的函数
 * @returns {Function} Returns the new memoized function. 缓存化了的函数
 */
function memoizeCapped(func) {
  const result = memoize(func, (key) => { // 借调memoize包装func，并利用resolver当作钩子来处理缓存上限
    const { cache } = result  // 从memoize包装过的函数中取出缓存对象（默认为Map对象）
    if (cache.size === MAX_MEMOIZE_SIZE) {  // 并判断：在达到缓存上限时清除缓存
      cache.clear()
    }
    return key  // key值直接返回，并没有处理
  })

  return result // 返回被简单再次包装的函数
}

export default memoizeCapped
