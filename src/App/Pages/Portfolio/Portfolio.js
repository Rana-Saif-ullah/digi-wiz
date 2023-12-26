import React from "react";
import "./portfolio.css";
function Portfolio() {
  const portfolioporject = [
    {
      projectname: "Write Plus AI",
      projecttype: "Website Development",
      porjectimglink: "assets/images/workimages/1.png",
      projectLink: "https://writeplus.ai",
    },
    {
      projectname: "ToyToy",
      projecttype: "Website Development",
      porjectimglink: "assets/images/workimages/2.png",
      projectLink: "https://toytoy.in",
    },
    {
      projectname: "The Media Baron",
      projecttype: "Website Development",
      porjectimglink: "assets/images/workimages/3.png",
      projectLink: "https://themediabaron.in",
    },
    {
      projectname: "Smridhi Seth",
      projecttype: "Website Development",
      porjectimglink: "assets/images/workimages/4.png",
      projectLink: "https://smridhiseth.com",
    },
    {
      projectname: "Global Cool",
      projecttype: "Website Development",
      porjectimglink: "assets/images/workimages/5.png",
      projectLink: "https://globalcool.in",
    },
    {
      projectname: "Einterio",
      projecttype: "Website Development",
      porjectimglink: "assets/images/workimages/6.png",
      projectLink: "https://einterio.com",
    },
  ];
  return (
    <div id="portfolio" className="portfolio__section section">
      <div className="center__content">
        <img className="section__topimg" src="assets/images/port.png" alt="" />
        <span className="sub__title">Our Portfolio</span>
        <div className="title__container">
          <h1 className="heading">Check our awesome portfolio</h1>
        </div>

        <div class="tabs">
          <a href="#" class="sub__title link tab__link" data-filter="all">
            All
          </a>

          <a href="#" class="link tab__link" data-filter=".graphic">
            Graphic Design
          </a>

          <a href="#" class="link tab__link" data-filter=".seo">
            SEO
          </a>

          <a href="#" class="link tab__link" data-filter=".website">
            Websites
          </a>

          <a href="#" class="link tab__link" data-filter=".ui">
            UI UX
          </a>
        </div>
      </div>
      <div id="portfolio__cards" className="section__cards">
        <div class="card mix website">
          {portfolioporject.map((item, index) => (
            <a
              key={index}
              href={item.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`card mix ${item.projecttype
                .toLowerCase()
                .replace(" ", "")}`}
            >
              <img
                src={item.porjectimglink}
                alt={item.projectname}
                className="card__img"
              />
              <span className="sub__title">{item.projecttype}</span>
              <h1 className="small__heading">{item.projectname}</h1>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
