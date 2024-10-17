import React from 'react';
// import './JoinUs.css'; // Ensure to create a corresponding CSS file for styling
import Navbar from '../components/Navbar'; // Assuming Navbar component exists
import Footer from '../components/Footer'; // Assuming Footer component exists

const JoinUs = () => {
  return (
    <div className="join-us-wrapper">
      <Navbar />
      <div className="join-now-hero-parallax">
        <div className="parallax-component">
          <img
            src="/images/background.jpg"
            alt="Background"
            className="parallax-layer is-2"
            loading="lazy"
          />
          <div className="text-block">JOIN OUR <span className="text-span">CHAPTER</span></div>
          <img
            src="/images/foreground.png"
            alt="Foreground"
            className="parallax-layer is-3"
            loading="lazy"
          />
        </div>
      </div>

      <div className="join-now-grid-4-col-container">
        {gridItems.map((item, index) => (
          <div key={index} className="join-now-col-1-container">
            <img
              src={item.src}
              alt={item.alt}
              className={`image-${index + 1}`}
              loading="lazy"
            />
            <div style={{ backgroundColor: item.color }} className={`join-now-image-overlay ${item.overlayClass}`} />
            <div className="join-now-text-description-container">
              <div className="text-2">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="join-now-container">
        <div className="join-now-form">
          <form className="form">
            <input type="text" placeholder="First Name" required className="text-field w-input" />
            <input type="text" placeholder="Last Name" required className="text-field w-input" />
            <input type="email" placeholder="Email Address" required className="text-field w-input" />
            <textarea placeholder="Tell us a little bit about yourself.." className="text-field w-input" />
            <input type="submit" value="JOIN NOW" className="main-submit-button w-button" />
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div className="join-now-form-description-container">
          <div className="join-now-form-description">
            <div className="text-block-2">JOIN OUR</div>
            <div className="text-block-2-copy">FLORIDA ATLANTIC CHAPTER</div>
          </div>
          <p className="paragraph-main">
            Deciding to become a SHPE member is more than just enhancing your academics or advancing your career.
            <br /><strong>We are a familia.</strong> Welcome home.
          </p>
        </div>
      </div>

      <div className="join-now-nationals-container">
        <h1 className="heading-one color-black">
          Become a <span className="color-orange">Nationals</span> Member
        </h1>
        <ul className="join-now-nationals-description-list">
          {benefits.map((benefit, index) => (
            <li key={index} className="join-now-nationals-description-list-item">
              {benefit}
            </li>
          ))}
        </ul>
        <a href="https://shpe.org/membership/become-a-member/" target="_blank" rel="noopener noreferrer" className="main-submit-button w-button">
          JOIN NOW
        </a>
      </div>
      <Footer />
    </div>
  );
};

const gridItems = [
  {
    src: "/images/IMG_2908.jpg",
    alt: "MentorSHPE",
    description: "MENTORSHPE AND INTERNSHPE",
    color: "rgba(212,63,39,0)",
    overlayClass: "red-orange",
  },
  {
    src: "/images/IMG_2861.jpg",
    alt: "Workshops",
    description: "PROFESSIONAL WORKSHOPS",
    color: "rgba(212,63,39,0)",
    overlayClass: "light-blue",
  },
  {
    src: "/images/1500.jpg",
    alt: "Nationals Prep",
    description: "PREP FOR NATIONALS",
    color: "rgba(212,63,39,0)",
    overlayClass: "orange",
  },
  {
    src: "/images/IMG_4480.jpeg",
    alt: "Weekly Events",
    description: "WEEKLY CLUB EVENTS",
    color: "rgba(212,63,39,0)",
    overlayClass: "dark-blue",
  },
];

const benefits = [
  "Access to more than $300,000 in scholarships",
  "Internship, fellowship, and co-op opportunities",
  "Exclusive access to the SHPE Career Center",
  "Resumé reviews, recommendations, and rewording",
  "Professional development and leadership training",
  "Mentoring from a professional member",
  "Discounted registration to SHPE events",
  "Competition and award opportunities",
  "Access to a nationwide network of industry leaders",
  "Eligibility to run and hold office on the SHPE Board",
];

export default JoinUs;
