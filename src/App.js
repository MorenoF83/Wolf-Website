import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Aris from './pages/Aris';
import Aqua from './pages/Aqua';
import Wolf from './pages/Wolf';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/Aris' element={<Aris />} />
        <Route exact path='/Aqua' element={<Aqua />} />
        <Route exact path='/Wolf' element={<Wolf />} />
      </Routes>
    </Router>
  );
}

export default App;
