import memoizeCapped from './memoizeCapped.js'

const charCodeOfDot = '.'.charCodeAt(0) // 点 `.`的字符编码 = 46
const reEscapeChar = /\\(\\)?/g // 反斜杠（转义符） '\'的正则表达式
const rePropName = RegExp(  // 任意属性名 的正则表达式
  // Match anything that isn't a dot or bracket.  匹配不是点和括号的部分
  '[^.[\\]]+' + '|' +
  // Or match property names within brackets. 或 匹配再括号中的属性名
  '\\[(?:' +
    // Match a non-string expression. 匹配非字符表达式
    '([^"\'][^[]*)' + '|' +
    // Or match strings (supports escaping characters). 或 匹配字符串（支持转义）
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
  ')\\]'+ '|' +
  // Or match "" as the space between consecutive dots or empty brackets. 或匹配 空字符 作为连续点或括号之间的空格
  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
  , 'g')

/**
 * Converts `string` to a property path array.
 * 转换字符串`string`为属性路径数组 （高频方法）
 *
 * @private
 * @param {string} string The string to convert.  要转换的字符串
 * @returns {Array} Returns the property path array.  属性路径字符串
 */
const stringToPath = memoizeCapped((string) => {  // 使用memoizeCapped高阶函数创建一个'有缓存个数上限的'缓存函数
  const result = [] // 待返回的结果数组
  if (string.charCodeAt(0) === charCodeOfDot) { // 若该字符串已'.'开头
    result.push('') // 则向结果数组中压入一个空字符串（一个占位项）
  }
  string.replace(rePropName, (match, expression, quote, subString) => { // 使用正则匹配'属性名'
    let key = match // 匹配到的子字符串   @todo: 这里的匹配逻辑还没太明白
    if (quote) {
      key = subString.replace(reEscapeChar, '$1') // 处理空格
    }
    else if (expression) {
      key = expression.trim()
    }
    result.push(key)  // 将匹配到的key压入结果数组
  })
  return result
})

export default stringToPath
