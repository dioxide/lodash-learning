import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 * 此方法类似于`difference`，但其接受一个应用在`array`和`value`的每个元素上以确定比较结果的迭代器`iteratee`参数。
 * 结果值的顺序和值的引用由第一个数组决定。 迭代器被调用时被传递一个参数：(value)
 * 相比`difference`,其迭代器相当于对所有的数组值先做了一遍映射（通常是过滤或转换操作），在做减法运算
 *
 * **Note:** Unlike `pullAllBy`, this method returns a new array.
 * 注意： 不像`pullAllBy`, 这个方法返回一个新的数组
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect. 要检查的数组
 * @param {...Array} [values] The values to exclude.  要排除的值
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {Array} Returns the new array of filtered values. 新的被过滤的数组
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */
function differenceBy(array, ...values) {
  let iteratee = last(values) // 最后一个参数被假定为自定义迭代器
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined  // 若假定的迭代器是个类对象数组，那就不是真的迭代器
  }
  // 之后处理逻辑与difference()一致，除了多传递了相应地iteratee函数外
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
    : []
}

export default differenceBy
