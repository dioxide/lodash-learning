/**
 * Gets the first element of `array`.
 * 获取`array`的第一个元素
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query. 姚崇勋的数组
 * @returns {*} Returns the first element of `array`. 该数组的第一个元素
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
function head(array) {
  return (array != null && array.length)
    ? array[0]
    : undefined // 对于空数组，返回undefined， 也是符合函数语义的
}

export default head
