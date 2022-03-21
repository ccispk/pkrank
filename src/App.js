import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About';
import Participants from './components/Pages/Participants';
import Rank from './components/Pages/Rank';
import Login from './components/Pages/Login';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
