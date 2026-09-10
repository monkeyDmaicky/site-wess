const menuButton = document.getElementById("menuButton");

const navigation = document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

});


const navigationLinks =
    document.querySelectorAll("#navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

    });

});


const quoteForm =
    document.getElementById("quoteForm");


quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const company =
        document.getElementById("company").value.trim();


    const phone =
        document.getElementById("phone").value.trim();


    const product =
        document.getElementById("product").value;


    const message =
        document.getElementById("message").value.trim();


    const whatsappMessage =

        "Ola Wess Etiquetas!" +

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

        "Produto: " +
        product +

        "\n" +

        "Mensagem: " +
        message;


    const whatsappUrl =

        "https://wa.me/5541984171327?text=" +

        encodeURIComponent(
            whatsappMessage
        );


    window.open(
        whatsappUrl,
        "_blank"
    );

});