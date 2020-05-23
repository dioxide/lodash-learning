import isPrototype from './isPrototype.js'

/**
 * Initializes an object clone.
 * 初始化一个对象 克隆/副本
 *
 * @private
 * @param {Object} object The object to clone.  要克隆的对象
 * @returns {Object} Returns the initialized clone. 初始化了的克隆对象
 */
function initCloneObject(object) {
  return (typeof object.constructor === 'function' && !isPrototype(object)) // 若object不是prototype且其构造器是函数时，则：
    ? Object.create(Object.getPrototypeOf(object))  // 则使用object的原型来创建新对象
    : {}  // 否则返回空对象{}
}

export default initCloneObject
