import cloneArrayBuffer from './cloneArrayBuffer.js'

/**
 * Creates a clone of `typedArray`.
 * 创建一个`typedArray`的克隆
 *
 * @private
 * @param {Object} typedArray The typed array to clone. 要克隆的类型数组
 * @param {boolean} [isDeep] Specify a deep clone.  指定是否进行深度克隆
 * @returns {Object} Returns the cloned typed array.  克隆得到的类型数组
 */
function cloneTypedArray(typedArray, isDeep) {
  const buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer // 取出缓冲区数据： 若需要深度克隆，则借调cloneArrayBuffer来实现，否则直接取出buffer
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length) // 使用类型数组的构造器重新构造一个新的
}

export default cloneTypedArray
