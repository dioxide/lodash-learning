import assocIndexOf from './assocIndexOf.js'

class ListCache {

  /**
   * Creates an list cache object.
   * 创建一个list列表缓存对象
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache. 要缓存的[[key,value],[key,value],...]数组（二维数组），这是用Array来表示Object的一种组织形式
   */
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length // 初始长度为数据源数组的长度或0

    this.clear()  // 先清空内部数据对象
    while (++index < length) {  // 遍历源数据
      const entry = entries[index]  // 取出源数据的一项
      this.set(entry[0], entry[1])  // 视源数据的一项的第一项为key，第二项为value
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   * 移除list缓存中的所有内容
   *
   * @memberOf ListCache
   */
  clear() {
    this.__data__ = []  // 清空内部数据对象(空数组)
    this.size = 0 // 重置缓存大小为0
  }

  /**
   * Removes `key` and its value from the list cache.
   * 移除list缓存中指定`key`和它的值
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.  要移除的key
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.  移除成功返回true，否则返回false
   */
  delete(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key) // 借调assocIndexOf方法获取指定key在外层数组的位置

    if (index < 0) {  //  未找到该key，视为删除失败
      return false
    }
    const lastIndex = data.length - 1 // 内部数据对象的末位索引值
    if (index == lastIndex) { // 若要删除的位置位于某位，则直接pop()掉
      data.pop()
    } else {
      data.splice(index, 1) // 否则使用splice()剪掉这一位置的项
    }
    --this.size // 缓存大小更新
    return true
  }

  /**
   * Gets the list cache value for `key`.
   * 获取缓存中指定`key`的值
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to get. 要获取的key
   * @returns {*} Returns the entry value.  key所对应的值
   */
  get(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key) // 借调assocIndexOf方法获取指定key在外层数组的位置
    return index < 0 ? undefined : data[index][1] // 若没找到，则返回undefined ，否则返回value
  }

  /**
   * Checks if a list cache value for `key` exists.
   * 检查缓存中指定的`key`是否已经存在
   *
   * @memberOf ListCache
   * @param {string} key The key of the entry to check. 要检查的key
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`. 若已存在返回true，否则返回false
   */
  has(key) {
    return assocIndexOf(this.__data__, key) > -1
  }

  /**
   * Sets the list cache `key` to `value`.
   * 设置缓存中的指定`key`的值为`value`
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to set. 要设置的key
   * @param {*} value The value to set. 要设置的值
   * @returns {Object} Returns the list cache instance. list缓存实例
   */
  set(key, value) {
    const data = this.__data__
    const index = assocIndexOf(data, key) // 借调assocIndexOf方法获取指定key在外层数组的位置

    if (index < 0) {  // 若此key不存在，就向内部数据对象中压入该项数据
      ++this.size
      data.push([key, value])
    } else {  // 否则，更新对应项的value为新值
      data[index][1] = value
    }
    return this
  }
}

export default ListCache
