/**
 * Gets the argument placeholder value for `func`.
 * 获取`func`的参数占位符的值
 *
 * @private
 * @param {Function} func The function to inspect. 要检查的函数
 * @returns {*} Returns the placeholder value.  占位符的值
 */
function getHolder(func) {
  const object = func
  return object.placeholder // 直接返回该函数的placeholder属性
}

export default getHolder
