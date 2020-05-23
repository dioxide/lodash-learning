import assignValue from './assignValue.js'
import baseAssignValue from './baseAssignValue.js'

/**
 * Copies properties of `source` to `object`.
 * 从`source`中拷贝属性到`object`中
 *
 * @private
 * @param {Object} source The object to copy properties from. 拷贝的源对象
 * @param {Array} props The property identifiers to copy. 要拷贝的属性
 * @param {Object} [object={}] The object to copy properties to.  拷贝的目标对象（默认为空对象）
 * @param {Function} [customizer] The function to customize copied values.  决定拷贝结果值的函数
 * @returns {Object} Returns `object`.  拷贝得到的对象
 */
function copyObject(source, props, object, customizer) {
  const isNew = !object // 是否要准备一个新对象用来拷贝
  object || (object = {}) // 若未指定目标对象，则将其指定为空对象

  for (const key of props) {  // 迭代要拷贝的属性
    let newValue = customizer // 若指定了自定义函数，则由其决定新值，否则为undefined
      ? customizer(object[key], source[key], key, object, source)
      : undefined

    if (newValue === undefined) { // 若新值为undefined（包括由于上句未指定自定义函数造成的，还是由其返回了undefined造成的）
      newValue = source[key]  // 这些情况都将新值设置为 源对象的对象值
    }
    if (isNew) {
      baseAssignValue(object, key, newValue)  // 若是要拷贝到新对象，使用baseAssignValue
    } else {
      assignValue(object, key, newValue)  // 否则使用assignValue拷贝到已存在对象中
    }
  }
  return object // 返回'这个'对象
}

export default copyObject
