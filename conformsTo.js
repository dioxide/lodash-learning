import baseConformsTo from './.internal/baseConformsTo.js'
import keys from './keys.js'

/**
 * Checks if `object` conforms to `source` by invoking the predicate
 * properties of `source` with the corresponding property values of `object`.
 * 检查`object`是否符合`source`的断言，通过调用`source`中的断言属性和相对应的`object`中的值来判断
 *
 * **Note:** This method is equivalent to `conforms` when `source` is
 * partially applied.
 * 注意： 这个方法相当于当`source`被部分应用的`conforms`
 *
 * @since 4.14.0
 * @category Lang
 * @param {Object} object The object to inspect.  要检查的对象
 * @param {Object} source The object of property predicates to conform to.  要符合的断言属性组成的对象
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.  若符合则返回true，否则返回false
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 *
 * conformsTo(object, { 'b': function(n) { return n > 1 } })
 * // => true
 *
 * conformsTo(object, { 'b': function(n) { return n > 2 } })
 * // => false
 */
function conformsTo(object, source) {
  return source == null || baseConformsTo(object, source, keys(source)) // source是null也认为符合，其他情况借调baseConformsTo实现
}

export default conformsTo
