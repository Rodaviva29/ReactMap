// src/pages/map/dialogs/LaunchApp.js
export function launchApp() {
  if (isIOS()) {
    const url = "pokemongo://";
    window.location.replace(url);
  } else if (isAndroid()) {
    const packageName = "com.nianticlabs.pokemongo";
    const packageHost = "pokemongolive.com";
    const packageScheme = "pokemongo";
    const url = "intent://" + packageHost + "#Intent;scheme=" + packageScheme + ";package=" + packageName + ";end";
    window.location.replace(url);
  } else {
    document.querySelector('button').classList.add('unsupported');
    alert("This is only supported on mobile devices.");
  }
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function isAndroid() {
  return /Android/.test(navigator.userAgent);
}
