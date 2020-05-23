import baseXor from './.internal/baseXor.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `xor` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which they're compared. The order of result values is determined
 * by the order they occur in the arrays. The iteratee is invoked with one
 * argument: (value).
 * 类似`xor`但其接受一个 应用在`array`每个元素上以产生比较结果标准 的迭代器`iteratee`
 * 结果值的顺序由它们出现在数组中的顺序决定。
 * 迭代器被传递1个参数：（value）
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.  要检查的数组
 * @param {Function} iteratee The iteratee invoked per element. 要应用在每个元素上的迭代器
 * @returns {Array} Returns the new array of filtered values. 新的过滤过的值组成的元素
 * @see difference, union, unionBy, unionWith, without, xor, xorWith
 * @example
 *
 * xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2, 3.4]
 */
function xorBy(...arrays) {
  let iteratee = last(arrays) // 假定最后一个参数为迭代器
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined  // 确定假定的迭代器是否可用
  }
  return baseXor(arrays.filter(isArrayLikeObject), iteratee)  // 先过滤，再异或
}

export default xorBy
