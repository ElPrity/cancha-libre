const loginButton = document.querySelector("#loginButton");
const loginDialog = document.querySelector("#loginDialog");
const detailsButton = document.querySelector("#detailsButton");
const projectStatus = document.querySelector("#projectStatus");

loginButton.addEventListener("click", () => loginDialog.showModal());

detailsButton.addEventListener("click", () => {
  projectStatus.textContent = "Estado actual: estamos preparando la prueba técnica. El juego y el multijugador todavía no están integrados.";
});
