import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 * 此方法类似`difference`,但其接受一个比较`array`与`values` 对应值的比较器函数`comparator`.
 * 结果值的顺序和值的引用由第一个数组决定。 比较器被调用时被传递2个参数：（arrVal,othVal）.
 *
 * **Note:** Unlike `pullAllWith`, this method returns a new array.
 * 注意： 不像`pullAllWith`, 这个方法返回一个新的数组
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {...Array} [values] The values to exclude.  要排除的值
 * @param {Function} [comparator] The comparator invoked per element. 应用在每个元素上的迭代器
 * @returns {Array} Returns the new array of filtered values. 新的被过滤的数组
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 *
 * differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)
 * // => [{ 'x': 2, 'y': 1 }]
 */
function differenceWith(array, ...values) {
  let comparator = last(values) // 最后一个参数被假定为自定义比较器
  if (isArrayLikeObject(comparator)) {
    comparator = undefined  // 若假定的比较器是个类对象数组，那就不是真的比较器
  }
  // 之后处理逻辑与difference()一致，除了多传递了相应地comparator函数外
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : []
}

export default differenceWith
