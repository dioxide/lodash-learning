import baseForRight from './baseForRight.js'
import keys from '../keys.js'

/**
 * The base implementation of `forOwnRight`.
 * `forOwnRight`的基本实现
 *
 * @private
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @returns {Object} Returns `object`.  迭代后的对象
 */
function baseForOwnRight(object, iteratee) {
  return object && baseForRight(object, iteratee, keys) // 借调baseForRight实现
}

export default baseForOwnRight
