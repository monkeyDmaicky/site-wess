document.addEventListener("DOMContentLoaded", function () {


    /* MENU MOBILE */

    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            menuButton.classList.toggle("active");

        });


        document.querySelectorAll(".nav-menu a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuButton.classList.remove("active");

            });

        });

    }


    /* ANO AUTOMATICO */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* ANIMACAO AO ROLAR */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* TABS DE PRODUTOS */

    const productTabs =
        document.querySelectorAll(".product-tab");

    const productPanels =
        document.querySelectorAll(".product-panel");


    if (productTabs.length > 0) {

        productTabs.forEach(function (tab) {

            tab.addEventListener("click", function () {

                const target =
                    tab.getAttribute("data-target");


                productTabs.forEach(function (item) {

                    item.classList.remove("active");

                });


                productPanels.forEach(function (panel) {

                    panel.classList.remove("active");

                });


                tab.classList.add("active");


                const selectedPanel =
                    document.getElementById(target);


                if (selectedPanel) {

                    selectedPanel.classList.add("active");

                    history.replaceState(
                        null,
                        "",
                        "#" + target
                    );

                }

            });

        });


        /* ABRE A ABA CORRETA PELO LINK */

        const hash =
            window.location.hash.replace("#", "");


        if (
            hash === "etiquetas" ||
            hash === "bobinas" ||
            hash === "rotulos"
        ) {

            const selectedTab =
                document.querySelector(
                    '.product-tab[data-target="' + hash + '"]'
                );


            if (selectedTab) {

                selectedTab.click();

            }

        }

    }


    /* FAQ */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const item =
                question.closest(".faq-item");


            const answer =
                item.querySelector(".faq-answer");


            const isOpen =
                item.classList.contains("open");


            document.querySelectorAll(".faq-item")
                .forEach(function (otherItem) {

                    otherItem.classList.remove("open");

                });


            if (!isOpen) {

                item.classList.add("open");

            }

        });

    });


    /* FORMULARIO */

    const quoteForm =
        document.getElementById("quote-form");


    if (quoteForm) {

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            const phone =
                document.getElementById("phone").value.trim();


            const company =
                document.getElementById("company").value.trim();


            const interest =
                document.getElementById("interest").value;


            const message =
                document.getElementById("message").value.trim();


            let whatsappMessage =
                "Ola! Gostaria de solicitar um orcamento.%0A%0A";


            whatsappMessage +=
                "Nome: " + encodeURIComponent(name) + "%0A";


            whatsappMessage +=
                "Telefone: " + encodeURIComponent(phone) + "%0A";


            if (company) {

                whatsappMessage +=
                    "Empresa: " +
                    encodeURIComponent(company) +
                    "%0A";

            }


            whatsappMessage +=
                "Interesse: " +
                encodeURIComponent(interest) +
                "%0A";


            if (message) {

                whatsappMessage +=
                    "Detalhes: " +
                    encodeURIComponent(message) +
                    "%0A";

            }


            whatsappMessage +=
                "%0APrazo medio informado no site: 15 dias para pedidos impressos.";


            const whatsappUrl =
                "https://wa.me/5541984171327?text=" +
                whatsappMessage;


            window.open(
                whatsappUrl,
                "_blank"
            );

        });

    }


    /* LINKS SUAVES */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#" ||
                targetId.length < 2
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });


    /* EFEITO NO HEADER */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", function () {

        if (!navbar) return;


        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


});