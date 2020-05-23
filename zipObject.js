import assignValue from './.internal/assignValue.js'
import baseZipObject from './.internal/baseZipObject.js'

/**
 * This method is like `fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 * 类似于`fromParirs`但其接受2个参数，一个是属性识别符，另一个是对应的值。
 *
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.  属性识别符数组
 * @param {Array} [values=[]] The property values.  属性值数组
 * @returns {Object} Returns the new object.  新的对象
 * @see unzip, unzipWith, zip, zipObjectDeep, zipWith
 * @example
 *
 * zipObject(['a', 'b'], [1, 2])
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue)  // 借调基本方法前先做空值检测
}

export default zipObject
