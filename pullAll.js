import basePullAll from './.internal/basePullAll.js'

/**
 * This method is like `pull` except that it accepts an array of values to remove.
 * 此方法类似于`pull`,但其接受一个由要移除的值构成的数组
 *
 * **Note:** Unlike `difference`, this method mutates `array`.
 * 注意：不像`difference`,这个方法将修改`array`
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.  要修改的数组
 * @param {Array} values The values to remove.  要移除的值
 * @returns {Array} Returns `array`.  原数组
 * @see pull, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pullAll(array, ['a', 'c'])
 * console.log(array)
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return (array != null && array.length && values != null && values.length)
    ? basePullAll(array, values)  // 两个参数必须是非空数组，才能借调basePullAll来操作
    : array // 否则原封不动返回
}

export default pullAll
