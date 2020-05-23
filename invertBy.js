/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * This method is like `invert` except that the inverted object is generated
 * from the results of running each element of `object` thru `iteratee`. The
 * corresponding inverted value of each inverted key is an array of keys
 * responsible for generating the inverted value. The iteratee is invoked
 * with one argument: (value).
 * 类似于`invert`但其 通过运行在`object`的每个元素上的迭代器函数`iteratee`的结果 来产生反转对象。 （该迭代器将决定当前value经过迭代器应用后，将放在结果的什么key中）
 * 其中对应的每个反转key的每个反转value是由一些负责生成那个同样的反转值的keys组成的数组。
 * 迭代器接受1个参数：（value）
 *
 * @since 4.1.0
 * @category Object
 * @param {Object} object The object to invert. 要反转的对象
 * @param {Function} iteratee The iteratee invoked per element. 应用在每个元素上的迭代者
 * @returns {Object} Returns the new inverted object. 新的反转过的对象
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 1 }
 *
 * invertBy(object, value => `group${value}`)
 * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
 */
function invertBy(object, iteratee) {
  const result = {} // 结果默认为空对象
  Object.keys(object).forEach((key) => {  // 迭代object
    const value = iteratee(object[key]) // 通过应用迭代者iteratee，得到新新的属性值
    // 原来的value视为key， 原来的key当作value
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key) // 若result中已经存在了该key（私有的），就追加到其中（最终相当于按key进行分组的效果）
    } else {
      result[value] = [key] // 否则写入新的key项，属性值要包裹一层数组以供后续追加
    }
  })
  return result
}

export default invertBy
