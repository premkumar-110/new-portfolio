var display_menu = 0;
function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector(".nav-bar-mobile").classList.toggle("active-bar");
}

window.onload = function () {
  var loader = document.getElementById("loader");
  var visible = document.getElementById("visible");
  visible.style.display = "block";
  loader.style.display = "none";
};

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
