/* =====================================
   MENU MOBILE
===================================== */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("active");

});


/* =====================================
   FECHAR MENU AO CLICAR
===================================== */

const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});


/* =====================================
   ANO AUTOMÁTICO
===================================== */

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}


/* =====================================
   FECHAR MENU AO CLICAR FORA
===================================== */

document.addEventListener("click", function (event) {

    const clicouNoMenu =
        menu.contains(event.target);

    const clicouNoBotao =
        menuBtn.contains(event.target);

    if (!clicouNoMenu && !clicouNoBotao) {

        menu.classList.remove("active");

    }

});