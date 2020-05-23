import copyObject from './copyObject.js'
import getSymbols from './getSymbols.js'

/**
 * Copies own symbols of `source` to `object`.
 * 拷贝`source`的私有的symbols到`object`中
 *
 * @private
 * @param {Object} source The object to copy symbols from.  要拷贝的源对象
 * @param {Object} [object={}] The object to copy symbols to. 要拷贝的目标对象
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object) // 由getSymbols获取源对象的所有symbols，并由copyObject按key拷贝到目标对象
}

export default copySymbols
