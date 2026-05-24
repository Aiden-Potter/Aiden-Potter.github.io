(function () {
  function fadeOut() {
    document.documentElement.classList.add('page-fading')
  }

  function fadeIn() {
    window.requestAnimationFrame(function () {
      document.documentElement.classList.remove('page-fading')
    })
  }

  document.addEventListener('pjax:send', fadeOut)
  document.addEventListener('pjax:complete', fadeIn)
  document.addEventListener('pjax:error', fadeIn)
  window.addEventListener('pageshow', fadeIn)
})()
