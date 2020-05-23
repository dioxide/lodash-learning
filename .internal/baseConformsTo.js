/**
 * The base implementation of `conformsTo` which accepts `props` to check.
 * `conformsTo`的基本实现，其接受`props`以进行检查是否符合
 *
 * @private
 * @param {Object} object The object to inspect. 要检查的对象
 * @param {Object} source The object of property predicates to conform to. 要符合的对象属性 断言器
 * @returns {boolean} Returns `true` if `object` conforms, else `false`. 若符合则返回true，否则返回false
 */
function baseConformsTo(object, source, props) {
  let length = props.length
  if (object == null) { // 若object是空的，且要断言属性不为空，则认为结果不符合（conform），若断言属性也为空，则认为结果符合（conform）
    return !length
  }
  object = Object(object) // 使用Object强制转换下类型
  while (length--) {  // 遍历props
    const key = props[length] // 要断言的key（props的一项）
    const predicate = source[key] // 要断言的key在源中的值（是一个断言函数）
    const value = object[key] // 要断言的key在object中的值

    if ((value === undefined && !(key in object)) || !predicate(value)) { // 若值为未定义或key在object中不存在 或者 被source断言为假值 则都返回false
      return false
    }
  }
  return true // 否则认为是conform
}

export default baseConformsTo
