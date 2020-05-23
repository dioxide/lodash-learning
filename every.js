/**
 * Checks if `predicate` returns truthy for **all** elements of `array`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 * 全称判断： 检查对于`array`的每个元素断言函数`predicate`是否都返回true. 一旦断言函数返回false迭代将终止.
 * 断言函数被传递3个参数：(value, index, array)
 *
 * **Note:** This method returns `true` for
 * [empty arrays](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty arrays.
 * 注意：此方法对[empty arrays]返回true，因为[everything is true]
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over. 要迭代的数组
 * @param {Function} predicate The function invoked per iteration.  每次迭代要调用的函数
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`. 若所有元素都通过了断言检查则返回true，否则返回false
 * @example
 *
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 */
function every(array, predicate) {
  let index = -1
  const length = array == null ? 0 : array.length // 对于null视为空数组，方便后续处理

  while (++index < length) {  // 正序迭代
    if (!predicate(array[index], index, array)) {
      return false  // 只要被断言函数返回为false，此处就也返回false，进而退出整个迭代
    }
  }
  return true // 只要为中途退出，就代表判断成功
}

export default every
