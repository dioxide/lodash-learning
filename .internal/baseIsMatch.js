import Stack from './Stack.js'
import baseIsEqual from './baseIsEqual.js'

/** Used to compose bitmasks for value comparisons. 组合位掩码以进行值比较 */
const COMPARE_PARTIAL_FLAG = 1
const COMPARE_UNORDERED_FLAG = 2

/**
 * The base implementation of `isMatch`.
 *
 * @private
 * @param {Object} object The object to inspect. 要检查的对象A
 * @param {Object} source The object of property values to match. 属性值要匹配的对象
 * @param {Array} matchData The property names, values, and compare flags to match. 匹配数据集：要匹配的由属性名、值和比较标志构成的数组
 * @param {Function} [customizer] The function to customize comparisons.  自定义比较其
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.  若`object`匹配成功则返回true，否则返回false
 */
function baseIsMatch(object, source, matchData, customizer) {
  let index = matchData.length  // 匹配数据集
  const length = index  // 遍历游标起始位置
  const noCustomizer = !customizer  // 是否未指定比较器

  if (object == null) {
    return !length  // 若对象A为空，则返回false
  }
  let data
  let result
  object = Object(object) // 强制为Object类型（可迭代）
  while (index--) { // 倒序迭代匹配数据集
    data = matchData[index] // 去除一个匹配数据项
    if ((noCustomizer && data[2]) // 若未定义自定义比较器但当前匹配数据项中有， 则执行判断1，否则执行判断2
      ? data[1] !== object[data[0]] // 判断1：判断数组A中由匹配数据集指定的位置的值 不等于 匹配数据集期望的值
      : !(data[0] in object)  // 判断2： 匹配数据集指定的key键 在 object中压根儿不存在
    ) {
      return false  // 只有有一次判断不成立，就退出迭代，返回最终结果为false
    }
  }
  // 若上边迭代通过了没有退出，还要在正序迭代一遍，继续处理
  while (++index < length) {  // 再正序迭代匹配数据集
    data = matchData[index] // 匹配数据集的当前项
    const key = data[0] // 要判断的key
    const objValue = object[key]  // 要判断的key所对应的在目标object中的值
    const srcValue = data[1]  // 要判断的key所期望的值

    if (noCustomizer && data[2]) {  // 若未定义比较器 但 匹配数据集的当前项中有指定
      if (objValue === undefined && !(key in object)) {
        return false  // 若同时 object中该值为undefined 且 要判断的key在object中不存在， 则 退出迭代，返回最终结果为false
      }
    } else {  // 否则，就是定义了比较器 或 匹配数据集的当前项也没有比较标志
      const stack = new Stack // 使用stack结构来记录
      if (customizer) {
        result = customizer(objValue, srcValue, key, object, source, stack) // 若定义了比较器，结果由比较器来决定
      }
      if (!(result === undefined
        ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) // 若此时result为undefined，则使用baseIsEqual进行深度比较
        : result  // 若 此时result非undefined，则保持不变
      )) {
        return false  // 若 次数result仍为假值，则认为匹配失败，最终返回false
      }
    }
  }
  return true
}

export default baseIsMatch
