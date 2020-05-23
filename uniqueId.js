/** Used to generate unique IDs. 用来存储所有ID的容器 */
const idCounter = {}

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 * 生成一个唯一ID， 若指定了`prefix`，ID将被加上前缀
 * 所谓"唯一"，只在本次JavaScript运行的生命周期中唯一
 *
 * @since 0.1.0
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with. ID的前缀
 * @returns {string} Returns the unique ID. 唯一ID
 * @see random
 * @example
 *
 * uniqueId('contact_')
 * // => 'contact_104'
 *
 * uniqueId()
 * // => '105'
 */
function uniqueId(prefix='$lodash$') {
  if (!idCounter[prefix]) { // 使用prefix为id进行分组，也就是可以有多组ID互补影响
    idCounter[prefix] = 0 // ID初始化
  }

  const id =++idCounter[prefix] // ID自增1
  if (prefix === '$lodash$') {
    return `${id}`  // 对外不暴露默认的前缀符
  }

  return `${prefix}${id}` // 拼合ID
}

export default uniqueId
