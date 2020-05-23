/**
 * This function is like `baseFor` except that it iterates over properties
 * in the opposite order.
 * 此方法类似于`baseFor`不同的是它具有相反的迭代顺序
 *
 * @private
 * @param {Object} object The object to iterate over. // 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. // 每次迭代要调用的函数
 * @param {Function} keysFunc The function to get the keys of `object`. // 从`object`获取keys的函数
 * @returns {Object} Returns `object`.  // 迭代后的对象
 */
function baseForRight(object, iteratee, keysFunc) {
  const iterable = Object(object) // 强制转换为Object类型以使得可迭代
  const props = keysFunc(object)  // 通过外部函数获取到Object的keys数组
  let { length } = props  // keys的个数

  while (length--) {  // 倒着迭代keys， 这张做不论对于array还是object都可用
    const key = props[length] // 取出属性值
    if (iteratee(iterable[key], key, iterable) === false) { // 调用外部传入的迭代器，一旦其返回false就退出整个迭代
      break
    }
  }
  return object
}

export default baseForRight
