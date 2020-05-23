import arrayReduceRight from './.internal/arrayReduceRight.js'
import baseEachRight from './.internal/baseEachRight.js'
import baseReduce from './.internal/baseReduce.js'

/**
 * This method is like `reduce` except that it iterates over elements of
 * `collection` from right to left.
 * 类似于`reduce`,但其从右往左迭代`collection`的元素
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代调用的函数
 * @param {*} [accumulator] The initial value.  初始累积值
 * @returns {*} Returns the accumulated value.  累积后的值
 * @see reduce
 * @example
 *
 * const array = [[0, 1], [2, 3], [4, 5]]
 *
 * reduceRight(array, (flattened, other) => flattened.concat(other), [])
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduceRight : baseReduce  // 根据collection的类型选择合适reduce基本方法
  const initAccum = arguments.length < 3  // 是否指定了初始累积值
  return func(collection, iteratee, accumulator, initAccum, baseEachRight)  // 借调基本方法 配合实现,并指定迭代方向
}

export default reduceRight
