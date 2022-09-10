window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var intro = document.getElementById("intro");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header-fixed");
    intro.classList.add("intro2");
    header.classList.remove("header-top");
  } else {
    header.classList.add("header-top");
    intro.classList.add("intro");
    header.classList.remove("header-fixed");
    intro.classList.remove("intro2");
  }
}