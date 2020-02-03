const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', AnimBurger);

function AnimBurger() {
  burger.classList.contains('is-active') ? burger.classList.remove('is-active') : burger.classList.add('is-active');
  menu.classList.contains('is-active') ? menu.classList.remove('is-active') : menu.classList.add('is-active');
}