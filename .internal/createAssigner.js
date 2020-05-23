import isIterateeCall from './isIterateeCall.js'

/**
 * Creates a function like `assign`.
 * 创建一个类似于`assign`的函数（即将sources的内容按某种模式设置分配在object中）
 * 通过此函数可创建一种固定分配模式，而可随时接受不同数据源的函数。  再此创建又可使用另外一种不同的模式
 * 此为模版方法： 组合一系列方法按既定模式执行
 * @todo: 未清楚明白其用法
 *
 * @private
 * @param {Function} assigner The function to assign values.  分配值的函数
 * @returns {Function} Returns the new assigner function. 新的分配器函数
 */
function createAssigner(assigner) {
  return (object, ...sources) => {
    let index = -1
    let length = sources.length // 源对象长度
    let customizer = length > 1 ? sources[length - 1] : undefined // 取最后一个参数为customizer，默认为未定义
    const guard = length > 2 ? sources[2] : undefined // 取第3个参数为guard，默认为未定义

    customizer = (assigner.length > 3 && typeof customizer === 'function')  // 猜测： 决定使用哪个customizer
      ? (length--, customizer)  // 若此时有了customizer，则将source.length - 1
      : undefined

    if (guard && isIterateeCall(sources[0], sources[1], guard)) { // 从这3个值判断是否来自同一个迭代
      customizer = length < 3 ? undefined : customizer
      length = 1
    }
    object = Object(object) // 强制转换，使其可迭代
    while (++index < length) {  // 正序迭代sources
      const source = sources[index] // 要分配的当前项
      if (source) {
        assigner(object, source, index, customizer) // 进行值分配
      }
    }
    return object
  }
}

export default createAssigner
