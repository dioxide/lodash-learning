import compareAscending from './compareAscending.js'

/**
 * Used by `orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 * 使用'orderBy'来比较2个值的多个属性并进行排序
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 * 若'orders'未指定，则所有的值以升序排序。 或者需指定'orders'为'desc'或'asc'
 *
 * @private
 * @param {Object} object The object to compare.  要比较的值（对象）
 * @param {Object} other The other object to compare. 要比较的另一个值（对象）
 * @param {(string|function)[]} orders The order to sort by for each property. 要排序的类型或排序函数
 * @returns {number} Returns the sort order indicator for `object`. 相应于'object'的排序指示器
 */
function compareMultiple(object, other, orders) {
  let index = -1
  const objCriteria = object.criteria // @todo: criteria是哪来的？干啥的？
  const othCriteria = other.criteria
  const length = objCriteria.length
  const ordersLength = orders.length

  while (++index < length) {  // 以object为主进行迭代
    const order = index < ordersLength ? orders[index] : null
    const cmpFn = (order && typeof order === 'function') ? order: compareAscending  // 若提供的order为函数，则依据它的结果来排序，否则使用compareAscending
    const result = cmpFn(objCriteria[index], othCriteria[index])  // 使用比较函数cmpFn比较两个值的相同索引位置上的数据的大小
    if (result) { // resutl为0即相等时略过
      if (order && typeof order !== 'function') { // 若order不是函数，则认为是'asc'或'desc'
        return result * (order == 'desc' ? -1 : 1)  // 因为到这里一定是compareAscending的排序结果，所以结果乘以1相当于保留正排结果 或乘以-1相当于反排结果
      }
      return result // 返回排序结果1或-1
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  // 修复'Array#sort'在Adobe程序的JS引擎的bug
  //
  // This also ensures a stable sort in V8 and other engines.
  // 这也确保了在V8和其他引擎中一个稳定的排序
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index
}

export default compareMultiple
