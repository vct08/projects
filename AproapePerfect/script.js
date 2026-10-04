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

/*Hero*/
/*----------------------------------------------------------------------------------------------------------------*/
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
  });
  
  sr.reveal('.hero-text', {delay:200, origin:'top'});
  sr.reveal('.hero-img', {delay:450, origin:'top'});
  sr.reveal('.icons', {delay:500, origin:'left'});
  /*----------------------------------------------------------------------------------------------------------------*/