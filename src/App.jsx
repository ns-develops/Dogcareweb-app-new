// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Support from './pages/Support'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  
        <Route path="/Dogcareweb-app-new/support" element={<Support />} />
      
      </Routes>
    </Router>
  );
}

export default App;
