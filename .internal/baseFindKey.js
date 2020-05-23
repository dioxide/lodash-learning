/**
 * The base implementation of methods like `findKey` and `findLastKey`
 * which iterates over `collection` using `eachFunc`.
 * 类似`findKey` 和 `findLastKey`的基本实现，其使用`eachFunc`来迭代`collection`
 * 此方法属于模版方法，其将若干函数组织起来按固定模式执行
 *
 * @private
 * @param {Array|Object} collection The collection to inspect. 要检查的集合
 * @param {Function} predicate The function invoked per iteration.  每次迭代调用的断言函数
 * @param {Function} eachFunc The function to iterate over `collection`.  迭代函数
 * @returns {*} Returns the found element or its key, else `undefined`. 找到的元素的key，未找到则返回`undefined`
 */
function baseFindKey(collection, predicate, eachFunc) {
  let result  // 结果值
  eachFunc(collection, (value, key, collection) => {  // 使用外部指定的迭代函数来迭代
    if (predicate(value, key, collection)) {  // 若被外部断言函数确定为相等，则将当前key记录到结果中，并退出迭代
      result = key
      return false
    }
  })
  return result // 找到的key或undefined
}

export default baseFindKey
