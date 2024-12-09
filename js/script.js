document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio do formulário
        thankYouMessage.style.display = "block"; // Exibe a mensagem de agradecimento
        form.reset(); // Limpa o formulário
    });
});
