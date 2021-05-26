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

/* Set the width of the side navigation to 200px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
