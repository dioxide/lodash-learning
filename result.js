import castPath from './.internal/castPath.js'
import toKey from './.internal/toKey.js'

/**
 * This method is like `get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 * 类似`get`，不同的是：若解析到的值是一个function，则将绑定其this为它的上层对象并将执行结果视为要取的属性值。
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query. 要查询的对象
 * @param {Array|string} path The path of the property to resolve. 要解析的属性路径
 * @param {*} [defaultValue] The value returned for `undefined` resolved values. 若解析为`undefined`是的默认值
 * @returns {*} Returns the resolved value.   解析得到的值
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] }
 *
 * result(object, 'a[0].b.c1')
 * // => 3
 *
 * result(object, 'a[0].b.c2')
 * // => 4
 *
 * result(object, 'a[0].b.c3', 'default')
 * // => 'default'
 *
 * result(object, 'a[0].b.c3', () => 'default')
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = castPath(path, object) // 展开指定路径

  let index = -1
  let length = path.length

  // Ensure the loop is entered when path is empty. 确保路径为空时进入循环。
  if (!length) {
    length = 1
    object = undefined
  }
  while (++index < length) {  // 正序迭代path
    let value = object == null ? undefined : object[toKey(path[index])] // 取到当前路径处（层级）的值
    if (value === undefined) {  // 重置循环位置
      index = length  // 相当于结束了循环
      value = defaultValue  // value为undefined是取默认值
    }
    object = typeof value === 'function' ? value.call(object) : value // 若当前值为function，则执行之（并绑定this为当前值）
  }
  return object
}

export default result
