import baseSet from './.internal/baseSet.js'
import baseZipObject from './.internal/baseZipObject.js'

/**
 * This method is like `zipObject` except that it supports property paths.
 * 类似于`zipObject`，但其接受属性路径
 *
 * @since 4.1.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.  属性识别符数组
 * @param {Array} [values=[]] The property values.  属性值数组
 * @returns {Object} Returns the new object.  新的对象
 * @see unzip, unzipWith, zip, zipObject, zipWith
 * @example
 *
 * zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
 * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 */
function zipObjectDeep(props, values) {
  return baseZipObject(props || [], values || [], baseSet)  // 借调基本方法前先做空值检测
}

export default zipObjectDeep
