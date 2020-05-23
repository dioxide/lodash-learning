/* global globalThis, self  */
import freeGlobal from './freeGlobal.js'

/** Detect free variable `globalThis` 检测自由变量`globalThis` */
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis

/** Detect free variable `self`. 检测自由变量`self` */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/** Used as a reference to the global object. 用来引用global对象 @todo:没太搞懂 */
const root = freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

export default root
