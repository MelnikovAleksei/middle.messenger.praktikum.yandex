function setAppHeightStyleProperty() {
  const APP_HEIGHT_STYLE_PROPERTY_NAME = '--app-height';

  document.documentElement.style.setProperty(APP_HEIGHT_STYLE_PROPERTY_NAME, `${window.innerHeight}px`);
}

window.addEventListener('resize', setAppHeightStyleProperty);

setAppHeightStyleProperty();