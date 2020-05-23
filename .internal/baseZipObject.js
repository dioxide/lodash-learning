/**
 * This base implementation of `zipObject` which assigns values using `assignFunc`.
 * `zipObject`的基本实现，其使用`assignFunc`来分配值
 *
 * @private
 * @param {Array} props The property identifiers. 属性名（标识符）数组A
 * @param {Array} values The property values. 属性值 数组B
 * @param {Function} assignFunc The function to assign values.  分配值的函数
 * @returns {Object} Returns the new object.  由数组A的项作为key，数组B的项作为value组成的新对象
 */
function baseZipObject(props, values, assignFunc) {
  let index = -1
  const length = props.length // 数组A长度
  const valsLength = values.length  // 数组B长度
  const result = {} // 结果对象

  while (++index < length) {  // 正序迭代 数组A
    const value = index < valsLength ? values[index] : undefined  // 要分配的新值 ：只要当前位置索引在数组B中能取到值，就使用这个值，否则为undefined
    assignFunc(result, props[index], value) // 使用外部指定的分配函数进行值的分配
  }
  return result
}

export default baseZipObject
