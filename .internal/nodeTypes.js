import freeGlobal from './freeGlobal.js'

/** Detect free variable `exports`. 探测自由变量`exports` */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. 探测自由变量`module` */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. 探测CommonJS 扩展 `module.exports` */
const moduleExports = freeModule && freeModule.exports === freeExports

/** Detect free variable `process` from Node.js. 探测Node.js的自由变量`process` */
const freeProcess = moduleExports && freeGlobal.process

/** Used to access faster Node.js helpers. 用来快速访问Node.js的助手方法 */
const nodeTypes = ((() => {
  try {
    /* Detect public `util.types` helpers for Node.js v10+. 探测Node.js v10+的`util.types`助手方法 */
    /* Node.js deprecation code: DEP0103. */
    const typesHelper = freeModule && freeModule.require && freeModule.require('util').types
    return typesHelper
      ? typesHelper
      /* Legacy process.binding('util') for Node.js earlier than v10. v10版本之前的助手方法绑定 */
      : freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (e) {}
})())

export default nodeTypes
