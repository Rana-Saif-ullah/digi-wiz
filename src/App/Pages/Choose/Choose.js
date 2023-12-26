import React from 'react'

function Choose() {
  return (
<>
  {/* why choose us */}
  <div className="choose__us section">
    <div className="center__content">
      <img className="section__topimg" src="assets/images/about.png" alt="" />
      <span className="sub__title">Why choose us ?</span>
      <div className="title__container">
        <h1 className="heading">Unparalleled Excellence &amp; Support</h1>
      </div>
      <p className="paragraph">
        Experience excellence through our top-tier service, dedicated support,
        and lasting client relationships. Our proven results and satisfied
        customers make us your premier&nbsp;choice.
      </p>
    </div>
    <div className="section__cards">
      <div className="card">
        <span className="number">01</span>
        <h1 className="small__heading">+8 years experience</h1>
        <p className="paragraph">
          With a solid foundation of over 8 years in the industry, our
          experience is your assurance of quality and reliability.
        </p>
      </div>
      <div className="card">
        <span className="number">02</span>
        <h1 className="small__heading">200+ Successful Projects.</h1>
        <p className="paragraph">
          We've completed more than 200 projects, each one contributing to our
          legacy of excellence and client satisfaction.
        </p>
      </div>
      <div className="card">
        <span className="number">03</span>
        <h1 className="small__heading">50+ Active Clients</h1>
        <p className="paragraph">
          Our ongoing collaborations with 50+ active clients demonstrate the
          trust they have in our ability to deliver results&nbsp;consistently.
        </p>
      </div>
    </div>
  </div>
  {/* why choose us */}
  <div className="choose__us section">
    <div className="center__content">
      <img className="section__topimg" src="assets/images/about.png" alt="" />
      <span className="sub__title">Our Uniqueness</span>
      <div className="title__container">
        <h1 className="heading">Unparalleled Excellence &amp; Support</h1>
      </div>
      <p className="paragraph">
        Experience excellence through our top-tier service, dedicated support,
        and lasting client relationships. Our proven results and satisfied
        customers make us your premier&nbsp;choice.
      </p>
    </div>
    <div className="section__cards">
      <div className="card">
        <h1 className="small__heading">+8 years experience</h1>
        <p className="paragraph">
          With a solid foundation of over 8 years in the industry, our
          experience is your assurance of quality and reliability.
        </p>
      </div>
      <div className="card">
        <h1 className="small__heading">200+ Successful Projects.</h1>
        <p className="paragraph">
          We've completed more than 200 projects, each one contributing to our
          legacy of excellence and client satisfaction.
        </p>
      </div>
      <div className="card">
        <h1 className="small__heading">50+ Active Clients</h1>
        <p className="paragraph">
          Our ongoing collaborations with 50+ active clients demonstrate the
          trust they have in our ability to deliver results&nbsp;consistently.
        </p>
      </div>
    </div>
  </div>
  {/* portfolio section */}
  <div id="portfolio" className="portfolio__section section">
    <div className="center__content">
      <img className="section__topimg" src="assets/images/port.png" alt="" />
      <span className="sub__title">Our Portfolio</span>
      <div className="title__container">
        <h1 className="heading">Check our awesome portfolio</h1>
      </div>
      <p className="paragraph">See what we do for our clients.</p>
    </div>
    <div id="portfolio__cards" className="section__cards" />
    <a href="#" className="btn">
      See More projects
    </a>
  </div>
</>

  )
}

export default Choose