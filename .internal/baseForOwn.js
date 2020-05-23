import baseFor from './baseFor.js'
import keys from '../keys.js'

/**
 * The base implementation of `forOwn`.
 * `forOwn`的基本实现
 *
 * @private
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Object} Returns `object`.  迭代后的对象
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys)  // 借调`baseFor`来实现
}

export default baseForOwn
