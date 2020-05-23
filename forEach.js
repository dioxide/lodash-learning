import arrayEach from './.internal/arrayEach.js'
import baseEach from './.internal/baseEach.js'

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 * 迭代`collection`的所有元素并在每个元素上应用`iteratee`.
 * 迭代器接受3个参数： (value, index|key, collection). 迭代器可通过显式的返回false来提前结束迭代
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `forIn`
 * or `forOwn` for object iteration.
 * 注意： 和其他`collections`方法一样，具有'length'属性的对象将会像数组一样迭代。 可是使用`forIn`或`forOwn`来阻止这样的行为
 *
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合
 * @param {Function} iteratee The function invoked per iteration. 每次迭代调用的函数
 * @returns {Array|Object} Returns `collection`.  原集合
 * @see forEachRight, forIn, forInRight, forOwn, forOwnRight
 * @example
 *
 * forEach([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 *
 * forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEach : baseEach // 根据是否为数组类型 选用合适的迭代函数
  return func(collection, iteratee) // 借用已有函数进行迭代，同时指定迭代器
}

export default forEach
