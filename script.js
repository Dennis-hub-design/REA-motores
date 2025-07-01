// Script básico que exibe uma mensagem ao clicar no botão de WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-success");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Você será redirecionado para o WhatsApp para concluir a compra.");
    });
  });
});
