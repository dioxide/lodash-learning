import pullAll from './pullAll.js'

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 * 从`array`中移除所有给定的值，使用`SameValueZero`做等值判断
 *
 * **Note:** Unlike `without`, this method mutates `array`. Use `remove`
 * to remove elements from an array by predicate.
 * 注意：不像`without`,此方法将改变原数组`array`, 也可使用`remove`方法通过断言函数来移除元素
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify. 要修改的数组
 * @param {...*} [values] The values to remove. 要移除的值
 * @returns {Array} Returns `array`.  原数组
 * @see pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pull(array, 'a', 'c')
 * console.log(array)
 * // => ['b', 'b']
 */
function pull(array, ...values) {
  return pullAll(array, values) // 借调pullAll实现
}

export default pull
