import React from 'react';
// import './Gallery.css'; // Ensure to create this CSS file for styling
import "../assets/css/normalize.css"
import "../assets/css/fau-shpe.webflow.css"
import "../assets/css/normalize.css"
import "../assets/css/webflow.css"
const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <header className="gallery-header-container">
        <h1 className="heading-one">
          <span className="heading-one-span">SHPE</span> Gallery
        </h1>
        <p className="paragraph-main">
          See our collection of photos from past SHPE events, activities, and member achievements. This gallery highlights what our community stands for, capturing moments of collaboration, learning, and celebration. This page is updated periodically when new events occur. Each of these photos represents members participating in workshops, professional development events, and fun social gatherings. Our gallery serves as a visual reminder of the strong bonds and memories we create together, inspiring others to join and become a part of <strong>La Familia</strong>.
        </p>
      </header>

      <section className="gallery-image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            sizes={img.sizes}
            srcSet={img.srcSet}
            className="gallery-image"
          />
        ))}
      </section>

      <footer className="footer-container">
        <div className="footer-links">
          <a href="/events" className="footer-link">Events</a>
          <a href="/gallery" className="footer-link active">Gallery</a>
          <a href="/sponsors" className="footer-link">Sponsors</a>
          <a href="/resources" className="footer-link">Resources</a>
        </div>
        <div className="footer-social-media">
          <a href="https://discord.com/invite/8Hqu5dRCbv" target="_blank" rel="noopener noreferrer">
            <img src="/images/discord.svg" alt="Discord" className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/shpe_fau/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" className="footer-icon" />
          </a>
          <a href="https://chat.whatsapp.com/Ci7wMkda2311oA3ECwzjUK" target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="footer-icon" />
          </a>
          <a href="mailto:shpefauowls@gmail.com?subject=Re%3A%20SHPE%20FAU">
            <img src="/images/email.png" alt="Email" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/company/shpe-fauowls/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="footer-icon" />
          </a>
        </div>
        <div className="footer-logo">
          <img src="/images/SHPE_logo_horiz_Florida-Atlantic-University_DKBG.png" alt="SHPE FAU Logo" />
        </div>
        <p className="footer-copyright">© SHPE Florida Atlantic 2024 - All Rights Reserved</p>
      </footer>
    </div>
  );
};

const images = [
  {
    src: '/images/IMG_2867.jpg',
    alt: 'Event Image 1',
    sizes: '(max-width: 991px) 46vw, 389px',
    srcSet: '/images/IMG_2867-p-500.jpg 500w, /images/IMG_2867-p-800.jpg 800w, /images/IMG_2867.jpg 5202w',
  },
  {
    src: '/images/IMG_6155.jpeg',
    alt: 'Event Image 2',
    sizes: '(max-width: 991px) 46vw, 389px',
    srcSet: '/images/IMG_6155-p-500.jpeg 500w, /images/IMG_6155.jpg 4032w',
  },
  {
    src: '/images/pdd23.png',
    alt: 'PDD Event',
    sizes: '(max-width: 991px) 46vw, 389px',
    srcSet: '/images/pdd23-p-500.png 500w, /images/pdd23.png 1080w',
  },
  {
    src: '/images/IMG_3092.jpg',
    alt: 'Event Image 3',
    sizes: '(max-width: 991px) 46vw, 389px',
    srcSet: '/images/IMG_3092-p-500.jpg 500w, /images/IMG_3092.jpg 4187w',
  },
];

export default Gallery;
