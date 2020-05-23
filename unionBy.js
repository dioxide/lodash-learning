import baseFlatten from './.internal/baseFlatten.js'
import baseUniq from './.internal/baseUniq.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * This method is like `union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which uniqueness is computed. Result values are chosen from the first
 * array in which the value occurs. The iteratee is invoked with one argument:
 * (value).
 * 此方法类似于`union`，但其接受一个 应用在`arrays`的每个元素上以生成生成唯一性标准的 迭代器`iteratee`.
 * 结果值来自于第一个出现该值的数组.
 * 迭代器被传递1个参数：(value)
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.  要检查的数组
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代器
 * @returns {Array} Returns the new array of combined values. 组合后的新数组
 * @see difference, union, unionWith, without, xor, xorBy
 * @example
 *
 * unionBy([2.1], [1.2, 2.3], Math.floor) // 先转换为浮点数
 * // => [2.1, 1.2]
 */
function unionBy(...arrays) {
  let iteratee = last(arrays)  // 假定最后一个参数为比较器
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined    // 确认比较是否存在可用
  }
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee)  // 先借调baseFlatten做1级的扁平化（即将多个数组混到一个数组中），在借调baseUniq带着指定迭代器去重
}

export default unionBy
