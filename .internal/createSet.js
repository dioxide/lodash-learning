import setToArray from './setToArray.js'

/** Used as references for various `Number` constants. 引用Infinity常量 */
const INFINITY = 1 / 0

/**
 * Creates a set object of `values`.
 * 创建一个将`values`数组转换为一个set对象的函数
 *
 * @private
 * @param {Array} values The values to add to the set. 要加入到set中的values
 * @returns {Object} Returns the new set. 新的set
 */
const createSet = (Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY)
  ? (values) => new Set(values)
  : () => {}  // 否则任何情况下都返回空对象

export default createSet
