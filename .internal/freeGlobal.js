/** Detect free variable `global` from Node.js. 检测Node.js中的自由变量`global`  */
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global

export default freeGlobal
