import copyArray from './.internal/copyArray.js'

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 * 创建一个乱序的数组，使用Fisher-Yates shuffle算法版本
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to shuffle. 要乱序的数组
 * @returns {Array} Returns the new shuffled array. 打乱的数组
 * @example
 *
 * shuffle([1, 2, 3, 4])
 * // => [4, 1, 3, 2]
 */
function shuffle(array) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return [] // 空数组直接反弹
  }
  let index = -1
  const lastIndex = length - 1  // 数组末位
  const result = copyArray(array) // 原数组的副本
  while (++index < length) {  // 正序迭代结果数组
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))  // 搞出一个随机索引（在未迭代索引部分取），之后再加回已迭代的索引位置
    const value = result[rand]  // 取出一个随机元素
    result[rand] = result[index]  // 在结果数组（原数组的副本）的同样随机位置（即取值的位置） '换掉'原值，改为当前迭代索引位置对应的值，这样结果重复的概率很小
    result[index] = value // 而当前迭代的位置 变为 随机取到的值， 最终相当于'洗牌'的效果， 即*每次都将当前项与未迭代部分的随机项互换值*
  }
  return result // 返回已乱序数组
}

export default shuffle
