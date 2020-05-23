/** Used to map characters to HTML entities. 用于映射HTML实体到字符 */
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}

/** Used to match HTML entities and HTML characters. 用来匹配HTML实体和HTML字符 */
const reUnescapedHtml = /[&<>"']/g
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 * 转换`string`中的 "&", "<", ">", '"', and "'"字符到对应的HTML实体
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 * 注意：其他的HTML实体将不被专义。 要转义额外的HTML实体可使用第三方库[_he_]
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 * 尽管“>”字符是为了对称而转义的， 类似">" and "/"的字符在HTML不需要转义且没有特殊意义除非它们是标签或未引用属性值的一部分。
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 * 使用HTML时，您应该始终[quote attribute values]以减少XSS向量
 *
 * @since 0.1.0
 * @category String
 * @param {string} [string=''] The string to escape.  要专义的字符串
 * @returns {string} Returns the escaped string.  转义的字符串
 * @see escapeRegExp, unescape
 * @example
 *
 * escape('fred, barney, & pebbles')
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  return (string && reHasUnescapedHtml.test(string))  // 若string存在且含有反专义的实体字符，则：
    ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])  // 将使用正则匹配到转义实体字符 ，通过reUnescapedHtml映射表再还原回来
    : (string || '') // 否则返回原字符串（若其为假值，则返回的是空字符串）
}

export default escape
