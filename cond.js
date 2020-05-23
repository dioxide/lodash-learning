import map from './map.js'

/**
 * Creates a function that iterates over `pairs` and invokes the corresponding
 * function of the first predicate to return truthy. The predicate-function
 * pairs are invoked with the `this` binding and arguments of the created
 * function.
 * 创建一个函数，其迭代`pairs`并当断言函数（第一个）返回为真值时，调用相对应的函数（第二项）。
 * 断言函数对儿被调用时具有`this`绑定和新建函数的arguments
 *
 * @since 4.0.0
 * @category Util
 * @param {Array} pairs The predicate-function pairs. 断言函数对而而
 * @returns {Function} Returns the new composite function.  新的组合的函数
 * @example
 *
 * const func = cond([
 *   [matches({ 'a': 1 }),         () => 'matches A'],
 *   [conforms({ 'b': isNumber }), () => 'matches B'],
 *   [() => true,                  () => 'no match']
 * ])
 *
 * func({ 'a': 1, 'b': 2 })
 * // => 'matches A'
 *
 * func({ 'a': 0, 'b': 1 })
 * // => 'matches B'
 *
 * func({ 'a': '1', 'b': '2' })
 * // => 'no match'
 */
function cond(pairs) {
  const length = pairs == null ? 0 : pairs.length // 断言函数对儿的长度

  pairs = !length ? [] : map(pairs, (pair) => { // 重新映射paris
    if (typeof pair[1] !== 'function') {
      throw new TypeError('Expected a function')  // 若第2项不为函数，则抛出异常
    }
    return [pair[0], pair[1]] // 否则返回由该对儿组成的项
  })

  return (...args) => {
    for (const pair of pairs) { // 迭代闭包中的pairs
      if (pair[0].apply(this, args)) {  // 若某对儿的断言函数（第一项）返回真值，则：
        return pair[1].apply(this, args)  // 执行该对儿的第二项函数。  注：两侧函数调用均绑定了this，并传递了所有arguments
      }
    }
  }
}

export default cond
