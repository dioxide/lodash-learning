/** Used to map HTML entities to characters. 用于映射HTML实体到字符 */
const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
}

/** Used to match HTML entities and HTML characters. 用来匹配HTML实体和HTML字符 */
const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g
const reHasEscapedHtml = RegExp(reEscapedHtml.source)

/**
 * The inverse of `escape`this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;` and `&#39;` in `string` to
 * their corresponding characters.
 * 与`escape`相反，此方法转换`string`中的HTML实体`&amp;`, `&lt;`, `&gt;`, `&quot;` and `&#39;`到对应的字符
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 * 注意：其他的HTML实体将不被反专义。 要转义额外的HTML实体可使用第三方库[_he_]
 *
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.  要反转义的字符串
 * @returns {string} Returns the unescaped string.  反转义的字符串
 * @see escape, escapeRegExp
 * @example
 *
 * unescape('fred, barney, &amp; pebbles')
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  return (string && reHasEscapedHtml.test(string))  // 若string存在且含有专义的实体字符，则：
    ? string.replace(reEscapedHtml, (entity) => (htmlUnescapes[entity] || "'") )  // 将使用正则匹配到已转义实体字符 ，通过htmlUnescapes映射表再还原回来
    : (string || '')  // 否则返回原字符串（若其为假值，则返回的是空字符串）
}

export default unescape
