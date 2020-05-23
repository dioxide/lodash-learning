/**
 * Converts `iterator` to an array.
 * 转换`inerator`为一个数组，即执行迭代器，将结果依次存入数组
 *
 * @private
 * @param {Object} iterator The iterator to convert.  要转换的迭代器
 * @returns {Array} Returns the converted array.  迭代结果组成的数组
 */
function iteratorToArray(iterator) {
  let data
  const result = []

  while (!(data = iterator.next()).done) {  // 只要 迭代器还有下一项.next 且当前迭代未完成.done为false，就一直迭代
    result.push(data.value) // 依次压入迭代的结果值
  }
  return result // 返回结果数组
}

export default iteratorToArray
