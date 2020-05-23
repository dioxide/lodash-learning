import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1 //  进行深度克隆
const CLONE_SYMBOLS_FLAG = 4  //  进行符号克隆

/**
 * This method is like `clone` except that it recursively clones `value`.
 * Object inheritance is preserved.
 * 此方法类似`clone`，但其递归地克隆`value`. 对象继承被保留。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone. 要递归克隆的值
 * @returns {*} Returns the deep cloned value.  深度克隆得到的值
 * @see clone
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const deep = cloneDeep(objects)
 * console.log(deep[0] === objects[0])
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG) // 借调baseClone 并指定位掩码
}

export default cloneDeep
