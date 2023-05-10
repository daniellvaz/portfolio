const down = document.getElementById('down')
const menu = document.getElementById('menu')
const hamburger = document.querySelector('.hamburguer')

hamburger.addEventListener('click', () => {
  down.classList.toggle('open');
  menu.classList.toggle('menu__open');
})