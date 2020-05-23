/**
 * Creates a clone of `arrayBuffer`.
 * 创建一个`arrayBuffer`的克隆
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.  要克隆的array buffer
 * @returns {ArrayBuffer} Returns the cloned array buffer.  克隆的array buffer
 */
function cloneArrayBuffer(arrayBuffer) {
  const result = new arrayBuffer.constructor(arrayBuffer.byteLength)  // 构建一个与同等尺寸的arrayBuffer
  new Uint8Array(result).set(new Uint8Array(arrayBuffer))  // 通过Uint8Array作为中间容器进行转换
  return result
}

export default cloneArrayBuffer
