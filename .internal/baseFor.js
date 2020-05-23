/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 * `baseForOwn`的基本实现，其迭代`object`的所有属性，根据`keysFunc`返回每个属性并对这些属性调用`iteratee`.
 * 迭代器函数可以通过显式返回`false`以提前退出迭代
 *
 * @private
 * @param {Object} object The object to iterate over. 要迭代的对象
 * @param {Function} iteratee The function invoked per iteration. 每次迭代要调用的函数
 * @param {Function} keysFunc The function to get the keys of `object`. 用来从`object`中获取keys的函数
 * @returns {Object} Returns `object`.  迭代后的`object`
 */
function baseFor(object, iteratee, keysFunc) {
  const iterable = Object(object) // 强制转换为可迭代对象
  const props = keysFunc(object)  // 获取object的keys
  let { length } = props  // keys的个数
  let index = -1

  while (length--) {  // 迭代object的属性
    const key = props[++index]
    if (iteratee(iterable[key], key, iterable) === false) { // 依据外部传入的迭代器返回结果来决定是否继续迭代
      break
    }
  }
  return object // 返回该对象
}

export default baseFor
