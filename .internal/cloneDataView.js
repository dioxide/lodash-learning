import cloneArrayBuffer from './cloneArrayBuffer.js'

/**
 * Creates a clone of `dataView`.
 * 创建一个`dataView`的克隆
 *
 * @private
 * @param {Object} dataView The data view to clone. 要克隆的dataview数据试图
 * @param {boolean} [isDeep] Specify a deep clone.  指定是否进行深度克隆
 * @returns {Object} Returns the cloned data view.  克隆得到的dataview
 */
function cloneDataView(dataView, isDeep) {
  const buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer // 取出缓冲区数据： 若需要深度克隆，则借调cloneArrayBuffer来实现，否则直接取出buffer
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength) // 使用dataview的构造器重新构造一个新的
}

export default cloneDataView
