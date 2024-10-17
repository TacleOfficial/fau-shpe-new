import React from 'react';
import "../assets/css/normalize.css"
import "../assets/css/fau-shpe.webflow.css"
import "../assets/css/normalize.css"
import "../assets/css/webflow.css"

// Sponsors.js

const heroImages = [
  { src: 'images/IMG_6091.jpeg', alt: 'Sponsor Image 1' },
  { src: 'images/Untitled-design-39.png', alt: 'Sponsor Image 2' },
  { src: 'images/fa9575f7c793ffb401c010766818e27d.png', alt: 'Sponsor Image 3' },
  { src: 'images/IMG_2908.jpg', alt: 'Sponsor Image 4' },
];

const Sponsors = () => {
  return (
    <div className="sponsors-wrapper">
      <div className="sponsors-hero-container">
        <h1 className="heading-one">Our Sponsors</h1>
        <p className="paragraph-main">
          Sponsorship plays a vital role in the success of SHPE FAU. By partnering with us, you help support our mission to empower Hispanic students and professionals in STEM fields. Your contribution enhances our programs and events and fosters future leaders. Interested in becoming a sponsor? Fill out the form below, and we will get back to you promptly.
        </p>
        <div className="sponsors-hero-images">
          {heroImages.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} className="sponsors-image" />
          ))}
        </div>
      </div>

      <div className="sponsors-form-container">
        <div className="sponsors-form-wrapper">
          <form className="form">
            <input type="text" placeholder="First Name" required className="text-field" />
            <input type="text" placeholder="Last Name" required className="text-field" />
            <input type="email" placeholder="Email Address" required className="text-field" />
            <textarea placeholder="Company Name" className="text-field" required />
            <input type="submit" value="SUBMIT" className="submit-button" />
          </form>
          <div className="form-message success">
            Thank you! Your submission has been received!
          </div>
          <div className="form-message error">
            Oops! Something went wrong while submitting the form.
          </div>

          <div className="sponsor-description">
            <h2>BECOME A SPONSOR FOR OUR CHAPTER</h2>
            <p>
              To learn more about becoming a sponsor, explore our sponsorship package by clicking the link below.
            </p>
            <a
              href="documents/SPONSORSHPE-Package-FINAL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-link"
            >
              SponsorSHPE Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
