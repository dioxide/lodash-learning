import baseIsMatch from './baseIsMatch.js'
import getMatchData from './getMatchData.js'
import matchesStrictComparable from './matchesStrictComparable.js'

/**
 * The base implementation of `matches` which doesn't clone `source`.
 * `matches`的基本实现，但其不支持克隆`source`
 *
 * @private
 * @param {Object} source The object of property values to match. 属性值要匹配的对象
 * @returns {Function} Returns the new spec function. 新的规格函数
 */
function baseMatches(source) {
  const matchData = getMatchData(source)  // 获取匹配数据集
  if (matchData.length === 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1])  // 若匹配数据集只有一项且定义了其比较器，则直接使用严格等值比较
  }
  return (object) => object === source || baseIsMatch(object, source, matchData)  // 其他情况 根据object与source是否为同一个对象 或 baysIsMatch的结果来决定
}

export default baseMatches
