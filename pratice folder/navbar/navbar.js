const menuIcon = document.querySelector(".menu");
const navLinks = document.getElementById("ul-link");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});