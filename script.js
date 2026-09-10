const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle("open");

        }
    );


    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navigation.classList.remove("open");

                }
            );

        }
    );

}



const quoteForm =
    document.getElementById("quoteForm");


if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                .getElementById("name")
                .value
                .trim();


            const company =
                document
                .getElementById("company")
                .value
                .trim();


            const phone =
                document
                .getElementById("phone")
                .value
                .trim();


            const product =
                document
                .getElementById("product")
                .value;


            const message =
                document
                .getElementById("message")
                .value
                .trim();


            const text =

                "Ola Wess Rotulos e Etiquetas!" +

                "\n\n" +

                "Gostaria de solicitar um orcamento." +

                "\n\n" +

                "Nome: " +
                name +

                "\n" +

                "Empresa: " +
                company +

                "\n" +

                "Telefone: " +
                phone +

                "\n" +

                "Interesse: " +
                product +

                "\n" +

                "Mensagem: " +
                message;


            const url =

                "https://wa.me/5541984171327?text=" +

                encodeURIComponent(text);


            window.open(
                url,
                "_blank"
            );

        }
    );

}