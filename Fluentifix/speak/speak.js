/*Navigation Bar*/
/*----------------------------------------------------------------------------------------------------------------*/
let header = document.querySelector('.navigation-bar');
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  header.classList.toggle('bar-colored');
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
  const links = document.querySelectorAll('.navigation-bar a');
  const icons = document.querySelectorAll('#menu-icon');
  links.forEach(link => {
    link.style.color = header.classList.contains('bar-colored') ? 'white' : '#525252'; // Change colors as needed
  });
  icons.forEach(icon => {
    icon.style.color = header.classList.contains('bar-colored') ? 'white' : '#525252'; // Change colors as needed
  });
};
/*----------------------------------------------------------------------------------------------------------------*/