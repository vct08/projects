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

/*Description*/
/*----------------------------------------------------------------------------------------------------------------*/
$(document).ready(function(){
  $("#toggleBtn").click(function(){
      $(".description").slideToggle();
  });
});

/*----------------------------------------------------------------------------------------------------------------*/

/*Buttons*/
/*----------------------------------------------------------------------------------------------------------------*/
arrow.style.transform = "rotate(180deg)";
function toggleText(textId, btnId, button) {
    var text = document.getElementById(textId);
    var btn = document.getElementById(btnId);
    var arrow = button.querySelector(".arrow");
    
    if (text.classList.contains("hidden")) {
        text.classList.remove("hidden");
        arrow.style.transform = "rotate(90deg)";
    }
    else{
        text.classList.add("hidden");
        text.classList.add("hidden");
        arrow.style.transform = "rotate(0deg)";
    }
    if (btn.classList.contains("hidden")) {
        btn.classList.remove("hidden");
        arrow.style.transform = "rotate(90deg)";
    }
    else{
        btn.classList.add("hidden");
        btn.classList.add("hidden");
        arrow.style.transform = "rotate(0deg)";
    }
}
/*----------------------------------------------------------------------------------------------------------------*/
