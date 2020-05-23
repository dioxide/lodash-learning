import root from './.internal/root.js'

/** Detect free variable `exports` 探测自由变量`exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. 探测自由变量`module` */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. 探测CommonJS的扩展`module.exports` */
const moduleExports = freeModule && freeModule.exports === freeExports

/** Built-in value references. 引用内建的Buffer */
const Buffer = moduleExports ? root.Buffer : undefined

/* Built-in method references for those with the same name as other `lodash` methods. 引用内建的与lodash同名的方法 */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

/**
 * Checks if `value` is a buffer.
 * 检查`value`是否为buffer
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check. 要检查的值
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`. 若为buffer则返回true，否则返回false
 * @example
 *
 * isBuffer(new Buffer(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */
const isBuffer = nativeIsBuffer || (() => false)  // 若无法使用内建buffer判断方法则对外默认都不是buffer

export default isBuffer
