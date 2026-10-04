

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

/*Sections*/
/*----------------------------------------------------------------------------------------------------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
/*----------------------------------------------------------------------------------------------------------------*/

/*Badge Generator*/
/*----------------------------------------------------------------------------------------------------------------*/
const badgeForm = document.getElementById('badgeForm');
const downloadBadge = document.getElementById('dwnBadge');
const createAnother = document.getElementById('createAnother');


badgeForm.addEventListener('submit', function(event){

    event.preventDefault();

    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';


    const eventname = document.getElementById('eventname').value;
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const company = "@" + document.getElementById('company').value;
    const access = document.getElementById('access').value;

    const id = 'ID ' + Math.floor(Math.random() * 100).toString().padStart(4, '0');

    $('#badgeEvent').text(eventname);
    $('#badgeName').text(name);
    $('#badgeDesignation').text(designation);
    $('#badgecontainer').text(company);
    $('#badgeAccess').text(access);

    $('#qrcode').empty();

    $('#qrcode').qrcode({
        text: `ID : ${id} \nEvent: ${eventname}\nName: ${name}\nDesignation: ${designation}\nCompany:  ${company}\nAccess  ${access} `,
        width: 128,
        height: 128
    });

    $('#badge').css('display', 'block');
    $('#dwnBadge').css('display', 'block');
    $('#createAnother').css('display', 'block');


});


createAnother.addEventListener('click', function(){
    
    $('#badge').css('display', 'none');
    $('#dwnBadge').css('display', 'none');
    $('#createAnother').css('display', 'none');

    document.getElementById('formContainer').style.display='block';
    document.getElementById('badgeForm').reset();
})


downloadBadge.addEventListener('click', function(e){
    
  e.preventDefault();
  
  const badgeElement = document.getElementById('badge');
  htmlToImage.toPng(badgeElement)
  .then(function (dataUrl) {
    const link = document.createElement('a');
    link.download = document.getElementById('name').value+'.png';
    link.href =dataUrl;
    link.click();
  })
  .catch(function (error){
    console.error('Error converting HTML to image:'. error)
  })

})
/*----------------------------------------------------------------------------------------------------------------*/