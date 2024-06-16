import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectsList from './components/ProjectsList';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const projects = [
    { title: 'Projeto 1', url: 'https://www.exemplo.com/projeto1' },
    { title: 'Projeto 2', url: 'https://www.exemplo.com/projeto2' },
    { title: 'Projeto 3', url: 'https://www.exemplo.com/projeto3' },
    { title: 'Projeto 4', url: 'https://www.exemplo.com/projeto4' },
    { title: 'Projeto 5', url: 'https://www.exemplo.com/projeto5' },
    { title: 'Projeto 6', url: 'https://www.exemplo.com/projeto6' },
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="link">Portfólio de Projetos</Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </header>
        <div className={`navbar ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Projetos</Link></li>
            <li><Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre Mim</Link></li>
          </ul>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<ProjectsList projects={projects} />} />
            <Route path="/sobre" element={<Aboutme />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
