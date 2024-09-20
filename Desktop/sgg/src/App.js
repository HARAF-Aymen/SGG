import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Travail from './pages/Travail';
import Sante from './pages/Sante';
import Justice from './pages/Justice';
import Economie from './pages/Economie';
import Agriculture from './pages/Agriculture';
import Habitat from './pages/Habitat';
import Environnement from './pages/Environnement';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travail" element={<Travail />} />
            <Route path="/santé" element={<Sante />} />
            <Route path="/justice" element={<Justice />} />
            <Route path="/economie" element={<Economie />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/habitat" element={<Habitat />} />
            <Route path="/environnement" element={<Environnement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
