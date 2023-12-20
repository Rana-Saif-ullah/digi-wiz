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



const portfolioporject = [
    {
        projectname: "Write Plus AI",
        projecttype: "Website Development",
        porjectimglink: "assets/images/workimages/1.png",
        projectLink: "https://writeplus.ai"
    },
    {
        projectname: "ToyToy",
        projecttype: "Website Development",
        porjectimglink: "assets/images/workimages/2.png",
        projectLink: "https://toytoy.in"
    },
    {
        projectname: "The Media Baron",
        projecttype: "Website Development",
        porjectimglink: "assets/images/workimages/3.png",
        projectLink: "https://themediabaron.in"
    },
    {
        projectname: "Smridhi Seth",
        projecttype: "Website Development",
        porjectimglink: "assets/images/workimages/4.png",
        projectLink: "https://smridhiseth.com"
    },
    {
        projectname: "Global Cool",
        projecttype: "Website Development",
        porjectimglink: "assets/images/workimages/5.png",
        projectLink: "https://globalcool.in"
    },
    {
        projectname: "Einterio",
        projecttype: "Website Development",
        porjectimglink: "assets/images/workimages/6.png",
        projectLink: "https://einterio.com"
    },
]

portfolioporject.map(item => {
    document.getElementById("portfolio__cards").innerHTML +=
        `
        <a target="_blank" href="${item.projectLink}" class="card mix website">
            <img src="${item.porjectimglink}" alt="">
            <span class="sub__title">
                ${item.projecttype}
            </span>
            <h1 class="small__heading">
                ${item.projectname}
            </h1>
        </a>
    `
});