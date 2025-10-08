import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PackageList from './components/PackageList';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Registration from './auth/Registration';
import Login from './auth/Login';
import travelPackages from './data/packages';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const filteredPackages = travelPackages.filter(pkg =>
    pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <Navbar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        
        <Routes>
          <Route path="/" element={
            <Home isLoggedIn={isLoggedIn} />
          } />
          
          <Route path="/packages" element={
            <main className="package-container">
              <PackageList packages={filteredPackages} />
            </main>
          } />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={
            <Login setIsLoggedIn={setIsLoggedIn} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;