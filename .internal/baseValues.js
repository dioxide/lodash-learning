/**
 * The base implementation of `values` and `valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 * `values`和`valuesIn`的基本实现，其创建一个由`object`的某些属性的值构成的数组，具体取哪些属性则由`props`决定
 *
 * @private
 * @param {Object} object The object to query. 要查询的对象
 * @param {Array} props The property names to get values for. 用于获取值的属性名称（数组）
 * @returns {Object} Returns the array of property values.  属性值组成的数组
 */
function baseValues(object, props) {
  return props == null ? [] : props.map((key) => object[key]) // props非空时，返回其通过map映射得到的在object中的值，否则返回空数组
}

export default baseValues
