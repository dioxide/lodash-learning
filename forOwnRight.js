/**
 * This method is like `forOwn` except that it iterates over properties of
 * `object` in the opposite order.
 * 类似于`forOwn`但其从相反的顺序迭代`object`的属性
 *
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代调用的函数
 * @returns {Object} Returns `object`. 迭代后的对象
 * @see forEach, forEachRight, forIn, forInRight, forOwn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * forOwnRight(new Foo, function(value, key) {
 *   console.log(key)
 * })
 * // => Logs 'b' then 'a' assuming `forOwn` logs 'a' then 'b'.
 */
function forOwnRight(object, iteratee) {
  if (object == null) {
    return  // 对于空值，直接返回
  }
  const props = Object.keys(object) // 获取要迭代的keys
  let length = props.length
  while (length--) {  // 倒序迭代 （从右往左）
    iteratee(object[props[length]], iteratee, object) // 将迭代过程控制权委托给iteratee
  }
}

export default forOwnRight
