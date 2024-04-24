// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const body = document.querySelector('body');


function toggleDarkMode() {
  body.classList.toggle("dark");
}
themeSwitcher.addEventListener('click', toggleDarkMode);
