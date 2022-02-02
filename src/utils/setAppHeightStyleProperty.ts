function setAppHeightStyleProperty (): void {
  const APP_HEIGHT_STYLE_PROPERTY_NAME = '--app-height'

  document.documentElement.style.setProperty(APP_HEIGHT_STYLE_PROPERTY_NAME, `${window.visualViewport.height}px`)
}

window.visualViewport.addEventListener('resize', setAppHeightStyleProperty)
window.visualViewport.addEventListener('scroll', setAppHeightStyleProperty)

setAppHeightStyleProperty()
