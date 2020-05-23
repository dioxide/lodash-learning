/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `partialRight`.
 * 此函数类似于`composeArgs`除了其参数组合为`partialRight`量身定制
 * @todo: 规则尚不清楚
 *
 * @private
 * @param {Array} args The provided arguments.  提供的参数
 * @param {Array} partials The arguments to append to those provided. 附加到提供的参数的参数
 * @param {Array} holders The `partials` placeholder indexes. `partials`占位符索引
 * @params {boolean} [isCurried] Specify composing for a curried function.  指定是否组合为一个柯里化函数
 * @returns {Array} Returns the new array of composed arguments.  新的组合参数数组
 */
function composeArgsRight(args, partials, holders, isCurried) {
  let argsIndex = -1  // 三个部分的迭代开始位置
  let holdersIndex = -1
  let rightIndex = -1

  const argsLength = args.length  // 三个部分的索引范围
  const holdersLength = holders.length
  const rightLength = partials.length
  const rangeLength = Math.max(argsLength - holdersLength, 0)
  const result = new Array(rangeLength + rightLength) // 得出结果数组长度
  const isUncurried = !isCurried

  while (++argsIndex < rangeLength) { // 原参数部分
    result[argsIndex] = args[argsIndex]
  }
  const offset = argsIndex
  while (++rightIndex < rightLength) {  // 右侧部分
    result[offset + rightIndex] = partials[rightIndex]
  }
  while (++holdersIndex < holdersLength) {  // 处理占位符部分
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++]
    }
  }
  return result
}

export default composeArgsRight
