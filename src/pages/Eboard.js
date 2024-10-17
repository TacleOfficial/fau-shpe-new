import React from 'react';
// import './EBoard.css'; // Create a corresponding CSS file for styles
import "../assets/css/normalize.css"
import "../assets/css/fau-shpe.webflow.css"
import "../assets/css/normalize.css"
import "../assets/css/webflow.css"

// EBoard.js

const members = [
  {
    name: 'Dominic',
    surname: 'James',
    role: 'President',
    country: 'Jamaica',
    image: '/images/Dominic_James_Portrait.png',
    flag: '/images/jm.svg',
    description:
      'Dominic oversees all events and serves as a liaison between our chapter and SHPE at the regional and national levels.',
    linkedin: 'https://www.linkedin.com/in/dominicjames876/',
    colorClass: 'color-orange',
  },
  {
    name: 'Neal',
    surname: 'Williams',
    role: 'External Vice-President',
    country: 'United States',
    image: '/images/Neal_Williams_Portrait.png',
    flag: '/images/us.svg',
    description:
      'Neal secures partnerships from companies, ensuring mutual benefits and supporting club events.',
    linkedin: 'https://www.linkedin.com/in/nealwilliams98/',
    colorClass: 'color-blue',
  },
  // Add more members as needed...
];

const Eboard = () => {
  return (
    <div className="eboard-wrapper">
      <div className="eboard-heading-container">
        <div className="eboard-heading-text">
          <h1 className="heading-one">
            Meet our <span className="heading-one-span">Executive Board</span>
          </h1>
        </div>
        <div className="eboard-description-text">
          <p className="paragraph-main">
            Meet the amazing team that makes everything happen. Our eBoard consists of 13 passionate and dedicated members, 
            each with unique roles and responsibilities. Together, they work to ensure our club thrives both on and off campus, 
            creating a lasting impact on everything we do.
          </p>
        </div>
      </div>

      <div className="eboard-card-wrapper">
        {members.map((member, index) => (
          <div key={index} className="eboard-card">
            <div className="eboard-card-image">
              <img
                src={member.image}
                alt={`${member.name} Portrait`}
                className="image"
                loading="lazy"
              />
              <div className="eboard-image-title">
                <div className={`text-main ${member.colorClass} b`}>
                  {member.role}
                </div>
              </div>
            </div>
            <div className="eboard-card-name">
              <h2 className="heading-two">
                {member.name} <span className="heading-two-span">{member.surname}</span>
              </h2>
            </div>
            <div className="eboard-card-bio">
              <div className="eboard-card-bio-container">
                <img
                  src={member.flag}
                  alt={`${member.country}`}
                  className="image-flag"
                />
                <div className="paragraph-main small b">{member.country}</div>
              </div>
            </div>
            <div className="eboard-card-description">
              <p className="paragraph-main small center">
                {member.description}
              </p>
            </div>
            <div className="eboard-card-social">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-icon-wrapper"
              >
                <div className="social-media-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="M8.6 4c-1.4 0-2.6 1.2-2.6 2.6S7.2 9.3 8.6 9.3s2.7-1.2 2.7-2.6S10 4 8.6 4zm13 7c-2.2 0-3.5 1.2-4.1 2.3V11h-4.3v14h4.6v-7.3c0-2.1.1-4.1 3.4-4.1 3.3 0 3.3 2.5 3.3 4.3V25h4.6v-8.1c0-4.1-1.2-7.9-6.5-7.9zM6.4 11v14h4.6V11H6.4z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eboard;

