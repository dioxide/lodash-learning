import map from './map.js'
import baseAt from './.internal/baseAt.js'
import basePullAt from './.internal/basePullAt.js'
import compareAscending from './.internal/compareAscending.js'
import isIndex from './.internal/isIndex.js'

/**
 * Removes elements from `array` corresponding to `indexes` and returns an
 * array of removed elements.
 * 移除`array`中由`indexes`指定的元素，并返回移除的元素
 *
 * **Note:** Unlike `at`, this method mutates `array`.
 * 注意： 不像`at`, 这个方法将修改原数组`array`
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to modify.  要修改的数组
 * @param {...(number|number[])} [indexes] The indexes of elements to remove. 要移除的元素的索引
 * @returns {Array} Returns the new array of removed elements.  由被移除元素组成的数组
 * @see pull, pullAll, pullAllBy, pullAllWith, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 * const pulled = pullAt(array, [1, 3])
 *
 * console.log(array)
 * // => ['a', 'c']
 *
 * console.log(pulled)
 * // => ['b', 'd']
 */
function pullAt(array, ...indexes) {
  const length = array == null ? 0 : array.length
  const result = baseAt(array, indexes)

  // 借调basePullAt， 对indexes中的值做一遍映射以获取有效值，然后在升序排列
  basePullAt(array, map(indexes, (index) => isIndex(index, length) ? +index : index).sort(compareAscending))
  return result
}

export default pullAt
