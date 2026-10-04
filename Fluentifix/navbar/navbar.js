/*Navigation Bar*/
/*----------------------------------------------------------------------------------------------------------------*/
let header = document.querySelector('.navigation-bar');
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  header.classList.toggle('bar-colored');
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};
/*----------------------------------------------------------------------------------------------------------------*/