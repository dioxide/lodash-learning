import root from './root.js'

/** Detect free variable `exports`. 探测自由变量`exports` */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. 探测自由变量`module` */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. 探测CommonJS的扩展 `module.exports` */
const moduleExports = freeModule && freeModule.exports === freeExports

/** Built-in value references. 内建值的引用 */
const Buffer = moduleExports ? root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined

/**
 * Creates a clone of `buffer`.
 * 创建一个`buffer`的克隆
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.  要克隆的缓冲
 * @param {boolean} [isDeep] Specify a deep clone.  指定是否深度克隆
 * @returns {Buffer} Returns the cloned buffer. 克隆得到的buffer
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice()   // 若是深度拷贝，则直接返回buffer的切片副本
  }
  const length = buffer.length
  const result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length) // 若可以就使用allocUnsafe，否则就创建一个新的buffer容器

  buffer.copy(result) // 将buffer拷贝到result中
  return result
}

export default cloneBuffer
