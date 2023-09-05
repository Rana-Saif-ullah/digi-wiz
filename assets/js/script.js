var menu = document.getElementById("menu__center");
var nav__links = document.getElementById("nav__links");

menu.addEventListener("click", function () {
    menu.classList.toggle("active__menu");
    nav__links.classList.toggle("active__navlinks");
});
