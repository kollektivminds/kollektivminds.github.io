/*
$('[lang="es"]').hide();
$('[lang="ru"]').hide();

$('#lang-switch').change(function () {
  var lang = $(this).val();
  switch (lang) {
    case 'en':
      $('[lang]').hide();
      $('[lang="en"]').show();
      break;
    case 'es':
      $('[lang]').hide();
      $('[lang="es"]').show();
      break;
    case 'ru':
      $('[lang]').hide();
      $('[lang="ru"]').show();
      break;
    default:
      $('[lang]').hide();
      $('[lang="en"]').show();
  }
});
*/ 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Inside the Media Query
/*
.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
*/
/* Set the width of the side navigation to 200px and the left margin of the page content to 250px and add a black background color to body 
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
*/
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white 
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
*/