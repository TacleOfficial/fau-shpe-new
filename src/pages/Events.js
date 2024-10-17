import React from 'react';
// import './Events.css'; // Assuming you create a CSS file for styling
import "../assets/css/normalize.css"
import "../assets/css/fau-shpe.webflow.css"
import "../assets/css/normalize.css"
import "../assets/css/webflow.css"
// Events.js

import React from 'react';
import '../assets/css/Events.css';

const eventItems = [
  {
    title: 'Leader',
    highlight: 'SHPE',
    description:
      'An event with workshops and guest speakers focused on developing leadership skills through hands-on activities and networking with professionals.',
  },
  {
    title: 'Mentor',
    highlight: 'SHPE',
    description:
      'A program connecting SHPE members with professionals for one-on-one sessions, group activities, and valuable guidance.',
  },
  {
    title: 'SHPE',
    highlight: 'ooky',
    description:
      'A fun-filled Halloween event featuring activities, games, and costume contests to build collaboration and team spirit.',
  },
  {
    title: 'Professional Development',
    highlight: 'Day',
    description:
      'A premier event featuring career workshops, mock interviews, and mentorship opportunities to enhance career readiness.',
  },
  {
    title: 'General Body Meeting',
    highlight: '',
    description:
      'Scheduled gatherings where members stay informed about events, initiatives, and opportunities within SHPE.',
  },
  {
    title: 'SHPE',
    highlight: 'xClub Collaboration',
    description:
      'Partnerships with other clubs to feature workshops, networking opportunities, and team-building activities.',
  },
];

const Events = () => {
  return (
    <div className="events-wrapper">
      <div className="events-header-container">
        <div className="events-header-content">
          <h1 className="heading-one">
            <span className="heading-one-span">SHPE</span> Events
          </h1>
        </div>
        <div className="events-header-description">
          <p className="paragraph-main">
            SHPE hosts weekly events designed to prepare you for the annual{' '}
            <strong>SHPE National Convention</strong>. Each session focuses on
            building and enhancing professional skills to excel in interviews
            and secure internships. We also organize fun events for community
            engagement and team building, helping you connect with fellow
            members.
          </p>
        </div>
      </div>

      <div className="events-list-container">
        <div className="events-list-grid">
          {eventItems.map((event, index) => (
            <div key={index} className="events-list">
              <div className="events-list-header">
                <h2 className="heading-two small">
                  {event.title}
                  <span className="color-orange"> {event.highlight}</span>
                </h2>
              </div>
              <div className="events-list-line"></div>
              <div className="events-list-description">
                <p className="paragraph-main small">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="events-calendar-wrapper">
        <div className="events-calendar-container">
          <div className="calendar-container">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=iskarohlo26lv1p3fhfvjfrubs%40group.calendar.google.com&ctz=America%2FNew_York"
              style={{ border: 0 }}
              frameBorder="0"
              scrolling="no"
              className="responsive-calendar"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
