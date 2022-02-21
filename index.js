//Modal

const modalContainer = document.querySelector("#modal-container-example");
const modalCloseButton = document.querySelector("#modal-close-button-example");
const modalDemoButton = document.querySelector("#modal-demo-button");

modalCloseButton?.addEventListener("click", () => {
  if (modalContainer.style.visibility === "visible")
    modalContainer.style.visibility = "hidden";
  else modalContainer.style.visibility = "visible";
});

modalDemoButton?.addEventListener("click", () => {
  if (modalContainer.style.visibility === "visible")
    modalContainer.style.visibility = "hidden";
  else modalContainer.style.visibility = "visible";
});

//Toast
const toastExample = document.querySelector("#toast-example");
const showToastBtn = document.querySelector("#toast-example-btn");
const closeToastBtn = document.querySelector("#close-toast-example-btn");

let toastTimer;
showToastBtn?.addEventListener("click", () => {
  toastExample.style.display = "block";
  toastTimer = setTimeout(() => {
    toastExample.style.display = "none";
  }, 2000);
});
closeToastBtn?.addEventListener("click", () => {
  clearTimeout(toastTimer);
  toastExample.style.display = "none";
});

//sidebar
const hamMenu = document.querySelector("#ham-menu");
const sidebar = document.querySelector("#reducto-sidebar");
hamMenu?.addEventListener("click", () => {
  sidebar.classList.toggle("hidden-sidebar");
});
