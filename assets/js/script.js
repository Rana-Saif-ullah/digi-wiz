var menu = document.getElementById("menu__center");
var nav__links = document.getElementById("nav__links");

menu.addEventListener("click", function () {
    menu.classList.toggle("active__menu");
    nav__links.classList.toggle("active__navlinks");
});



// let mixerPortfolio = mixitup('.section__cards', {
//     selectors: {
//         target: '.card'
//     },
//     animation: {
//         duration: 300
//     }
// });

// const linkWork = document.querySelectorAll('.tab__link')

// function activework() {
//     linkWork.forEach(l => l.classList.remove('sub__title'))
//     this.classList.add('sub__title')
// }

// linkWork.forEach(l => l.addEventListener('click', activework))



const arr = [
    {
        text: "Rizwzn",
        role: "CEO",
    },
    {
        text: "Saif",
        role: "CEO",
    },
    {
        text: "Zeeshan",
        role: "CEO",
    },
    {
        text: "Rizwzn",
        role: "CEO",
    },
    {
        text: "Rizwzn",
        role: "CEO",
    },
    {
        text: "Rizasdfasdfsdfsdrfwzn",
        role: "CEO",
    }
]
let first = 0;
let last = 1;
const arraySlice = arr.slice(first, last)

arraySlice.forEach(item => {
    document.getElementById("testimonial__slider").innerHTML +=
        `
        <div class="slide">
            <img src="assets/images/“.png" .png alt="">
            <p class="paragraph">
               We have the best creative team that bring your ideas to life
             </p>
            <img src="assets/images/profile.png" alt="Profile">
            <h1 class="small__heading">
                ${item.text}
            </h1>
            <p class="paragraph">
                ${item.role}
            </p>
        </div>
    `
});


function slider(){
    var left = document.getElementById(".left")
}

console.log(slider())