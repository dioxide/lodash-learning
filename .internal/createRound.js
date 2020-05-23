/**
 * Creates a function like `round`.
 * 创建一个类似`round`的函数
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding. 指定`Math`中的方法名供rounding时使用
 * @returns {Function} Returns the new round function.  新的round函数，其可指定精度
 */
function createRound(methodName) {
  const func = Math[methodName] // 去除指向的方法
  return (number, precision) => { // 返回闭包函数，其接受要处理的数字和要处理的精度
    precision = precision == null ? 0 : (precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292)) // 精度默认为0，且在-292和292之间
    if (precision) {  // 进行精度处理 @todo: 这里的处理规则不清楚
      // Shift with exponential notation to avoid floating-point issues. 用指数表示法转换以避免浮点问题。
      // See [MDN](https://mdn.io/round#Examples) for more details.
      let pair = `${number}e`.split('e')  // 将指数部分拆出来
      const value = func(`${pair[0]}e${+pair[1] + precision}`)  // 调用原方法得到值

      pair = `${value}e`.split('e')
      return +`${pair[0]}e${+pair[1] - precision}`  // 最后在转换一次数字类型
    }
    return func(number) // 未指定精度时直接调用原方法
  }
}

export default createRound
