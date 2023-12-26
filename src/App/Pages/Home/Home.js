import React from "react";

function Home() {
  return (
    <>
      <div className="hero__section section">
        <div className="center__content">
          <div className="title__container">
            <img className="leftimg" src="assets/images/titleleft.png" />
            <h1 className="title">
              Welcome to <span>DigiWiz</span> - Where <span>Digital</span> Magic
              Meets <span>Marketing</span>
              Mastery!
            </h1>
            <img className="rightimg" src="assets/images/titleright.png" />
          </div>
          <p className="paragraph">
            We blend the core identity of brands with our strategic expertise,
            crafting captivating designs and creating a potent online presence
            in the realm of the digital world.
          </p>
          <a href="#wedo__section" className="btn">
            Let’s get started
          </a>
        </div>
        <div className="hero__img">
          <img src="assets/images/heroimg.png" alt="" />
        </div>
      </div>
      {/* about section */}
      <div className="about__section section">
        <div className="about__img">
          <img
            src="https://img.freepik.com/premium-photo/diversity-teamwork-business-women-startup-meeting-collaboration-creative-marketing-agency-portrait-muslim-black-woman-employee-engagement-group-modern-office-corporate-planning_590464-105175.jpg"
            alt=""
          />
        </div>
        <div className="section__content">
          <img
            className="section__topimg"
            src="assets/images/about.png"
            alt=""
          />
          <span className="sub__title">About Us</span>
          <h1 className="heading">
            Beyond the name, the story of Our Digi Wiz: Secrets of a Digital
            Experts
          </h1>
          <p className="paragraph">
            Discover the Enchanted Core of Our Company, Our Noble Quest, and the
            Digital Experts Who Fuel Our Success.
          </p>
          <a href="service.html" className="btn">
            Now More About Us
          </a>
        </div>
      </div>
      {/* what we do */}
      <div id="wedo__section" className="wedo__section section">
        <div className="wedo__content">
          <span className="sub__title">What we do ?</span>
          <h1 className="heading">
            At DigiWiz, we go beyond conventional digital marketing; we practice
            digital wizardry!
          </h1>
          <a href="#" className="btn">
            Now More About Our Services
          </a>
        </div>
        <div className="wedo__services pc__off">
          <div className="service card">
            <img src="assets/images/app.png" alt="App Development" />
            <span className="sub__title small">Website Design</span>
            <h1 className="small__heading">Website Design.</h1>
            <p className="paragraph">
              Our Creative team made great and beautiful websites.
            </p>
          </div>
          <div className="service card">
            <img src="assets/images/marketing.png" alt="App Devlopment" />
            <span className="sub__title small">Digital Marketing</span>
            <h1 className="small__heading">Digital Marketing</h1>
            <p className="paragraph">
              Our Creative team made great and beautiful brands.
            </p>
          </div>
          <div className="service card">
            <img src="assets/images/uiux.png" alt="App Devlopment" />
            <span className="sub__title small">UIUX Design</span>
            <h1 className="small__heading">UIUX Design</h1>
            <p className="paragraph">
              Our Creative team made great and beautiful UIUX Design.
            </p>
          </div>
          <div className="service card">
            <img src="assets/images/web.png" alt="App Devlopment" />
            <span className="sub__title small">Graphic Design</span>
            <h1 className="small__heading">Graphic Designing</h1>
            <p className="paragraph">
              Our Creative team made great and beautiful websites.
            </p>
          </div>
        </div>
        <div className="wedo__img tab__off">
          <img src="assets/images/wedo.png" alt="" />
        </div>
      </div>
      {/* why choose us */}
      <div className="choose__us section">
        <div className="center__content">
          <img
            className="section__topimg"
            src="assets/images/whychoos.png"
            alt=""
          />
          <span className="sub__title">Why choose us ?</span>
          <div className="title__container">
            <h1 className="heading">Unparalleled Excellence &amp; Support</h1>
          </div>
          <p className="paragraph">
            Experience excellence through our top-tier service, dedicated
            support, and lasting client relationships. Our proven results and
            satisfied customers make us your premier&nbsp;choice.
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
              We've completed more than 200 projects, each one contributing to
              our legacy of excellence and client satisfaction.
            </p>
          </div>
          <div className="card">
            <span className="number">03</span>
            <h1 className="small__heading">50+ Active Clients</h1>
            <p className="paragraph">
              Our ongoing collaborations with 50+ active clients demonstrate the
              trust they have in our ability to deliver
              results&nbsp;consistently.
            </p>
          </div>
        </div>
        <a href="choose.html" className="btn">
          Now More Why Choose Us ?
        </a>
      </div>
      {/* portfolio section */}
      <div id="portfolio" className="portfolio__section section">
        <div className="center__content">
          <img
            className="section__topimg"
            src="assets/images/port.png"
            alt=""
          />
          <span className="sub__title">Our Portfolio</span>
          <div className="title__container">
            <h1 className="heading">Check our awesome portfolio</h1>
          </div>
          <p className="paragraph">See what we do for our clients.</p>
        </div>
        <div className="swiper mySwiper">
          <div
            id="portfolio__cards"
            className="portfolio__cards swiper-wrapper"
          ></div>
        </div>
        <a href="#" className="btn">
          See More projects
        </a>
      </div>
    </>
  );
}

export default Home;
