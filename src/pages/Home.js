import React from 'react';

// import './Home.css'; // CSS for styling
import "../assets/css/normalize.css"
import "../assets/css/fau-shpe.webflow.css"
import "../assets/css/normalize.css"
import "../assets/css/webflow.css"
// Home.js

const cardItems = [
  { title: 'WHAT IS SHPE', link: '#' },
  { title: 'HISTORY OF SHPE', link: '#' },
  { title: 'JOIN US', link: '/join-us' },
];

const programItems = [
  {
    title: 'InternSHPE',
    description: 'The InternSHPE program supports internships for SHPE members with intentional programming.',
    imgSrc: 'images/InternSHPE_4C-300x101.webp',
    color: 'light_orange',
  },
  {
    title: 'MentorSHPE',
    description: 'Join the MentorSHPE program to grow your network and gain new knowledge.',
    imgSrc: 'images/MentorSHPE_2021_4C_Artboard-300x101.webp',
    color: 'light_orange',
  },
  {
    title: 'LeaderSHPE',
    description: 'SHPE empowers the Hispanic community to be leaders in their chapter and workplace.',
    imgSrc: 'images/LeaderSHPE-Logo.png',
    color: 'light_orange',
  },
];

const slideItems = [
  {
    title: 'Mission',
    description: 'Empowering the Hispanic community to reach its potential through STEM support.',
    imgSrc: 'images/mission.png',
    color: 'orange',
  },
  {
    title: 'Vision',
    description: 'Empowering the Hispanic community to impact the world through development.',
    imgSrc: 'images/shared-vision.png',
    color: 'blue',
  },
  {
    title: 'Core Values',
    description: 'Committed to empowering the Hispanic community in engineering and technology.',
    imgSrc: 'images/15635177.png',
    color: 'light_orange',
  },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-hero-wrapper">
        <div className="home-hero-image">
          <div className="home-hero-heading">
            <h1 className="heading-one">
              <span className="heading-one-span color-white">Society of</span> Hispanic Professional Engineers at{' '}
              <span className="color-white">Florida Atlantic University</span>
            </h1>
            <div className="home-text-main-container">
              <div className="text-main text-bigger color-white">
                <strong>Empowering and Uniting Hispanic Engineers</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-card-container">
        <div className="home-card-wrapper">
          {cardItems.map((item, index) => (
            <a key={index} href={item.link} className={`home-card image-${index + 1} w-inline-block`}>
              <div className="home-card-content">
                <div className="home-card-text b">{item.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <section id="About" className="home-wrapper">
        <h1 className="heading-one center height-09em">
          <span className="heading-one-span">About</span> SHPE FAU
        </h1>
        <p className="paragraph-main">
          The Florida Atlantic University chapter of the Society of Hispanic Professional Engineers was originally founded
          in August 1997 by Manuel Borge. Our chapter has expanded to more than 200 members, each benefiting from being
          part of the SHPE Familia. From mentorship and internships to networking and shared experiences, our members enjoy
          a range of advantages.
        </p>
        <img
          src="images/fa9575f7c793ffb401c010766818e27d.png"
          alt="SHPE FAU"
          className="image-main"
        />

        <div className="home-div-container-grid">
          {programItems.map((program, index) => (
            <div key={index} className={`home-card-program ${program.color}`}>
              <img src={program.imgSrc} alt={program.title} className="our-values-img-copy" />
              <h2 className="heading-two color-white">{program.title}</h2>
              <p className="text-block-3">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="History" className="home-wrapper">
        <h1 className="heading-one center">
          <span className="heading-one-span">History of</span> SHPE
        </h1>
        <p className="paragraph-main">
          SHPE was founded in Los Angeles, California, in 1974 by a group of engineers employed by the city of Los Angeles.
          Today, SHPE boasts a nationwide network promoting the advancement of Hispanics in engineering and technology.
        </p>

        <div className="home-card-slide-wrapper">
          {slideItems.map((slide, index) => (
            <div key={index} className={`home-card-slide ${slide.color}`}>
              <img src={slide.imgSrc} alt={slide.title} className="our-values-img" />
              <h2 className="heading-two color-white">{slide.title}</h2>
              <p className="text-block-3">{slide.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
