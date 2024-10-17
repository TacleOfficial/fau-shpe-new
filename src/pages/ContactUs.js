import React from 'react';
// import './ContactUs.css'; // Assuming you'll create a CSS file for this page
// ContactUs.js

import "../assets/css/normalize.css"
import "../assets/css/fau-shpe.webflow.css"
import "../assets/css/normalize.css"
import "../assets/css/webflow.css"


const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container">
        <div className="contact-us-hero-wrapper">
          <div className="contact-us-hero-container">
            <div className="contact-us-hero-header">
              <h1 className="heading-one">
                Stay Connected <span className="heading-one-span">Con La Familia</span>
              </h1>
            </div>
            <div className="contact-us-hero-image-content">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={img.className}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="contact-us-body-wrapper">
          <div className="contact-us-body-container">
            <div className="contact-us-body-content">
              <h2 className="heading-two">
                Ways to <span className="heading-two-span">stay connected.</span>
              </h2>
              <p className="paragraph-main">
                Stay connected with us on Instagram, LinkedIn, WhatsApp, and more to
                keep up with the latest events and updates. Reach out to us anytime for
                documentation or questions through email.
              </p>

              <div className="contact-us-body-content-wrapper">
                {socialMediaLinks.map((link, index) => (
                  <SocialMediaLink
                    key={index}
                    url={link.url}
                    imgSrc={link.imgSrc}
                    altText={link.altText}
                    label={link.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialMediaLink = ({ url, imgSrc, altText, label }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="contact-us-body-social-media-container"
  >
    <div className="contact-us-social-media-icon-container">
      <img src={imgSrc} alt={altText} className="image-10" />
    </div>
    <div className="contact-us-social-media-description-container">
      <p className="paragraph-main no-margin b">{label}</p>
    </div>
  </a>
);

const heroImages = [
  { src: '/images/IMG_6091.jpeg', alt: 'Hero 1', className: 'image-7' },
  { src: '/images/Untitled-design-39.png', alt: 'Hero 2', className: 'image-7' },
  { src: '/images/fa9575f7c793ffb401c010766818e27d.png', alt: 'Hero 3', className: 'image-9' },
  { src: '/images/IMG_2908.jpg', alt: 'Hero 4', className: 'image-8' },
];

const socialMediaLinks = [
  {
    url: 'https://www.instagram.com/shpe_fau/',
    imgSrc: '/images/instagram.png',
    altText: 'Instagram',
    label: '@shpe_fau',
  },
  {
    url: 'https://discord.com/invite/8Hqu5dRCbv',
    imgSrc: '/images/discord.svg',
    altText: 'Discord',
    label: 'SHPE FAU on Discord',
  },
  {
    url: 'https://chat.whatsapp.com/Ci7wMkda2311oA3ECwzjUK',
    imgSrc: '/images/whatsapp.png',
    altText: 'WhatsApp',
    label: 'Join SHPE FAU on WhatsApp',
  },
  {
    url: 'https://www.linkedin.com/company/shpe-fauowls/',
    imgSrc: '/images/linkedin.png',
    altText: 'LinkedIn',
    label: 'SHPE FAU on LinkedIn',
  },
  {
    url: 'mailto:shpefauowls@gmail.com?subject=Re%3A%20SHPE%20FAU',
    imgSrc: '/images/email.png',
    altText: 'Email',
    label: 'shpefauowls@gmail.com',
  },
];

export default ContactUs;
