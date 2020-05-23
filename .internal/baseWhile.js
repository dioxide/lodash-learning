import slice from '../slice.js'

/**
 * The base implementation of methods like `dropWhile` and `takeWhile`.
 * 类似`dropWhile` 和 `takeWhile`的基本实现
 *
 * @private
 * @param {Array} array The array to query. 要查询的数组
 * @param {Function} predicate The function invoked per iteration. 谓词/断言函数，每次迭代调用的函数
 * @param {boolean} [isDrop] Specify dropping elements instead of taking them.  指定是否丢弃元素而不是拿取元素
 * @param {boolean} [fromRight] Specify iterating from right to left. 指定是否从右到左迭代
 * @returns {Array} Returns the slice of `array`. `array`的切片
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  const { length } = array  // 获取数组长度
  let index = fromRight ? length : -1 // 迭代游标索引的初始值（由迭代方向fromRight决定，默认为-1）

  // 迭代游标的累加/减方向由迭代方向fromRight决定， 同时调用断言函数predicate， 两者决定是否继续迭代（都返回true），这样就最终确定了游标索引index（要操作的位置）
  while ((fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)) {}

  // 若是要丢弃这些元素，则返回'已迭代部分'的反选切片（即未迭代部分）， 否则，执行相反的逻辑...
  // 此处代码逻辑较紧凑，且要注意数组边界问题
  return isDrop
    ? slice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : slice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index))
}

export default baseWhile
