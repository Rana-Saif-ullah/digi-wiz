var menu = document.getElementById("menu__center");
var nav__links = document.getElementById("nav__links");

menu.addEventListener("click", function () {
    menu.classList.toggle("active__menu");
    nav__links.classList.toggle("active__navlinks");
});



let mixerPortfolio = mixitup('.section__cards', {
    selectors: {
        target: '.card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.tab__link')

function activework(){
    linkWork.forEach(l=> l.classList.remove('sub__title'))
    this.classList.add('sub__title')
}

linkWork.forEach(l=> l.addEventListener('click', activework))