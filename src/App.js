
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JoinUs from './pages/JoinUs';
import Eboard from './pages/eboard';
import DevTeam from './pages/Devteam';
import Events from '../pages/Events';
import Gallery from './pages/Gallery';
import ContactUs from '../pages/ContactUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/eboard" element={<Eboard />} />
        <Route path="/Devteam" element={<DevTeam />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
