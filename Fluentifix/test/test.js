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

/*Buttons*/
/*----------------------------------------------------------------------------------------------------------------*/
// Get the buttons and the definition containers
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const def1 = document.getElementById('def1');
const def2 = document.getElementById('def2');
const def3 = document.getElementById('def3');
const def4 = document.getElementById('def4');
const def5 = document.getElementById('def5');
const def6 = document.getElementById('def6');
// Function to show the definitions for Button 1
button1.addEventListener('click', () => {
    def1.classList.remove('hidden');
    def2.classList.add('hidden');
    def3.classList.add('hidden');
    def4.classList.add('hidden');
    def5.classList.add('hidden');
    def6.classList.add('hidden');
});
// Function to show the definitions for Button 2
button2.addEventListener('click', () => {
    def2.classList.remove('hidden');
    def1.classList.add('hidden');
    def3.classList.add('hidden');
    def4.classList.add('hidden');
    def5.classList.add('hidden');
    def6.classList.add('hidden');
});

// Function to show the definitions for Button 3
button3.addEventListener('click', () => {
    def3.classList.remove('hidden');
    def1.classList.add('hidden');
    def2.classList.add('hidden');
    def4.classList.add('hidden');
    def5.classList.add('hidden');
    def6.classList.add('hidden');
});
// Function to show the definitions for Button 4
button4.addEventListener('click', () => {
    def4.classList.remove('hidden');
    def1.classList.add('hidden');
    def2.classList.add('hidden');
    def3.classList.add('hidden');
    def5.classList.add('hidden');
    def6.classList.add('hidden');
});
// Function to show the definitions for Button 5
button5.addEventListener('click', () => {
    def5.classList.remove('hidden');
    def1.classList.add('hidden');
    def2.classList.add('hidden');
    def3.classList.add('hidden');
    def4.classList.add('hidden');
    def6.classList.add('hidden');
});
// Function to show the definitions for Button 6
button6.addEventListener('click', () => {
    def6.classList.remove('hidden');
    def1.classList.add('hidden');
    def2.classList.add('hidden');
    def3.classList.add('hidden');
    def4.classList.add('hidden');
    def5.classList.add('hidden');
});
/*----------------------------------------------------------------------------------------------------------------*/

window.onload = def1.classList.remove('hidden');


/*Send Answers*/
/*----------------------------------------------------------------------------------------------------------------*/
function sendAnswers() {
    document.getElementById("confirmation").style.display = "block";
}
/*----------------------------------------------------------------------------------------------------------------*/