import MapCache from './MapCache.js'

/** Used to stand-in for `undefined` hash values. 用来对`undefined`值进行特殊占位 */
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class SetCache {

  /**
   * Creates an array cache object to store unique values.
   * 创建一个数组缓存对象来存储唯一值
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  constructor(values) {
    let index = -1
    const length = values == null ? 0 : values.length // 默认长度为0或待缓存数组的长度

    this.__data__ = new MapCache  // 内部数据容器为MapCache
    while (++index < length) {  // 迭代添加数组想到内部数据容器
      this.add(values[index])
    }
  }

  /**
   * Adds `value` to the array cache.
   * 增加`value`到数组缓存
   *
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache. 要缓存的值
   * @returns {Object} Returns the cache instance.  缓存实例
   */
  add(value) {
    this.__data__.set(value, HASH_UNDEFINED)  // 存储缓存项
    return this
  }

  /**
   * Checks if `value` is in the array cache.
   * 检查`value` 是否已经在缓存数组中
   *
   * @memberOf SetCache
   * @param {*} value The value to search for. 要缓存的值
   * @returns {boolean} Returns `true` if `value` is found, else `false`. 若已存在则返回true，否则返回false
   */
  has(value) {
    return this.__data__.has(value)
  }
}

SetCache.prototype.push = SetCache.prototype.add  //设置add方法的别名

export default SetCache
