(function () {
  var fadeStart = 0
  var fadeTimer = null
  var minFadeTime = 180

  function fadeOut() {
    if (fadeTimer) {
      clearTimeout(fadeTimer)
      fadeTimer = null
    }
    fadeStart = Date.now()
    document.documentElement.classList.add('page-fading')
  }

  function fadeIn() {
    var elapsed = Date.now() - fadeStart
    var delay = Math.max(0, minFadeTime - elapsed)

    fadeTimer = window.setTimeout(function () {
      document.documentElement.classList.remove('page-fading')
      fadeTimer = null
    }, delay)
  }

  document.addEventListener('pjax:send', fadeOut)
  document.addEventListener('pjax:complete', fadeIn)
  document.addEventListener('pjax:error', fadeIn)
  window.addEventListener('pageshow', fadeIn)
})()
