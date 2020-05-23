import copyObject from './copyObject.js'
import getSymbolsIn from './getSymbolsIn.js'

/**
 * Copies own and inherited symbols of `source` to `object`.
 * 拷贝`source`对象的私有的和继承的symbols到`object`
 *
 * @private
 * @param {Object} source The object to copy symbols from. 要拷贝的源对象
 * @param {Object} [object={}] The object to copy symbols to. 要拷贝的目标对象
 * @returns {Object} Returns `object`.  拷贝后的目标对象
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object) // 由getSymbolsIn获取所有symbol，再由copyObject按照这些symbols为key逐个拷贝到目标对象
}

export default copySymbolsIn
