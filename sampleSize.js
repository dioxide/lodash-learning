import copyArray from './.internal/copyArray.js'
import slice from './slice.js'

/**
 * Gets `n` random elements at unique keys from `array` up to the
 * size of `array`.
 * 从`array`中唯一地获取`n`个随机元素（保证key不等）,n不得超过数组大小
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to sample.  要取样的数组
 * @param {number} [n=1] The number of elements to sample.  要获取的样本个数
 * @returns {Array} Returns the random elements.  随机元素
 * @example
 *
 * sampleSize([1, 2, 3], 2)
 * // => [3, 1]
 *
 * sampleSize([1, 2, 3], 4)
 * // => [2, 3, 1]
 */
function sampleSize(array, n) {
  n = n == null ? 1 : n // n默认为1
  const length = array == null ? 0 : array.length
  if (!length || n < 1) {
    return [] // 空数组反弹回去
  }
  n = n > length ? length : n // n最大为数组长度
  let index = -1
  const lastIndex = length - 1  // 数组末位
  const result = copyArray(array) // 原数组的副本
  while (++index < n) { // 正序迭代结果数组，次数为要取的元素个数
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))  // 搞出一个随机索引（在未迭代索引部分取），之后再加回已迭代的索引位置
    const value = result[rand]  // 取出一个随机元素
    result[rand] = result[index]  // 在结果数组（原数组的副本）的同样随机位置（即取值的位置） '换掉'原值，改为当前迭代索引位置对应的值，这样结果重复的概率很小
    result[index] = value // 而当前迭代的位置 变为 随机取到的值， 最终相当于'洗牌'的效果， 即*每次都将当前项与未迭代部分的随机项互换值*
  }
  return slice(result, 0, n)  // 迭代一遍后，切除前n个元素作为结果返回
}

export default sampleSize
