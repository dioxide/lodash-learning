import findLastIndex from './findLastIndex.js'
import isArrayLike from './isArrayLike.js'

/**
 * This method is like `find` except that it iterates over elements of
 * `collection` from right to left.
 * 类似要`find`但其从左到右迭代`collection`的元素
 *
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.  要检查的集合
 * @param {Function} predicate The function invoked per iteration.  每次迭代要调用的函数
 * @param {number} [fromIndex=collection.length-1] The index to search from.  搜索开始的位置，默认为集合末位
 * @returns {*} Returns the matched element, else `undefined`. 找到的元素，未找到则返回`undefined`
 * @see find, findIndex, findKey, findLastIndex, findLastKey
 * @example
 *
 * findLast([1, 2, 3, 4], n => n % 2 == 1)
 * // => 3
 */
function findLast(collection, predicate, fromIndex) {
  let iteratee
  const iterable = Object(collection) // 强制转换为对象，使其可迭代
  if (!isArrayLike(collection)) { // 若collection不是类数组
    collection = Object.keys(collection) // 取其keys作为待迭代集合
    iteratee = predicate  // 由断言函数充当迭代器
    predicate = (key) => iteratee(iterable[key], key, iterable) // 在将包裹进一个映射函数中
  }
  const index = findLastIndex(collection, predicate, fromIndex) // 借调基本方法找到目标索引值
  return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined  // 在目标索引值基础上再应用迭代器或直接取出元素
}

export default findLast
