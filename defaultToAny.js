import arrayReduce from './.internal/arrayReduce.js'
import defaultTo from './defaultTo.js'

/**
 * This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
 * `NaN`, `null`, or `undefined`.
 * 类似于`defaultTo`但其接受多个默认值并返回第一个不是 `NaN`, `null`, or `undefined`的值。
 * 即将排列在前部的所有假值都忽略，而返回第一个遇到的真值
 *
 * @since 5.0.0
 * @category Util
 * @param {*} value The value to check. 要检查的值
 * @param {...*} defaultValues The default values. 默认值
 * @returns {*} Returns the resolved value. 解析到的值
 * @see _.defaultTo
 * @example
 *
 * defaultToAny(1, 10, 20)
 * // => 1
 *
 * defaultToAny(undefined, 10, 20)
 * // => 10
 *
 * defaultToAny(undefined, null, 20)
 * // => 20
 *
 * defaultToAny(undefined, null, NaN)
 * // => NaN
 */
function defaultToAny(value, ...defaultValues) {  // 所有默认值收集到一个变量中
  return arrayReduce(defaultValues, defaultTo, value) // 叠加arrayReduce并指定迭代器defaultTo将数组折叠起来到value
}

export default defaultToAny
