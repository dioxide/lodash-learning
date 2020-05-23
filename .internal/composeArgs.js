/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 * 创建一个数组 其由部分应用的参数，占位符和将参数提供给单个参数数组 组成
 * @todo: 规则尚不清楚
 *
 * @private
 * @param {Array} args The provided arguments.  提供的参数
 * @param {Array} partials The arguments to prepend to those provided.  部分应用的参数
 * @param {Array} holders The `partials` placeholder indexes. `partials`占位符索引
 * @params {boolean} [isCurried] Specify composing for a curried function.  指定是否组合一个柯里化函数
 * @returns {Array} Returns the new array of composed arguments.  新的组合够的参数arguments
 */
function composeArgs(args, partials, holders, isCurried) {
  const argsLength = args.length  // 原参数长度
  const holdersLength = holders.length  // 占位符长度
  const leftLength = partials.length  // 剩余部分的长度

  let argsIndex = -1
  let leftIndex = -1
  let rangeLength = Math.max(argsLength - holdersLength, 0)

  const result = new Array(leftLength + rangeLength)
  const isUncurried = !isCurried

  while (++leftIndex < leftLength) {  // 迭代剩余部分
    result[leftIndex] = partials[leftIndex]
  }
  while (++argsIndex < holdersLength) { // 迭代占位符部分
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex]
    }
  }
  while (rangeLength--) { // 再倒序迭代处理其他？
    result[leftIndex++] = args[argsIndex++]
  }
  return result
}

export default composeArgs
