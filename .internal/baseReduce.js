/**
 * The base implementation of `reduce` and `reduceRight` which iterates
 * over `collection` using `eachFunc`.
 * `reduce` 和 `reduceRight`的基本实现，其使用`eachFunc`来迭代`collection`
 * 此方法属于模版方法，其定义了一种模式，将若干个函数按这个模式组合使用
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over. 要迭代的集合（数组或对象）
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数（迭代器）
 * @param {*} accumulator The initial value.  折叠的输出值
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.  // 指定使用`collection`的第一个还是最后一个元素作为初始值
 * @param {Function} eachFunc The function to iterate over `collection`.  迭代`collection`的函数
 * @returns {*} Returns the accumulated value.  折叠后的值
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, (value, index, collection) => {  // 由eachFunc迭代整个collection
    accumulator = initAccum
      ? (initAccum = false, value)  // 初始化折叠值
      : iteratee(accumulator, value, index, collection) // 使用指定的迭代器得到应'叠入'的值
  })
  return accumulator  // 返回最终的折叠值
}

export default baseReduce
