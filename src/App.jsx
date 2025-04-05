// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Support from './pages/Support'; 
import Hundar from './pages/Hundar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  
        <Route path="/Dogcareweb-app-new/support" element={<Support />} />
        <Route path="/Dogcareweb-app-new/hundar" element={<Hundar />} />

      
      </Routes>
    </Router>
  );
}

export default App;
