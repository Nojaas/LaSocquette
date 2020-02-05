const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', AnimBurger);

function AnimBurger() {
  burger.classList.contains('is-active') ? burger.classList.remove('is-active') : burger.classList.add('is-active');
  nav.classList.contains('is-active') ? nav.classList.remove('is-active') : nav.classList.add('is-active');
}