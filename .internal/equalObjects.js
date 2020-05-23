import getAllKeys from './getAllKeys.js'

/** Used to compose bitmasks for value comparisons. 用来组合位掩码比较值 */
const COMPARE_PARTIAL_FLAG = 1

/** Used to check objects for own properties. 用来检查属性是否私有 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 * `baseIsEqualDeep`的一个特殊版本，其支持部分（有限？）深度比较
 *
 * @private
 * @param {Object} object The object to compare.  要比较的对象A
 * @param {Object} other The other object to compare. 要比较的另一个对象B
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details. 位掩码标志
 * @param {Function} customizer The function to customize comparisons.  自定义比较器
 * @param {Function} equalFunc The function to determine equivalents of values. 等值断言函数
 * @param {Object} stack Tracks traversed `object` and `other` objects. 跟踪遍历的对象和其他对象
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`. 若两变量相等，则返回true，否则返回false
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG  // 是否为偏好比较
  const objProps = getAllKeys(object) // 对象A的属性名们（数组）
  const objLength = objProps.length  // 对象A属性的个数
  const othProps = getAllKeys(other)  // 对象B的属性名们（数组）
  const othLength = othProps.length // 对象B的属性的个数

  if (objLength != othLength && !isPartial) { // 若对象AB的属性个数不等 且 不是部分比较
    return false  // 则直接返回false认为它们不等
  }
  let key
  let index = objLength
  while (index--) { // 倒序遍历对象A
    key = objProps[index] // 当前项的key属性名
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false  // 若在局部模式下 对象B没有该key，或 在非局部模式下 该key不是对象B私有的key ， 都认为AB不等
    }
  }
  // Assume cyclic values are equal. 假设循环值相等
  const stacked = stack.get(object) // 尝试从stack记录中取出对应内容，第一次肯定是空的，但之后就不一定了
  if (stacked && stack.get(other)) {
    return stacked == other // 若存在stack记录，且有对象AB的记录， 则在这里直接返回记录中它们是否相等
  }
  let result = true // 默认结果为true
  stack.set(object, other)  // 构造栈记录， 形如 [ {A:B},{B:A} ] 的结构
  stack.set(other, object)

  let compared  // 标识是否已经比较过，即是否相等
  let skipCtor = isPartial  // 标识是否忽略构造器，默认于是否部分比较一致
  while (++index < objLength) { // 正序迭代 对象A
    key = objProps[index] // 当前项的key属性名
    const objValue = object[key] // 该key在对象A的值
    const othValue = other[key] // 该key在对象B的值

    if (customizer) { // 若有则应用自定义比较器
      compared = isPartial  // isPartial决定了进行比较的方向，即是A相对于B如何还是B相对于A如何
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack)
    }
    // Recursively compare objects (susceptible to call stack limits).  递归比较对象（可能受调用栈限制的影响）
    if (!(compared === undefined  // 若compared为undefined，即至此还没有结果，则
      ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))  // compared为： 对象AB当前key的值全等 或  被 外部传入的equalFunc认为相等
      : compared // 否则保持compared不动
    )) {
      result = false  // 若此时compared为false，则暂定结果为不等，并推出整个迭代
      break
    }
    skipCtor || (skipCtor = key == 'constructor') // 若不是要部分比较 ，那就准备是否忽略构造器的标志
  }
  if (result && !skipCtor) {  // 若已经有了结果 且 不忽略构造器
    const objCtor = object.constructor
    const othCtor = other.constructor

    // Non `Object` object instances with different constructors are not equal. 具有不同构造函数的非“对象”对象实例 不相等
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor === 'function' && objCtor instanceof objCtor &&
          typeof othCtor === 'function' && othCtor instanceof othCtor)) {
      result = false  // AB构造器不等 且 AB都有constructor 且 （AB的构造器类型都是functions且都是自身的实例）为假
    }
  }
  stack['delete'](object) //清理临时的栈记录
  stack['delete'](other)
  return result
}

export default equalObjects
