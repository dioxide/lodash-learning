import baseDifference from './baseDifference.js'
import baseFlatten from './baseFlatten.js'
import baseUniq from './baseUniq.js'

/**
 * The base implementation of methods like `xor` which accepts an array of
 * arrays to inspect.
 * 类似`xor`异或方法的基本实现，其接受一个嵌套的数组
 *
 * @private
 * @param {Array} arrays The arrays to inspect. 要检查的数组A
 * @param {Function} [iteratee] The iteratee invoked per element. 要应用在每个元素上的迭代器
 * @param {Function} [comparator] The comparator invoked per element. 要应用在每个元素上的比较器
 * @returns {Array} Returns the new array of values.  新的结果数组
 */
function baseXor(arrays, iteratee, comparator) {
  const length = arrays.length
  if (length < 2) { // 数组A的长度小于2
    return length ? baseUniq(arrays[0]) : []  // 若只有一项，就直接借调baseUniq处理并返回，否则，返回空数组
  }
  let index = -1  // 迭代游标开始位置
  const result = new Array(length)  // 创建与数组A长度相同的结果数组

  while (++index < length) {  // 正序迭代数组A
    const array = arrays[index] // 数组A的当前迭代项
    let othIndex = -1 // 内层迭代游标开始位置

    while (++othIndex < length) { // 再次迭代数组A （即是说：对于外层迭代中的某一项来说，数组中的其他各项如何）
      if (othIndex != index) {  // 若不是当前的项（两层迭代交于一项时）
        // 这样做的效果： 相当于将数组的中每一项都分别与其他项分别做差集
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator)  // 借调baseDifference在 结果数组当前位置或外层当前迭代项 与 内层当前迭代项 找差集， 并将结果放入结果数组中
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator) // 最后将结果数组flatten扁平化后在由baseUniq唯一化
}

export default baseXor
