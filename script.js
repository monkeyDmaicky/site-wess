var menuToggle = document.getElementById("menuToggle");
var mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {

menuToggle.addEventListener("click", function() {

mainMenu.classList.toggle("active");

});

}


var menuLinks = document.querySelectorAll("#mainMenu a");

for (var i = 0; i < menuLinks.length; i++) {

menuLinks[i].addEventListener("click", function() {

mainMenu.classList.remove("active");

});

}