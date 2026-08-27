// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.getElementById("menuButton");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// Fecha o menu ao clicar em um link

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});


// ==============================
// ANIMAÇÃO AO APARECER
// ==============================

const elements = document.querySelectorAll(
    ".product-box, .segment, .step, .about-card, .contact-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});