import debounce from './debounce.js'
import isObject from './isObject.js'

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds (or once per browser frame). The throttled function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 * 创建一个节流的函数，每等待一个毫秒最多只能调用一次func。
 * 节流函数带有用于取消延迟的函数调用的cancel方法和用于立即调用它们的flush方法。
 * 指定`options`以指示是否应在等待超时的前沿和/或后沿调用func。
 * 将使用传递给节流函数的最后一个参数来调用func。随后对节流函数的调用将返回上一个func调用的结果。
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 * 注意：如果`leading`和`trailing`选项为true，则仅当在等待超时期间多次调用节流函数时，才在超时的后沿调用func。
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 * 如果wait为0且`leading`为false，则将func调用推迟到下一个tick，类似于setTimeout，其超时值为0。
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 * 如果wait被省略且在带有`requestAnimationFrame`的环境中，func将被推迟到下一帧被绘制时（典型值大概16ms）
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `throttle` and `debounce`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle. 要节流的函数
 * @param {number} [wait=0]
 *  The number of milliseconds to throttle invocations to; if omitted,
 *  `requestAnimationFrame` is used (if available). 要限制调用的时间毫秒数，如果忽略，将使用requestAnimationFrame（如果可用）
 * @param {Object} [options={}] The options object. 选项对象
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.  指定是否在超时的前沿调用，默认true
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.  指定是否在超时的后沿调用，默认true
 * @returns {Function} Returns the new throttled function.  新的节流的函数
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', throttle(updatePosition, 100))
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * const throttled = throttle(renewToken, 300000, { 'trailing': false })
 * jQuery(element).on('click', throttled)
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel)
 */
function throttle(func, wait, options) {
  let leading = true
  let trailing = true

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')  // 非函数类型，不要凑热闹
  }
  if (isObject(options)) {  // 处理选项指定的值
    leading = 'leading' in options ? !!options.leading : leading
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }
  // 关键点： 节流实际是防抖的一种特殊情况。 其在超时时间段的前后沿都调用，且maxWait等于wait
  return debounce(func, wait, {
    leading,
    trailing,
    'maxWait': wait
  })
}

export default throttle
