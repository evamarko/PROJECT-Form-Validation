const form = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const notifName = document.querySelector(".notifName");
const notifEmail = document.querySelector(".notifEmail");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  notifName.style.display = fullName.value === "" ? "block" : "none";
  notifEmail.style.display = email.value === "" ? "block" : "none";
});
