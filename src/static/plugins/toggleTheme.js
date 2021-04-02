//  toggleTheme.js
//
//  Docsify plugin that toggles dark/light theme based on click event, local storage history, and OS preferences.

const plugin = (hook, vm) => {

  hook.init(function () {
    function detectThemePreference() {
      //  Default is light
      var theme = 'light';
      //  Check local storage for theme preference, overrides OS preference
      if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') == 'dark') {
          //  Apply dark theme
          toggleTheme();
        }
      } else {
        // check OS preference if no local storage preference
        if (!window.matchMedia) {
          //  Can't detect OS preference method not supported
          return false;
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // OS preference is dark
          // Apply dark theme
          toggleTheme();
        }
      }
    }
    detectThemePreference();
  });


  hook.doneEach(function () {
    console.log('ready')
    document.getElementById("theme-toggle-button").src = "./static/assets/theme/sun.svg";
    document.getElementById('circles-animation').src = './static/assets/theme/circles_dark.svg';
    // Called when the script starts running, only trigger once, no arguments,
  });

  //  Toggle theme on click
  function toggleTheme() {
    //  When theme == dark: show sun, data-theme = dark
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
      document.getElementById("theme-toggle-button").src = "./static/assets/theme/moon.svg";
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light');
      document.getElementById('circles-animation').src = './static/assets/theme/circles.svg';
    } else {
      // document.getElementById("theme-toggle-button").onload = function () {
      //   document.getElementById("theme-toggle-button").src = "./static/assets/theme/sun.svg";
      // }

      // document.getElementById('circles-animation').onload = function () {
      //   document.getElementById('circles-animation').src = './static/assets/theme/circles_dark.svg';
      // }
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark');
    }
  }
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)