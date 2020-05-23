import isObject from './isObject.js'
import root from './.internal/root.js'

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn. The debounced function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the
 * result of the last `func` invocation.
 * 创建一个防抖函数，该函数将调用func推迟到自上次调用防抖函数以来经过的等待毫秒数`wait`之后。
 * 防抖函数带有用来取消延迟的函数调用的cancel方法和用于立即调用它们的flush方法。
 * 提供`option`以指示是否应在等待超时的前沿和/或后沿调用func。
 * 将使用提供给防抖函数的最后一个参数来调用func。随后对防抖函数的调用将返回上一次func调用的结果。
 * @todo: 需要画个时间线理一理
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 * 注意： 如果`leading`和`trailing`选项为true，仅当在等待超时期间多次调用防抖函数时，才在超时的后沿调用func。
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 * 如果`wait`是0且`leading`是false，func调用将被推迟到下一个tick，类似于`setTimeout`设为0
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 * 如果wait被省略且在带有`requestAnimationFrame`的环境中，func将被推迟到下一帧被绘制时（典型值大概16ms）
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 * David Corbacho's article的文档了解关于防抖和节流的区别
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce. 要防抖的函数
 * @param {number} [wait=0]
 *  The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 *  used (if available).  要延迟的毫秒数，如果忽略，将使用requestAnimationFrame（如果可用）
 * @param {Object} [options={}] The options object. 选项对象
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.  指定是否在超时的前沿调用，默认false
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked. 在`func`在调用之前允许被延迟的最大时间
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout. 指定是否在超时的后沿调用，默认true
 * @returns {Function} Returns the new debounced function.  新的防抖的函数
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', debounce(calculateLayout, 150))
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }))
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = debounce(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * jQuery(source).on('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */
function debounce(func, wait, options) {
  let lastArgs, // 猜测，最后一次调用时被传递的arguments
    lastThis, // 最后一次调用时被绑定的this
    maxWait,  // 要推迟的毫秒数
    result, // func的执行结果
    timerId,  // 定时器id
    lastCallTime  // 最后一次调用时的时间

  let lastInvokeTime = 0  // 最后一次调起时的时间 初始为0
  let leading = false // 是否在延时时间段的前沿调用， 默认为false
  let maxing = false  // 否否指定了maxWait， 默认为false
  let trailing = true // 是否在延时时间段的后沿调用， 默认为true

  // Bypass `requestAnimationFrame` by explicitly setting `wait=0`. 通过显式设置wait = 0来绕过requestAnimationFrame。
  const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function')

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')  // func不是函数，不要凑热闹
  }
  wait = +wait || 0 // 延迟时间强制转换为数组，或默认为0
  if (isObject(options)) {  // 处理options中的指定值
    leading = !!options.leading // 是否在延时时间段的前沿调用
    maxing = 'maxWait' in options // func被允许推迟调用的最长时间
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait  // 若指定了options.maxWait, 则最终可推迟时间为它与wait直接的最大值
    trailing = 'trailing' in options ? !!options.trailing : trailing  // 是否在延时时间段的后沿调用
  }

  // 实际调用func
  function invokeFunc(time) {
    const args = lastArgs // 每次实际调用时，都取上一次调用时传递的this和arguments
    const thisArg = lastThis

    lastArgs = lastThis = undefined // 清空对上一次的参数和this的记录引用，因为当次执行已经用过了
    lastInvokeTime = time // 更新最后实际调用时间
    result = func.apply(thisArg, args)  // 获取func的执行结果，记录在result中
    return result // 并返回result
  }

  // 开始定时器，设置定时执行
  function startTimer(pendingFunc, wait) {
    if (useRAF) { // 使用requestAnimationFrame的情况
      root.cancelAnimationFrame(timerId)
      return root.requestAnimationFrame(pendingFunc)  // 下一帧允许指定函数pendingFunc
    }
    return setTimeout(pendingFunc, wait)  // 若不支持rAF，则使用setTimout实现一致功能
  }

  // 取消定时器
  function cancelTimer(id) {
    if (useRAF) {
      return root.cancelAnimationFrame(id)  // 若支持rAF，则使用专有方法取消定时器
    }
    clearTimeout(id)  // 否则使用clearTimeout实现
  }

  // 延时段前沿 要做的事
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time // 更新最后调用时间
    // Start the timer for the trailing edge.
    timerId = startTimer(timerExpired, wait)  // 设置一个wait后执行timerExpired的定时器
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result  // 若要求在时间段前沿调用，则立即调用func，否则返回上次的结果result
  }

  // 计算剩余的仍需等待时间
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime // 自上次call时走过的时间
    const timeSinceLastInvoke = time - lastInvokeTime // 自上次invoke时走过的时间
    const timeWaiting = wait - timeSinceLastCall  // 仍要等待的时间 为期望等待的时间 - 自上次call时走过的时间

    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)  // 若定义了maxWait，则仍需等待时间需取 （上述计算结果 与 自上次invoke时到最大允许推迟时间）间的最小值
      : timeWaiting
  }

  // 判断当前是否应该调用func
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime // 自上次call时走过的时间
    const timeSinceLastInvoke = time - lastInvokeTime // 自上次invoke时走过的时间

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
  }

  // 定时器到期时，执行
  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time) // 若当前时刻，应该调用func，则就在等待时间段前沿调用它
    }
    // Restart the timer.
    timerId = startTimer(timerExpired, remainingWait(time)) // 通过重新计算仍需等待时间，并设置一个新的定时器， 到期后仍执行本函数，如此循环。  其中timerID为闭包变量
  }

  // 延时段后沿 要做的事
  function trailingEdge(time) {
    timerId = undefined // 清空定时器引用

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time) // 仅在trailing模式开始且lastArgs存在时调用，意为防抖函数已经被至少调用了1次
    }
    lastArgs = lastThis = undefined // 清空最后一次调用的参数和this绑定的记录
    return result // 返回调用结果，有可能返回的是上次调用的结果
  }

  // 取消函数防抖功能
  function cancel() {
    if (timerId !== undefined) {
      cancelTimer(timerId)  // 若存在定时器则取消定时器
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined  // 清空所有状态记录
  }

  // 刷新执行
  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now())  // 若此时没有定时器，则返回之前的执行结果，否则在时间段末位执行func
  }

  // 判断当前是否在延时等待中...
  function pending() {
    return timerId !== undefined
  }

  // 要闭包返回 暴露在外的函数,即每次外部call的函数体
  function debounced(...args) {
    const time = Date.now() // 每次外部call的时候，都要获取当前时刻的时间
    const isInvoking = shouldInvoke(time) // 当前是否应该调用func

    lastArgs = args // 记录当次call的arguments
    lastThis = this // 记录当次call的this所指
    lastCallTime = time // 记录当次调用的时间，是call时间，并非func被调用的实际invoke时间

    if (isInvoking) { // 若当前应该被调用
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)  // 若当次调用还没有在运行的计时器，则执行延时段前沿的事情
      }
      if (maxing) { // 若指定了maxWait
        // Handle invocations in a tight loop. 在紧密循环中处理调用
        timerId = startTimer(timerExpired, wait)  // 设置定时器在wait后执行
        return invokeFunc(lastCallTime) // 并立即调用func
      }
    }
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait)  // 设置定时器在wait后执行
    }
    return result
  }
  debounced.cancel = cancel // 赋予防抖函数可取消、刷新、查看状态的方法
  debounced.flush = flush
  debounced.pending = pending
  return debounced  // 返回闭包函数，即在引用处实际执行的函数体
}

export default debounce
