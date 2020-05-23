/**
 * Creates an object that inherits from the `prototype` object. If a
 * `properties` object is given, its own enumerable string keyed properties
 * are assigned to the created object.
 * 创建一个从`prototype`对象继承的对象。如果给出了`properties`对象，它的私有的可枚举的字符串keys属性
  *被分配给创建的对象。
 *
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype The object to inherit from. 要继承的对象（的prototype）
 * @param {Object} [properties] The properties to assign to the object. 要分配给对象的属性（通常是属性存储器）
 * @returns {Object} Returns the new object.  新的对象
 * @example
 *
 * function Shape() {
 *   this.x = 0
 *   this.y = 0
 * }
 *
 * function Circle() {
 *   Shape.call(this)
 * }
 *
 * Circle.prototype = create(Shape.prototype, {
 *   'constructor': Circle
 * })
 *
 * const circle = new Circle
 * circle instanceof Circle
 * // => true
 *
 * circle instanceof Shape
 * // => true
 */
function create(prototype, properties) {
  prototype = prototype === null ? null : Object(prototype) // null也可被继承，其他则使用Ojbect强制转换下
  const result = Object.create(prototype) // 借调Object.create来创建新对象
  return properties == null ? result : Object.assign(result, properties)  // 未指定properties则直接返回result，否则借调Object.assign来分配属性
}

export default create
