/**
 * Sets the `toString` method of `func` to return `string`.
 * 设置`func`的`toString`方法返回指定的字符串`string`
 *
 * @private
 * @param {Function} func The function to modify. 要修改的函数
 * @param {Function} string The `toString` result.  指定`toString`的结果
 * @returns {Function} Returns `func`.  修改后的`func`
 */
function setToString(func, string) {
  return Object.defineProperty(func, 'toString', {  // 使用原生方法定义属性'toString'存取器
    'configurable': true,
    'enumerable': false,
    'value': () => string,
    'writable': true
  })
}

export default setToString
