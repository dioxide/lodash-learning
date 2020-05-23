/** Used to stand-in for `undefined` hash values.  用于'undefined'的hash值的占位，是一种内部表示，用于区分是要设置为undefined值，还是被移除key后变成的undefined */
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class Hash {

  /**
   * Creates a hash object.
   * 创建hash对象（基于原生object类型的简单封装）
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.  用来缓存的KV键值对
   */
  constructor(entries) {
    let index = -1  // 遍历游标从-1位置开始
    const length = entries == null ? 0 : entries.length // 要缓存的内容的长度（缓存项的个数）

    this.clear()  // 先清空hash对象的内部数据
    while (++index < length) {  // 当游标 未到达 要缓存内容的总长度时，就进行遍历
      const entry = entries[index]  // 取出当前游标指向的缓存项目
      this.set(entry[0], entry[1])  // 存储缓存项到hash，其中第一项为key，第二项为value
    }
  }

  /**
   * Removes all key-value entries from the hash.
   * 移除hash中的所有key-value内容
   *
   * @memberOf Hash
   */
  clear() {
    this.__data__ = Object.create(null) // 使用'空对象'填充为内部数据
    this.size = 0 // 设置内部数据大小为0
  }

  /**
   * Removes `key` and its value from the hash.
   * 移除key键和对应的值value
   *
   * @memberOf Hash
   * @param {string} key The key of the value to remove.  要移除的key键
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.  移除成功返回true，否则返回false
   */
  delete(key) {
    const result = this.has(key) && delete this.__data__[key] // 若存在此key就在内部数据中delete它
    this.size -= result ? 1 : 0 // 移除成功则内部数据大小-1，否则不变
    return result
  }

  /**
   * Gets the hash value for `key`.
   * 获取key键的值
   *
   * @memberOf Hash
   * @param {string} key The key of the value to get. // 要获取值的key键
   * @returns {*} Returns the entry value.  // key键对应的值
   */
  get(key) {
    const data = this.__data__
    const result = data[key]  // 从内部数据中取出对应key键的值
    return result === HASH_UNDEFINED ? undefined : result // 如果值为'未定义占位值'则返回undefined
  }

  /**
   * Checks if a hash value for `key` exists.
   * 检查key键是否已经存在了值
   *
   * @memberOf Hash
   * @param {string} key The key of the entry to check. 要检查的key键
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.  如果key键已存在值返回true，否则返回false
   */
  has(key) {
    const data = this.__data__
    return data[key] !== undefined  // 如果内部数据中key键的值不是undefined就认为已存在此key(只有被delete的键所对应的值会变成undefined)
  }

  /**
   * Sets the hash `key` to `value`.
   * 设置hash的key为value
   *
   * @memberOf Hash
   * @param {string} key The key of the value to set. 要设置的key值
   * @param {*} value The value to set. 要设置的value值
   * @returns {Object} Returns the hash instance. hash实例
   */
  set(key, value) {
    const data = this.__data__
    this.size += this.has(key) ? 0 : 1  // 如果已存在该key则内部数据大小不变，否则+1
    data[key] = value === undefined ? HASH_UNDEFINED : value  // 设置内部数据的key键为value值以存储（对undefined值替换采用未定义占位值代替）
    return this
  }
}

export default Hash
