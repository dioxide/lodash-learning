import arrayEach from './.internal/arrayEach.js'
import baseForOwn from './.internal/baseForOwn.js'
import isBuffer from './isBuffer.js'
import isObject from './isObject.js'
import isTypedArray from './isTypedArray.js'

/**
 * An alternative to `reduce` this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 * _.reduce的替代方法；此方法将`object`转换为新的累加其`accumulator`对象，这是通过
 * 迭代器运行其自己的每个可枚举字符串键属性的结果，而每次调用都可能会使累加器对象`accumulator`发生变化。
 * 如果未提供累加器，则将使用具有相同[[Prototype]]的新对象。
 * 使用四个参数调用iteratee ：（累加器，值，键，对象）。
 * Iteratee函数可以通过显式返回false来提前退出迭代。
 *
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @param {*} [accumulator] The custom accumulator value. 自定义累加器值
 * @returns {*} Returns the accumulated value.  迭代后的累加器值
 * @see reduce, reduceRight
 * @example
 *
 * transform([2, 3, 4], (result, n) => {
 *   result.push(n *= n)
 *   return n % 2 == 0
 * }, [])
 * // => [4, 9]
 *
 * transform({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  const isArr = Array.isArray(object)
  const isArrLike = isArr || isBuffer(object) || isTypedArray(object) // object是否为类数组

  if (accumulator == null) {  // 若未提供累加器，要为之创建一个
    const Ctor = object && object.constructor // 获取object的构造器
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [] // 若object是数组，则用器构造器构造一个新的出来，否则使用一个空数组
    }
    else if (isObject(object)) {
      // 若object是对象： 若其是个function则使用其prototype来构建，否则使用空对象作为累加器
      accumulator = typeof Ctor === 'function'
        ? Object.create(Object.getPrototypeOf(object))
        : {}
    }
    else {
      accumulator = {}  // 其他情况使用空对象作为累加器
    }
  }
  // 根据object的类型选选用合适的迭代方法 进行迭代并指定自定义的迭代器（在迭代中实现自定义累加）
  (isArrLike ? arrayEach : baseForOwn)(object, (value, index, object) =>
    iteratee(accumulator, value, index, object))
  return accumulator   // 返回最终的累加值
}

export default transform
