var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", function () {

        if (menu.classList.contains("active")) {

            menu.classList.remove("active");

        } else {

            menu.classList.add("active");

        }

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