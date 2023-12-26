import React from 'react'
import './portfolio.css'
function Portfolio() {
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
          <img src="assets/images/workimages/1.png" alt=""/>
          <h1 class="small__heading">
              Typo design
          </h1>
      </div>
  </div>
</div>

  )
}

export default Portfolio