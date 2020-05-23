import basePullAll from './.internal/basePullAll.js'

/**
 * This method is like `pullAll` except that it accepts `iteratee` which is
 * invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The iteratee is invoked with one argument: (value).
 * 此方法类似于`pullAll`,但其接受一个应用在 `array` 和 `values`的每个元素上以生成比较标准的迭代器。
 * 迭代器被调用时接受1个参数：（value）
 *
 * **Note:** Unlike `differenceBy`, this method mutates `array`.
 * 注意： 不像`differenceBy`，这个方法将修改`array`
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify. 要修改的数组
 * @param {Array} values The values to remove.  要移除的值
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {Array} Returns `array`.  原数组
 * @see pull, pullAll, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]
 *
 * pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x')
 * console.log(array)
 * // => [{ 'x': 2 }]
 */
function pullAllBy(array, values, iteratee) {
  return (array != null && array.length && values != null && values.length)
    ? basePullAll(array, values, iteratee)  // 两个参数必须是非空数组，才能借调basePullAll来操作
    : array // 否则原封不动返回
}

export default pullAllBy
