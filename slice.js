/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 * 创建一个数组切片，从`start`到`end`但不包括`end`
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 * 这个方法用来替代默认Array#slide方法以确保返回 密集数组
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice. 要切片的数组
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end. 切片的开始位置（默认为0），负值被视为从数组末位开始的偏移值
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end. 切片的结束位置（默认为数组的长度），负值被视为从数组末位开始的偏移值
 * @returns {Array} Returns the slice of `array`. 数组的切片
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */
function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {  // 若原数组为空，则直接返回空数组
    return []
  }
  start = start == null ? 0 : start // 切片开始位置默认为0
  end = end === undefined ? length : end  //切片结束位置默认为数组的长度

  if (start < 0) {  // 若切片开始位置为负值，处理从数组末位开始偏移的逻辑
    start = -start > length ? 0 : (length + start)  // 偏移的绝对值若超过数组长度被视为从0开始，否则加上数组长度得到从0开始的偏移值
  }
  end = end > length ? length : end // 切片结束位置不得大于数组长度
  if (end < 0) {  // 若切片结束位置为负，处理从数组末位开始偏移的逻辑
    end += length // 加上数组长度得到从0开始的偏移值
  }
  length = start > end ? 0 : ((end - start) >>> 0)  // 得到要切下的数组的长度，此时的start、end都是从0开始的偏移值. 若开始位置大于结束位置则视为要切取0长度，否则取它们的差值
  start >>>= 0  // 强制转换为数字

  let index = -1  // 从-1位置开始迭代
  const result = new Array(length)  // 创建一个新数组作为返回值
  while (++index < length) {  // 迭代到要截取的长度
    result[index] = array[index + start]  // 每次迭代截取一项（计算出的切片开始位置+迭代索引）
  }
  return result // 返回新数组作为切片
}

export default slice
