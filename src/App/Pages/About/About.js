import React from "react";
import './about.css'
function About() {
  return (
    <>
      {/* about section */}
      <div className="about__section section">
        <div className="about__img">
          <img
            style={{ borderRadius: 10 }}
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
          <h1 className="heading">About Your Digi Wiz: More than a Name</h1>
          <p className="paragraph">
            Get to know the heart of our company, our mission, and the faces
            behind our success.
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
            Creative studio with art &amp; technologies
          </h1>
          <a href="#" className="btn">
            Now More About Our Services
          </a>
        </div>
        <div className="wedo__services">
          <div className="service card">
            <img src="assets/images/app.png" alt="App Devlopment" />
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
            <span className="sub__title small">Graphic Design</span>
            <h1 className="small__heading">Graphic Design</h1>
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
      </div>
      {/* services */}
      <div className="service__container">
        <div className="service__card">
          <img src="assets/images/marketing.png" alt="App Devlopment" />
          <h1 className="small__heading">Digital Marketing</h1>
          <p className="paragraph">
            Our team is best at SEO and digital marketing
          </p>
        </div>
        <div className="service__detail">
          <h1 className="heading">Digital Marketing</h1>
          <div className="detail__container">
            <p className="paragraph">SEO</p>
            <p className="paragraph">Social media Marketing</p>
            <p className="paragraph">Performance Marketing</p>
            <p className="paragraph">Graphic Designing</p>
            <p className="paragraph">PPC</p>
          </div>
        </div>
      </div>
      <div className="service__container reverse ">
        <div className="service__detail">
          <h1 className="heading">App Development</h1>
          <div className="detail__container">
            <p className="paragraph">Android Development</p>
            <p className="paragraph">Flutter</p>
            <p className="paragraph">React Native</p>
            <p className="paragraph">Kotlin</p>
            <p className="paragraph">IOS Development</p>
          </div>
        </div>
        <div className="service__card">
          <img src="assets/images/app.png" alt="App Devlopment" />
          <h1 className="small__heading">App Development.</h1>
          <p className="paragraph">
            Our Creative team made great and beautiful apps.
          </p>
        </div>
      </div>
      <div className="service__container">
        <div className="service__card">
          <img src="assets/images/web.png" alt="Web Devlopment" />
          <h1 className="small__heading">Website Development.</h1>
          <p className="paragraph">
            Our Creative team made great and beautiful websites.
          </p>
        </div>
        <div className="service__detail">
          <h1 className="heading">Website Development</h1>
          <div className="detail__container">
            <p className="paragraph">Next JS</p>
            <p className="paragraph">React JS</p>
            <p className="paragraph">CSS 3</p>
            <p className="paragraph">Node Js</p>
            <p className="paragraph">Laravel</p>
          </div>
        </div>
      </div>
      <div className="service__container reverse">
        <div className="service__detail">
          <h1 className="heading">Graphic Design</h1>
          <div className="detail__container">
            <p className="paragraph">Logo Designing</p>
            <p className="paragraph">Poster Designing</p>
            <p className="paragraph">UI Designing</p>
            <p className="paragraph">UX Designing</p>
            <p className="paragraph">Web/App Design</p>
          </div>
        </div>
        <div className="service__card">
          <img src="assets/images/uiux.png" alt="Graphic Designing" />
          <h1 className="small__heading">Graphic Design.</h1>
          <p className="paragraph">
            Our Creative team work best in graphic designing.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
