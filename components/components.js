//Modal

const modalContainer = document.querySelector("#modal-container");
const modalCloseButton = document.querySelector("#modal-close-button");

modalCloseButton.addEventListener("click", () => {
  if (modalContainer.style.visibility === "visible")
    modalContainer.style.visibility = "hidden";
  else modalContainer.style.visibility = "visible";
});
