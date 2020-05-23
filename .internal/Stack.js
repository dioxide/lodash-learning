import ListCache from './ListCache.js'
import MapCache from './MapCache.js'

/** Used as the size to enable large array optimizations. 使用大小size限制以启用大数组优化 */
const LARGE_ARRAY_SIZE = 200

class Stack {

  /**
   * Creates a stack cache object to store key-value pairs.
   * 创建一个栈缓存对象来存储[key,value]对数据
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache. 要缓存的key-value对数据
   */
  constructor(entries) {
    const data = this.__data__ = new ListCache(entries) // 内部数据类借调使用ListCache来实现
    this.size = data.size // 初始化缓存大小
  }

  /**
   * Removes all key-value entries from the stack.
   * 从栈缓存中移除所有的key-value
   *
   * @memberOf Stack
   */
  clear() {
    this.__data__ = new ListCache // 重置内置数据对象
    this.size = 0 // 重置缓存大小为0
  }

  /**
   * Removes `key` and its value from the stack.
   * 移除栈缓存中指定`key`和它的值
   *
   * @memberOf Stack
   * @param {string} key The key of the value to remove. 要移除的key
   * @returns {boolean} Returns `true` if the entry was removed, else `false`. 若移除成功则返回true，否则返回false
   */
  delete(key) {
    const data = this.__data__
    const result = data['delete'](key)  // 借调listcache的delete方法来移除指定项

    this.size = data.size // 更新缓存大小
    return result
  }

  /**
   * Gets the stack value for `key`.
   * 获取指定`key`的值
   *
   * @memberOf Stack
   * @param {string} key The key of the value to get. 要获取值的key
   * @returns {*} Returns the entry value.  key的值
   */
  get(key) {
    return this.__data__.get(key) // 直接借调listcache来获取指定key的值
  }

  /**
   * Checks if a stack value for `key` exists.
   * 检查栈缓存中是否已经存在了指定'key'
   *
   * @memberOf Stack
   * @param {string} key The key of the entry to check. 要检查的key
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`. 若已存在则返回true，否则返回false
   */
  has(key) {
    return this.__data__.has(key) // 直接借调listcache来判断指定key
  }

  /**
   * Sets the stack `key` to `value`.
   * 设置栈中指定`key`的值为`value`
   *
   * @memberOf Stack
   * @param {string} key The key of the value to set. 要设置的值的key
   * @param {*} value The value to set. 要设置的值
   * @returns {Object} Returns the stack cache instance. 栈缓存实例
   */
  set(key, value) {
    let data = this.__data__
    if (data instanceof ListCache) {  // 若内部数据对象是listcache实例
      const pairs = data.__data__ // 取出listcache的内部数据对象（就是一个Array）
      if (pairs.length < LARGE_ARRAY_SIZE - 1) {  // 若缓存数据量未超过 '优化上限值'
        pairs.push([key, value])  // 则压入新的KV对
        this.size = ++data.size
        return this
      }
      data = this.__data__ = new MapCache(pairs)  // 将内部数据对象更换为MapChae？ @todo: 这里为啥要换掉，没太明白
    }
    data.set(key, value)  // 借调listcache更新key和对应的value
    this.size = data.size // 更新缓存大小
    return this
  }
}

export default Stack
