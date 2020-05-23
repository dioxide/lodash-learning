/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 * 创建一个缓存 'func函数' 的结果的函数。 如果提供了'resolver'函数，它将基于参数决定存储结果的缓存key.
 * 否则默认被包装后的函数的第一个参数被用作缓存key， 'func'被调用时会将this绑定到缓存好的函数
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 * 缓存功能作为缓存化的函数的'cache'属性被暴露出来。 它的组成可由实现了Map功能接口约定的对象来替换（如替换为WeakMap）
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized. 要被缓存化的函数
 * @param {Function} [resolver] The function to resolve the cache key.  解析缓存key的函数
 * @returns {Function} Returns the new memoized function. 被缓存化了的函数
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 * const other = { 'c': 3, 'd': 4 }
 *
 * const values = memoize(values)
 * values(object)
 * // => [1, 2]
 *
 * values(other)
 * // => [3, 4]
 *
 * object.a = 2
 * values(object)
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b'])
 * values(object)
 * // => ['a', 'b']
 *
 * // Replace `memoize.Cache`.
 * memoize.Cache = WeakMap
 */
function memoize(func, resolver) {
  // 防御式编程，若待包装函数 或 解析函数不合法都抛出异常
  if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
    throw new TypeError('Expected a function')
  }
  // 创建一个闭包函数，它一直引用func与resolver
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0] // 缓存的key由resolver的结果决定 或 直接取第一个参数作为key
    const cache = memoized.cache  // 引用内部的缓存对象
    if (cache.has(key)) { // 若某个key已经存在值，则直接返回该值
      return cache.get(key)
    }

    const result = func.apply(this, args) // 要缓存的内容result为 被包装函数的运行结果（即原函数的功能）
    memoized.cache = cache.set(key, result) || cache  // 将函数的'入参'和'结果'作为键值对存储内部缓存中
    return result // 返回被包装函数的运行结果
  }
  memoized.cache = new (memoize.Cache || Map) // 默认的内部缓存对象为Map，也可以替换为其他的实现了相同接口的对象
  return memoized // 返回包装后的函数（闭包的）
}

memoize.Cache = Map // 设置默认的缓存对象为Map

export default memoize
