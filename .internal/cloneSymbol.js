/** Used to convert symbols to primitives and strings. 用来转换symbols到原始值和字符串 */
const symbolValueOf = Symbol.prototype.valueOf

/**
 * Creates a clone of the `symbol` object.
 * 创建一个`symbol`对象的克隆
 *
 * @private
 * @param {Object} symbol The symbol object to clone. 要克隆的symbol对象
 * @returns {Object} Returns the cloned symbol object.  克隆得到的symbol对象
 */
function cloneSymbol(symbol) {
  return Object(symbolValueOf.call(symbol)) // 通过原始方法将symbol转换为原始值，再由Object强制转换为对象
}

export default cloneSymbol
