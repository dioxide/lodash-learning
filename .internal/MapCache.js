
import Hash from './Hash.js'

/**
 * Gets the data for `map`.
 * 从map中获取数据
 *
 * @private
 * @param {Object} map The map to query.  要获取的map
 * @param {string} key The reference key. 要获取的key键
 * @returns {*} Returns the map data. map中的数据
 */
function getMapData({ __data__ }, key) {
  const data = __data__
  // 若key为适合的唯一键，则返回data['string/hash']的数据类型对象, 否则返回data.map（即原生的map）
  return isKeyable(key)
    ? data[typeof key === 'string' ? 'string' : 'hash']
    : data.map
}

/**
 * Checks if `value` is suitable for use as unique object key.
 * 检查value是否是适合作为唯一的键值key
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  const type = typeof value
  // 只有2中情况可以作为唯一key：
  //  1. 类型为string、number、symbol、boolean之一 并且 值不是'__proto__'
  //  2. 类型不为string、number、symbol、boolean之一 并且 值是null
  return (type === 'string' || type === 'number' || type === 'symbol' || type === 'boolean')
    ? (value !== '__proto__')
    : (value === null)
}

class MapCache {

  /**
   * Creates a map cache object to store key-value pairs.
   * 创建一个map对象用来存储KV键值对
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache. 要存储的键/值数据，需要是二维数组的形式
   */
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  /**
   * Removes all key-value entries from the map.
   * 删除map中所有的的KV数据
   *
   * @memberOf MapCache
   */
  clear() {
    this.size = 0 // 内部数据大小重置为0
    this.__data__ = { // 内部数据由hash、map来封装实现
      'hash': new Hash,
      'map': new Map,
      'string': new Hash
    }
  }

  /**
   * Removes `key` and its value from the map.
   * 移除map中指定key及其值
   *
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.  要移除的key
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.  若移除成功则返回true，否则返回false
   */
  delete(key) {
    const result = getMapData(this, key)['delete'](key) // 先从封装好map中获取响应的'内部数据类型对象（即hash、map、string）'， 再执行这个对象的相应方法（如这里的delete方法）
    this.size -= result ? 1 : 0 // 移除成功内部数据大小-1，否则不变
    return result
  }

  /**
   * Gets the map value for `key`.
   * 获取map中key键的值
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    return getMapData(this, key).get(key)
  }

  /**
   * Checks if a map value for `key` exists.
   * 检查map中key键是否已经存在值
   *
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key) {
    return getMapData(this, key).has(key)
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  set(key, value) {
    const data = getMapData(this, key)  // 先从封装好map中获取响应的'内部数据类型对象（即hash、map、string）'
    const size = data.size

    data.set(key, value)  // 再执行这个数据对象的相应方法
    this.size += data.size == size ? 0 : 1  // 每次存储新数据后，检查map的大小是否和封装的内部数据类型对象的大小一致，若不一致则+1，否则不变
    return this
  }
}

export default MapCache
