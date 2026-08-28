const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", function () {

        menu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });


    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });

}


/* FORMULARIO */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const company = document.getElementById("company").value.trim();

        const message = document.getElementById("message").value.trim();


        let whatsappMessage =
            "Ola! Vim pelo site da Wess e gostaria de solicitar um orcamento.%0A%0A";


        if (name) {
            whatsappMessage +=
                "Nome: " +
                encodeURIComponent(name) +
                "%0A";
        }


        if (company) {
            whatsappMessage +=
                "Empresa: " +
                encodeURIComponent(company) +
                "%0A";
        }


        if (message) {
            whatsappMessage +=
                "Mensagem: " +
                encodeURIComponent(message) +
                "%0A";
        }


        const whatsappUrl =
            "https://wa.me/5541984171327?text=" +
            whatsappMessage;


        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


/* ANO AUTOMATICO */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* FECHAR MENU AO REDIMENSIONAR */

window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {

        if (menu) {
            menu.classList.remove("active");
        }

        document.body.classList.remove("menu-open");

    }

});