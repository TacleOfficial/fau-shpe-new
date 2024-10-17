import React from 'react';
// import './DevTeam.css'; // Create a CSS file to match the styles

const DevTeam = () => {
  const teamMembers = [
    {
      name: 'Jasenia Guerra',
      role: 'Technical Director',
      country: 'Panama',
      image: '/images/Jasenia_Guerra_Portrait.png',
      flag: '/images/pa.svg',
      description: 'Jasenia manages website development, ensuring a seamless user experience.',
      linkedin: 'https://www.linkedin.com/in/jaseniag/',
    },
    {
      name: 'Mia Marte',
      role: 'Front-End Developer',
      country: 'Dominican Republic',
      image: '/images/WhatsApp-Image-2024-07-30-at-4.10.24-PM.png',
      flag: '/images/do.svg',
      description: 'Mia handles front-end development, focusing on structure and functionality.',
      linkedin: 'https://www.linkedin.com/in/miamarte/',
    },
    {
      name: 'Steven Tacle',
      role: 'UX/UI Designer',
      country: 'Ecuador',
      image: '/images/SHPE-Port_Steven-.JPEG',
      flag: '/images/ec.svg',
      description: 'Steven oversees the user interface design for web and mobile platforms.',
      linkedin: 'https://www.linkedin.com/in/tacleofficial/',
    },
    {
      name: 'Sofia Torres',
      role: 'Front-End Developer',
      country: 'Colombia',
      image: '/images/Sofia_Torres_Portrait.png',
      flag: '/images/co.svg',
      description: 'Sofia ensures the website’s structure and functionality using React.',
      linkedin: 'https://www.linkedin.com/in/sofia-torres-4776b5251/',
    },
    {
      name: 'Ryan Burton',
      role: 'Front-End Developer',
      country: 'United States',
      image: '/images/Ryan_Burton_Portrait.png',
      flag: '/images/us.svg',
      description: 'Ryan maintains the website structure and functionality using React.',
      linkedin: 'https://www.linkedin.com/in/ryan-burton-2816b0254/',
    },
    {
      name: 'Joshua Henry',
      role: 'Back-End Developer',
      country: 'Haiti',
      image: '/images/Dominic_James_Portrait.png',
      flag: '/images/ht.svg',
      description: 'Joshua handles server-side logic and ensures application scalability.',
      linkedin: 'https://www.linkedin.com/in/joshua-henry10/',
    },
  ];

  return (
    <div className="dev-team-wrapper">
      <div className="dev-team-heading-container">
        <h1 className="heading-one">
          Meet our <span className="heading-one-span">Development Team</span>
        </h1>
        <p className="paragraph-main">
          Our web development team ensures members stay connected and engaged with a
          user-friendly platform.
        </p>
      </div>

      <div className="dev-team-card-wrapper">
        {teamMembers.map((member, index) => (
          <div key={index} className="dev-team-card">
            <div className="dev-team-card-image">
              <img src={member.image} alt={`${member.name} Portrait`} className="image-5" />
              <div className="dev-team-image-title">
                <div className="text-main small color-orange b">{member.role}</div>
              </div>
            </div>
            <div className="dev-team-card-name">
              <h2 className="heading-two">
                {member.name.split(' ')[0]} <span className="heading-two-span">{member.name.split(' ')[1]}</span>
              </h2>
            </div>
            <div className="dev-team-card-bio">
              <div className="dev-team-card-bio-container">
                <img src={member.flag} alt={member.country} className="image-6" />
                <div className="paragraph-main small b">{member.country}</div>
              </div>
            </div>
            <p className="paragraph-main small center">{member.description}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-icon-wrapper"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M8.6425781 4C7.1835781 4 6 5.181625 6 6.640625S7.182625 9.3085938 8.640625 9.3085938 11.283203 8.099625 11.283203 6.640625 10.101578 4 8.6425781 4zM21.535156 11c-2.219-0-3.488656 1.160453-4.097656 2.314453L17.373047 13.314453V11.310547h-4.373047v14.689453h4.556641V18.728516c0-1.916-0.154625-3.768578 2.216375-3.768578s2.443359 2.184672 2.443359 3.888672v7.310547h4.550781V17.931641c0-3.948-0.848844-7.931641-5.464844-7.931641z"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevTeam;
