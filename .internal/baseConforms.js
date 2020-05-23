import baseConformsTo from './baseConformsTo.js'
import keys from '../keys.js'

/**
 * The base implementation of `conforms` which doesn't clone `source`.
 * `conforms`的基本实现但不支持克隆`source`
 *
 * @private
 * @param {Object} source The object of property predicates to conform to.  // 用来做属性断言的对象
 * @returns {Function} Returns the new spec function. // 新规格函数
 */
function baseConforms(source) {
  const props = keys(source)  // 断言函数的keys
  return (object) => baseConformsTo(object, source, props) // 返回一个 已固定了断言对象的baseConformTo方法
}

export default baseConforms
