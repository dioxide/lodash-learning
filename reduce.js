import arrayReduce from './.internal/arrayReduce.js'
import baseEach from './.internal/baseEach.js'
import baseReduce from './.internal/baseReduce.js'

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 * 折叠集合`collection`为一个值，其将在迭代`collection`的每个元素时应用`iteratee`，并将结果累加在一起，即每次迭代时该值都为上一次迭代的返回值
 * 若没有指定初始累加值，则`collection`的第一个元素将被用作初始值。
 * 迭代器具有4个参数(accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `reduce`, `reduceRight`, and `transform`.
 * 许多lodash方法被确保作为iteratees方法，如`reduce`, `reduceRight`, and `transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代调用的函数
 * @param {*} [accumulator] The initial value.  初始累积值
 * @returns {*} Returns the accumulated value.  累积后的值
 * @see reduceRight, transform
 * @example
 *
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 *
 * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 *   return result
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduce : baseReduce // 根据collection的类型选择合适reduce基本方法
  const initAccum = arguments.length < 3  // 是否指定了初始累积值
  return func(collection, iteratee, accumulator, initAccum, baseEach) // 借调基本方法 配合实现
}

export default reduce
