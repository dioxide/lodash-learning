import map from '../map.js'
import baseIndexOf from './baseIndexOf.js'
import baseIndexOfWith from './baseIndexOfWith.js'
import copyArray from './copyArray.js'

/**
 * The base implementation of `pullAllBy`.
 * `pullAllBy`的基本实现
 *
 * @private
 * @param {Array} array The array to modify.  要修改的数组A
 * @param {Array} values The values to remove.  要抽掉（去除）的值组成的数组B
 * @param {Function} [iteratee] The iteratee invoked per element. 要应用在每个元素上的迭代器
 * @param {Function} [comparator] The comparator invoked per element. 要应用在每个元素上的比较器
 * @returns {Array} Returns `array`.  处理过的数组
 */
function basePullAll(array, values, iteratee, comparator) {
  const indexOf = comparator ? baseIndexOfWith : baseIndexOf  // 根据是否传入了比较器决定采用那种 "索引查找方法"
  const length = values.length  // 要抽掉的值的个数

  let index = -1
  let seen = array  // 迭代记录，默认是要修改的数组A

  if (array === values) { // 若要修改的数组A 全等于（就是同一个） 要抽掉的值的数组B
    values = copyArray(values)  // 则将抽掉的值B自我覆盖一次？ 实际目的是创建一个副本（具有不同的引用抵制）
  }
  if (iteratee) {
    seen = map(array, (value) => iteratee(value)) // 若定义了迭代器，在对要修改的数组A做一次map映射，seen被重新赋值为A经过映射的新数组
  }
  while (++index < length) {  // 正序迭代 要抽掉的值B的项
    let fromIndex = 0 // 内部迭代开始位置
    const value = values[index] // 去除要抽掉的值的其中一项
    const computed = iteratee ? iteratee(value) : value // 若定义了迭代器，则对抽掉值也应用下

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) { // 在要修改的数组A中迭代查找：是否存在 抽掉数组B的某一项（当前迭代项）。 这样一来：只要在A中能找到就一直迭代直到找不到了（返回-1），此时fromIndex为false进而结束迭代
      if (seen !== array) { // 这个判断，相当于确认外部有没有传入iteratee，即seen是否是被map映射过的数组，也就是seen和array是否是同一个数组， 进而以决定要去操作哪个数组
        seen.splice(fromIndex, 1) // 如seen被重新映射过，那也需要对其进行同样的'删除'操作
      }
      array.splice(fromIndex, 1)  // array是要被修改的数组，直接'删除' fromIndex位置的项即可
    }
  }
  return array  // 返回处理过的数组
}

export default basePullAll
