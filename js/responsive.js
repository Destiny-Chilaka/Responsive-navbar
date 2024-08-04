const toggle = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener('click', function () {
    navMenu.classList.toggle("show");
});