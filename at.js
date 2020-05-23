import baseAt from './.internal/baseAt.js'
import baseFlatten from './.internal/baseFlatten.js'

/**
 * Creates an array of values corresponding to `paths` of `object`.
 * 创建一个数组，其值由`object`的指定`paths`处的对应值组成
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {...(string|string[])} [paths] The property paths to pick. 要拾取的属性的的路径（字符串组成的数组）
 * @returns {Array} Returns the picked values.  拾取的值
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
 *
 * at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 */
// 对多个paths构成的数组有baseFlatten进行1级的扁平化，再借调baseAt进行获取即可
const at = (object, ...paths) => baseAt(object, baseFlatten(paths, 1))

export default at
