import React from 'react';
import Navbar from '../components/Navbar'; // Assuming Navbar component exists
import Footer from '../components/Footer'; // Assuming Footer component exists
import './Resources.css'; // Include CSS for styling

const Resources = () => {
  const resourceItems = [
    {
      href: 'documents/Fall-24-GBM-3.pptx',
      imgSrc: 'images/GBM3.png',
      date: '10.01.2024',
      title: 'General Body Meeting #3',
      description:
        'Recap of GBM 3 where we discuss the upcoming National Convention and fun events such as SHPooky and Top 5 companies event!',
    },
    {
      href: 'documents/Fall-24-GBM-2.pptx',
      imgSrc: 'images/GBM2.png',
      date: '09.17.2024',
      title: 'General Body Meeting #2',
      description:
        'Recap of GBM 2 where we went over future events and played Bingo to get to know the E-Board!',
    },
    {
      href: '#',
      imgSrc: 'images/GBM1.png',
      date: '08.20.2024',
      title: 'General Body Meeting #1',
      description:
        'Introduction to the new executive board for the 2024-2025 school year.',
    },
    {
      href: 'https://shpe.org/membership/become-a-member/',
      imgSrc: 'images/shpe-membership.png',
      title: 'SHPE National Membership',
      description:
        'Enhance your academic experience with SHPE membership benefits, including discounted rates for the national convention.',
    },
    {
      href: 'https://docs.google.com/document/d/1L4uKaEuPXwwOe0AIuXd_fG4xyy7ibADYEp0v2Lfni-o/edit',
      imgSrc: 'images/ats-approved-resume-templates.png',
      title: 'ATS Approved Resume Templates',
      description:
        'Check out our ATS-approved resume templates to create a standout resume.',
    },
    {
      href: 'https://docs.google.com/presentation/d/1H2HsGCWwOhj-gdiTGeUIVOS-VVQLqny35GpNQf7RKHg/edit?usp=share_link',
      imgSrc: 'images/resume101.png',
      title: 'Resume 101',
      description:
        'Expert advice on how to craft a compelling resume that shines.',
    },
    {
      href: 'https://docs.google.com/document/d/1i3aY-Ahm9le1Xc0OiJTtjqlFpCRx9uLZ2okobDX0Rio/edit?usp=sharing',
      imgSrc: 'images/solidworks-links.png',
      title: 'Solidworks Study Links',
      description:
        'Helpful resources to master Solidworks and enhance your expertise.',
    },
  ];

  return (
    <div className="resources-wrapper">
      <Navbar />
      <header className="resources-header-container">
        <h1 className="heading-one">Resources</h1>
        <p className="paragraph-main">
          A comprehensive collection of tools and materials to support our SHPE members' academic and professional development.
        </p>
      </header>
      <div className="resources-grid-container">
        {resourceItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-content-card"
          >
            <div className="resource-card">
              <img src={item.imgSrc} alt={item.title} className="resource-image" />
              {item.date && (
                <div className="resource-time-description">
                  <span className="date-text">{item.date}</span>
                </div>
              )}
              <div className="resource-description">
                <h2 className="heading-two">{item.title}</h2>
                <p className="paragraph-small">{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
