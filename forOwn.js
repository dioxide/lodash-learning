/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 * 迭代`object`的私有的可枚举的字符串key的属性 并 在每个属性上调用迭代器`iteratee`.
 * 迭代器接受3个参数(value, key, object)，迭代将在迭代器显式的返回false时提前退出.
 *
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代调用的函数
 * @see forEach, forEachRight, forIn, forInRight, forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * forOwn(new Foo, function(value, key) {
 *   console.log(key)
 * })
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  object = Object(object) // 强制转换为对象类型
  Object.keys(object).forEach((key) => iteratee(object[key], key, object))  // 获取keys数组并进行迭代，并将迭代过程控制权委托给iteratee
}

export default forOwn
