import castSlice from './castSlice.js'
import hasUnicode from './hasUnicode.js'
import stringToArray from './stringToArray.js'

/**
 * Creates a function like `lowerFirst`.
 * 创建一个像`lowerFirst`的函数 （HOC）
 * @todo: 实际用法和用途未知
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.  case方法要使用的名字
 * @returns {Function} Returns the new case function. 新的case方法
 */
function createCaseFirst(methodName) {
  return (string) => {
    if (!string) {
      return ''
    }

    const strSymbols = hasUnicode(string) // 转为字符数组
      ? stringToArray(string)
      : undefined

    const chr = strSymbols  // 首字母
      ? strSymbols[0]
      : string[0]

    const trailing = strSymbols // 剩余的字母
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1)

    return chr[methodName]() + trailing // 拼接组合起来
  }
}

export default createCaseFirst
