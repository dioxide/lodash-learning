/**
 * Copies the values of `source` to `array`.
 * 拷贝源数组`source`的值到`array`中
 *
 * @private
 * @param {Array} source The array to copy values from. 要拷贝的来源
 * @param {Array} [array=[]] The array to copy values to. 要拷贝的去处
 * @returns {Array} Returns `array`.  新的数组副本
 */
function copyArray(source, array) {
  let index = -1
  const length = source.length

  array || (array = new Array(length))  // 便利写法：若array不存在，就新建一个和源数组长度一样的数组
  while (++index < length) {  // 迭代源数组的项
    array[index] = source[index]  // 将源数组某位置的值拷贝到目标数组的相同位置上
  }
  return array  // 返回目标数组
}

export default copyArray
