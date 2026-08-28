var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", function () {

        menu.classList.toggle("active");

    });

}


var menuLinks = document.querySelectorAll("#menu a");

for (var i = 0; i < menuLinks.length; i++) {

    menuLinks[i].addEventListener("click", function () {

        if (menu) {
            menu.classList.remove("active");
        }

    });

}