
/**
 * Casts `value` as an array if it's not one.
 * 将`value`转换为数组。
 *
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect. 要检查的值
 * @returns {Array} Returns the cast array. 数组形式
 * @example
 *
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */
function castArray(...args) {
  if (!args.length) {
    return [] // 空值直接返回空数组
  }
  const value = args[0] // 只操作第一个参数
  return Array.isArray(value) ? value : [value] // 若已经是array则直接返回，否则在外层包裹一层array再返回
}

export default castArray
