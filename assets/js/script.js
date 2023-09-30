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
        projectname: "This is Digital",
        projecttype: "Agency Website",
        porjectimglink: "assets/images/workimages/digital.png",
    },
    {
        projectname: "Rizwzn",
        projecttype: "CEO",
        porjectimglink: "assets/images/workimages/Desktop 23-1.png",
    },
    {
        projectname: "Rizwzn",
        projecttype: "CEO",
        porjectimglink: "assets/images/workimages/Desktop 23-1.png",
    },
    {
        projectname: "Rizwzn",
        projecttype: "CEO",
        porjectimglink: "assets/images/workimages/Desktop 23-1.png",
    },
    {
        projectname: "Rizwzn",
        projecttype: "CEO",
        porjectimglink: "assets/images/workimages/Desktop 23-1.png",
    },
    {
        projectname: "Rizwzn",
        projecttype: "CEO",
        porjectimglink: "assets/images/workimages/Desktop 23-1.png",
    },
]

portfolioporject.map(item => {
    document.getElementById("portfolio__cards").innerHTML +=
    `
        <div class="card mix website">
            <img src="${item.porjectimglink}" alt="">
            <span class="sub__title">
                ${item.projecttype}
            </span>
            <h1 class="small__heading">
                ${item.projectname}
            </h1>
        </div>
    `
});


