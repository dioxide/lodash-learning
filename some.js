/**
 * Checks if `predicate` returns truthy for **any** element of `array`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index, array).
 * 检查数组`array`的项是否对于断言函数`predicate`返回真值（迭代将在此时停止），断言函数被调用是接受3个参数（value,index,array）
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over. 要迭代的数组
 * @param {Function} predicate The function invoked per iteration. 每次迭代调用的断言函数
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`. 若有任何元素通过了断言函数检查（返回true），则返回true，否则返回false
 * @example
 *
 * some([null, 0, 'yes', false], Boolean)
 * // => true
 */
function some(array, predicate) {
  let index = -1  // 从-1位置开始迭代
  const length = array == null ? 0 : array.length

  while (++index < length) {  // 迭代array的每一项
    if (predicate(array[index], index, array)) {
      return true // 若某一次迭代被断言函数返回true，则整个函数直接返回true
    }
  }
  return false  // 否则返回false
}

export default some
