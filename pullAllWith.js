import basePullAll from './.internal/basePullAll.js'

/**
 * This method is like `pullAll` except that it accepts `comparator` which
 * is invoked to compare elements of `array` to `values`. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 * 此方法类似于`pullAll`,但其接受一个用于比较`array` 和 `values`对应元素的比较器。
 *
 *
 * **Note:** Unlike `differenceWith`, this method mutates `array`.
 *  =注意： 不像`differenceWith`，这个方法将修改`array`
 *
 * @since 4.6.0
 * @category Array
 * @param {Array} array The array to modify. 要修改的数组
 * @param {Array} values The values to remove. 要移除的值
 * @param {Function} [comparator] The comparator invoked per element. 应用在每个元素上的比较器
 * @returns {Array} Returns `array`.  原数组
 * @see pull, pullAll, pullAllBy, pullAt, remove, reject
 * @example
 *
 * const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }]
 *
 * pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual)
 * console.log(array)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 */
function pullAllWith(array, values, comparator) {
  return (array != null && array.length && values != null && values.length)
    ? basePullAll(array, values, undefined, comparator) // 两个参数必须是非空数组，才能借调basePullAll来操作
    : array // 否则原封不动返回
}

export default pullAllWith
