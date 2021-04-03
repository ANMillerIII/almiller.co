//  toggleTheme.js
//
//  Docsify plugin that toggles dark/light theme based on click event, local storage history, and OS preferences.

const plugin = (hook, vm) => {

  hook.doneEach(function () {

    if (document.getElementById('theme-toggle-button')) {
      document.getElementById('theme-toggle-button').remove();
    }

    var el = document.createElement('input');
    document.getElementById
    document.getElementsByClassName('sidebar')[0].appendChild(el)

    el.setAttribute('id', 'theme-toggle-button');
    el.setAttribute('type', 'image');
    el.setAttribute('src', '/static/assets/theme/moon.svg');
    console.log(el)
    document.getElementById("theme-toggle-button").addEventListener("click", function () {
      toggleTheme();
    });

    // console.log('plugins:', window.$docsify.plugins[0])
    function detectThemePreference() {
      var theme = 'light';
      //  Check local storage for theme preference, overrides OS preference
      if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') == 'dark') {
          setDarkTheme();
        }
      } else {
        // Check OS preference if no local storage preference
        if (!window.matchMedia) {
          //  Can't detect OS preference method not supported
          return false;
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // OS preference is dark
          setDarkTheme();
        }
      }
    }

    //  Toggle theme on click theme toggle
    function toggleTheme() {
      console.log("toggle")
      if (document.documentElement.getAttribute('data-theme') == 'dark') {
        console.log('dark')
        setLightTheme();
      } else {
        console.log('light')
        setDarkTheme();
      }
    }
    function setDarkTheme() {
      if (document.getElementById("theme-toggle-button")) {
        document.getElementById("theme-toggle-button").src = "./static/assets/theme/sun.svg";
      }
      document.getElementById('circles-animation').src = './static/assets/theme/circles_dark.svg';
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark');
    }

    function setLightTheme() {
      if (document.getElementById("theme-toggle-button")) {
        document.getElementById("theme-toggle-button").src = "./static/assets/theme/moon.svg";
      }
      document.getElementById('circles-animation').src = './static/assets/theme/circles.svg';
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light');
    }
    detectThemePreference();

  })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)