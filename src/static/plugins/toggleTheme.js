//  toggleTheme.js
//
//  Toggles dark/light theme based on click event, local storage history, and OS preferences.

//  Determines if the user has a set theme
function detectThemePreference() {
  //  Default is light
  var theme = 'light';
  //  Check local storage and OS preference Local storage is used to override OS theme settings
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') == 'dark') {
      theme = 'dark';
    }
  } else if (!window.matchMedia) {
    //  matchMedia method not supported
    return false;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //  OS theme setting detected as dark
    theme = 'dark';
  }
}
detectThemePreference();

//  Toggle theme on click
function toggleTheme() {
  if (document.documentElement.getAttribute('data-theme') == 'dark') {
    document.getElementById("theme-toggle-button").src = "./static/assets/toggle_theme/moon.svg";
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light');
    document.getElementById('circles-animation').src = './static/assets/toggle_theme/circles.svg';
  } else {
    document.getElementById("theme-toggle-button").src = "./static/assets/toggle_theme/sun.svg";
    document.getElementById('circles-animation').src = './static/assets/toggle_theme/circles_dark.svg';
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark');
  }
}